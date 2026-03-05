const Projects = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Card */}
        <div className="bg-gray-100 dark:bg-gradient-to-r from-gray-900  to-red-600 rounded-3xl px-6 sm:px-10 md:px-12 py-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

            <div>
              <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-bold text-red-500 leading-none">
                25
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight dark:text-black">
                Years Of <br /> Experience
              </h2>
            </div>

          </div>

          <p className="mt-6 max-w-lg text-gray-600 leading-relaxed text-sm sm:text-base">
            Business consulting consultants provide expert advice and guide
            businesses to help improve their performance efficiency.
          </p>

        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 border-r-2 border-r-red-500 border-b-2 border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">20K+</h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
              Our Project Complete
            </p>
          </div>

          <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 border-r-2 border-r-red-500 border-b-2 border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">10K+</h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
              Our Natural Products
            </p>
          </div>

          <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 border-r-2 border-r-red-500 border-b-2 border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">200+</h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
              Clients Reviews
            </p>
          </div>

          <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 border-r-2 border-r-red-500 border-b-2 border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">1,000+</h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
              Our Satisfied Clients
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;