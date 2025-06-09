export default function Blob({ position = "", blobNum = "", size = "" }) {
    return (
        <img
            src={`/assets/blob/${blobNum}.svg`}
            alt=""
            style={{ width: size }}
            className={`absolute bottom-10 z-10 object-cover ${position}`}
        />
    );
}
