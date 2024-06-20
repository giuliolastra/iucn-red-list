import MainLayout from '@/Layouts/MainLayout';
import {Head, Link} from '@inertiajs/react';
import {CountryType, PageProps} from '@/types';
import Country from "@/Pages/Country/Partials/Country";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShuffle} from "@fortawesome/free-solid-svg-icons/faShuffle";

export default function List({countries}: PageProps & { countries: Array<CountryType> }) {

    const getRandomCountry = function (): CountryType {
        return countries[Math.floor(Math.random() * countries.length)];
    }

    const randomCountry = getRandomCountry();

    return (
        <MainLayout
            header={<h2 className="font-medium text-xl leading-tight">
                Country List
                <Link className="float-end hover:text-oGreen-500" href={route('species.country', randomCountry.isocode)}
                      title="Pick Random">
                    <FontAwesomeIcon icon={faShuffle}/>
                </Link>
            </h2>}
        >
            <Head title="Country List"/>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-0 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                    <ul role="list" className="divide-y divide-gray-100">
                        {countries.map((country: CountryType, index: number) => (
                            <li key={country.isocode}
                                className={`px-6 py-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <Link href={route('species.country', country.isocode)}>
                                    <Country country={country}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
