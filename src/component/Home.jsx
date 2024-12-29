import React from 'react'
import Description from './Description'
import CaraouselProduct from './CaraouselProduct'

const Home = () => {
  return (
    <>
       <div className='below_navbar'>
                <Description />
            </div>
            <CaraouselProduct category='Cakes' />
            <CaraouselProduct category='Pastries' />
    </>
  )
}

export default Home
