import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Essays, guides, smol tips & tricks, and other written content.",
  },
  {
    title: "Speaking",
    href: "/speaking",
    description: "My previous (and current) talks, workshops, and other speaking engagements.",
  },
  {
    title: "Videos",
    href: defaultAuthor.socialProfiles.find((platform) => platform.name === "youtube")?.link as string,
    description: "Videos about web development, solopreneurship, and other related topics.",
  },
  {
    title: "Newsletter",
    href: siteMetadata.newsletterUrl as string,
    description: "Aka Developreneur",
  },
  {
    title: "Teaching",
    href: "/teaching",
    description: "Mentoring, courses, tutorials, and other educational content.",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Contents",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  /*{
    title: "Uses",
    href: "/uses",
  },*/
  {
    title: "About",
    href: "/now",
  },
];
