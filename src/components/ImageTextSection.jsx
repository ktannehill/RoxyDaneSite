import Button from './Button'
import { Link } from 'react-router-dom'

const ImageTextSection = ({ image, title, subtitles, content, link, reverse }) => {
    return (
        <div className='container'>
            <div className={`image-text-section ${reverse ? "reverse" : ""}`}>
                <div className="half-image">
                    <img src={image} alt={content} loading="lazy" />
                </div>
                <div className="half-text">
                    <h2>{title}</h2>
                    {subtitles && subtitles.length > 0 ? (
                        <>
                        {subtitles.map((subtitle, index) => (
                            <aside key={index}>
                                <h3>{subtitle}</h3>
                                <p>{content[index]}</p>
                            </aside>
                        ))}
                        </>
                    ) : (
                        <>
                        {content.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                        </>
                    )}
                    {link?.length > 0 && <Link to={link}><Button text="View more" /></Link>}
                </div>
            </div>
        </div>
    )
}

export default ImageTextSection