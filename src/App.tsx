import * as Layout from "./components/layouts/default";
import {Chat} from "./components/chat";

export function App() {
    return (
        <>
            <Layout.Header />
            <Layout.Content>
                <Chat />
            </Layout.Content>
        </>
    )
}
