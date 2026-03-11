import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const Plans = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const cardClass =
    "group relative rounded-2xl p-[2px] overflow-hidden " +
    "before:absolute before:inset-0 before:rounded-2xl " +
    "before:bg-[radial-gradient(circle_at_var(--x)_var(--y),#f70c0c,transparent_60%)] " +
    "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500";

  const innerCard =
    "relative z-10 rounded-2xl dark:border-1 dark:border-[#313030] bg-neutral-100 dark:bg-black p-8 flex flex-col justify-between";

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-12 "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
            My Price Plan
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
            Enhancing Collaboration
            <br className="hidden sm:block" />
            between Remote
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Starter */}
          <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cardClass}
          >
            <div className={innerCard}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Starter</h3>
                <h1 className="text-4xl font-bold">$ 5.00</h1>
                <p className="mb-6">Per Month</p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>5 Social Media Account</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>Free Platform Access</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>

              <button className="mt-8 border border-gray-300 rounded-full py-2 px-6 self-start hover:bg-red-500 hover:text-white transition cursor-pointer ">
                Get Started →
              </button>
            </div>
          </motion.div>

          {/* Basic (Taller Card) */}
          <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={cardClass}
          >
            <div className={innerCard + " py-16 shadow-xl"}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Basic</h3>
                <h1 className="text-4xl font-bold">$ 230.00</h1>
                <p className="mb-6">Per Month</p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>5 Social Media Account</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>Free Platform Access</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>Marketing Platform</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>24/7 Customer Support</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>Lifetime Support</span>
                  </li>
                </ul>
              </div>

              <button className="mt-8 border border-gray-300 rounded-full py-2 px-6 self-start hover:bg-red-500 hover:text-white transition cursor-pointer">
                Get Started →
              </button>
            </div>
          </motion.div>

          {/* Premium */}
          <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className={cardClass}
          >
            <div className={innerCard}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Premium</h3>
                <h1 className="text-4xl font-bold">$ 45.00</h1>
                <p className="mb-6">Per Month</p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>5 Social Media Account</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>Free Platform Access</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-red-600" />
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>

              <button className="mt-8 border border-gray-300 rounded-full py-2 px-6 self-start hover:bg-red-500 hover:text-white transition cursor-pointer ">
                Get Started →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Plans;