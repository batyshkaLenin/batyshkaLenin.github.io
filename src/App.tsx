import React from 'react'
import Routes from 'src/components/Routes'
import { Provider } from 'mobx-react'
import BlogStoreService from './classes/services/BlogStoreService'
import LocalStorageStoreService from './classes/services/LocalStorageStoreService'

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
