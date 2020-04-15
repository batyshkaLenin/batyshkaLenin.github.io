import React from 'react'
import { ErrorBoundary } from 'src/components/ErrorBoundary'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const Layout = ({ children }: any) => {
  return (
    <div className="root">
      <Header />
      <ErrorBoundary>
        <main>{children}</main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default Layout
