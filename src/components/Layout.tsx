import React from 'react'
import { ErrorBoundary } from 'src/components/ErrorBoundary'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import classNames from 'classnames'

interface IProps {
  children: any
}

const Layout = (props: IProps) => {
  const [theme, setTheme] = React.useState<string>('dark')

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.body.setAttribute('data-theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
    }
  }

  React.useEffect(() => {
    if (
      !localStorage.getItem('theme') ||
      localStorage.getItem('theme') === 'dark'
    ) {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
    }
    if (localStorage.getItem('theme') === 'light') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.body.setAttribute('data-theme', 'light')
    }
  }, [])

  return (
    <div
      className={classNames(
        'root',
        theme === 'dark' ? 'root dark' : 'root light'
      )}
    >
      <Header theme={theme} changeTheme={changeTheme} />
      <ErrorBoundary>
        <main className="container mt-3">{props.children}</main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default Layout
