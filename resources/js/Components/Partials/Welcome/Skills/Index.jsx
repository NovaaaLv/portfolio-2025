import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaVuejs,
    FaGitAlt,
    FaFigma,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiSvelte,
    SiVite,
    SiTailwindcss,
    SiFramer,
    SiRedux,
    SiNpm,
    SiYarn,
} from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Vue", icon: <FaVuejs className="text-green-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
];

export default function Skills() {
    return (
        <section className="flex flex-col justify-center w-full h-full text-white">
            {/* Heading */}
            <div className="flex flex-col gap-1 mb-12">
                <p className="text-sm font-semibold tracking-widest uppercase text-emerald-500">
                    Tech Stack
                </p>
                <h2 className="text-3xl font-extrabold text-white uppercase md:text-4xl lg:text-5xl">
                    Tools that power my{" "}
                    <span className="relative inline-block text-emerald-500">
                        code
                        <span className="absolute left-0 w-full h-1 rounded-full bg-emerald-500 -bottom-1 opacity-40 blur-sm"></span>
                    </span>
                </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 transition duration-300 transform glassmorphism2 rounded-2xl hover:scale-105 hover:shadow-emerald-500/40 group"
                    >
                        <div className="relative flex items-center justify-center w-16 h-16 mb-2 transition-transform duration-300 rounded-full group-hover:rotate-[8deg] group-hover:scale-110 bg-white/10 shadow-inner">
                            <div className="text-3xl md:text-4xl">
                                {skill.icon}
                            </div>
                            {/* Glow on hover */}
                            <div className="absolute w-full h-full transition duration-300 rounded-full opacity-0 group-hover:opacity-30 blur-md bg-emerald-400"></div>
                        </div>
                        <p className="text-sm font-medium text-center text-gray-300">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
