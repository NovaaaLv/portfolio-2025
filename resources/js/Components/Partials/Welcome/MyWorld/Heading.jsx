export default function Section2Heading() {
    return (
        <div className="flex items-baseline gap-3">
            {/* Segitiga Kiri */}
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        width: 0,
                        height: 0,
                        borderBottom: "20px solid #059669",
                        borderLeft: "20px solid transparent",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />
            </div>

            {/* Teks */}
            <p className="text-2xl font-bold text-white uppercase">
                WELCOME TO MY{" "}
                <span className="animate-flash text-flash">WORLD</span>
            </p>

            {/* Segitiga Kanan */}
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        width: 0,
                        height: 0,
                        borderBottom: "20px solid #059669",
                        borderRight: "20px solid transparent",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />
            </div>
        </div>
    );
}
