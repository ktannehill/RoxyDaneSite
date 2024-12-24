/* eslint-disable react/prop-types */
import Button from './Button'
import { Link } from 'react-router-dom'

const ImageTextSection = ({ id, image, title, subtitles, content, link, reverse }) => {
    return (
        <div id={id} className='container'>
            <div className={`image-text-section ${reverse ? "reverse" : ""}`}>
                <div className="half-image">
                    <img src={image} alt={content} loading="lazy" />
                </div>
                <div className="half-text">
                    <h2>{title}</h2>

                    {content.map((text, index) => (
                        <aside key={index}>
                            {subtitles.length > 0 && <h3>{subtitles[index]}</h3>}
                            <p>{text}</p>
                        </aside>
                    ))}
                    
                    {link?.length > 0 && <Link to={link}><Button text="View more" /></Link>}
                </div>
            </div>
        </div>
    )
}

export default ImageTextSection