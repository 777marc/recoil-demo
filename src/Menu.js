import React from "react";
import { useRecoilState } from "recoil";
import { view as viewAtom } from "./Atoms";

export default () => {
    const viewOptions = ["home", "users"];
    const [view, setView] = useRecoilState(viewAtom);
    return (
        <nav>
            {
                viewOptions.map( v => (
                    <a href="#" onClick={ () => setView(v)} key={v}>{v}</a>
                ))
            }
        </nav>
    )
}