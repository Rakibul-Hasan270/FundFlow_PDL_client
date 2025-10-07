import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AbooutUs = () => {
    return (
        <div>
            <SectionTitle heading='About Us' subHeading='aboiutbb'></SectionTitle>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">What is this donation platform about?</div>
                <div className="collapse-content text-sm">This platform allows users to donate food, money, and resources to underprivileged people and social causes in need.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How can I donate?</div>
                <div className="collapse-content text-sm">You can donate by selecting a campaign, entering your donation amount, and making a secure payment through our system.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What types of causes are supported?</div>
                <div className="collapse-content text-sm">Our platform supports food distribution, medical aid, education for underprivileged children, disaster relief, and community improvement projects.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Is my donation safe?</div>
                <div className="collapse-content text-sm">Yes, all transactions are secured and donors receive confirmation receipts for transparency and trust.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I track my donation?</div>
                <div className="collapse-content text-sm">Yes, you can view all your past donations and see updates on the campaigns you contributed to.</div>
            </div>
        </div>
    );
};

export default AbooutUs;