import React from "react";
import Nav from "../../components/Nav/Nav";
import logo from "../../assets/images/New_Logo.png"
import { Link, Links } from "react-router-dom";
import "./Header.scss"
const Header = (props) => {

    return (
        <div className="row header-box ">
            <div className="row p-0 logo-box m-0">
                <Link className="logo-item p-4 fs-4 m-0 col" to={"/"} ><img src={logo} alt="Logo" style={{ height: "150px" }} /></Link>
                {/* <div className="col logo-item">
                    <p className="m-0 mx-2 fs-4">Liên hệ ngay tại đây</p>
                    <Link><i class="fa-brands fa-facebook fs-1"></i></Link>
                </div> */}
            </div>
            <div className="row p-0">
                <Nav />
            </div>
        </div >
    )
}

export default Header   