import { Link } from "@inertiajs/react";

export default function Navbar() {
    const navlinks = [
        {
            label: "Projects",
            link: "#Projects",
        },
        {
            label: "Home",
            link: "#Home",
        },
        {
            label: "Contact",
            link: "#Contact",
        },
    ];

    return (
        <div className="flex items-center justify-end w-full">
            <div className="flex items-center gap-16">
                {navlinks.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="relative text-white group"
                    >
                        {item.label}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-3s group-hover:w-full"></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
