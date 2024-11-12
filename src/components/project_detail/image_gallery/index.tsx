import React from 'react';
import './styless.scss';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

interface ImageGalleryComponentProps {
  images: any[];
}

const ImageGalleryComponent: React.FC<ImageGalleryComponentProps> = ({images}) => {

  return (
    <div className='carousel-image-container'>
      <CCarousel controls indicators transition='crossfade'>
        {images.map((image) => (
          <CCarouselItem>
            {
              (image.original.slice(-3) == "mp4") 
              ? <video width="100%" controls className="media">
                <source src={image.original} />
                Your browser does not support the video tag.
              </video>
              : <CImage className="d-block w-100" src={image.original} alt={image.thumbnail}/>
            }
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
};

export default ImageGalleryComponent;