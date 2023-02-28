import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ImageObject } from "../types";

const Slideshow = (props: any) => {
  const images: ImageObject[] = props.images;
  return (
    <div className="slide-container">
      <Slide>
        {images.map((image: ImageObject, index: number) => (
          <div key={index}>
            <img className="w-full p-10" src={image.url} />
            <h3 className="text-center">{image.caption}</h3>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
