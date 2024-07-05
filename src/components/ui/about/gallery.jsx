import { galleries } from '@/data';
import { TitleCard, ImagesBrowser } from "@/components/ui";


export default function Gallery() {
    return (
        <section className="section-boilerplate">

            {galleries.map((gallery, galleryIndex) => (
                <div key={galleryIndex}>

                    <TitleCard
                        title={gallery.title}
                    />

                    <ImagesBrowser
                        imagesList={gallery.imgs}
                        imgsTitle={gallery.title}
                    />

                </div>
            ))}
        </section>
    );
}
