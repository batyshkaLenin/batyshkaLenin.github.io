import React from 'react'
import ReactMarkdown from 'react-markdown'
import BlogApi, { BlogPost } from 'src/classes/services/api/BlogApi'
import Layout from '../components/Layout'

interface BlogDetailProps {
  match: any
}

export const Post = (props: BlogDetailProps) => {
  const { slug } = props.match.params
  const [post, setPost] = React.useState<BlogPost>({} as BlogPost)

  React.useEffect(() => {
    BlogApi.fetchBlogById(slug).then((result: BlogPost) => setPost(result))
  }, [slug])

  return (
    <Layout>
      <article className="post-full post">
        <header className="post-full-header">
          <h1 className="post-full-title">{post.title}</h1>
          <div className="text-center meta">{post.publishedDate}</div>
        </header>
        <section className="post-full-content">
          <ReactMarkdown source={post.body} />
        </section>
      </article>
    </Layout>
  )
}

export default Post
