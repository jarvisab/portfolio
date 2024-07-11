import { TitleCard, ImagesBrowser } from "..";

export default function GalleryItem ({ gTitle, gImgs }) {
    return (
        <>
            <TitleCard
                title={gTitle}
            />

            <ImagesBrowser
                imagesList={gImgs}
                imgsTitle={gTitle}
            />
        </>
    );
}