import {RegionType} from "@/types";
import {PropsWithChildren} from "react";

export default function Region({region}: PropsWithChildren<{ region: RegionType }>) {

    return (
        <div className="flex min-w-0 gap-4 justify-items-center ">
            <div className="min-w-0 mx-auto gap-x-2 flex-auto justify-items-center ">
                <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-oGreen-500">{region.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">ID: <strong>{region.identifier}</strong></p>
            </div>
        </div>
    );
}
