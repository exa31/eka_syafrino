import Image from "next/image"

export default function CyberMobile() {
    return (
        <div>
            <Image
                src="/images/cyberMobile.png"
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-center h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[20%] rounded-xl mx-auto"
            />
        </div>
    )

};