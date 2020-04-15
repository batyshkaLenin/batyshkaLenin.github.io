import React from 'react'
import Layout from 'src/components/Layout'
import { BlogPost } from 'src/classes/services/api/BlogApi'
import PostList from 'src/components/PostsList'
import { inject, observer } from 'mobx-react'

const Blog = inject('blogStore')(
  observer(({ blogStore }: any) => {
    const [posts, setPosts] = React.useState<BlogPost[]>([...new Array(4)])
    React.useEffect(() => {
      blogStore.loadPosts().then((results: BlogPost[]) => setPosts(results))
    }, [blogStore])
    return (
      <Layout>
        {posts.map((post: BlogPost | undefined, index) => (
          <PostList
            key={index}
            description={post?.description}
            tags={post?.tags}
            id={post?.id}
            slug={post?.slug}
            title={post?.title}
          />
        ))}
      </Layout>
    )
  })
)

export default Blog
