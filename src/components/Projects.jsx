const Projects = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Card */}
       <div className="bg-gray-100 rounded-3xl px-12 py-6">
  <div className="flex items-center gap-10">
    
   <div className="">
     <span className="text-[120px] md:text-[160px] lg:text-[180px] font-bold text-red-500 leading-none">
      25
    </span>
   </div>

    <div>
      <h2 className="text-3xl md:text-5xl mt-4 font-bold leading-tight">
        Years Of <br /> Experience
      </h2>
    </div>

  </div>

  <p className="mt-6 max-w-lg leading-relaxed">
    Business consulting consultants provide expert advice and guide
    businesses to help improve their performance efficiency.
  </p>
</div>

        {/* Right Stats */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-2xl p-8 border-r-2 border-r-[#fff] hover:border-r-red-500 border-b-2 border-b-[#fff] hover:border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-4xl font-bold text-gray-900">20K+</h2>
            <p className="mt-2 text-gray-600">Our Project Complete</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-r-2 border-r-[#fff] hover:border-r-red-500 border-b-2 border-b-[#fff] hover:border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-4xl font-bold text-gray-900">10K+</h2>
            <p className="mt-2 text-gray-600">Our Natural Products</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-r-2 border-r-[#fff] hover:border-r-red-500 border-b-2 border-b-[#fff] hover:border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-4xl font-bold text-gray-900">200+</h2>
            <p className="mt-2 text-gray-600">Clients Reviews</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-r-2 border-r-[#fff] hover:border-r-red-500 border-b-2 border-b-[#fff] hover:border-b-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-200">
            <h2 className="text-4xl font-bold text-gray-900">1,000+</h2>
            <p className="mt-2 text-gray-600">Our Satisfied Clients</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;