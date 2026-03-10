import { motion } from "framer-motion"
import one from "../assets/prpOne.png"
import two from "../assets/prptwo.png"
import three from "../assets/prpthree.png"
import four from "../assets/prpfour.png"
import { MoveUpRight } from 'lucide-react';

const Portfolio = () => {
    return (
        <div className="bg-gray-100 dark:bg-black py-8 lg:py-20 px-4">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >

                    <div className="text-center mb-16">
                        <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                            Latest Portfolio
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Transforming Ideas into Exceptional
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Business consulting consultants provide expert advice and guide
                            businesses to help them improve their performance, efficiency,
                            and organizations.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-6 lg:space-y-16">
                        <div className="">
                            <div className="bg-gray-100 rounded-2xl p-6 border-2 border-[#d1cece]">
                                <div className="rounded-xl overflow-hidden">
                                    <img src={one} alt="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <div>
                                    <h3 className="text-lg font-semibold ">
                                        My Journey as a Creator
                                    </h3>
                                    <p className="text-sm mt-1">
                                        Development Coaches
                                    </p>
                                </div>

                                <button className="p-3 border-2 border-[#ddd7d7] rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out">
                                    <MoveUpRight size={15}/>
                                </button>
                            </div>
                        </div>


                        <div className="">
                            <div className="bg-gray-100 rounded-2xl p-6 border-2 border-[#d1cece] md:mt-18">
                                <div className="rounded-xl overflow-hidden">
                                    <img src={two} alt="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <div>
                                    <h3 className="text-lg font-semibold ">
                                        My Professional Portfolio
                                    </h3>
                                    <p className="text-sm mt-1">
                                        Development Coaches
                                    </p>
                                </div>

                                <button className="p-3 border-2 border-[#ddd7d7] rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out">
                                    <MoveUpRight size={15}/>
                                </button>
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-gray-100 rounded-2xl p-6 border-2 border-[#d1cece] md:-mt-18">
                                <div className="rounded-xl overflow-hidden">
                                    <img src={three} alt="" />
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <div>
                                    <h3 className="text-lg font-semibold ">
                                        My Portfolio of Innovation
                                    </h3>
                                    <p className="text-sm mt-1">
                                        App Development
                                    </p>
                                </div>

                                <button className="p-3 border-2 border-[#ddd7d7] rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out">
                                    <MoveUpRight size={15}/>
                                </button>
                            </div>
                        </div>


                        <div className="">
                            <div className="bg-gray-100 rounded-2xl p-6 border-2 border-[#d1cece]">
                                <div className="rounded-xl overflow-hidden">
                                    <img src={four} alt="" />
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <div>
                                    <h3 className="text-lg font-semibold ">
                                        A Portfolio of Creativity and Passion
                                    </h3>
                                    <p className="text-sm mt-1">
                                        Business Development
                                    </p>
                                </div>

                                <button className="p-3 border-2 border-[#ddd7d7] rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out">
                                    <MoveUpRight size={15}/>
                                </button>
                            </div>
                        </div>

                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default Portfolio