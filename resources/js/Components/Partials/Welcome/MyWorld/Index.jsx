import Section2Heading from "@/Components/Partials/Welcome/MyWorld/Heading";
import Section2SubHeading from "@/Components/Partials/Welcome/MyWorld/SubHeading";
import {
    HiOutlineLightBulb,
    HiOutlineHeart,
    HiOutlineBriefcase,
    HiLightBulb,
    HiHeart,
    HiBriefcase,
    HiOutlineUserGroup,
    HiUserGroup,
} from "react-icons/hi2";

export default function MyWorld() {
    const datas = [
        {
            title: "Creativity",
            iconOutline: (
                <HiOutlineLightBulb className="text-3xl text-emerald-500 group-hover:hidden" />
            ),
            iconFilled: (
                <HiLightBulb className="hidden text-3xl text-emerald-500 group-hover:block" />
            ),
            description:
                "Bringing innovative ideas and fresh perspectives to every project.",
        },
        {
            title: "Dedication",
            iconOutline: (
                <HiOutlineHeart className="text-3xl text-emerald-500 group-hover:hidden" />
            ),
            iconFilled: (
                <HiHeart className="hidden text-3xl text-emerald-500 group-hover:block" />
            ),
            description:
                "Fully committed to delivering quality results with passion and persistence.",
        },
        {
            title: "Collaboration",
            iconOutline: (
                <HiOutlineUserGroup className="text-3xl text-emerald-500 group-hover:hidden" />
            ),
            iconFilled: (
                <HiUserGroup className="hidden text-3xl text-emerald-500 group-hover:block" />
            ),
            description:
                "Working closely with others to achieve shared goals through effective teamwork.",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-20">
            <div className="flex flex-col items-center justify-center w-full">
                <Section2Heading />
                <Section2SubHeading />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-5">
                {datas.map((data, index) => (
                    <div
                        key={index}
                        className="relative w-full p-6 overflow-hidden transition duration-300 rounded-lg shadow-md bg-emerald-800 hover:shadow-xl group md:w-1/3"
                    >
                        {/* Shine Effect Layer - posisi awal lebih di bawah */}
                        <span className="absolute inset-0 w-full h-full transition-all duration-700 ease-out transform scale-150 rotate-45 -translate-x-full translate-y-10 bg-white pointer-events-none opacity-20 group-hover:translate-x-full group-hover:-translate-y-0" />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="mb-4">
                                {data.iconOutline}
                                {data.iconFilled}
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-white">
                                {data.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                                {data.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
