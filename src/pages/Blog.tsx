import React from 'react'
import Layout from '../components/Layout'
import BlogApi, { BlogPost } from 'src/classes/services/api/BlogApi'
import PostList from '../components/PostsList'

const Blog = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([...new Array(4)])
  React.useEffect(() => {
    BlogApi.fetchBlogEntries().then(results => setPosts(results))
  }, [])
  return (
    <Layout>
      {posts.map((post: BlogPost | undefined) => (
        <PostList
          description={post?.description}
          tags={post?.tags}
          id={post?.id}
          slug={post?.slug}
          title={post?.title}
        />
      ))}
    </Layout>
  )
}

export default Blog
