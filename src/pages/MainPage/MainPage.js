import {About} from "../../components/About/About";
import {Title} from "../../components/Title/Title";


export function MainPage () {
    return (
        <>
            <Title text="Hello world"/>
            <About info={{title: "Some Title", body:"Some body"}} />
        </>

    )
}