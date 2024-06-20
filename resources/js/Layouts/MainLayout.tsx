import {useState, PropsWithChildren, ReactNode} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link} from '@inertiajs/react';

export default function MainLayout({header, children}: PropsWithChildren<{ header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-300">
            <nav className="bg-oDarkBlue-950 border-b border-y-oDarkBlue-950 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo
                                        className="block h-9 w-auto fill-current text-white"/>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                                <NavLink href={route('species')} active={route().current('species')}>
                                    Species
                                </NavLink>
                                <NavLink href={route('region')} active={route().current('region')}>
                                    Regions
                                </NavLink>
                                <NavLink href={route('country')} active={route().current('country')}>
                                    Countries
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('species')} active={route().current('species')}>
                            Species
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('region')} active={route().current('region')}>
                            Regions
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('country')} active={route().current('country')}>
                            Countries
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-oDarkBlue-900 shadow text-white">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
