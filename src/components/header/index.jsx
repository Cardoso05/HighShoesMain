import { Layout } from "./layout"

import { header_links } from "../../data"
import { useLocation } from "react-router-dom"

export default function Header() {
  const { pathname } = useLocation()

  return (
    <Layout
      currentPage={pathname}
      links={header_links}
      loading={false}
    />
  )
}