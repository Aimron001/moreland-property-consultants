import { NavLink } from "react-router-dom";
import logoPhoto from "../assets/logo.jpg"

export default function Header(){
    return (
        <>
            <header>
                <div >
                    <img src={logoPhoto} alt="logo" className="logo"/>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="listings">Listings</NavLink>
                    <NavLink to="services">Services</NavLink>
                    <NavLink to="blog">Blog</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact-us">Contact us</NavLink>
                </nav>
            </header>
        </>
        )
}