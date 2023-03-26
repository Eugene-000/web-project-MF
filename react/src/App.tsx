import React from "react"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { STORE } from "./store"

export const App: React.FC = () => {
  return (
    <Provider store={STORE}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

