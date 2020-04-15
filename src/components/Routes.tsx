import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from 'src/pages/Main'
import Blog from 'src/pages/Blog'
import Post from 'src/pages/Post'
import BlogStoreService from 'src/classes/services/BlogStoreService'
import Creation from 'src/pages/Creation'
import WithTitle from 'src/components/WithTitle'

const Routes = React.memo(() => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <WithTitle title="Александр Сидоренко">
            <Main />
          </WithTitle>
        </Route>
        <Route path="/blog/">
          <WithTitle title="Блог">
            <Blog store={BlogStoreService} />
          </WithTitle>
        </Route>
        <Route
          path="/post/:slug"
          exact
          render={props => <Post {...props} store={BlogStoreService} />}
        />
        <Route path="/creation/">
          <WithTitle title="Творчество">
            <Creation />
          </WithTitle>
        </Route>
      </Switch>
    </BrowserRouter>
  )
})

export default Routes
