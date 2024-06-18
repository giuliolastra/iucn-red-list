import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {PageProps, SpeciesType} from '@/types';
import Species from "@/Pages/Species/Partials/Species";

export default function List({auth, species, isocode}: PageProps) {

    console.log(species);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Country
                List</h2>}
        >
            <Head title={`${isocode} Species List`}/>

            <div className="py-12">
                <div></div>
                <div>List</div>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                    <ul role="list" className="divide-y divide-gray-100">
                        {species.map((element: SpeciesType) => (
                            <li key={element.taxonid} className="align-middle">
                                <Species species={element}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
