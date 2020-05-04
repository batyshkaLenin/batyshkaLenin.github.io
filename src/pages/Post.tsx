import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { BlogPost } from 'src/classes/services/api/BlogApi'
import Layout from 'src/components/Layout'
import Loader from 'src/components/Loader'
import { inject, observer } from 'mobx-react'
import WithTitle from '../components/WithTitle'

export const Post = inject('blogStore')(
  observer(({ blogStore, match }: any) => {
    const { slug } = match.params

    const [post, setPost] = useState<BlogPost>({} as BlogPost)

    useEffect(() => {
      blogStore.getPost(slug).then((post: BlogPost) => setPost(post))
    }, [slug, blogStore])

    return (
      <Layout>
        {post ? (
          <WithTitle title={`${post.title} | Блог Александра Сидоренко`}>
            <article className="post-full post h-entry">
              <header className="post-full-header">
                <h1 className="post-full-title p-name">{post.title}</h1>
                <a
                  className="u-url"
                  href={`https://alexandr-sidorenko.me/post/${slug}`}
                >
                  <time
                    className="text-center meta dt-published"
                    dateTime={new Date(post.publishedDate).toJSON()}
                  >
                    {post.publishedDate}
                  </time>
                </a>
              </header>
              <section className="post-full-content e-content">
                <ReactMarkdown source={post.body} />
              </section>
            </article>
          </WithTitle>
        ) : (
          <Loader />
        )}
      </Layout>
    )
  })
)

export default Post
