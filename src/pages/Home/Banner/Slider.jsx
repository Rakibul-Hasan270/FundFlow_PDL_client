const Slider = ({ info }) => {
    return (
        <header>
            <div className="w-full bg-center bg-cover h-[23rem] md:h-[38rem]" style={{
                backgroundImage: `linear-gradient(to right, #151515, rgba(21, 21, 21, 0)), url('${info.imageUrl}')`
            }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/20">
                    <div className="text-center">
                        <p className="text-2xl text-white md:text-6xl font-bold text-center">Fund<span className="text-blue-500">Flow</span></p>
                        <h1 className="md:text-3xl font-semibold text-white lg:text-4xl mt-4 mb-4">
                            {info.title}
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Slider;