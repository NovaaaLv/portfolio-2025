import { TypeAnimation } from "react-type-animation";
import Navbar from "@/Components/Partials/Navbar";

export default function Hero() {
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex items-center justify-between w-full h-full text-white">
                <div className="text-center md:text-left md:mt-0">
                    <p className="text-2xl font-light md:text-3xl ">
                        Hi There! 👋
                    </p>

                    <p className="text-4xl font-extrabold md:text-5xl">
                        I’m a{" "}
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                2000,
                                "UI Designer",
                                2000,
                                "Creative Coder",
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            className="text-emerald-400"
                        />
                    </p>

                    <p className="mt-3 text-lg font-light text-gray-300 md:text-xl">
                        I love turning complex ideas into clean and interactive
                        UIs.
                    </p>

                    <button className="relative px-6 py-3 mt-4 overflow-hidden font-semibold text-white rounded bg-emerald-500 group">
                        Contact Me
                        <span className="absolute inset-0 w-full h-full transform scale-150 translate-x-[-100%] bg-white opacity-20 rotate-45 transition-all duration-700 ease-out group-hover:translate-x-[100%] pointer-events-none"></span>
                    </button>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}
