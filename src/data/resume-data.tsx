import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Haris Syafiuddin",
  initials: "",
  location: "madiun, RT 3, Jawa Tengah",
  locationLink: "https://maps.app.goo.gl/EPxSNG2uj9dsTvcw5",
  about:
    "seorang dwifungsi programer.",
  summary: (
    <>
      Seorang Ahli dalam Bidang IT , ketertarikan dengan AI dan Pengembangan Perangkat Lunak dan Perangkat Keras anjay
    </>
  ),
  avatarUrl: "https://res.cloudinary.com/dqxwtvshm/image/upload/v1744174107/b5p9ecm2fpzagh4o5p9u.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "haris@example.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "",
        icon: LinkedInIcon,
      },
      
    ],
  },
  education: [
    {
      school: "UIN Malang ",
      degree: "Bachelor's Degree in informatics engineering",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Kalbe Consumer Health",
      link: "https://film.io",
      badges: ["React", "Next.js", "Golang", "Postgrees"],
      title: "Application Developer",
      logo: ConsultlyLogo,
      start: "Oktober 2024",
      end: "Sekarang",
      description: (
        <>
          Mengimplemetasikan arsitektur teknis untuk proyek PQR, fokus pada optimalisasi sistem produksi dan efisiensi operasional.
          <ul className="list-inside list-disc">
            <li>
              Merancang dan mengimplementasikan sistem digitalisasi proses manufaktur untuk meningkatkan efisiensi dan akurasi produksi
            </li>
            <li>
              Mengembangkan sistem pemantauan real-time untuk analisis performa mesin dan deteksi dini anomali produksi
            </li>
            <li>
              Menerapkan peningkatan keamanan dan integrasi sistem untuk memastikan kepatuhan terhadap standar industri farmasi
            </li>
          </ul>
        </>
      ),
      
    },
    
  ],
  skills: [
    "React/Next.js",
    "Tailwind CSS",
    "Design Systems",
    "Node.js",
    "REST API",
    "System Architecture",
    "Remote Team Collaboratin",
  ],
  projects: [
    {
      title: "E-RELEASE",
      techStack: ["Microservice", "Next.js", "GoLang", "PostgreSQL"],
      description:
        "Membuat project aplikasi untuk kebutuhan Internal Team di SAKA",
      logo: MonitoLogo,
      link: {
        label: "pqr",
        href: "http://pims-dev.sakafarma.com:3000/",
      },
    },
    
  ],
} as const;
