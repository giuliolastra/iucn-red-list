import MainLayout from '@/Layouts/MainLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import React from "react";

export default function Dashboard() {
    return (
        <MainLayout
            header={<h2 className="font-medium text-xl leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-oDarkBlue-950 ">
                            <div className="text-xl font-bold mb-4">API Exercise</div>
                            <div>
                                Build a simple app using the technology of your choice and integrate the following
                                features
                                using the public IUCN Red List API.
                            </div>

                            <Link href="https://apiv3.iucnredlist.org/">
                                <div className="my-4 text-red-600 hover:text-red-400 hover:underline font-medium">
                                    API - IUCN Red List of Threatened Species
                                </div>
                            </Link>

                            <ol className="list-decimal px-4">
                                <li>
                                    <Link href={route('region')}>
                                        <div className="underline text-oGreen-950 hover:text-oGreen-500">
                                            Load the list of the available regions for species
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('region')}>
                                        <div className="underline text-oGreen-950 hover:text-oGreen-500">
                                            Take a random region from the list
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('species.region', 'europe')}>
                                        <div className="underline text-oGreen-950 hover:text-oGreen-500">
                                            Load the list of all species in the selected region
                                        </div>
                                    </Link>
                                    The first page of the results would suffice, no need for pagination
                                </li>
                                <li>
                                    <Link href={route('species')}>
                                        <div className="underline text-oGreen-950 hover:text-oGreen-500">
                                            Create a model for “Species” and map the results to an array of Species.
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('species.category', 'CR')}>
                                        <div className="underline text-oGreen-950 hover:text-oGreen-500">
                                            Filter the results for Critically Endangered species:
                                        </div>
                                    </Link>
                                    <ul className="list-disc px-4">
                                        <li>Fetch the conservation measures for all critically endangered species
                                        </li>
                                        <li>Store the “title”-s of the response in the Species model as concatenated
                                            text property.
                                        </li>
                                        <li>Print/display the results</li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={route('species.class', 'mammalia')}>
                                        <div className="underline text-oGreen-950 hover:text-oGreen-500">
                                            Filter the results (from step 4) for the mammal class
                                        </div>
                                    </Link>
                                    <ul className="list-disc px-4">
                                        <li>Print/display the results</li>
                                    </ul>
                                </li>
                            </ol>


                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
