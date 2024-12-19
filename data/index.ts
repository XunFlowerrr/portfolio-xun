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
      "This is showcase of my projects and experiences during my journey as a ",
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
    img: "/portfolio-xun/profile_right.png",
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
  {
    id: 1,
    title: "Imaginify",
    des: "Imaginify is a cutting-edge AI-manipulated image platform designed to empower users with advanced image editing capabilities. Leveraging the latest technologies, Imaginify offers a seamless user experience for transforming images with AI algorithms.",
    img: "/portfolio-xun/ima.png",
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
    img: "/portfolio-xun/yen.png",
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
  {
    id: 3,
    title: "Coin Ranking App",
    des: "CoinRankingApp is an Android application that allows users to track the latest cryptocurrency prices and top performing cryptocurrencies. The app uses the CoinRanking API to fetch cryptocurrency data and displays it in a user-friendly interface.",
    img: "/portfolio-xun/coin.png",
    iconLists: ["/portfolio-xun/android.png", "/portfolio-xun/kotlin.png"],
    link: "https://github.com/XunFlowerrr/CoinRankingApp",
    tags: ["Android", "Kotlin"],
  },
  {
    id: 4,
    title: "Weather Forecast App",
    des: "The Weather Forecast App is a application that provides users with up-to-date weather information for different locations. It allows users to check the current weather conditions as well as the forecast for the upcoming days.",
    img: "/portfolio-xun/fore.png",
    iconLists: ["/portfolio-xun/android.png", "/portfolio-xun/kotlin.png"],
    link: "https://github.com/XunFlowerrr/Weather-Forecast",
    tags: ["Android", "Kotlin"],
  },
  {
    id: 5,
    title: "Beneath the Ruin",
    des: "Beneth the ruin is a game about exploring a ruined city. The game is a 2D game with a top-down perspective. The player will be able to explore the ruin and fight monsters.",
    img: "/portfolio-xun/be_m.png",
    iconLists: ["/portfolio-xun/java.svg"],
    link: "https://github.com/XunFlowerrr/Beneath-the-ruin",
    tags: ["Java", "Game Development"],
  },
  {
    id: 6,
    title: "ClassiPaper",
    des: "ML model that classifies papers into different categories based on their content. ",
    img: "/portfolio-xun/class.png",
    iconLists: ["/portfolio-xun/python.png"],
    link: "https://github.com/Taihenc/ClassiPaper",
    tags: ["AI/ML models", "Python", "Data Science"],
  },
  {
    id: 7,
    title: "YAKINIKU",
    des: "YAKINIKU is a website for learning about yakiniku. This site will provide you with a variety of cow breeds along with valuable information. It includes details about each cut, such as its origin and cooking recommendations. Additionally, we offer a mini-game for yakiniku enthusiasts where you can select a beef cut, read the cooking guide, start grilling, and receive a cooking result to gauge your skills.",
    img: "/portfolio-xun/yaki.png",
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
  {
    id: 8,
    title: "IOT Smart Electric Meter",
    des: "Intregated IoT with electric meter to send data to the cloud and display it on the web.",
    img: "/portfolio-xun/lora.jpeg",
    iconLists: ["/portfolio-xun/arduino.png", "/portfolio-xun/raspberry.png"],
    link: "https://github.com/XunFlowerrr/CPF",
    tags: ["IoT", "Arduino", "Raspberry Pi"],
  },
];

export const projectDetails = [
  {
    id: 1,
    detailedDescription: "Detailed description of Imaginify...",
    images: ["/ima1.png", "/ima2.png"],
    // Add more detailed fields as needed
  },
  {
    id: 2,
    detailedDescription: "Detailed description of Yoom...",
    images: ["/yen1.png", "/yen2.png"],
    // Add more detailed fields as needed
  },
  // ...details for other projects...
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
    quote: "Database",
    icons: ["/portfolio-xun/mongodb.svg", "/portfolio-xun/postgresql.svg"],
    iconsName: ["MongoDB", "PostgreSQL"],
  },
  {
    quote: "Data Science",
    icons: [
      "/portfolio-xun/python.png",
      "/portfolio-xun/pandas.svg",
      "/portfolio-xun/scikit-learn.svg",
    ],
    iconsName: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    quote: "IOT",
    icons: ["/portfolio-xun/arduino.png", "/portfolio-xun/raspberry.png"],
    iconsName: ["Arduino", "Raspberry-Pi"],
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer Intern",
    desc: "Worked on the development of a web application with Throughwave (Thailand) Co.,Ltd. 05/05/24 - 19/07/24",
    className: "md:col-span-2",
    thumbnail: "/portfolio-xun/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/portfolio-xun/git.svg",
    link: "https://github.com/XunFlowerrr",
  },
];
