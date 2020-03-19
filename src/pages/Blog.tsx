import React from 'react'
import Layout from '../components/Layout'
import BlogApi, { BlogPost } from 'src/classes/services/api/BlogApi'
import PostList from '../components/PostsList'
import Loader from '../components/Loader'

const Blog = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([])
  React.useEffect(() => {
    BlogApi.fetchBlogEntries().then(results => setPosts(results))
  }, [])
  return (
    <Layout>
      {posts.length > 0 ? (
        posts.map((post: BlogPost) => (
          <PostList
            description={post.description}
            tags={post.tags}
            id={post.id}
            slug={post.slug}
            title={post.title}
          />
        ))
      ) : (
        <Loader />
      )}
    </Layout>
  )
}

export default Blog
