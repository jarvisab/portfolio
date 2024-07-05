"use client";

import { PhotoProvider, PhotoView } from 'react-photo-view';

const ImagesBrowser = ({ imagesList, imgsTitle }) => {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <PhotoProvider>
        {imagesList.map((imgSrc, imgIndex) => (
          <PhotoView key={imgIndex} src={imgSrc}>
            <img
              loading="lazy"
              src={imgSrc}
              alt={`${imgsTitle} - Img ${imgIndex + 1}`}
              style={{ height: '120px' }}
              className="photo-view-img"
            />
          </PhotoView>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default ImagesBrowser;