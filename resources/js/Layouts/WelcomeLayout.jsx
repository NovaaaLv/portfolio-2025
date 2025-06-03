export default function WelcomeLayout({ children }) {
    return (
        <div className="w-screen h-screen overflow-scroll snap-y snap-mandatory scrollbar-none">
            {children}
        </div>
    );
}
