import React from 'react'
import { Article, Brand, Feature, CallToAction, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
        <Navbar />
        <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <CallToAction />
        <Blog />
        <Footer />
    </div>
  )
}

export default App