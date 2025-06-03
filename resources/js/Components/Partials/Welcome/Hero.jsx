import { TypeAnimation } from "react-type-animation";
import { LuMouse } from "react-icons/lu";
import Navbar from "@/Components/Partials/Navbar";

export default function Hero() {
    const datas = [
        {
            label: "Email",
            data: "nodevaaa@gmail.com",
            link: "mailto:nodevaaa@gmail.com",
        },
        {
            label: "Instagram",
            data: "@dev.novayx",
            link: "https://instagram.com/dev.novayx",
        },
        {
            label: "LinkedIn",
            data: "www.linkedin.com/in/novawiguna",
            link: "https://www.linkedin.com/in/novawiguna",
        },
    ];

    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex items-center justify-between w-full h-[85%] text-white">
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

            <div className="flex justify-between w-full">
                <div className="flex items-center gap-5 text-white">
                    {datas.map((data, index) => {
                        const isLast = index === datas.length - 1;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-10 transition-3s hover:scale-[1.03]"
                            >
                                <a
                                    href={data.link}
                                    className="group"
                                    target="_blank"
                                >
                                    <p className="font-semibold">
                                        {data.label}
                                    </p>
                                    <p
                                        className="text-gray-300 transition-3s group-hover:text-emerald-400 group-hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.data}
                                    </p>
                                </a>
                                {!isLast && (
                                    <span className="text-emerald-400">|</span>
                                )}
                            </div>
                        );
                    })}
                </div>

                <a
                    className="flex flex-col items-center justify-center gap-2 text-3xl text-white cursor-pointer transition-3s hover:-translate-y-2 hover:text-emerald-400"
                    href="#section-2"
                >
                    <LuMouse />
                    <p className="font-thin">|</p>
                </a>
            </div>
        </div>
    );
}
