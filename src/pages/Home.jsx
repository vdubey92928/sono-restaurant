import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Leaf from '../components/Leaf'
import Award from '../components/Award'
import drink_img from './../assets/image/Drinks.jpg'
import dining from './../assets/image/dining.png'

import i1 from './../assets/image/insta_image/i1.webp'
import i2 from './../assets/image/insta_image/i2.webp'
import i3 from './../assets/image/insta_image/i3.webp'
import i4 from './../assets/image/insta_image/i4.webp'
import i5 from './../assets/image/insta_image/i5.webp'
import i6 from './../assets/image/insta_image/i6.webp'
import i7 from './../assets/image/insta_image/i7.webp'
import i8 from './../assets/image/insta_image/i8.webp'

const Home = () => {
    return (
        <div className='container-fluid'>
            {/* header start */}
            <Navbar />
            <Slider />
            <Leaf />
            {/* header end */}


            {/* menu start */}
            <div className="row text-white d-grid my-5">
                <div className="col-sm-10 mx-auto text-center menu my-5">
                    <h3 className=''>VIEW OUR MENUS</h3>

                    <ul type="none" className=' my-5 d-flex justify-content-evenly' >
                        <li><a href="">À la Carte</a></li>
                        <li><a href="">Banquets & Tasting Courses</a></li>
                        <li><a href="">Teppanyaki</a></li>
                        <li><a href="">Gluten Free & Vegetarian</a></li>
                        <li><a href="">Beverages</a></li>
                    </ul>



                    <h2 className='my-5 display-4 fw-semibold pt-5'>Sono Japanese Restaurant Brisbane</h2>
                    <h4 className='mb-1 mt-5 fs-3'>Traditional Japanese Cuisine at Sono</h4>
                    <p className='my-3 fs-5'>At Sono, we pride ourselves on offering a truly authentic Japanese dining experience. Our delicious menu showcases the finest traditional Japanese cuisine, crafted with culinary prowess and care from locally-sourced seasonal produce as well as fresh premium imported Japanese meats and seafood. We encapsulate and infuse the essence of Japan throughout everything we do. This ensures that we not only serve the most authentic Japanese food Brisbane has to offer, but that everyone who dines with us leaves with a memorable experience.
                    </p>

                    <a className='fs-5 text-decoration-none text-golden' href="">READ MORE</a>
                </div>
            </div>
            {/* menu end */}

            {/* award start */}

            <div className="row" id="award">
                <div className="col-sm-10 mx-auto text-center text-white">
                    <p className='fs-1'>Awards</p>
                    <p className='fs-5' >Brisbane’s most awarded Authentic Japanese Restaurant</p>
                    <Award />
                </div>
            </div>

            {/* award end */}


            {/* careful curated sectiion start */}
            <div className="row my-5 p-0">
                <div className="col-sm-6 p-0">
                    <img src={drink_img} alt="" className='img-fluid' />
                </div>
                <div className="col-sm-6 text-end text-white pe-5">
                    <p className='my-3 fs-2 mb-3'>Our Carefully Curated Beverage Selection</p>
                    <p className='my-4 ps-4 mt-5 py-4 fs-5' >At Sono, we believe that a true Japanese dining experience is complemented by an exquisite selection of beverages. Our curated sake list features a variety of premium options, ranging from crisp and refreshing to rich and complex, ensuring that there is a perfect pairing for every dish. In addition to sake, we offer a diverse range of Japanese beer, spirits and liqueurs as well as vibrant cocktails and a fine selection of wines – all carefully selected to enhance your meal.
                    </p>

                    <p className='mb-5 pb-2'><a className='fs-5 text-decoration-none text-golden ' href="">READ MORE</a>
                    </p>
                    <button className='btn text-white border-underline p-0'> Beverages Menu </button>
                </div>
            </div>
            {/* careful curated sectiion end */}


            {/* Authentic japansese start */}

            <div className="row my-5 p-0 pt-5">

                <div className="col-sm-6 text-start text-white ps-5">
                    <p className='my-3 fs-2 mb-3'>Our Carefully Curated Beverage Selection</p>
                    <p className='my-4 pe-4 mt-5 py-4 fs-5' >For an unparalleled Japanese dining experience in Brisbane, Sono offers an exceptional setting that blends traditional charm with modern comfort. Our tatami private dining rooms provide an authentic and intimate atmosphere, perfect for a romantic date night or special event. Whether you’re seeking a relaxed atmosphere or the vibrant energy of our teppanyaki bar, Sono Japanese Brisbane Portside delivers an ambiance that caters to every occasion.
                    </p>

                    <p className='mb-5 pb-2'><a className='fs-5 text-decoration-none text-golden ' href="">READ MORE</a>
                    </p>
                    <button className='btn text-white border-underline p-0'> Make A Reservation </button>
                </div>
                <div className="col-sm-6 p-0">
                    <img src={dining} alt="" className='img-fluid' />
                </div>
            </div>
            {/* Authentic japansese end */}


            {/* similar design pattern again start */}
            <div className="row" id="award">
                <div className="col-sm-9 mx-auto text-white">
                    <div className="row py-5 my-2">
                        <div className="col-sm-4 mx-auto">
                            <p >
                                <p className='m-0'>Sono Japanese Restaurant Portside</p>
                                <p className='m-0'>Level 1, Portside Wharf</p>
                                <p className='m-0'>39 Hercules St, Hamilton QLD</p>
                                <p className='m-0'>(opposite Dendy Cinemas)</p>
                                <p className='m-0'>(07) 3268 6655</p>
                                <p className='m-0'>contact@sonorestaurant.com.au</p>
                                <p className='m-0'> Blog</p>
                            </p>
                        </div>
                        <div className="col-sm-4 mx-auto">
                            <p>
                                <p className='m-0'>LUNCH</p>
                                <p className='m-0'>Friday – Sunday</p>

                                <p className='m-0'>Bookings from 12:00 pm, kitchen closes at 2:30 pm.</p>
                                <p className='m-0'>Teppanyaki from 12:30 pm on Saturday & Sunday</p>
                                <p className='m-0'>Sono is closed Mondays and all public holidays.</p>
                            </p>
                        </div >
                        <div className="col-sm-4 mx-auto">
                            <p>
                                DINNER
                                <p className='text-golden m-0'>Tuesday - Thursday</p>

                                <p className='m-0'>Bookings from 5:30 pm, kitchen closes at 9:30 pm</p>
                                <p className='text-golden m-0'>Friday & Saturday</p>

                                <p className='m-0'>Bookings from 5:30 pm, kitchen closes 10:00 pm</p>
                                <p className='m-0'>Teppanyaki seatings at 5:30 pm and 8:00 pm</p>
                                <p className='text-golden m-0'>Sunday</p>

                                <p className='m-0'>Bookings from 5:30 pm, kitchen closes 9:30 pm</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* similar design pattern again end */}

            {/* multuple image section start */}
            <div className="row">

                <div className="col-sm-12 pt-3 ">
                    <div className="row">
                        <div className="col m-0 p-0">
                            <img src={i1} alt="" className='img-fluid' />
                        </div>

                        <div className="col m-0 p-0">
                            <img src={i2} alt="" className='img-fluid' />
                        </div>

                        <div className="col m-0 p-0">
                            <img src={i3} alt="" className='img-fluid' />
                        </div>

                        <div className="col m-0 p-0">
                            <img src={i4} alt="" className='img-fluid' />
                        </div>

                        <div className="col m-0 p-0">
                            <img src={i5} alt="" className='img-fluid' />
                        </div>
                        <div className="col m-0 p-0">
                            <img src={i6} alt="" className='img-fluid' />
                        </div>
                        <div className="col m-0 p-0">
                            <img src={i7} alt="" className='img-fluid' />
                        </div>
                        <div className="col m-0 p-0">
                            <img src={i8} alt="" className='img-fluid' />
                        </div>


                    </div>
                    <div className="col-sm-12 text-center py-5">
                        <a href="">See more @sono_restaurant</a>
                    </div>
                </div>
            </div>

            {/* multuple image section end */}


            <div className="row" id="award">
                <div className="col-sm-8 mx-auto">
                    <h2>Join Sono</h2>
                    <p>Be the first to know about Sono’s special events and news.</p>
                </div>
            </div>


        </div>


    )
}

export default Home
