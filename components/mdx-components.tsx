import * as runtime from "react/jsx-runtime"
import Image from "next/image";
import { Callout } from "./callout";
import { cn } from "@/lib/utils";
const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};
const components = {
    //if you want custon wailwind inside mdx then here add components from shad-cn/taxonomy

    Image,
    Callout,
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-md border", className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
}
interface MdxProps {
    code: string;
}
export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;

}