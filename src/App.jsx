import React from 'react'
import Journy from './journy'
import data from '../public/data'
import Header from './header'
// import './App.css'

export default function App() {
  const Journey = data.map(item => {
    return (
        <Journy
            item={item}
        />
    )
})

  return (
    <>
      <Header />
      <div className='content'>
        {Journey}
      </div>
      
    </>
  )
}


