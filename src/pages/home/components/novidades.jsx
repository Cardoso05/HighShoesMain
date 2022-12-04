import { Product } from "../../../components/product"
import { Section } from "./section"
import Skeleton from "react-loading-skeleton"

export const Novidades = ({ products, loading = true }) => {
  return (
    <Section title="Novidades" loading={loading}>
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {products.map(({ id, ...props }) => (
          <li key={id}>
            {loading ? <Skeleton  width={200} height={310} /> : <Product {...props} />}
          </li>
        ))}
      </ul>
    </Section>    
  )
}