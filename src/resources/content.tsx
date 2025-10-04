import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akhil",
  lastName: "Kumar",
  name: `Akhil Kumar`,
  role: "UI/UX DESIGNER",
  avatar: "/images/avatar.jpg",
  email: "akhilkumar.vnos23@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akhil-kumar-97a579146/",
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Akhil Kumar!</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      A UI/UX Designer with a strong focus on mobile app design and interactive prototypes. I leverage user research and Design Thinking to create aesthetically pleasing and user-friendly digital experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a UI/UX Designer with a focus on mobile app design and interactive prototypes. I have experience creating aesthetically pleasing and user-friendly interfaces, as well as developing and maintaining 
        design systems.I am looking to leverage my skills to create engaging digital assets and contribute to an innovative team.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance UX Designer (Mobile App Design)",
        timeframe: "Oct 2022 - Oct 2023",
        role: "Freelance UX Designer (Mobile App Design)",
        achievements: [
          <>
            Conducted user interviews, surveys, and usability testing to gather insights and refine mobile app experiences.
          </>,
          <>
            Designed wireframes and interactive prototypes using Figma to visualize user journeys and app interfaces.
          </>,
          <>
          Developed aesthetically pleasing and user-friendly interfaces while aligning with branding and accessibility guidelines.
          </>,
          <>
          Presented designs to clients, gathered feedback, and iterated based on user testing results.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "OnDevice IT Solutions",
        timeframe: "Jul 2021 – Oct 2022",
        role: "UI/UX Designer",
        achievements: [
          <>
            Led UX research initiatives by conducting usability tests and analyzing feedback to optimize web applications.
          </>,
          <>
            Created wireframes, prototypes, and final UI designs for enterprise-level applications.
          </>,
          <>
            Maintained design systems and UI style guides to uphold brand identity and improve user experience.
          </>,
          <>
            Collaborated with cross-functional teams to deliver user-centered solutions that met business goals.
          </>,
          <>Advocated for Design Thinking methodology by introducing user-centered design practices to cross-functional teams.</>,
          <>Worked closely with developers, product managers, and stakeholders to ensure design feasibility and consistency.</>
        ],
        images: [],
      },
      {
        company: "DevRabbit IT Solutions",
        timeframe: "Oct 2020 – Jun 2021",
        role: "Trainee UI/UX Designer",
        achievements: [
          <>
            Supported in creating wireframes, mockups, and basic prototypes using design tools.
          </>,
          <>
            Assisted in conducting user research, usability testing, and analyzing user feedback.
          </>,
          <>
            Helped maintain design documentation, style guides, and organize design assets
          </>,
          <>
            Collaborated with senior designers and developers to understand project requirements and receive feedback.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Arizona State University, Tempe, AZ.",
        description: <>Masters, User Experience</>,
      },
      {
        name: "Chalapathi Institute of Engineering & Technology, Lam, Guntur.",
        description: <>B.Tech, Computer Science & Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with unnatural speed.</>
        ),
        tags: [
          // {
          //   name: "Figma",
          //   icon: "figma",
          // },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Sketch",
        description: (
          <>Able to prototype in Sketch with unnatural speed.</>
        ),
        tags: [
          // {
          //   name: "Sketch",
          //   icon: "sketch",
          // },
          // {
          //   name: "Next.js",
          //   icon: "nextjs",
          // },
          // {
          //   name: "Supabase",
          //   icon: "supabase",
          // },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },  
      {
        title: "Canva",
        description: (
          <>Able to prototype in Canva with unnatural speed.</>
        ),
        tags: [
          // {
          //   name: "Canva",
          //   icon: "canva",
          // },
          // {
          //   name: "Next.js",
          //   icon: "nextjs",
          // },
          // {
          //   name: "Supabase",
          //   icon: "supabase",
          // },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
