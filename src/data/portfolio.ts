export type Project = {
  title: string;
  description: string;
  skills: string[];
  media: string[]; // image urls (placeholders until uploaded)
  codeUrl?: string;
  liveUrl?: string;
  inProgress?: boolean; // ← new field to mark WIP projects
};

// TODO: Replace with your real projects. Add as many as you like.
export const projects: Project[] = [
  {
    title: "Gemini Clone Android",
    description: "A cross-platform AI chat application inspired by Gemini, built with React Native (Expo). It integrates the Gemini API for real-time responses and features a clean architecture using React Context for state and theme management. Includes three dynamic UI themes (Light, Dark, and UwU pink) for enhanced user personalization and experience.",
    skills: ["React Native", "Expo", "TypeScript", "Gemini API", "React Context"],
    media: [
      "/gemini/1.png?portrait",
      "/gemini/2.png?portrait",
      "/gemini/3.png?portrait",
      "/gemini/4.png?portrait",

    ],
    codeUrl: "https://github.com/SafatSadik/gemini_clone",
    // liveUrl: "https://example.com",
  },
  // gemini
  {
    title: "Instagram Clone Android",
    description: "A mobile Instagram clone built for Android, replicating core social media features such as feed browsing, post interactions, and user interface flows. Designed with a focus on smooth navigation, responsive UI, and scalable component-based architecture.",
    skills: ["React Native", "Expo", "TypeScript"],
    media: [
      "/instagram/4.mp4?portrait",
    ],
    // codeUrl: "https://github.com/",
  },
  // instagram
  {
    title: "Multiplayer Drawing Game",
    description: "This is one of my favorite and best projects. I built a real-time multiplayer drawing app where multiple users can draw together on the same canvas instantly. I added a full drawing toolkit including pencil, brush, rectangle, square, circle, fill tool, color picker, and eyedropper. I also implemented pan & zoom controls, undo/redo, image import from gallery, artwork download, custom cursors, and live chat for collaboration.",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Socket.io", "Canvas", "hammer.js", "Color Picker Library"],
    media: [
      "/drawing/1.mp4?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/multiplayer-drawing",
    liveUrl: "https://multiplayer-drawing-l9t4.onrender.com/",
  },
  // drawing
  {
    title: "All Video Downloader Desktop App",
    description: "Cross-platform Electron app with React (TypeScript), Vite, and Tailwind CSS for downloading videos via yt-dlp + FFmpeg, featuring dark/light mode, a custom Chrome extension with background script integration, real-time download table, and no third-party downloader APIs. , it is made by sadik shafat",
    skills: ["Electron.js", "React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "yt-dlp", "FFmpeg", "Chrome Extensions", "Desktop App Development"],
    media: [
      "/allvideodownloader/1.mp4?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/All-video-downloader-desktop-app",
    liveUrl: "https://github.com/SafatSadik/All-video-downloader-desktop-app/releases/tag/v0.0.1",
  },
  // vdo downloader
  {
    title: "Dashboard for E-commerce Analytics",
    description: "I built an e-commerce analytics dashboard where I visualize sales, users, and product performance in real time. It helps track key metrics, analyze trends, and understand business growth through interactive charts and clean UI.",
    skills: ["HTML", "CSS", "JavaScript", "Chart.js"],
    media: [
      "/dashboard/1.png?landscape",
      "/dashboard/2.png?landscape",
      "/dashboard/3.png?landscape",
      "/dashboard/4.png?landscape",
      "/dashboard/5.png?landscape",
      "/dashboard/6.png?landscape",
      "/dashboard/7.png?landscape",
      "/dashboard/8.png?landscape",
      "/dashboard/9.png?landscape",
      "/dashboard/10.png?landscape",
      "/dashboard/11.png?landscape",
    ],
    codeUrl: "https://github.com/",
  },
  // dashboard
  {
    title: "Social Media Management Desktop App",
    description: "I built a cross-platform social media management desktop app where I integrated multiple APIs like TikTok, Meta, Google, and X into a single dashboard. It lets me connect all my social accounts in one place, upload posts across platforms with one click, and also download content directly from the web for reuse and management.",
    skills: ["Electron.js", "React", "TypeScript", "Vite", "Tailwind CSS", "api integration", "tiktok api", "meta api", "google api", "Node.js", "yt-dlp", "FFmpeg", "Chrome Extensions", "Desktop App Development"],
    media: [

    ],
    codeUrl: "https://github.com/SafatSadik/social-media-management",
    inProgress: true,
  },
  // social media management
  {
    title: "Chrome Extension for Quick Downloads",
    description: "I built a Chrome extension for my video downloader system that connects directly with my Electron desktop app. It detects video URLs from web pages and sends them to the background script, enabling instant one-click downloading through my yt-dlp + FFmpeg powered backend without using any third-party APIs.",
    skills: ["HTML", "CSS", "JavaScript", "Chrome Extension "],
    media: [
      "/downloader chrome extension/1.png?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/All-video-downloader-desktop-app/tree/chrome-extension",
  },
  // chrome extension
  {
    title: "Tic Tac Toe Multiplayer Game",
    description: "I built a multiplayer Tic Tac Toe web app using raw JavaScript, PHP, and MySQL without using sockets. The game supports real-time turn-based multiplayer by syncing moves through the backend database, handling game state, player turns, and match updates efficiently using server-side logic.",
    skills: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "AJAX", "Backend Logic"],
    media: [
      "/tictactoe/1.mp4?landscape",

    ],
    codeUrl: "https://github.com/SafatSadik/tic-tac-toe",
  },
  // tictactoe
  {
    title: "Network Capture and Analysis Dashboard Tool",
    description: "I built NetCapture Dashboard as a local network monitoring tool using Python and mitmproxy. It runs a proxy server that captures image/media requests from web traffic in real time and organizes them into a clean Flask dashboard. I use it to inspect how web content is loaded and to analyze network-level image requests and responses in a structured way.",
    skills: ["Python", "Flask", "mitmproxy", "HTML", "Network Programming", "Proxy Servers", "Web Traffic Analysis"],
    media: [
      "/saveimg/1.mp4?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/network-image-capture-dashboard",
  },
  // network capture
  {
    title: "Airport City Game with World Map",
    description: "I built a flight management simulation game inspired by Fly Corp using D3.js. In this game, I connect cities through routes, transport passengers, and manage income to expand my network. I handle increasing demand in real time by optimizing flight paths and scaling my global airline system as the game progresses.",
    skills: ["D3.js", "JavaScript", "HTML", "CSS", "Game Development", "Data Visualization", "Simulation Logic"],
    media: [
      "/airport city/1.mp4?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/airport-city",
  },
  // airport city
  {
    title: "Google image Scraper",
    description: "I built a Python-based Google Image Scraper using Selenium to automate image search and extract image URLs from Google Images. It helps me collect and download images programmatically by simulating browser actions and handling dynamic content loading.",
    skills: ["Python", "Selenium", "Web Scraping", "BeautifulSoup"],
    media: [
    ],
    codeUrl: "https://github.com/",
  },
  // google image scraper
  {
    title: "News Scraper with GUI",
    description: "I built a news scraper with a graphical user interface using Python. It allows me to search and extract news articles from various sources, providing a clean and intuitive way to browse and save news content.",
    skills: ["Python", "Web Scraping"],
    media: [
      "/news scraper/1.jpg?landscape",
      "/news scraper/2.png?landscape",
      "/news scraper/3.png?landscape",
      "/news scraper/4.png?landscape",
    ],
    codeUrl: "https://github.com/",
  },
  // news scraper
  {
    title: "Snake Game",
    description: "I built a classic Snake game using HTML, CSS, and JavaScript. The game features smooth controls, score tracking, and increasing difficulty as the player progresses. with Mobile-friendly touch controls for an enjoyable gaming experience on both desktop and mobile devices.",
    skills: ["HTML", "CSS", "JavaScript"],
    media: [
      "/snake game/1.png?portrait",
      "/snake game/2.png?portrait",
      "/snake game/3.mp4?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/snake_game",
  },
  // snake game
  {
    title: "E-Commerce Website",
    description: "I built a basic e-commerce website using HTML, CSS, JavaScript, and jQuery with a simple admin dashboard to manage products and view basic data.",
    skills: ["HTML", "CSS", "JavaScript", "php", "mysql"],
    media: [
      "/e commerce/1.png?landscape",
      "/e commerce/2.png?landscape",
      "/e commerce/3.png?landscape",
      "/e commerce/4.png?landscape",
      "/e commerce/5.png?landscape",
      "/e commerce/6.png?landscape",
      "/e commerce/7.png?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/e-commerce-with-dashboard",
  },
  // e-commerce
  {
    title: "Image Editor ",
    description: "I built a simple browser-based image editor using HTML, CSS, and JavaScript. It allows me to upload images and perform basic editing like cropping, resizing, rotating, and applying simple adjustments directly in the browser without any external libraries or backend.",
    skills: ["HTML", "CSS", "JavaScript"],
    media: [
      "/image editor/1.mp4?landscape",
      "/image editor/2.mp4?portrait",
    ],
    codeUrl: "https://github.com/SafatSadik/image-editor",
  },
  // image editor
  {
    title: "Chat Application",
    description: "I built a basic chat app using PHP and MySQL where users can send messages in real time, with simple support for GIFs using the Giphy API.",
    skills: ["Html", "CSS", "JavaScript", "Php", "MySQL", "giphy api"],
    media: [
      "/chat app/1.png?landscape",
      "/chat app/2.png?landscape",
      "/chat app/3.png?landscape",
      "/chat app/4.png?landscape",
      "/chat app/5.png?landscape",
      "/chat app/6.png?landscape",
      "/chat app/7.png?landscape",
      "/chat app/8.png?landscape",
      "/chat app/9.png?landscape",
      "/chat app/10.png?landscape",
    ],
    codeUrl: "https://github.com/SafatSadik/chat-app",
  },
  // chat app
  {
    title: "Password Generator",
    description: "I built a simple password generator that creates random secure passwords based on selected length and character rules using JavaScript.",
    skills: ["JavaScript", "HTML", "CSS"],
    media: [
      "/password gen/1.jpg?landscape",
      "/password gen/2.jpg?landscape",
    ],
    codeUrl: "https://github.com/",
  },
  // password gen
  {
    title: "2-Wheel Wireless Robotic Car",
    description: "I built a Bluetooth-controlled 2-wheel robotic car using Arduino Nano and a motor driver module. I connected the hardware components, handled the movement logic, and controlled the car wirelessly through a mobile app using Bluetooth communication.",
    skills: ["Arduino Nano", "C++", "Bluetooth", "Embedded Systems", "Motor Driver", "Electronics", "Robotics"],
    media: [
      "/arduino car/1.mp4?landscape",
    ],
  },
  // arduino car

];
