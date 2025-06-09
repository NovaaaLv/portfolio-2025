import { Head } from "@inertiajs/react";
import WelcomeLayout from "@/Layouts/WelcomeLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import WelcomeSection from "@/Components/Container/WelcomeSection";
import Hero from "@/Components/Partials/Welcome/Hero";
import MyWorld from "@/Components/Partials/Welcome/MyWorld/Index";
import Glassmorphism from "@/Components/Wrapper/Glassmorphism";
import Blob from "@/Components/Blob";
import Skills from "@/Components/Partials/Welcome/Skills/Index";

export default function Welcome() {
    return (
        <GuestLayout>
            <WelcomeLayout>
                <Head title="Frontend Dev" />
                <WelcomeSection
                    className="bg-[#1e1f24] relative"
                    id="hero"
                    noPadding
                >
                    <Glassmorphism>
                        <Hero />
                    </Glassmorphism>
                    <Blob blobNum="1" size="300px" position="left-0 top-0" />
                    <Blob
                        blobNum="2"
                        size="350px"
                        position="right-0 bottom-10"
                    />
                </WelcomeSection>
                <WelcomeSection
                    className="bg-[#101010] relative"
                    id="section-2"
                >
                    <MyWorld />
                </WelcomeSection>
                <WelcomeSection
                    className="bg-[#1e1f24] relative"
                    id="section-3"
                    noPadding
                >
                    <Glassmorphism>
                        <Skills />
                    </Glassmorphism>
                    <Blob blobNum="1" size="300px" position="left-0 bottom-0" />
                    <Blob blobNum="2" size="350px" position="right-0 top-10" />
                </WelcomeSection>
                <WelcomeSection
                    className="bg-[#101010] relative"
                    id="section-2"
                >
                    <MyWorld />
                </WelcomeSection>
                <WelcomeSection
                    className="bg-[#1e1f24] relative"
                    id="section-3"
                    noPadding
                >
                    <Glassmorphism>
                        <Skills />
                    </Glassmorphism>
                    <Blob blobNum="1" size="300px" position="left-0 bottom-0" />
                    <Blob blobNum="2" size="350px" position="right-0 top-10" />
                </WelcomeSection>
            </WelcomeLayout>
        </GuestLayout>
    );
}
