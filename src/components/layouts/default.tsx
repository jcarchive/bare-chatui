import {PropsWithChildren} from "react";

type HeaderProps = PropsWithChildren;
export function Header(props: HeaderProps) {
    return (
        <header className={"app__header terminal-nav"}>
            <section className={"terminal-prompt"}>
                <span>Blabla...</span>
            </section>
            {props.children}
        </header>
    )
}

type ContentProps = PropsWithChildren;
export function Content(props: ContentProps) {
    return (
        <section className={"app__content"}>
            {props.children}
        </section>
    )
}
