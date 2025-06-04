import { Head } from "@inertiajs/react";
import WelcomeLayout from "@/Layouts/WelcomeLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import WelcomeSection from "@/Components/Container/WelcomeSection";
import Hero from "@/Components/Partials/Welcome/Hero";
import Section2 from "@/Components/Partials/Welcome/Section2/Index";

export default function Welcome() {
    return (
        <GuestLayout>
            <WelcomeLayout>
                <Head title="Frontend Dev" />
                <WelcomeSection className="bg-[#1e1f24]" id="hero">
                    <Hero />
                </WelcomeSection>
                <WelcomeSection
                    className="bg-[#101010] relative"
                    id="section-2"
                >
                    <Section2 />
                </WelcomeSection>
                <WelcomeSection className="bg-yellow-200" id="section-3">
                    AWUUU
                </WelcomeSection>
            </WelcomeLayout>
        </GuestLayout>
    );
}
