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
            <CImage className="d-block w-100" src={image.original} alt={image.thumbnail}/>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
};

export default ImageGalleryComponent;