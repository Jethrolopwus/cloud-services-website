    import React from "react";
    import {Carousel} from "react-reponsive-carousel";
    import {data} from "../Assets/front.jpg"
    import "react-responsive-carousel/lib/style/carousel.min.css"


    function ImageSwipe() {
        return null;(
            <div className="flex justify-evenly ">
            <Carousel showThumbs = {false} showStatus={false} infiniteLoop autoPlay={true} interval={3000}>
                <div>
                    <img className='' src={data} alt="/" />
                    {/* <img className='' src={Logo} alt='' /> */}
                </div>
            </Carousel>
            <Carousel showThumbs = {false} showStatus={false} infiniteLoop autoPlay={true} interval={3000}>
                <div>
                    <img className='' src={data} alt="/" />
                    {/* <img className='' src={Logo} alt='' /> */}
                </div>
            </Carousel>

            </div>
        )
    }
    export default ImageSwipe