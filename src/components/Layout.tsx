import React from 'react'
import { ErrorBoundary } from 'src/components/ErrorBoundary'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

const Layout = inject('localStore')(
  observer(({ localStore, children }: any) => {
    const { theme } = localStore
    return (
      <div
        className={classNames(
          'root',
          theme === 'dark' ? 'root dark' : 'root light'
        )}
      >
        <Header />
        <ErrorBoundary>
          <main>{children}</main>
        </ErrorBoundary>
        <Footer />
      </div>
    )
  })
)

export default Layout
