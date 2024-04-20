import Image from "./Image";
import { useEffect, useState } from "react";

const ImagesContainer = () => {
    const [images, setImages] = useState([]);


    useEffect(() => {
        fetch("https://random.imagecdn.app/500/150").then(data => setImages(prevImages => [...prevImages, data.url]))
    }, [])


    const handleClick = () => {
        fetch("https://random.imagecdn.app/500/150").then(data => setImages(prevImages => [...prevImages, data.url]))
        console.log(images)
    };


    return (
        <div className="content">
            <div className="ImagesContainer">
                {images.length > 0 && images.map((src) => (
                    <div className="ImageCard">
                        <img src={src} alt="" />
                    </div>
                ))}
            </div>
            <button className="GenerateButton" onClick={handleClick}>Generate</button>
        </div>
    );
};

export default ImagesContainer;
