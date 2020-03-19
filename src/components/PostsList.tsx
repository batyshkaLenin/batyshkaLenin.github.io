import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostsList.module.scss'

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
          <div className={styles.title}>
            <h3>{props.title}</h3>
          </div>

          <div>
            <div className={styles.description}>{props.description}</div>
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
