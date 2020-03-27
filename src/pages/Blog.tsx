import React from 'react'
import Layout from '../components/Layout'
import { BlogPost } from 'src/classes/services/api/BlogApi'
import PostList from 'src/components/PostsList'

interface IProps {
  store: any
}

const Blog = (props: IProps) => {
  const [posts, setPosts] = React.useState<BlogPost[]>([...new Array(4)])
  React.useEffect(() => {
    props.store.loadPosts().then((results: BlogPost[]) => setPosts(results))
  }, [props.store])
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
