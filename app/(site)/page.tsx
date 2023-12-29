import Image from "next/image";
import Link from "next/link";
import { allPages, allPosts } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { sortByDate } from "@/lib/utils";
import { HeroImage } from "@/components/hero-image";
import { HeroMinimal } from "@/components/hero-minimal";
import { HeroSimple } from "@/components/hero-simple";
import { HeroVideo } from "@/components/hero-video";
import { Sidebar } from "@/components/home-sidebar";
import { Mdx } from "@/components/mdx";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import PostPreview from "@/components/post-preview";

async function getAboutPage() {
  const aboutPage = allPages.find((page) => page.slug === "about");

  if (!aboutPage) {
    null;
  }

  return aboutPage;
}

export default async function Home() {
  const aboutPage = await getAboutPage();
  const posts = allPosts
    .filter((post) => post.status === "published")
    .sort(sortByDate)
    .slice(0, siteMetadata.postsOnHomePage);

  return (
    <div className="pb-10">
      <HeroSimple
        title="做技术的生意人 构建解决问题的产品"
        subtitle="要么增长 要么降本 要么提效 要么别做."
      />
      <div className="container mt-12 max-w-6xl">
        <div className="grid grid-cols-1 place-items-start justify-between gap-8 lg:grid-cols-3">
          <div className="col-span-1 w-full lg:col-span-2">
            <div className="prose grid grid-flow-row gap-3">
              {posts.map((post) => (
                <PostPreview key={post._id} post={post} />
              ))}
            </div>
            <Link
              href="/posts"
              className="mt-10 flex items-center py-2 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
            >
              查看所有的博客 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <aside className="w-full">
            <Sidebar />
          </aside>
        </div>
      </div>
      {siteMetadata.newsletterUrl && (
        <NewsletterSubscribe
          title="我也会定期更新关于网络赚钱的思考"
          description="我会持续输出关于技术工具、小生意思路、如何营销、如何低成本启动，来让你更快的了解一个人或者小团队如何在互联网赚钱.
            . 随时可以退订."
          buttonText="发我你的邮箱"
        />
      )}
      {aboutPage && (
        <div className="container max-w-6xl">
          <h2 className="mb-8 font-heading text-4xl font-bold">我是谁</h2>
          <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-3">
            <div className="col-span-1 mx-auto flex flex-col items-center justify-center">
              <div className="group relative left-0 top-0">
                <Image
                  src="/avatar-new.jpeg"
                  alt={defaultAuthor.name}
                  width={400}
                  height={498}
                  quality={2}
                  className="relative left-0 top-0 h-auto w-64 duration-100 ease-linear group-hover:-rotate-1 group-hover:scale-[1.01]"
                />
                <Image
                  src="/avatar-new.jpeg"
                  alt={defaultAuthor.name}
                  width={400}
                  height={498}
                  className="absolute left-0 top-0 h-auto w-64 -rotate-1 duration-100 ease-linear group-hover:rotate-3"
                />
              </div>
              <div className="text-center">
                <h1 className="font-heading text-2xl font-bold">{defaultAuthor.name}</h1>
                <p className="text-muted-foreground">{defaultAuthor.jobTitle}</p>
                <p className="text-muted-foreground">{defaultAuthor.company}</p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <article className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
                <Mdx code={aboutPage.body.code} />
                <Link
                  href="/now"
                  className="mt-10 flex items-center py-2 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
                >
                  看看我现在在做的项目 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
