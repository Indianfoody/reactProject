import React from 'react'
import { useNavigate } from "react-router-dom";
import animal from "../assests/images/images.jpg"
import "../components/Navbar.css"
function Navbar() {
    return (
        <section className='bg-secondary bg-gradient py-2'>
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-4 d-flex"><img src={animal} alt="" style={{ width: "70px", height: "40px" }} />
                    <p className='m-0 ms-2 d-flex '>Kajal</p>
                    </div>
                    <div className="col-8 ">
                        <div className="navbaritem ">
                            <ul className='d-flex justify-content-around nav '>
                                <li className='hoverr p-1'>About</li>
                                <li className='hoverr p-1'>Work</li>
                                <li className=' hoverr p-1'>Experience</li>
                                <li className='p-1'>contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;