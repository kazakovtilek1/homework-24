export function About () {
    let info = {title: "Some Title", body:"Some body"}
    return (
        <>
            <h2>{info.title}</h2>
            <p>{info.body}</p>
        </>
    )
}