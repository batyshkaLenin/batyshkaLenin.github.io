import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BlogPost } from 'src/classes/services/api/BlogApi'
import Layout from 'src/components/Layout'
import Loader from 'src/components/Loader'

interface BlogDetailProps {
  match: any
  store: any
}

export const Post = (props: BlogDetailProps) => {
  const { slug } = props.match.params
  const [post, setPost] = React.useState<BlogPost>({} as BlogPost)

  React.useEffect(() => {
    props.store.getPost(slug).then((post: BlogPost) => setPost(post))
  }, [slug, props.store])

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
}

export default Post
