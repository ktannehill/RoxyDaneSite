
const ImageTextSection = ({ image, title, content, reverse }) => {
    return (
        <div className={`image-text-section ${reverse ? "reverse" : ""}`}>
            <div className="half-image">
                <p>{image}</p>
            </div>
            <div className="half-text">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default ImageTextSection