import React from 'react'
import { Layout } from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import HireMe from '@/components/HireMe'
import LightBulb from '@/public/images/svgs/miscellaneous_icons_1.svg'
interface FooterProps {}

const Footer: React.FC<{}> = ({}) => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className={
                'w-full border-t-2 border-solid border-dark font-medium text-lg'
            }
        >
            <Layout className={'py-8 flex items-center justify-between'}>
                <span>{currentYear} &copy; All Rights Reserved.</span>
                <div className={'flex items-center'}>
                    Built with
                    <span className={'text-primary text-2xl px-1'}>
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link href={'/'} className={'underline underline-offset-2'}>
                        Yatochka
                    </Link>
                </div>
                <Link
                    href={'/'}
                    target={'_blank'}
                    rel={'noreferrer'}
                    className={'underline underline-offset-2'}
                >
                    Say Hello!
                </Link>
            </Layout>
            <HireMe />
            <div className={'absolute right-8 bottom-8 inline-block w-24'}>
                <Image
                    src={LightBulb}
                    alt={"Yatochka's Thinking"}
                    className={'w-full h-auto'}
                ></Image>
            </div>
        </footer>
    )
}

export default Footer
