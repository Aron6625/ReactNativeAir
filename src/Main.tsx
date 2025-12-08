import React from 'react'
import AppNavigation from './routes/AppNavigation'
import { Provider } from 'react-redux'
import { store } from './store/Store'

const Main = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default Main