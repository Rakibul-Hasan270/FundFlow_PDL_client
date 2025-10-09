import AboutUs from "../AboutUs/AbooutUs";
import Carousel from "../Banner/Carousel";
import PopularCampaigns from "../PopularCampaigns/PopularCampaigns";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className="max-w-7xl mx-auto md:space-y-28 md:mt-28">
                <PopularCampaigns></PopularCampaigns>
                <AboutUs></AboutUs>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;