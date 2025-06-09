import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import Loader from "@/Components/Loader";

const MainLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Initial page load
    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((prev) => (prev < 90 ? prev + 5 : prev));
        }, 100);

        const timeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => setLoading(false), 500);
            clearInterval(interval);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    // Inertia page navigation
    useEffect(() => {
        const start = () => {
            setLoading(true);
            setProgress(0);

            const interval = setInterval(() => {
                setProgress((prev) => (prev < 90 ? prev + 5 : prev));
            }, 100);

            router._progressInterval = interval;
        };

        const end = () => {
            clearInterval(router._progressInterval);
            setProgress(100);
            setTimeout(() => setLoading(false), 500);
        };

        router.on("start", start);
        router.on("finish", end);

        return () => {
            router.off("start", start);
            router.off("finish", end);
        };
    }, []);

    return (
        <>
            <Loader progress={progress} visible={loading} />
            <div>{children}</div>
        </>
    );
};

export default MainLayout;
