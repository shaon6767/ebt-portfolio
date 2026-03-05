import man from "../assets/Margin.png"; 

const Service = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-red-500 tracking-widest uppercase text-sm font-semibold">
            Latest Service
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
            Inspiring The World One Project
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Business consulting consultants provide expert advice and guide
            businesses to help them improve their performance, efficiency,
            and organizational growth.
          </p>
        </div>


        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            
            <div className="bg-gray-100 rounded-2xl p-8 border-b-2 border-r-2 border-red-500 hover:scale-105 shadow-lg transition-all ease-in-out duration-200">
              <h3 className="text-lg font-bold text-gray-900">
                01. A Portfolio of Creativity
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Business consulting consultants provide expert advice and guide
                businesses to help them improve their performance efficiency.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 border-b-2 border-r-2 border-red-500 hover:scale-105 shadow-lg transition-all ease-in-out duration-200">
              <h3 className="text-lg font-bold text-gray-900">
                02. My Portfolio of Innovation
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                My work is driven by the belief that thoughtful design and
                strategic planning can empower brands and transform businesses.
              </p>
            </div>


            <div className="bg-gray-100 rounded-2xl p-8 border-b-2 border-r-2 border-red-500 hover:scale-105 shadow-lg transition-all ease-in-out duration-200">
              <h3 className="text-lg font-bold text-gray-900">
                03. A Showcase of My Projects
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                In this portfolio, you’ll find a curated selection of projects
                that highlight my skills in key areas such as responsive web design.
              </p>
            </div>

          </div>

          <div className="">
            <img
              src={man}
              alt=""
              className=""
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;