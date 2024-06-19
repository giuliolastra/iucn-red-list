import React, {Fragment} from "react";

interface ConditionalProp {
    condition: boolean;
    children: React.ReactNode;
}

export default function ConditionalRenderer({condition, children}: ConditionalProp) {
    return (condition ? <Fragment>{children}</Fragment> : <></>);
}
