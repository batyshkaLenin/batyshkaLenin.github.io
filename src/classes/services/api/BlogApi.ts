import { ContentfulClientApi, createClient } from 'contentful'
import moment from 'moment'

export interface Author {
  name: string
  phone: string
  shortBio: string
  title: string
  email: string
  company: string
  twitter: string
  facebook: string
  github: string
}

export interface HeroImage {
  imageUrl: string
  description: string
  title: string
}

export interface BlogPost {
  id: string
  body: string
  description: string
  publishedDate: string
  slug: string
  tags: Array<string>
  title: string
  heroImage?: HeroImage
  author?: Author
  metaTitle: string
  metaDescription: string
  metaImage?: any
}

class BlogApi {
  client: ContentfulClientApi

  constructor() {
    this.client = createClient({
      space: '6bmqjvncd81w',
      accessToken: '2MLQ24ia1wgiRo0In_ah9LzjToyxIPHYjm6QZ4gpT7k',
    })
  }

  convertImage = (rawImage: any): HeroImage => {
    return {
      imageUrl: rawImage.file.url.replace('//', 'https://'),
      description: rawImage.description,
      title: rawImage.title,
    }
  }

  convertAuthor = (rawAuthor: any): Author => {
    return {
      name: rawAuthor.name,
      phone: rawAuthor.phone,
      shortBio: rawAuthor.shortBio,
      title: rawAuthor.title,
      email: rawAuthor.email,
      company: rawAuthor.company,
      twitter: rawAuthor.twitter,
      facebook: rawAuthor.facebook,
      github: rawAuthor.github,
    }
  }

  convertPost = (rawData: any): BlogPost => {
    const rawPost = rawData.fields
    const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null
    const rawAuthor = rawPost.author ? rawPost.author.fields : null
    return {
      id: rawData.sys.id,
      body: rawPost.body,
      description: rawPost.description,
      publishedDate: moment(rawPost.publishedDate).format('DD MMM YYYY'),
      slug: rawPost.slug,
      tags: rawPost.tags,
      title: rawPost.title,
      heroImage: this.convertImage(rawHeroImage),
      author: this.convertAuthor(rawAuthor),
      metaTitle: rawPost.metaTitle,
      metaDescription: rawPost.metaDescription,
      metaImage: rawPost.metaImage
        ? rawPost.metaImage.fields.file.url.replace('//', 'http://')
        : '',
    }
  }

  async fetchBlogEntries(): Promise<Array<BlogPost>> {
    return await this.client
      .getEntries({
        content_type: 'blogPost', // only fetch blog post entry
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          return entries.items.map(entry => this.convertPost(entry))
        }
        return []
      })
  }

  async fetchBlogById(slug: string): Promise<BlogPost> {
    return await this.client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug[in]': slug,
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const post = this.convertPost(entries.items[0])
          return post
        }
        return {} as BlogPost
      })
  }
}

export default new BlogApi()
