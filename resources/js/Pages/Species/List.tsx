import MainLayout from '@/Layouts/MainLayout';
import {Head} from '@inertiajs/react';
import {PageProps, SpeciesType} from '@/types';
import Species from "@/Pages/Species/Partials/Species";

export default function List({species, title}: PageProps & {species: Array<SpeciesType>}) {

    const pageTitle = `Species List${title ? ` - ${title}` : ''}`

    return (
        <MainLayout
            header={<h2 className="font-medium text-xl leading-tight">{pageTitle}</h2>}
        >
            <Head title={pageTitle}/>

            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-0 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                    <ul role="list" className="divide-y divide-gray-100">
                        {species.map((element: SpeciesType, index: number) => (
                            <li key={element.taxonid} className={`px-6 py-2 ${index%2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <Species species={element}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}
