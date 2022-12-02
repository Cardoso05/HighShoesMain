import { Product } from "../../../components/product"
import { Section } from "./section"

export const Novidades = ({ products }) => {
  return (
    <Section title="Novidades">
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {products.map(({ id, img, name, price }) => (
          <li key={id}>
            <Product img={img} name={name} price={price} />
          </li>
        ))}
      </ul>
    </Section>    
  )
}