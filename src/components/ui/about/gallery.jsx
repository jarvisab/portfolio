import { galleries } from '@/data';
import { GalleryItem } from '@/components/ui';


export default function Gallery() {
    return (
        <section className="section-boilerplate">

            {galleries.map((gallery, galleryIndex) => (
                <div key={galleryIndex}>

                    <GalleryItem
                        gTitle={gallery.title}
                        gImgs={gallery.imgs}
                    />

                </div>
            ))}
        </section>
    );
}
