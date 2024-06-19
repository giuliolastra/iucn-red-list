import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-light leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-oLightBlue-400 text-oLightBlue-400 focus:border-oLightBlue-400 '
                    : 'border-transparent text-gray-300 hover:text-oGreen-500 hover:border-oGreen focus:text-oGreen focus:border-oGreen') +
                className
            }
        >
            {children}
        </Link>
    );
}
