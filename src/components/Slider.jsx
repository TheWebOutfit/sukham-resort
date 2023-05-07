import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Navigation } from "swiper";

import { EffectFade, Autoplay } from 'swiper';

import Img1 from '../assets/bandipur-tiger-reserve.jpg'
import Img2 from '../assets/img.jpg'
import Img3 from '../assets/img1.jpeg'

// import Img4 from '../assets/SUKHAMRESORT/Way to SUKHAM Resort/Real/WhatsApp Image 2023-04-29 at 13.43.17.jpeg'

const slides = [
    {
        title: "BandiPur Tiger Reserve",
        bg: Img1,
        btn: 'Book Now'
    },
    {
        title: "Mountains and trees",
        bg: Img2,
        btn: 'Book Now'
    },
    {
        title: "Your Resort for Vacation",
        bg: Img3,
        btn: 'Book Now'
    }
]

const Slider = () => {
    return (
        <Swiper
        grabCursor={true}
        centeredSlides={true}
        pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="h-[180px] lg:h-[600px] md:h-[400px] "
        >
            {slides.map((slide,index) => {
                const {title, bg, btn} = slide;
                return (
                <SwiperSlide className='relative h-full item-center'  key={index}>
                    <div className=' absolute w-full h-full bg-black/50'>

                    </div>
                    <div>
                        <div className=' uppercase  md:text-xl text-white absolute flex justify-center items-center h-[100px] md:h-[200px] w-screen'>
                            Sukham Resort
                        </div>
                        <div className=' uppercase font-bold text-2xl md:text-5xl text-white absolute flex text-center justify-center items-center h-[200px] md:h-[300px] w-screen'>
                            {title}
                        </div>
                        <div className=' text-white absolute flex sm:justify-center items-center h-[300px] left-20 sm:left-0 md:h-[700px] w-screen'>
                            <button className='ring ring-pink-500 ring-offset-4 p-3 rounded-md'>{btn}</button>
                        </div>
                        <div className='w-full h-full flex justify-center'>
                            <img className='object-fill h-full w-full' src={bg} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                )
            })}

        </Swiper>
    )
}

export default Slider