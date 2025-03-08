import {FormEvent, KeyboardEvent, useRef} from "react";

export function Chat() {
    const prompts = [
        { name: "Virtual assistant", prompt: "You are a virtual assistant!" },
        { name: "C# Expert", prompt: "You are a senior developer expert in c#" }

    ]
    return (
        <section className={"chat"}>
            <Header prompts={prompts}/>
            <Sheet/>
            <Input onSend={() => {
            }}/>
        </section>
    )
}

type Prompt = { name: string, prompt: string }

export function Header(props: { prompts: Array<Prompt> }) {
    return (
        <section className={"chat__header"}>
            <select>
                {props.prompts.map(p => <option key={p.name} value={p.prompt}>{p.name}</option>)}
            </select>
            <select>
                <option>o3-mini</option>
            </select>
        </section>
    )
}

export function Sheet() {
    return (
        <section className={"chat__sheet"}>
        </section>
    )
}

type ChatInputProps = { onSend: (message: string) => void }

export function Input(props: ChatInputProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onSend(textAreaRef.current.value)
    }
    const handleTextAre = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            props.onSend(textAreaRef.current.value)
        }
    }
    return (
        <form onSubmit={onSubmit} className={"chat__input"}>
            <textarea
                ref={textAreaRef}
                onKeyDown={handleTextAre}
                placeholder={"Enter your message..."}
                className={"chat__input__input"}
            />
            <button
                type={"submit"}
                className={"btn btn-default chat__input__submit"}
            >
                SEND
            </button>
        </form>
    )
}
