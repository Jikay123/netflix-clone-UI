import React, { useEffect, useState } from 'react'
import './Navbar.scss';

function Navbar() {
    const [showBlack, setShowBlack] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowBlack(true);
            } else {
                setShowBlack(false);
            }
            return () => {
                window.removeEventListener("scroll");
            }
        })
    }, [])

    return (
        <div className={`navbar ${showBlack && "navbar__black"}`}>
            <img className="navbar__logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflix logo" />
            <img className="navbar__avatar" src="https://www.linkmypet.com/media/g3hbqjyy/green_dog_porthole.png" alt="nav__avatar" />
        </div>
    )
}

export default Navbar
