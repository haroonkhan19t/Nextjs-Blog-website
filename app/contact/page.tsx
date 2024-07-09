import ContactForm from "@/components/contact-form";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in Touch",
};

export default async function ContactPage(){
  return (
  
  <div>
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-0 lg:py-32 bg-cover bg-center bg-no-repeat">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Get in Touch Today 
          </h1>

          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance font-bold text-white">
            Welcome to my blog website. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/about"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Know more about me 
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              Linkhdin
            </Link>
          </div>
        </div>
      </section><ContactForm/></div>
)

}
