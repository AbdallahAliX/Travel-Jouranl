import React from 'react'
import Journy from './journy'
import data from '../public/data'
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
      {Journey}
    </>
  )
}


