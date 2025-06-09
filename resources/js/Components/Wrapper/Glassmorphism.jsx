export default function Glassmorphism({
    children,
    className = "",
    id = "",
    noPadding = false,
}) {
    return (
        <div
            id={id}
            className={`relative z-30 w-full h-full glassmorphism ${
                noPadding ? "p-0" : "py-10 px-10 md:px-32"
            } ${className}`}
        >
            {children}
        </div>
    );
}
