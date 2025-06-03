export default function WelcomeSection({ children, className = "" }) {
    return (
        <div
            className={`flex items-center py-10 px-0 md:px-32 justify-center w-full h-screen snap-start ${className}`}
        >
            {children}
        </div>
    );
}
