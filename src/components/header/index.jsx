import { Layout } from "./layout"

import { links } from "../../data"

export default function Header() {
  return (
    <Layout
      links={links}
      loading={false}
    />
  )
}