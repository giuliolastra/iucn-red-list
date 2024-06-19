import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {RegionType, PageProps} from '@/types';
import Region from "@/Pages/Region/Partials/Region";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShuffle} from "@fortawesome/free-solid-svg-icons/faShuffle";

export default function List({auth, regions}: PageProps) {

    const getRandomRegion = function (): RegionType {
        return regions[Math.floor(Math.random() * regions.length)];
    }

    const randomRegion = getRandomRegion();

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-medium text-xl leading-tight">
                Region List
                <Link className="float-end hover:text-oGreen-500" href={route('species.region', randomRegion.identifier)}
                      title="Pick Random">
                    <FontAwesomeIcon icon={faShuffle}/>
                </Link>
            </h2>}
        >
            <Head title="Region List"/>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-0 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                    <ul role="list" className="divide-y divide-gray-100">
                        {regions.map((region: RegionType, index: number) => (
                            <li key={region.identifier}
                                className={`px-6 py-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <Link href={route('species.region', region.identifier)}>
                                    <Region region={region}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
