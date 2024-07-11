const PREFIX_LOCATION = "/assets/projects/";

let projects = [
  {
    id: 9,
    title: "curhat - Share your thoughts or randomly read others' musings.",
    liveLink: "https://curhat.pages.dev/",
    gitHub: "https://github.com/jarvisab/curhat",
    img: [
      "1.webp",
      "2.webp"
    ],
    desc: [
      "A simple and straightforward platform for sharing and venting out thoughts, inspired by the Indonesian term “Curhat“.",
      "Users can explore a variety of random messages shared by others",
      "Users can share their own thoughts publicly!"
    ],
  },
  {
    id: 8,
    title: "QA Docs in my recent internship",
    liveLink: "",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
    ],
    desc: [
      "Completed over 500 test cases to ensure the software works smoothly.",
      "Involved in the making of a project End User Documentation",
      "Contributed to 5 major projects, showing my adaptability and dedication.",
    ],
  },
  {
    id: 7,
    title: "Seleniumbase Automation Testing Framework for UTY's SIA",
    liveLink: "https://www.youtube.com/watch?v=_xsOoSZFD94",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp",
      "3.webp",
    ],
    desc: [
      "Developed a modular Python Seleniumbase framework for UTY’s SIA web UI testing.",
      "Utilized Page Object Model (POM) and OOP for maintainable scripts; performed API testing with pytest and requests.",
      "Created a demo video to demonstrate the project’s features, respecting privacy constraints.",
    ],
  },
  {
    id: 6,
    title: "Manual Testing for UTY's SIA Website",
    liveLink: "https://docs.google.com/spreadsheets/d/1XgPgqjVYAwJjSdlJ-92yFaTxHmCn4CCYzM2k80MFJpY/edit#gid=577523974",
    gitHub: "",
    img: [
      "1.webp"
    ],
    desc: [
      "Conducted manual testing for UTY's SIA website, a student information system",
      "I reported and verified 1 critical, 5 major, 6 moderate. Due to privacy reasons, I can only share a redacted version of my test report.",
    ],
  },
  {
    id: 5,
    title: "FakeRESTApi Functional Testing Postman Collection",
    liveLink: "https://fakerestapi.azurewebsites.net/index.html",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp"
    ],
    desc: [
      "The “FakeRESTApi Functional Testing Postman Collection” encompasses a full suite of 27 automated tests covering all major HTTP methods (GET, POST, PUT, etc.) for robust API validation.",
      "Tests are designed across 5 distinct endpoints (schemas), ensuring thorough testing of the fakerestapi.web.v1 functionality and response handling",
    ],
  },
  {
    id: 4,
    title: "Simple Discord Chatbot using OpenAI GPT-3.5 Turbo",
    liveLink: "",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp",
      "3.webp"
    ],
    desc: [
      "A Discord chatbot utilizing OpenAI API for natural language interaction.",
      "Operated on 4 discord servers, serving 300+ members.",
      "Removed due to cost-related constraints.",
    ],
  },
  {
    id: 3,
    title: "QR Based Library Authentication System",
    liveLink: "",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp"
    ],
    desc: [
      "A library system enabling student registration and authentication via QR codes, utilizing esp32cam and wificam library.",
      "Features a Python customtkinter GUI and SQLite local database for PC application.",
      "Supports functions like entry logging and book borrowing through single-scan user ID (QR Code)",
    ],
  },
  {
    id: 2,
    title: "Minimalist Arduino Bluetooth RC Car",
    liveLink: "",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp",
    ],
    desc: [
      "A simple remote-controlled car powered by Arduino Uno R3, dual 18560 batteries, and DC motors, with Bluetooth connectivity via HC-06 module.",
      "Features a L289N motor driver, battery holder, jumper cables, and a mini on/off switch.",
    ],
  },
  {
    id: 1,
    title: "Kompiu: An Educational Mobile Augmented Reality Game",
    liveLink: "",
    gitHub: "",
    img: [
      "1.webp",
      "2.webp",
    ],
    desc: [
      "An educational Android application that makes it easy for students and teachers to understand computer hardware with AR.",
      "Offers a friendly user interface and allows virtual exploration of hardware components.",
      "Enriching learning with AR visualization of hardware components in a real environment, created using Unity and Vuforia SDK.",
    ],
  },
];

let otherProjects = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '6.webp'
]


projects.forEach(
  proj => {
    proj.img = proj.img.map(filename => PREFIX_LOCATION + proj.id + '/' + filename);
  }
);

otherProjects = otherProjects.map(filename => PREFIX_LOCATION + 'others/' + filename);

export { projects, otherProjects };