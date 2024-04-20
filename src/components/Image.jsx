import { useEffect } from "react";

const Image = ({ src }) => {


    useEffect(() => {

    }, [src])


    return (
        <div className="ImageCard">
            <img src={src} alt="" />
        </div>
    );
}

export default Image;