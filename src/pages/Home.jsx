import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div className='container-fluid'>
            {/* header start */}
            <Navbar />
            <Slider />
            {/* header end */}
        </div>
    )
}

export default Home
