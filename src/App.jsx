// import { useState } from 'react'

import './App.css'
import Homenavbar from './components/navbar/navbar';
import  Header from './components/header/header'
import Todos from './components/todos/todos'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/home/home'
import Dolist from './components/dolist/dolist'
import Footer from './components/footer/footer'



function App() {

  return (
    <>
        <Homenavbar />
        <Header />
        <Todos />
        {/* <Home /> */}
        <Dolist />
        <Footer/>


    </>
  )
}

export default App
