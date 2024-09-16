import React from 'react';
import '../styles.scss';
import MyGallery from './myGallery';

interface ImageGalleryComponentProps {
  images: string[];
}

const ImageGalleryComponent: React.FC<ImageGalleryComponentProps> = ({images}) => {

  return (
    <div className='image-gallery-container'>
      <MyGallery images={images} />
    </div>
  );
};

export default ImageGalleryComponent;