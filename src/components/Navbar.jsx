import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import animal from "../assests/images/images.jpg";
import logo from "../assests/images/logo.jpg";
import "../assests/custom.css";
    function Navbar() {
     const navigate = useNavigate();
    const handleClick = (item) => {
    navigate(`/${item.toLowerCase()}`);
        };
    const [hovered, setHovered] = useState(null);
    const navItem =["About", "Education", "Contact"];
    return (
        <section className='bg-dark bg-gradient py-2'>
            <div className="container">
                <div className="row align-items-center text-white fw-bold">
                    <div className="col-4 d-flex"><img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
                    <p className='m-0 ms-2 d-flex align-items-center'>Kajal</p>
                    </div>
                    <div className="col-8 ">
                        <div className="navbaritem ">
                            <ul className="d-flex justify-content-around nav">
                                {navItem.map((item, index) => (
                                <li 
                                onMouseOver={() => setHovered(item)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    background:hovered === item ? "black" : "transparent",
                                    transition: "0.3s",
                                    padding: "5px",
                                    cursor: "pointer"
                                }}   onClick={() => handleClick(item)} >{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;