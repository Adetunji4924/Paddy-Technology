// import {Swiper, SwiperSlide} from "swiper/react";

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

function Intro() {
    return(
        <div className="md:px-[5rem] px-[2rem] py-[2rem] md:py-[5rem] flex flex-col items-center">
            <h3 className="font-Kodchasan lg:text-[3rem] sm:text-[2rem] text-[1.5rem] text-center text-black">CASE PRESENTATION</h3>
            <p className="font-Overpass text-[#737171] lg:text-[1.3rem] sm:text-[1rem] text-[.8rem] text-center max-w-4xl mt-3">Since 2008, Paddy Technology has completed 1000+ website construction projects, and continues to provide users with a satisfactory experience.</p>
            <div className="mt-10">
                <img src="/src/images/Group 1000004417.png" alt="" />
            </div>
           {/* <Swiper
             modules={[Navigation, Pagination, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"3"}
            // spaceBetween={50}
            coverflowEffect={{
                rotate: 0,
                depth: 100,
                stretch: 0,
                modifier: 2.5,

            }}
            className="swiper_container w-full max-w-4xl"
           >

            <SwiperSlide>
                <img src="/src/images/image 630.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 632.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 635.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 630.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 632.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 635.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 630.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 632.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/src/images/image 635.png" alt="" />
            </SwiperSlide>

            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>
           </Swiper> */}
        </div>
    )
}

export default Intro