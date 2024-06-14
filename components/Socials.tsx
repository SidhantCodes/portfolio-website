import { socials } from "@/constants"
import Link from "next/link"
import Image from "next/image"
const Socials = () => {
  return (
    <div className="flex gap-5 items-center justify-center mt-14">
        {socials.map((social) => (
            <div className="flex">
                <Image src='/icons/outward.svg' height={15} width={15} alt="link"/>
                <Link key={social.name} href={social.url} className="text-gray-300 hover:text-white transition-colors">{social.name}</Link>
            </div>
        ))}
    </div>
  )
}

export default Socials