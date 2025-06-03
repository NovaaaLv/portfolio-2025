import { Head } from "@inertiajs/react";
import WelcomeLayout from "@/Layouts/WelcomeLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import WelcomeSection from "@/Components/Container/WelcomeSection";
import Hero from "@/Components/Partials/Welcome/Hero";

export default function Welcome() {
    return (
        <GuestLayout>
            <WelcomeLayout>
                <Head title="Frontend Dev" />
                <WelcomeSection className="bg-[#292929]">
                    <Hero />
                </WelcomeSection>
                <WelcomeSection className="bg-[#101010]">AWUUU</WelcomeSection>
                <WelcomeSection className="bg-yellow-200">AWUUU</WelcomeSection>
            </WelcomeLayout>
        </GuestLayout>
    );
}
