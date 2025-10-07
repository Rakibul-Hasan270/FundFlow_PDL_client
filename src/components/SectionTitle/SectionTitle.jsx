
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-4 mt-12 mb-12'>
            <h2 className='text-2xl md:text-4xl font-bold'>{heading}</h2>
            <p className='md:max-w-3xl mx-auto'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;