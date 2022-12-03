import { Layout } from "./layout"

import { header_links } from "../../data"

export default function Header() {
  return (
    <Layout
      links={header_links}
      loading={false}
    />
  )
}