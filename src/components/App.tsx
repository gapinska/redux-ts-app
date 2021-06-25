import React from "react"
import "./App.css"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
