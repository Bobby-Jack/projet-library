import Link from 'next/link'
import React from 'react'
export default function _error() {
  return (
    <div className='error'>
        <h1>Oups...</h1>
        <h2>Page not found...</h2>
        <Link className='returnLink' href='mainPage'>Return to main page</Link>
    </div>
  )
}
