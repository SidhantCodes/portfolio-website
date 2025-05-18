import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { IoMdMail } from 'react-icons/io'

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

export const renderIcon = (name: string, className: string) => {
    switch (name.toLowerCase()) {
        case 'github':
            return <FaGithub className={className} />
        case 'linkedin':
            return <FaLinkedin className={className} />
        case 'email':
            return <IoMdMail className={className} />
        case 'leetcode':
            return <SiLeetcode className={className} />
        case 'resume':
            return <FaFileAlt className={className} />
        default:
            return null
        }
}