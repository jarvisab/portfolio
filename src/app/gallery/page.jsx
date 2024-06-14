/* eslint-disable @next/next/no-img-element */
'use client';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { galleries } from '../_data/gallery';


export default function Gallery() {
  return (
    <section className="py-3 sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">Gallery</h3>

      {galleries.map((gallery, galleryIndex) => (
        <div key={galleryIndex}>
          <div className="flex items-center justify-between border-2 border-zinc-900 dark:border-blue-100 rounded-md my-4">
            <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
              {gallery.title}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 my-6">
            <PhotoProvider>
              {gallery.imgs.map((imgSrc, imgIndex) => (
                <PhotoView key={imgIndex} src={imgSrc}>
                  <img
                    src={imgSrc}
                    alt={`${gallery.title} ${imgIndex}`}
                    style={{ height: '120px' }}
                    className="galleries-img cursor-pointer"
                  />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
      ))}
    </section>
  );
}
