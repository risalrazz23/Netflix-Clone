import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import AuthScreen from './pages/AuthScreen'
import store from './redux/store'
import {Provider} from 'react-redux'
const App = () => {
  return (
    
<Provider store={store}>

    <Routes>

      <Route path="/a" element={<HomePage/>} />
      <Route path='/' element={<AuthScreen/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
</Provider>
    
  )
}

export default App
