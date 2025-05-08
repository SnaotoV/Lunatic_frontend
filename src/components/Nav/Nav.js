import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import "./Nav.scss"
const Nav = (props) => {
    let [links, setLinks] = useState([
        {
            name: "Trang Chủ",
            link: "/"
        },
        {
            name: "Sản Phẩm",
            link: "/product"
        },
        {
            name: "Coser",
            link: "/coser"
        },
        {
            name: "Thông tin về Lunatic",
            link: "/about"
        },
        {
            name: "Liên Hệ",
            link: "/contact"
        },
    ])
    return (
        <>
            <nav className="nav text-center row">
                {links?.map((item, index) => {
                    return (
                        <Link className="nav-link p-4 fs-4 col" to={item.link}>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </>
    )
}

export default Nav