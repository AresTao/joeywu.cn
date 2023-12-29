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
  jobTitle: "做技术的生意人",
  company: "要么增长 要么降本 要么提效 要么别做",
  availableForWork: false,
  location: {
    city: "北京",
    media: "/changcheng.png",
  },
};

const defaultTitle = `${defaultAuthor.name}`;
const defaultDescription = `你好，我是 ${defaultAuthor.name}. 做技术的生意人，构建解决问题的产品，提供高价值`;

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
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
