export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech-Stack", link: "#Tech-Stack" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Computer engineering student.",
    description:
      "This is a showcase of my projects and experiences during my journey as a ",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end ",
    img: "/portfolio-xun/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tanit \nYodsirawong",
    description: "Chulalongkorn University",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // --- Web Application ---
  {
    id: 1,
    title: "Imaginify",
    des: "Imaginify is a cutting-edge AI-manipulated image platform designed to empower users with advanced image editing capabilities. Leveraging the latest technologies, Imaginify offers a seamless user experience for transforming images with AI algorithms.",
    longDescription:
      "Imaginify is a cutting-edge AI-manipulated image platform designed to empower users with advanced image editing capabilities. Leveraging the latest technologies, Imaginify offers a seamless user experience for transforming images with AI algorithms. It includes features like background removal, image restoration, and generative fill.",
    img: "/portfolio-xun/ima.png",
    images: ["/portfolio-xun/ima.png"],
    iconLists: [
      "/portfolio-xun/next.svg",
      "/portfolio-xun/tail.svg",
      "/portfolio-xun/ts.svg",
      "/portfolio-xun/c.svg",
      "/portfolio-xun/cloud.svg",
    ],
    link: "https://github.com/XunFlowerrr/Imaginify",
    tags: ["React", "Tailwind", "Typescript", "Next.js", "Web Development"],
  },
  {
    id: 2,
    title: "YENKAR",
    des: "YENKAR is a web-application that allows users rent and lend cars. It is a full-stack application that uses the latest technologies to provide a seamless user experience.",
    longDescription:
      "YENKAR is a web-application that allows users rent and lend cars. It is a full-stack application that uses the latest technologies to provide a seamless user experience. Users can list their cars for rent or browse available cars to rent.",
    img: "/portfolio-xun/yen.png",
    images: ["/portfolio-xun/yen.png"],
    iconLists: [
      "/portfolio-xun/next.svg",
      "/portfolio-xun/nodejs-icon.svg",
      "/portfolio-xun/tail.svg",
      "/portfolio-xun/ts.svg",
      "/portfolio-xun/cloud.svg",
    ],
    link: "https://github.com/2110503TACEDT66/cedt-se-project-yenkar",
    tags: [
      "Next.js",
      "Tailwind",
      "Typescript",
      "Node.js",
      "Web Development",
      "React",
    ],
  },

  // --- Mobile Application ---
  {
    id: 3,
    title: "Coin Ranking App",
    des: "CoinRankingApp is an Android application that allows users to track the latest cryptocurrency prices and top performing cryptocurrencies. The app uses the CoinRanking API to fetch cryptocurrency data and displays it in a user-friendly interface.",
    longDescription:
      "CoinRankingApp is an Android application that allows users to track the latest cryptocurrency prices and top performing cryptocurrencies. The app uses the CoinRanking API to fetch cryptocurrency data and displays it in a user-friendly interface. Users can view detailed information about each cryptocurrency.",
    img: "/portfolio-xun/coin.png",
    images: ["/portfolio-xun/coin.png"],
    iconLists: ["/portfolio-xun/android.png", "/portfolio-xun/kotlin.png"],
    link: "https://github.com/XunFlowerrr/CoinRankingApp",
    tags: ["Android", "Kotlin"],
  },
  {
    id: 4,
    title: "Weather Forecast App",
    des: "The Weather Forecast App is an application that provides users with up-to-date weather information for different locations. It allows users to check the current weather conditions as well as the forecast for the upcoming days.",
    longDescription:
      "The Weather Forecast App is an application that provides users with up-to-date weather information for different locations. It allows users to check the current weather conditions as well as the forecast for the upcoming days. It features a clean and intuitive user interface.",
    img: "/portfolio-xun/fore.png",
    images: ["/portfolio-xun/fore.png"],
    iconLists: ["/portfolio-xun/android.png", "/portfolio-xun/kotlin.png"],
    link: "https://github.com/XunFlowerrr/Weather-Forecast",
    tags: ["Android", "Kotlin"],
  },

  // --- Data Science / AI ---
  {
    id: 6,
    title: "Tiny Stable Diffusion",
    des: "A lightweight Stable Diffusion U-Net model (~75M parameters) trained from scratch on the COCO dataset to explore efficient image generation.",
    longDescription:
      "This project focuses on training a relatively small Stable Diffusion U-Net model (~75M parameters) from scratch using the COCO 2014 dataset. It leverages pre-trained VAE and CLIP components and utilizes mixed-precision training with 'accelerate'. The project includes utilities for visualizing checkpoint evolution and generating prompt grids to analyze the model's learning progress.",
    img: "/portfolio-xun/tiny-stable-01.png",
    images: [
      "/portfolio-xun/tiny-stable-01.png",
      "/portfolio-xun/tiny-stable-02.png",
      "/portfolio-xun/tiny-stable-03.png",
      "/portfolio-xun/tiny-stable-04.png",
      "/portfolio-xun/tiny-stable-05.png",
    ],
    iconLists: [
      "/portfolio-xun/python.png",
      "/portfolio-xun/pytorch-svgrepo-com.svg",
    ],
    link: "https://github.com/XunFlowerrr/image-gen-tiny-stable-diffusion",
    tags: ["AI/ML models", "Python", "Data Science", "PyTorch"],
  },

  // --- Game Development ---
  {
    id: 5,
    title: "Beneath the Ruin",
    des: "Beneath the ruin is a game about exploring a ruined city. The game is a 2D game with a top-down perspective. The player will be able to explore the ruin and fight monsters.",
    longDescription:
      "Beneath the ruin is a game about exploring a ruined city. The game is a 2D game with a top-down perspective. The player will be able to explore the ruin and fight monsters. It features various levels, enemies, and items to collect.",
    img: "/portfolio-xun/be_m.png",
    images: ["/portfolio-xun/be_m.png", "/portfolio-xun/be_i.png"],
    iconLists: ["/portfolio-xun/java.svg"],
    link: "https://github.com/XunFlowerrr/Beneath-the-ruin",
    tags: ["Java", "Game Development"],
  },
  {
    id: 9,
    title: "Mecha Fight",
    des: "Mecha Fight is a 3D action game development using OpenGL and C++.",
    longDescription:
      "Mecha Fight is a 3D action game development, Designed to demonstrate the fundamentals of computer graphics, this project utilizes Basic OpenGL to render an immersive combat environment. Players pilot a high-tech Mecha unit, tasked with defending humanity against an onslaught of hostile Alien Mechs.",
    img: "/portfolio-xun/mecha-fight-01.png",
    images: [
      "/portfolio-xun/mecha-fight-01.png",
      "/portfolio-xun/mecha-fight-02.jpg",
      "/portfolio-xun/mecha-fight-03.jpg",
    ],
    iconLists: ["/portfolio-xun/cpp.svg", "/portfolio-xun/opengl.svg"],
    link: "https://github.com/XunFlowerrr/Mecha-Fight",
    tags: ["C++", "OpenGL", "Game Development"],
  },

  // --- IoT (Internet of Things) ---
  {
    id: 10,
    title: "CoreLock IoT",
    des: "Smart safety box featuring multi-sensor intrusion detection, Face Recognition unlocking, and real-time monitoring via a cloud dashboard.",
    longDescription:
      "CoreLock transforms passive security into a proactive protection system. It utilizes a multi-sensor array (Gyroscope, Magnetic, Hit sensors) to detect tampering and movement. The system offers dual-access via Face Recognition and manual Joystick code. Integrated with AWS and MQTT, it streams data to a Next.js dashboard, allowing users to view real-time 3D orientation, sensor trends, and intrusion alerts instantly.",
    img: "/portfolio-xun/core-lock-01.jpeg",
    images: [
      "/portfolio-xun/core-lock-01.jpeg",
      "/portfolio-xun/core-lock-02.png",
      "/portfolio-xun/core-lock-03.png",
    ],
    iconLists: [
      "/portfolio-xun/next.svg",
      "/portfolio-xun/raspberry.png",
      "/portfolio-xun/nodejs-icon.svg",
      "/portfolio-xun/dock.svg",
    ],
    link: "https://github.com/XunFlowerrr/safebox",
    tags: ["IoT", "Embedded System", "Next.js", "MQTT", "AWS"],
  },
  {
    id: 8,
    title: "IOT Smart Electric Meter",
    des: "Integrated IoT with electric meter to send data to the cloud and display it on the web.",
    longDescription:
      "Integrated IoT with electric meter to send data to the cloud and display it on the web. It allows users to monitor their electricity consumption in real-time and view historical data.",
    img: "/portfolio-xun/lora.jpeg",
    images: ["/portfolio-xun/lora.jpeg"],
    iconLists: ["/portfolio-xun/arduino.png", "/portfolio-xun/raspberry.png"],
    link: "https://github.com/XunFlowerrr/CPF",
    tags: ["IoT", "Arduino", "Raspberry Pi"],
  },

  // --- Design ---
  {
    id: 7,
    title: "YAKINIKU",
    des: "YAKINIKU is a website for learning about yakiniku. This site will provide you with a variety of cow breeds along with valuable information. It includes details about each cut, such as its origin and cooking recommendations. Additionally, we offer a mini-game for yakiniku enthusiasts where you can select a beef cut, read the cooking guide, start grilling, and receive a cooking result to gauge your skills.",
    longDescription:
      "YAKINIKU is a website for learning about yakiniku. This site will provide you with a variety of cow breeds along with valuable information. It includes details about each cut, such as its origin and cooking recommendations. Additionally, we offer a mini-game for yakiniku enthusiasts where you can select a beef cut, read the cooking guide, start grilling, and receive a cooking result to gauge your skills.",
    img: "/portfolio-xun/yaki.png",
    images: ["/portfolio-xun/yaki.png"],
    iconLists: [
      "/portfolio-xun/javascript.png",
      "/portfolio-xun/html.png",
      "/portfolio-xun/css.png",
      "/portfolio-xun/illustrator.png",
      "/portfolio-xun/figma.png",
    ],
    link: "https://github.com/Taihenc/YAKINIKU",
    tags: ["Web Development", "Design"],
  },
];

export const testimonials = [
  {
    quote: "Front-end",
    icons: [
      "/portfolio-xun/re.svg",
      "/portfolio-xun/next.svg",
      "/portfolio-xun/tail.svg",
      "/portfolio-xun/ts.svg",
      "/portfolio-xun/javascript.png",
      "/portfolio-xun/html.png",
      "/portfolio-xun/css.png",
      "/portfolio-xun/shad.svg",
    ],
    iconsName: [
      "React",
      "Next.js",
      "Tailwind",
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
      "Shadcn-ui",
    ],
  },
  {
    quote: "Back-end",
    icons: ["/portfolio-xun/nodejs-icon.svg", "/portfolio-xun/Express.svg"],
    iconsName: ["NodeJS", "Express"],
  },
  {
    quote: "Android",
    icons: ["/portfolio-xun/android.png", "/portfolio-xun/kotlin.png"],
    iconsName: ["Android", "Kotlin"],
  },
  {
    quote: "Data Science",
    icons: [
      "/portfolio-xun/python.png",
      "/portfolio-xun/pandas.svg",
      "/portfolio-xun/scikit-learn.svg",
      "/portfolio-xun/pytorch-svgrepo-com.svg",
    ],
    iconsName: ["Python", "Pandas", "Scikit-learn", "Pytorch"],
  },
  {
    quote: "IOT",
    icons: ["/portfolio-xun/arduino.png", "/portfolio-xun/raspberry.png"],
    iconsName: ["Arduino", "Raspberry-Pi"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer Intern At Throughwave",
    desc: "Worked on the development of a web application with Throughwave (Thailand) Co.,Ltd. 05/05/2024 - 19/07/2024",
    className: "md:col-span-2",
    thumbnail: "/portfolio-xun/Throughwave.jpeg",
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern At Builk One Group",
    desc: "Worked on the development of a CRM system with BUILK ONE GROUP COMPANY LIMITED. 13/05/2025 - 25/07/2025",
    className: "md:col-span-2",
    thumbnail: "/portfolio-xun/builk.jpeg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/portfolio-xun/git.svg",
    link: "https://github.com/XunFlowerrr",
  },
];
