import React from 'react'
import Routes from 'src/components/Routes'
import { Provider } from 'mobx-react'
import BlogStoreService from 'src/classes/services/BlogStoreService'
import LocalStorageStoreService from 'src/classes/services/LocalStorageStoreService'
import 'mobx-react/batchingForReactDom'

const App = () => {
  return (
    <Provider
      localStore={LocalStorageStoreService}
      blogStore={BlogStoreService}
    >
      <Routes />
    </Provider>
  )
}

export default App
