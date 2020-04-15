import { action, observable } from 'mobx'
import BlogApi, { BlogPost } from './api/BlogApi'

class BlogStoreService {
  @observable posts: BlogPost[] = []
  @observable isLoading: boolean = true

  @action async loadPosts(): Promise<BlogPost[]> {
    this.isLoading = true
    if (!this.posts.length) {
      const fetchedPosts = await BlogApi.fetchBlogEntries()
      fetchedPosts.forEach((post: BlogPost) => this.updatePostFromServer(post))
      this.isLoading = false
    }
    return this.posts
  }

  @action async getPost(slug: string): Promise<BlogPost> {
    const post = this.posts.find((post: BlogPost) => post.slug === slug)
    if (post) {
      return post
    } else {
      return await this.loadPost(slug)
    }
  }

  @action async loadPost(slug: string): Promise<BlogPost> {
    this.isLoading = true
    const fetchedPost = await BlogApi.fetchBlogById(slug)
    this.updatePostFromServer(fetchedPost)
    this.isLoading = false
    return fetchedPost
  }

  @action updatePostFromServer(blogPost: BlogPost) {
    let post = this.posts.find((post: BlogPost) => post.id === blogPost.id)
    if (post) {
      const newPost = {
        ...post,
        ...blogPost,
      }
      this.posts = this.posts.filter(
        (post: BlogPost) => post.id !== blogPost.id
      )
      this.posts.push(newPost)
    } else {
      this.posts.push(blogPost)
    }
  }
}

export default new BlogStoreService()
