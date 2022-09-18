import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Navbar from '../layouts/Navbar'
import Posts from './Posts'

const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Header></Header>
    <Posts></Posts>
    <Footer></Footer>
    </div>
  )
}

export default Home