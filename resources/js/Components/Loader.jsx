import React from "react";

const Loader = ({ progress, visible }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            } bg-[#1e1f24]`}
        >
            {/* Spinner */}
            <div className="relative mb-6">
                <div className="w-20 h-20 border-[6px] border-t-transparent border-b-transparent border-l-emerald-500 border-r-emerald-300 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-emerald-400">
                    {progress}%
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-3 overflow-hidden bg-gray-700 rounded-full shadow-inner w-72">
                <div
                    className="h-full transition-all duration-300 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Text */}
            <p className="mt-4 text-sm tracking-wide text-white animate-pulse">
                Loading... Please wait
            </p>
        </div>
    );
};

export default Loader;
