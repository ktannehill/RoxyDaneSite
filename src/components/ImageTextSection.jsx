
const ImageTextSection = ({ image, title, content, reverse }) => {
    return (
        <div className='container'>
            <div className={`image-text-section ${reverse ? "reverse" : ""}`}>
                <div className="half-image">
                    <img src={image} alt={content} loading="lazy" />
                </div>
                <div className="half-text">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageTextSection