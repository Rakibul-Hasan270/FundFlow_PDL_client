import CampaignsCart from "../../components/CampaignsCart/CampaignsCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCampaigns from "../../hook/useCampaigns";
import campaignsAnimate from '../../assets/lottie file/campaigns.json'
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BiDonateHeart } from "react-icons/bi";
import Loading from "../../components/Loading/Loading";

const Campaigns = () => {
    const [campaigns, , isLoading] = useCampaigns();
    const [tabIndex, setTabIndex] = useState(0);
    const tabSectionRef = useRef(null);

    const medical = campaigns.filter(cart => cart.category === 'Medical');
    const education = campaigns.filter(cart => cart.category === 'Education');
    const food = campaigns.filter(cart => cart.category === 'Food');
    const shelter = campaigns.filter(cart => cart.category === 'Shelter');

    if (isLoading) return <Loading></Loading>;
    return (
        <div className="max-w-7xl mx-auto">
            <section className="">
                <div className="container flex flex-col px-4 py-10 mx-auto space-y-8 lg:flex-row lg:items-center lg:py-16 lg:space-y-0">

                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="lg:max-w-lg space-y-6">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl lg:text-4xl">
                                Together, We Can Build a Compassionate Society
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 sm:text-lg">
                                Your donation can bring real change to the lives of underprivileged people.
                                Support medical care, education, food, and shelter in a simple and secure way.
                            </p>

                            <button onClick={() => {
                                tabSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                            }} className="flex items-center gap-3 cursor-pointer px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition w-max">
                                <BiDonateHeart></BiDonateHeart>
                                Donate Now
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[500px] xl:h-[550px]">
                            <Lottie
                                className="w-full h-full"
                                animationData={campaignsAnimate}
                                loop={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <SectionTitle heading='Campiagns List' subHeading='Support meaningful campaigns that bring food, shelter, education, and hope to those who need it most.Every donation counts. Together, we can empower communities and bring lasting change.'></SectionTitle>

            <div ref={tabSectionRef}>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}> <div className="border-b mb-6 overflow-x-auto">
                    <TabList className="flex flex-nowrap justify-start md:justify-center gap-4 px-2 py-1">
                        <Tab className="whitespace-nowrap px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black transition">
                            Medical
                        </Tab>
                        <Tab className="whitespace-nowrap px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black transition">
                            Education
                        </Tab>
                        <Tab className="whitespace-nowrap px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black transition">
                            Food
                        </Tab>
                        <Tab className="whitespace-nowrap px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black transition">
                            Shelter
                        </Tab>
                    </TabList>
                </div>
                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto gap-2.5 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                medical.map(cart => <CampaignsCart key={cart._id} campaigns={cart}></CampaignsCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto gap-2.5 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                education.map(cart => <CampaignsCart key={cart._id} campaigns={cart}></CampaignsCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto gap-2.5 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                food.map(cart => <CampaignsCart key={cart._id} campaigns={cart}></CampaignsCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto gap-2.5 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                shelter.map(cart => <CampaignsCart key={cart._id} campaigns={cart}></CampaignsCart>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Campaigns;