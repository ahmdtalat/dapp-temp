import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(3)

  return (
    <div className='flex flex-col h-screen w-full items-center justify-center bg-gray-700 '>
      <img src={logo} className='h-64 w-80 animate-pulse' alt='logo' />
      <div>
        <p className='text-8xl text-blue-600'>
          Hello from <i>AkoinNFT</i>
        </p>
      </div>
      <section className='mt-8 text-6xl text-blue-300'>
        Timeline for refactoring: {count}{' '}
        <i className='text-red-500'>
          <b>Months</b>
        </i>
      </section>
      <section className='mt-8'>
        <button className='bg-blue-600 p-2 rounded-md' onClick={() => setCount(count + 1)}>
          Edit timeline
        </button>
      </section>
    </div>
  )
}

export default App
