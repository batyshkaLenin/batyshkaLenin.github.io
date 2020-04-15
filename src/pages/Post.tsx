import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BlogPost } from 'src/classes/services/api/BlogApi'
import Layout from 'src/components/Layout'
import Loader from 'src/components/Loader'
import { inject, observer } from 'mobx-react'

export const Post = inject('blogStore')(
  observer(({ blogStore, match }: any) => {
    const { slug } = match.params
    const [post, setPost] = React.useState<BlogPost>({} as BlogPost)

    React.useEffect(() => {
      blogStore.getPost(slug).then((post: BlogPost) => setPost(post))
    }, [slug, blogStore])

    return (
      <Layout>
        {post ? (
          <article className="post-full post">
            <header className="post-full-header">
              <h1 className="post-full-title">{post.title}</h1>
              <div className="text-center meta">{post.publishedDate}</div>
            </header>
            <section className="post-full-content">
              <ReactMarkdown source={post.body} />
            </section>
          </article>
        ) : (
          <Loader />
        )}
      </Layout>
    )
  })
)

export default Post
