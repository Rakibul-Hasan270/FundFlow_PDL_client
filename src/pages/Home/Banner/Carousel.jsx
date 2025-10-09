import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slider from './Slider';

import banner0 from '../../../assets/banner/banner0.jpg';
import banner1 from '../../../assets/banner/banner1.jpg';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';
import banner4 from '../../../assets/banner/banner4.jpg';
import banner5 from '../../../assets/banner/banner5.jpg';

const Carousel = () => {

  const bannerData = [
    {
      title: "Together, let's build a compassionate society",
      imageUrl: banner0
    },
    {
      title: "Shelter for the homeless — your support can change a life",
      imageUrl: banner1
    },
    {
      title: "Fight against hunger — donate a meal",
      imageUrl: banner2
    },
    {
      title: "Step forward to spread the light of education",
      imageUrl: banner3
    },
    {
      title: "Serve humanity in times of disaster — the time to unite is now",
      imageUrl: banner4
    },
    {
      title: "Contribute to the path of humanity",
      imageUrl: banner5
    }
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <Slider info={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
