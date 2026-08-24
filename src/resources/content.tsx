import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akhil",
  lastName: "Kumar",
  name: `Akhil Kumar`,
  role: "UI/UX DESIGNER",
  avatar: "/images/avatar.jpg",
  email: "akhilkumar.vnos23@gmail.com",
  phone:"+16027052683",
  location: "America/Phoenix", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let&apos;s connect!</>,
  description: <>akhilkumar.vnos23@gmail.com<br></br><br></br>+1 602-705-2683</>,
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
    link: "https://www.behance.net/akhilkumar16",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Phone",
    icon: "phone",
    link: `tel:${person.phone}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I&apos;m Akhil Kumar!</>,
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
      Strategic and data-informed Senior Product Designer with 7+ years of experience leading user-centered design across enterprise SaaS, e-commerce, and AI-driven platforms — architecting scalable design systems, driving WCAG-compliant accessibility, and delivering multi-million-dollar conversion rate impacts.
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
        I&apos;m an accomplished Senior Product Designer with 8+ years of experience delivering end-to-end product design
        solutions that balance business objectives, user needs, and technical feasibility across enterprise applications.
        <br /><br />
        I specialize in establishing scalable design systems, interface standards, and consistent UX strategies for complex
        digital products ‚AI leading Human-Centered Design initiatives that translate strategic business goals into
        actionable, customer-focused design solutions. My work spans the full product lifecycle, from user research,
        journey mapping, and information architecture through high-fidelity prototyping, design governance, and release
        readiness review.
        <br /><br />
        I hold a Master&apos;s in User Experience from Arizona State University and a Bachelor&apos;s in Computer Science
        Engineering, and have a proven track record of mentoring design teams, driving Design Operations (DesignOps),
        and partnering with cross-functional stakeholders ‚AI from product managers to executive leadership ‚AI to ship
        accessible, business-aligned digital experiences.
        <br /><br />
        My experience spans enterprise retail and healthcare platforms, including leading design governance at Kroger,
        shaping product experiences at McKesson, and building research-driven interfaces earlier in my career across
        UI/UX roles in Hyderabad, India. Each engagement fuels my passion for creating digital products that not only
        look good ‚AI but feel right to use.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kroger",
        timeframe: "Sep 2025 ‚AI Present",
        role: "Senior Product Designer",
        achievements: [
          <>Spearheaded Enterprise Product Design initiatives by defining scalable interface standards, establishing consistent design principles, and delivering intuitive digital experiences that aligned with complex business objectives.</>,
          <>Directed Product Vision Planning activities by translating strategic business goals into actionable design initiatives, ensuring product evolution remained aligned with organizational priorities and customer expectations.</>,
          <>Developed Design Leadership by mentoring design teams, reviewing deliverables, establishing quality benchmarks, and promoting best practices that strengthened overall product design maturity.</>,
          <>Optimized organizational design practices through UX Governance, defining review procedures, usability standards, and compliance guidelines that ensured consistent user experiences across enterprise applications.</>,
          <>Established structured design controls using Design Governance, creating approval workflows, documentation standards, and quality checkpoints that improved design consistency throughout project lifecycles.</>,
          <>Managed organizational design processes through Design Operations (DesignOps), optimizing resource planning, workflow efficiency, design asset organization, and collaboration practices across multiple product initiatives.</>,
          <>Designed end-to-end Product Lifecycle Management, coordinating design activities from concept validation through production readiness while maintaining alignment with evolving business requirements.</>,
          <>Implemented strategic Product Portfolio Planning, evaluating product opportunities, balancing design investments, and supporting prioritization decisions that maximized long-term business value.</>,
          <>Maintained organizational growth through Innovation Management, identifying opportunities for emerging design approaches and introducing practical improvements that enhanced product competitiveness.</>,
          <>Defined long-term experience direction using Experience Strategy, establishing measurable design objectives that improved customer satisfaction and strengthened product usability.</>,
          <>Analyzed Human-Centered Design methodologies to ensure every design decision reflected real user needs, behavioral insights, and accessibility considerations throughout the product development process.</>,
          <>Leveraged Systems Thinking to evaluate interconnected product components, identifying design dependencies and recommending structured solutions that improved overall product coherence and maintainability.</>,
          <>Facilitated collaborative planning through Workshop Facilitation, leading structured design discussions, decision-making sessions, and requirement alignment meetings with business stakeholders.</>,
          <>Built executive communications using Executive Stakeholder Management, presenting design recommendations, communicating project progress, and securing strategic approvals for major product initiatives.</>,
          <>Conducted comprehensive Product Benchmarking by evaluating competing products, documenting comparative findings, and recommending enhancements that strengthened product differentiation within the market.</>,
          <>Performed detailed Experience Auditing to assess usability effectiveness, identify experience gaps, and recommend actionable improvements that enhanced user engagement across enterprise applications.</>,
          <>Directed Design Review Management by organizing formal design evaluations, validating deliverables against organizational standards, and ensuring consistent quality before implementation approvals.</>,
          <>Executed Release Readiness Review activities by validating completed design deliverables, confirming documentation accuracy, and ensuring interface quality met established release standards before product deployment.</>,
        ],
        images: [],
      },
      {
        company: "McKesson",
        timeframe: "Oct 2024 ‚AI Aug 2025",
        role: "Product Designer",
        achievements: [
          <>Utilized Figma to create detailed product interface designs, maintaining organized design files, reusable components, and scalable layouts that supported efficient design collaboration and future enhancements.</>,
          <>Produced interactive product experiences using Framer, demonstrating realistic user interactions and interface behaviors that enabled effective design reviews and stakeholder evaluations.</>,
          <>Created advanced interaction models through Origami Studio, developing motion-rich prototypes that accurately represented intended product functionality before implementation.</>,
          <>Built browser-based interface demonstrations with Webflow, transforming approved product designs into responsive visual prototypes for functional validation and presentation purposes.</>,
          <>Prepared professional product presentations using Adobe InDesign, organizing design concepts, product documentation, and visual assets into structured layouts for business reviews.</>,
          <>Maintained design documentation with Adobe Acrobat Pro, reviewing annotated specifications, managing document revisions, and distributing finalized product design deliverables.</>,
          <>Developed collaborative planning sessions through Miro, creating visual workspaces that captured product ideas, workflows, and structured design discussions for project teams.</>,
          <>Implemented process flows using Lucidchart, illustrating product workflows, decision points, and operational sequences that improved understanding of feature functionality.</>,
          <>Managed version-controlled design assets within Abstract, tracking design revisions, reviewing updates, and maintaining consistent product design history across project iterations.</>,
          <>Designed detailed process diagrams using BPMN, documenting business activities and operational workflows to improve clarity during product planning and functional discussions.</>,
          <>Obtained Value Proposition Canvas to define customer needs, product benefits, and value drivers that strengthened feature planning and product positioning activities.</>,
          <>Prepared comprehensive Business Model Canvas documentation, outlining business objectives, customer segments, value propositions, and operational considerations supporting product initiatives.</>,
          <>Established organized Feature Mapping documentation by categorizing product capabilities into logical functional groups that simplified requirement analysis and release planning.</>,
          <>Optimized completed interfaces through Accessibility Review, verifying compliance with accessibility guidelines and identifying improvements that enhanced usability for diverse user groups.</>,
          <>Standardized product visuals by maintaining Visual Consistency across screens, ensuring uniform application of spacing, alignment, interface elements, and design conventions.</>,
          <>Conducted structured Design Critique sessions by evaluating product interfaces, documenting constructive observations, and recommending practical improvements that enhanced overall design quality.</>,
        ],
        images: [],
      },
      {
        company: "On Device IT Solutions",
        timeframe: "Aug 2020 ‚AI Nov 2023",
        role: "UI/UX Designer",
        achievements: [
          <>Conducted comprehensive User Research activities by gathering user feedback, observing behavioral patterns, and documenting usability findings to establish user-centered design requirements for digital products.</>,
          <>Developed detailed User Personas representing key audience segments, capturing user goals, motivations, behaviors, and pain points to guide design decisions throughout the product lifecycle.</>,
          <>Managed complete application navigation using User Flows, defining logical task sequences and decision paths that streamlined user interactions and minimized unnecessary navigation complexity.</>,
          <>Prepared visual Journey Mapping documentation to illustrate end-to-end customer experiences, identifying interaction stages and opportunities for improving overall user satisfaction.</>,
          <>Facilitated Card Sorting exercises with representative users to organize application content into intuitive categories that improved navigation structures and information discoverability.</>,
          <>Performed Tree Testing sessions to evaluate navigation effectiveness, measuring users&apos; ability to locate information efficiently and refining content hierarchies based on observed results.</>,
          <>Executed structured Heuristic Evaluation assessments by reviewing interface designs against established usability principles and documenting recommendations for improving consistency and user experience.</>,
          <>Implemented Cognitive Walkthrough methodology to examine task completion processes, identifying usability obstacles and validating interface effectiveness from the perspective of first-time users.</>,
          <>Coordinated formal Usability Testing sessions by preparing test scenarios, observing participant interactions, recording usability issues, and presenting actionable findings for design enhancements.</>,
          <>Created interactive demonstrations using Proto.io, developing realistic interface behaviors that enabled stakeholders to evaluate user interactions before implementation activities began.</>,
          <>Produced advanced interface animations with Principle, illustrating transitions, micro-interactions, and screen behaviors that effectively communicated intended user experiences during design reviews.</>,
          <>Utilized Sketch to create organized design artboards, reusable interface assets, and detailed screen layouts that maintained consistency across multiple application modules.</>,
          <>Designed complete interface requirements through Design Documentation, preparing screen specifications, annotations, and interaction guidelines that supported accurate implementation by development teams.</>,
          <>Evaluated digital products by performing comprehensive UX Auditing, identifying usability gaps, interface inconsistencies, and improvement opportunities to enhance overall user experience quality.</>,
        ],
        images: [],
      },
      {
        company: "DevRabbit IT Solutions",
        timeframe: "Jun 2017 ‚AI Jul 2020",
        role: "UI Designer",
        achievements: [
          <>Designed intuitive web user interfaces using Adobe Photoshop, creating pixel-perfect page layouts, visual elements, and interface components that aligned with branding standards and enhanced overall user engagement.</>,
          <>Created high-fidelity application mockups through Adobe Illustrator, developing scalable icons, vector graphics, and interface assets that supported consistent visual communication across digital platforms.</>,
          <>Produced interactive screen prototypes with Axure RP, demonstrating page navigation, user interactions, and functional workflows to facilitate stakeholder reviews before development activities commenced.</>,
          <>Applied Color Theory principles to establish cohesive interface color schemes, emphasizing visual hierarchy, usability, and brand consistency across all user-facing screens.</>,
          <>Developed low-fidelity wireframes using Balsamiq Mockups, translating business requirements into structured interface layouts that improved design discussions and accelerated approval cycles.</>,
          <>Built responsive web pages utilizing HTML and CSS, ensuring semantic page structure, clean markup, and compatibility across multiple browsers while maintaining accessibility standards.</>,
          <>Enhanced client-side interactivity by developing dynamic interface behaviors with JavaScript, improving form validation, navigation responsiveness, and overall usability without affecting application performance.</>,
          <>Customized interactive web elements using jQuery, developing menus, image sliders, modal dialogs, and user interface effects that provided smooth and engaging user experiences.</>,
          <>Evaluated interface compatibility through Cross-Browser Compatibility testing, identifying rendering inconsistencies across major browsers and implementing corrective design adjustments for uniform user experiences.</>,
          <>Performed interface sketching and layout validation with Microsoft Visio, documenting screen structures, navigation flows, and page relationships to support clear communication between design and development teams.</>,
          <>Optimized digital interface graphics using Image Optimization techniques, reducing file sizes while maintaining visual quality to improve page loading performance and overall website responsiveness.</>,
          <>Maintained reusable design resources within Adobe Dreamweaver, organizing project files, updating web templates, and managing front-end assets to support efficient interface development and ongoing maintenance.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: false, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Arizona State University, Tempe, Arizona",
        description: <>Master&apos;s in User Experience &nbsp;·&nbsp; Jan 2024 – Dec 2025</>,
      },
      {
        name: "Chalapathi Institute of Engineering & Technology, Guntur, India",
        description: <>Bachelor&apos;s in Computer Science & Engineering &nbsp;·&nbsp; Oct 2013 – Apr 2017</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Product Strategy & Design",
        description: (
          <>End-to-End Product Design, User Research (Qualitative & Quantitative), Wireframing, High-Fidelity Prototyping, Information Architecture, Service Blueprints, Persona Development, Customer Journey Mapping, Interaction Design, Growth Design, Mobile & Responsive Web Design.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "UX Design",
        description: (
          <>UX Audits, Conversational Interfaces, AI-Driven UX, Data Visualization, Enterprise SaaS UX, User Personas, Site Mapping, Motion Design, Empathy Mapping, Typography, Color Theory, Use Cases, Agile UX.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Specialized Methodologies",
        description: (
          <>Component Governance, Figma Variables & Tokenization, Design Thinking, Usability Testing, Heuristic Evaluation, Accessibility Testing (WCAG 2.1/2.2 AA Compliance), A/B Testing & Experimentation, Motion & Micro-interactions.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Design & Collaboration Tools",
        description: (
          <>Figma, ProtoPie, Sketch, Miro, Adobe Creative Suite (Illustrator, Photoshop, XD, InDesign, After Effects), InVision, Lottie, Framer, Balsamiq, Notion, Jira, Confluence.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Product & Analytics",
        description: (
          <>Google Analytics, Amplitude, Hotjar, CMS Platforms (WordPress, Adobe Experience Manager/AEM), Slack.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Technical Literacy",
        description: (
          <>Front-End Layout (HTML5, CSS3, JavaScript ES6), Flexbox/Grid Architecture, Resilient Responsive Breakpoints.</>
        ),
        tags: [],
        images: [],
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
      src: "/images/gallery/gallery00001.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00002.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00003.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00005.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00006.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00007.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00008.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00009.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00010.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00011.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00012.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00013.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00014.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
