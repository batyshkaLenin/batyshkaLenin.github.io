import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from 'src/pages/Main'
import Blog from 'src/pages/Blog'
import Music from 'src/pages/Music'
import Post from 'src/pages/Post'

const Routes = React.memo(() => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/blog/">
          <Blog />
        </Route>
        <Route path="/post/:slug" exact component={Post} />
        <Route path="/music/">
          <Music />
        </Route>
      </Switch>
    </BrowserRouter>
  )
})

export default Routes
