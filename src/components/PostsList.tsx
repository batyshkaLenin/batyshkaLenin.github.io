import React from 'react'
import { Link } from 'react-router-dom'

const defaultProps = {
  author: '',
  description: '',
  publishedDate: '',
  readingTime: '',
}

interface BlogBoxProps {
  id: string
  slug: string
  title: string
  description: string
  readingTime?: string
  author?: string
  publishedDate?: string
  tags?: Array<string>
}

const PostList = (props: BlogBoxProps) => {
  return (
    <Link to={`/post/${props.slug}`}>
      <div>
        <article>
          <div>
            <h3>{props.title}</h3>
          </div>

          <div>
            <div>{props.description}</div>
          </div>

          <div>
            {props.tags && props.tags.length > 0 && (
              <>
                Теги:{' '}
                {props.tags.map(tag => (
                  <span>{tag} </span>
                ))}
              </>
            )}
          </div>
        </article>
      </div>
    </Link>
  )
}

PostList.defaultProps = defaultProps

export default PostList
