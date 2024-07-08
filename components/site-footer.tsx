import { siteConfig } from "@/config/site"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Icons } from "./icons"
export function SiteFooter(){
    return <footer>
        <div className="mb-6 mt-14 flex flex-col items-center">
            <div className="mb-3 flex space-x-4 ">
                <a target="_blank" rel="noreferrer" href="mailto:haroon.khan4149@gmail.com">
                    <span className="sr-only">Mail</span>
                    <EnvelopeClosedIcon className="h-6 w-6"/>
                
                </a>

                <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
                    <span className="sr-only">Github</span>
                    <Icons.gitHub className="h-6 w-6"/>
                </a>

                <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
                    <span className="sr-only">Mail</span>
                    <Icons.twitter className="h-6 w-6"/>
                </a> 
            </div>
            {/* <p className="text-center text-sm text-muted-foreground">Created by {siteConfig.author} {new Date().getFullYear()} </p> */}
            <p className="text-center text-sm">Created by <b><a href="http://localhost:3000/about" target="/about">{siteConfig.author} </a></b>{new Date().getFullYear( )}</p>
        </div>
    </footer>
}