import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { WithChildren, WithNonReqChildren } from '@/types'
import { useRouter } from 'next/router'
import {
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    TwitterIcon,
} from '@/components/Icons'
import { motion } from 'framer-motion'

const CustomLink: React.FC<
    WithNonReqChildren & { href: string; title?: string; className?: string }
> = ({ href, title, children, className = '' }) => {
    // title and children are mutually exclusive

    if (children) {
        title = children.toString()
    }

    const router = useRouter()

    const isActive = router.pathname === href

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                }`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const SocialIcon: React.FC<WithChildren & { href: string }> = ({
    children,
    href,
}) => (
    <motion.a
        href={href}
        target={'_blank'}
        rel={'noreferrer'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.a>
)

const NavBar: React.FC = ({}) => {
    return (
        <header
            className={
                'w-full px-32 py-8 font-medium grid grid-rows-1 grid-cols-3 items-center'
            }
        >
            <nav className={'flex justify-center'}>
                <CustomLink href={'/'} className={'mr-4'}>
                    Home
                </CustomLink>
                <CustomLink href={'/about'} className={'mx-4'}>
                    About
                </CustomLink>
                <CustomLink href={'/projects'} className={'mx-4'}>
                    Projects
                </CustomLink>
                <CustomLink href={'/articles'} className={'ml-4'}>
                    Articles
                </CustomLink>
            </nav>

            <div className={'-mt-2'}>
                <Logo />
            </div>
            <div className={'flex items-center justify-center flex-wrap'}>
                <SocialIcon href={'https://twitter.com/'}>
                    <TwitterIcon className={`w-6 mr-3`} />
                </SocialIcon>
                <SocialIcon href={'https://github.com/'}>
                    <GithubIcon className={`w-6 mx-3`} />
                </SocialIcon>
                <SocialIcon href={'/'}>
                    <LinkedInIcon className={`w-6 mx-3`} />
                </SocialIcon>
                <SocialIcon href={'/'}>
                    <PinterestIcon className={`w-6 mx-3`} />
                </SocialIcon>
                <SocialIcon href={'/'}>
                    <DribbbleIcon className={`w-6`} />
                </SocialIcon>
            </div>
        </header>
    )
}

export default NavBar
