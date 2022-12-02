import { Layout } from "./layout"
import { footer_sections } from "../../data"

export default function Footer() {
    return (
        <Layout
            sections={footer_sections}
            loading={false}
        />
    )
}