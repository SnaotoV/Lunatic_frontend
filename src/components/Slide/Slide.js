import React from "react";
import { Carousel } from "react-bootstrap";
import card_1 from "../../assets/images/cover.png"
import card_2 from "../../assets/images/cover.jpg"

const Slide = (props) => {

    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={card_1}
                        alt="Hình ảnh đại diện sản phẩm 1"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={card_2}
                        alt="Hình ảnh đại diện sản phẩm 2"
                    />
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Slide