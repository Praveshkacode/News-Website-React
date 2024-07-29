import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Page from './components/Page/Page'
import './App.css' 

const App = () => {
  const [category,setCategory]=useState('India');
  return (
    <div className='app'>
      <Navbar setCategory={setCategory} />
      <Page category={category}/>
    </div>
  )
}

export default App
