import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-items";
export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-0 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pathum-danthanarayana-kBY8uhuvnT8-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Haroon Khan
          </h1>

          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance font-bold text-white">
            Welcome to my blog website. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <div className="flex flex-row items-center justify-between">
          <div className="w-1/2">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
              Introduction
            </h2>
            <p className="text-lg mt-7 text-gray-600">
              Welcome to my web development portfolio! I'm Haroon Khan, a passionate web developer with a strong focus on building fast, scalable, and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I'm always looking to improve my skills and stay up-to-date with the latest trends and technologies.
            </p>
          </div>
          <div className="w-72 flex justify-end">
            <img src="/Untitled design.jpg" alt="Haroon Khan" className="w-80 h-96 rounded object-cover" />
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            post.published && (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                />
              </li>
            )
          ))}
        </ul>
      </section>





      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Skills
        </h2>

        <ul className="flex flex-col space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <li>HTML/CSS/JS</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Python</li>
        </ul>

      </section>

    </>
  );
}


