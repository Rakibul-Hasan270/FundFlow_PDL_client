import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Testimonials = () => {
    const axiosPublic = useAxiosPublic();

    const { data: review = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <div className='mb-52'>
            <SectionTitle heading='Testimonials' subHeading='kdhfgkhdkfghk'></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    review.map(review => <SwiperSlide key={review._id}>
                        <figure className="mx-auto text-center md:p-7">
                            <svg
                                className="w-10 h-10 mx-auto mb-7 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>

                            <blockquote>
                                <p className="font-medium text-gray-900 dark:text-white">
                                    {review.review}
                                </p>
                            </blockquote>

                            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                <img
                                    className="w-6 h-6 rounded-full"
                                    src={review.image}
                                    alt="profile picture"
                                />
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">{review.name}</cite>
                                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{review.role}</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;