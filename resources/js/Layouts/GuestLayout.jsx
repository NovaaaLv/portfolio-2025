import MainLayout from "./MainLayout";

export default function GuestLayout({ children }) {
    return (
        <MainLayout>
            <div className="w-full h-full scroll-smooth">{children}</div>
        </MainLayout>
    );
}
