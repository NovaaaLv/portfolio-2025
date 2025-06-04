export default function WelcomeSection({
    children,
    className = "",
    id = "",
    noPadding = false, // variabel baru
}) {
    return (
        <div
            id={id}
            className={`flex items-center justify-center w-full h-screen snap-start ${
                noPadding ? "p-0" : "py-10 px-10 md:px-32"
            } ${className}`}
        >
            {children}
        </div>
    );
}
