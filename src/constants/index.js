import fortify from "../assets/Projects/fortify.png"
import londinium from "../assets/Projects/londinium.png"

export const githubURL = 'https://github.com/hassan-jsx';
export const linkedInURL =
    'https://www.linkedin.com/in/hassan-qureshi-a71a57234/';
export const XURL = 'https://twitter.com/hassan_codes_';
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and Mongodb. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3.5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js,Typescript, Zustand, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: 'May 2023 - Present',
        role: 'Full Stack Developer',
        company: 'Devkind - Austrailia',
        description: `As a Full Stack Developer at Devkind Australia, I've honed my skills in crafting cohesive solutions. I specialize in optimizing UI, ensuring robust testing, and building scalable applications. My experience includes working with various platforms to deliver top-notch projects.`,
        technologies: [
            'Node.js',
            'Next.js',
            'Cypress',
            'Gadgets',
            'NestJS',
            'Express.js',
            'Redux.js',
            'Tailwind CSS',
            'TypeScript',
            'React.js',
            'User Acceptance Testing',
            'Jest',
            'Shopify Polaris',
            'Supabase',
            'swell.js',
            'Laravel',
            'Docker',
            "Zustand"
        ],
    },
    {
        year: 'July 2021- April 2023',
        role: 'Frontend Developer',
        company: 'British Council - Pakistan',
        description: `During my tenure as a front-end developer at the British Council, I focused on enhancing user experiences using  Next.js, React.js, and Tailwind CSS. Over one and a half years, I refined web applications, ensuring seamless interaction and functionality.`,
        technologies: ['Javascript', 'React.js', 'Next.js', 'TailwindCSS'],
    },
    {
        year: 'March 2020- June 2021',
        role: 'Software Quality Assurance',
        company: 'Knowledge Platform - Pakistan',
        description: `As a Software Quality Assurance Tester at Knowledge Platform, I focused on ensuring the efficiency and reliability of the program. Using tools like Jest and Cypress, alongside technologies such as React, Next.js, and TypeScript, I carried out extensive testing to enhance the overall quality and user experience throughout my tenure.`,
        technologies: [
            'Next',
            'React',
            'Jest',
            'Cypress',
        ],
    },
];

export const PROJECTS = [
    {
        title: ' Londinium Expresso',
        link: 'https://londinium.swell.store/',
        image: londinium,
        description:
            'Designed and implemented a sleek checkout store for Londinium Expresso, enhancing the customer journey in purchasing coffee machines.i worked on Frontend, backend, testing and the Admin dashboard.',
        point: [
            'Executed a visually appealing and user-friendly store design.',
            'Conducted detailed customer journey analysis for process optimization.',
            'integrate ZUSTAND state management for enhanced application performance by 30 percent.',
            'The project resulted in an efficient, secure, and visually pleasing checkout process, contributing to increased customer satisfaction and conversion rates.',
        ],
        technologies: [
            'Next.js',
            'Swell.js',
            'Laravel',
            'Zustand',
            'Radis',
            'MySql',
            'NGrok',
        ],
    },
    {
        title: 'Fortify (Shopify store tracker)',
        image: fortify,
        description:
            'Designed and implemented a Shopify app, Fortify, that triggers notifications based on specified criteria.',
        point: [
            'Added a push notification feature to alert users when conditions such as product additions, deletions, or description updates occur.',
            'implemented a feature to generate a CSV file of all Shopify events and send it to a specified email address.',
            'Set up cron jobs to store events on the Appwrite server.',
            'Implemented webhooks to trigger actions when events are saved to the database.',
            'Optimized resource usage on both the Appwrite and Gadgets servers, resulting in a 50% cost reduction.',
        ],
        technologies: [
            'Shopify',
            'Shopify Polaris',
            'Appwrite',
            'Gadget',
            'Shopify Polaris',
            'Sendgrid',
        ],
    },
    {
        title: 'British Council Digital Library Pakistan website',
        // image: londinium,
        point: [
            'Implemented an online subscription form on the British Council Digital Library South Asia website, allowing library members to sign up and conveniently pay for their yearly membership fee (Frontend).',
            'Introduced features enabling users to easily create accounts, facilitating a seamless process for membership renewal.',
            'Incorporated a user-friendly interface for members to renew books, enhancing the overall user experience.',
            'Provided a functionality to view and manage family members details, offering a comprehensive approach management.',
            'Integrated a secure checkout basket and a reliable payment gateway, streamlining the payment process for memberships and other services.',
        ],
        technologies: [
            'Shopify',
            'Shopify Polaris',
            'Appwrite',
            'Gadget',
            'Shopify Polaris',
            'Sendgrid',
        ],
    },
];

export const CONTACT = {
    address: '159 Church St, Brighton VIC 3186, Australia',
    email: 'hassan.jsx@gmail.com',
};
