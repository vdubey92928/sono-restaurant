import React from 'react'
import left from "../assets/image/banner-design-left.png"
import right from "../assets/image/banner-design-right.png"

const Leaf = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="leftleaf">
                        <img src={left} alt="" className='img-fluid' />
                    </div>
                    <div className="rightleaf">
                        <img src={right} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaf
