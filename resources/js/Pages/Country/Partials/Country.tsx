import {CountryType} from "@/types";
import {PropsWithChildren} from "react";
import CountryFlag from "@/Components/CountryFlag";

export default function Country({country}: PropsWithChildren<{ country: CountryType }>) {

    return (
        <div className="flex min-w-0 gap-4 justify-items-center ">
            <CountryFlag country={country.isocode} alt={country.country}/>

            <div className="min-w-0 mx-auto gap-x-2 flex-auto justify-items-center ">
                <p className="text-sm font-semibold leading-6 text-gray-900">{country.country}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">ISO
                    code: <strong>{country.isocode}</strong></p>
            </div>
        </div>
    );
}
