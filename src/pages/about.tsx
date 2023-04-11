import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Image from 'next/image'
import ProfilePic from '@/public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbersWrapper: React.FC<{ value: number; text: string }> = ({
    value,
    text,
}) => {
    const ref = useRef<HTMLSpanElement | null>(null)

    const motionValue = useMotionValue(0)

    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {
        once: true,
    })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, motionValue, value])

    useEffect(() => {
        springValue.on('change', (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.innerText = latestValue.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <div className={'flex flex-col items-end justify-center '}>
            <span className={'inline-block text-7xl font-bold'}>
                <span ref={ref}></span>+
            </span>
            <h2 className={'text-xl font-medium capitalize text-dark/75'}>
                {text}
            </h2>
        </div>
    )
}

const About = () => {
    return (
        <>
            <Head>
                <title>Yatochka | About Page</title>
                <meta name="description" content="About page" />
            </Head>
            <main
                className={'flex w-full flex-col items-center justify-center'}
            >
                <Layout className={'pt-16'}>
                    <AnimatedText
                        text={'Passion Fuels Purpose!'}
                        component={'h1'}
                        className={'mb-16'}
                    />
                    <div className={'grid w-full grid-cols-8 gap-16'}>
                        <div
                            className={
                                'col-span-3 flex flex-col items-start justify-start'
                            }
                        >
                            <h2
                                className={
                                    'mb-4 text-lg font-bold uppercase text-dark/75 '
                                }
                            >
                                Biography
                            </h2>
                            <p className={'font-medium'}>
                                Hi, I&apos;m CodeBucks, a web developer and
                                UI/UX designer with a passion for creating
                                beautiful, functional, and user-centered digital
                                experiences. With 4 years of experience in the
                                field. I am always looking for new and
                                innovative ways to bring my clients&apos;
                                visions to life.
                            </p>
                            <p className={'my-4 font-medium'}>
                                I believe that design is about more than just
                                making things look pretty – it&apos;s about
                                solving problems and creating intuitive,
                                enjoyable experiences for users.
                            </p>
                            <p className={'font-medium'}>
                                Whether I&apos;m working on a website, mobile
                                app, or other digital product, I bring my
                                commitment to design excellence and
                                user-centered thinking to every project I work
                                on. I look forward to the opportunity to bring
                                my skills and passion to your next project.
                            </p>
                        </div>
                        <div
                            className={
                                'col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'
                            }
                        >
                            <div
                                className={
                                    'absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark '
                                }
                            />
                            <Image
                                src={ProfilePic}
                                alt={'Yatochka'}
                                className={'w-full h-auto rounded-2xl'}
                            ></Image>
                        </div>
                        <div
                            className={
                                'col-span-2 flex flex-col items-end justify-between'
                            }
                        >
                            <AnimatedNumbersWrapper
                                value={50}
                                text={'Satisfied clients'}
                            />
                            <AnimatedNumbersWrapper
                                value={40}
                                text={'Projects completed'}
                            />
                            <AnimatedNumbersWrapper
                                value={4}
                                text={'Years Of Experience'}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default About
