import React from 'react'

interface IProps {
  children: JSX.Element
  title: string
}

const WithTitle = (props: IProps) => {
  const { children, title } = props

  React.useEffect(() => {
    document.title = title
  }, [title])

  return children
}

export default WithTitle
