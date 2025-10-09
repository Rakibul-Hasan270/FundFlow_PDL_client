import { useState } from "react";
import CampaignsCart from "../../../components/CampaignsCart/CampaignsCart";
import Loading from "../../../components/Loading/Loading";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCampaigns from "../../../hook/useCampaigns";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PopularCampaigns = () => {
    const [campaigns, , isLoading] = useCampaigns();
    const [tabIndex, setTabIndex] = useState(0);

    const medical = campaigns.filter(cart => cart.category === 'Medical');
    const education = campaigns.filter(cart => cart.category === 'Education');
    const food = campaigns.filter(cart => cart.category === 'Food');
    const shelter = campaigns.filter(cart => cart.category === 'Shelter');


    if (isLoading) return <Loading></Loading>;
    return (
        <div>
            <SectionTitle heading='Popular Campaigns' subHeading='Discover the most impactful campaigns making real change in people’s lives.
                    From education to emergency relief, these causes inspire thousands to give.
                    Join hands with compassionate donors supporting meaningful initiatives.
                    Your contribution can create hope and transform communities.'></SectionTitle>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="flex justify-center mb-6">
                        <TabList>
                            <Tab>Medical</Tab>
                            <Tab>Education</Tab>
                            <Tab>Food</Tab>
                            <Tab>Shelter</Tab>
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

export default PopularCampaigns;