const Slider = ({ info }) => {
    return (
        <header>
            <div className="w-full bg-center bg-cover h-[23rem] md:h-[38rem]" style={{
                backgroundImage: `linear-gradient(to right, #151515, rgba(21, 21, 21, 0)), url('${info.imageUrl}')`
            }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/20">
                    <div className="text-center">
                        <p className="text-4xl md:text-6xl font-bold text-center">Fund<span className="text-cyan-500">Flow</span></p>
                        <h1 className="text-xl md:text-3xl font-semibold text-white lg:text-4xl mt-4 mb-4">
                            {info.title}
                        </h1>
                        {
                            info.buttonText.map((btn, idx) => <button className="px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-md lg:w-auto hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700 mr-4" key={idx}>{btn}</button>)
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Slider;