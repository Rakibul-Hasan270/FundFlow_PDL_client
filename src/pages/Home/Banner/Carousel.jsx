import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slider from './Slider';

const Carousel = () => {

    const bannerData = [
        {
            title: "🤝 একসাথে গড়ে তুলি একটি সহানুভূতিশীল সমাজ",
            imageUrl: "https://i.postimg.cc/N0m1ryMJ/donation-banner1.jpg",
            buttonText: ["Donate Now", "See All Campaigns"]
        },
        {
            title: "🏠 গৃহহীনদের জন্য আশ্রয় — আপনার সাহায্য বদলে দিতে পারে একটি জীবন",
            imageUrl: "https://i.postimg.cc/FKpXPLd5/donation-banner2.jpg",
            buttonText: ["Support This Cause", "View Details"]
        },
        {
            title: "🍛 ক্ষুধার বিরুদ্ধে লড়াই — এক বেলা খাবার দান করুন",
            imageUrl: "https://i.postimg.cc/3NmpmPM6/donation-banner3.jpg",
            buttonText: ["Donate Food", "See More"]
        },
        {
            title: "📚 শিক্ষার আলো ছড়াতে এগিয়ে আসুন",
            imageUrl: "https://i.postimg.cc/6qFZjXtp/donation-banner4.jpg",
            buttonText: ["Sponsor Education", "View Campaigns"]
        },
        {
            title: "🚑 দুর্যোগে মানবসেবা — সময় এখন একত্র হওয়ার",
            imageUrl: "https://i.postimg.cc/W1LdmCpj/donation-banner5.jpg",
            buttonText: ["Help Now", "See Emergency Appeals"]
        }
    ];

    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    bannerData.map((banner, idx) => <SwiperSlide key={idx}><Slider info={banner}></Slider></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Carousel;