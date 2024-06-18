import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {CountryType, PageProps} from '@/types';
import Country from "@/Pages/Country/Partials/Country";
import React from "react";

export default function List({auth, countries}: PageProps) {

    const getRandomCountry = function (): CountryType {
        return countries[Math.floor(Math.random() * countries.length)];
    }

    const randomCountry = getRandomCountry();

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Country
                List</h2>}
        >
            <Head title="Country List"/>

            <div className="py-12">
                <Link href={`/species/${randomCountry.isocode}`}>
                    Go Random
                </Link>
                <div>List</div>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                    <ul role="list" className="divide-y divide-gray-100">
                        {countries.map((region: CountryType) => (
                            <li key={region.isocode} className="align-middle">
                                <Link href={`/species/${region.isocode}`}>
                                    <Country country={region}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
