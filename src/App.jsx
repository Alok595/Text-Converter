import React from 'react'
import Form from './Components/Form'
import TextProject from './Components/TextProject'

function App() {
  return (
    <div className='w-full h-screen bg-slate-600'>
      <h1 className='text-yellow-400 text-6xl font-bold pt-14 h-[10vh] w-full flex   items-center justify-center '>TEXT CONVERTER</h1>

      <TextProject/>
      {/* <Form title ="hi bro how are you" /> */}
    </div>
  )
}

export default App