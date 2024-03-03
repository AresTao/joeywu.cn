import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Joey Wu",
  handle: "@ZhantaoW9357",
  socialProfiles,
  email: "ztwu0725@gmail.com",
  website: "https://joeywu.cn",
  jobTitle: "I'm a coder, creator, solopreneur.",
  company: "",
  availableForWork: false,
  location: {
    city: "Beijing",
    media: "/changcheng.png",
  },
};

const defaultTitle = `${defaultAuthor.name}`;
const defaultDescription = `Hello my friend, I'm ${defaultAuthor.name}. I'm a coder, creator, solopreneur.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/AresTao/joeywu.cn",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support me →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 5,
};

export default siteMetadata;
