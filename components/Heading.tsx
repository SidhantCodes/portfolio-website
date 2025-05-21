import React from 'react'

const Heading = ({ head } : { head: string }) => {
  return (
    <h1 className='py-10 text-center text-5xl font-extrabold sm:text-7xl'>
        {head}
    </h1>
  )
}

export default Heading