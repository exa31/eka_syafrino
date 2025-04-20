import Image from "next/image";

type ImageTabsProps = {
    src: string;
    alt: string;
    size?: 'Mobile' | 'Desktop';
}

export default function ImageTabs({src, size = 'Desktop', alt}: ImageTabsProps) {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width="1000"
                height="1000"
                className={size === "Desktop" ? "object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" : "object-cover object-center h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[20%] rounded-xl mx-auto"}
            />
        </div>
    )
}