const PREFIX_LOCATION = "/assets/gallery/";

let galleries = [
    {
        title: "Certificates",
        location: "certificates",
        imgs:
            [
                '1.webp',
                '2.webp',
                '3.webp',
                '4.webp',
                '5.webp',
                '6.webp',
            ],
    },
    {
        title: "Latest Documentations",
        location: "documentation",
        imgs:
            [
                '1.webp',
                '2.webp',
                '3.webp',
            ],
    },
];


galleries.forEach(
  item => {
    item.imgs = item.imgs.map(filename => PREFIX_LOCATION + item.location + '/' + filename);
  }
);

export { galleries };