import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>Essa página não existe :/</h1>
            <Link to="/">ir para a página principal</Link>
        </div>
    )
}