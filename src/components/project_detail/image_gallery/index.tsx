import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import { ImageData } from '../../homepage/projects_section/types';

interface ImageGalleryComponentProps {
  images: ImageData[];
}

const ImageGalleryComponent: React.FC<ImageGalleryComponentProps> = ({images}) => {

  return (
    <div className='carousel-image-container'>
      <CCarousel controls indicators transition='crossfade'>
        {images.map((image) => (
          <CCarouselItem>
            <CImage className="d-block w-100" src={image.url} alt={image.caption}/>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
};

export default ImageGalleryComponent;