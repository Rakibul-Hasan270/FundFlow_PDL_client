
const Hero = () => {
    
    return (
        <div>
            <section>
                {/* Hero Section */}
                <div className="container px-6 py-16 mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl">
                        Welcome to Our Platform
                    </h1>
                    <p className="mt-6 text-gray-600 lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        eu erat lacus, vel congue mauris.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="#"
                            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Logo Grid Section */}
                <div className="container px-6 py-10 mx-auto">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="mx-auto h-10"
                        />
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="mx-auto h-10"
                        />
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="mx-auto h-10"
                        />
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="mx-auto h-10"
                        />
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="mx-auto h-10"
                        />
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="mx-auto h-10"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;