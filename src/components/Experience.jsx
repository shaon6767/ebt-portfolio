import bulb from "../assets/bulb.svg"
import pen from "../assets/pencil.svg"
import msg from "../assets/Msg.svg"
import rob from "../assets/robot.svg"

const Experience = () => {
  const Experience = [
    {
      title: "Web Design",
      projects: "120 Projects",
      icon: (
       <img src={pen} alt="" className="w-10 h-10 text-red-500" />
      ),
    },
    {
      title: "Ui/Ux Design",
      projects: "241 Projects",
      icon: (
        <img src={rob} alt="" className="w-10 h-10 text-red-500" />
      ),
    },
    {
      title: "Web Research",
      projects: "240 Projects",
      icon: (
       <img src={bulb} alt="" className="w-10 h-10 text-red-500" />
      ),
    },
    {
      title: "Marketing",
      projects: "331 Projects",
      icon: (
        <img src={msg} alt="" className="w-10 h-10 text-red-500" />
      ),
    },
  ];

  return (
    <section className="py-20 mt-[100px] px-6 md:px-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Experience.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-red-200 dark:border-red-500/20 rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex justify-center mb-6">{item.icon}</div>

            <h3 className="text-lg font-semibold ">
              {item.title}
            </h3>

            <p className="text-sm mt-2">
              {item.projects}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;