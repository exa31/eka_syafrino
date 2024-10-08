import Image from "next/image"

export default function HijjaWeb() {
    return (
        <div>
            <Image
                src="/images/hijja.png"
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
        </div>
    )

};