import { FC } from 'react'
import { WithChildren } from '@/types'

export const Layout: FC<WithChildren & { className?: string }> = ({
    className,
    children,
}) => {
    return (
        <div
            className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
        >
            {children}
        </div>
    )
}
