import { ArrowRight } from "@material-ui/icons"
import { Link as RouterLink } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import styled from "styled-components"

import { Button } from "../../../components/button"
import { Section } from "./section"

const Card = styled(RouterLink)`
  width: 100%;
  height: 100px;
  color: #000;
  background: white;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px;

  button {
    width: 36px;
    height: 36px;
    padding: 0px;
    justify-content: center;

    border-radius: 999px;
  }
`

export const Promotions = ({ loading = true }) => {
  return (
    <Section title="HighPromoções" loading={loading}>
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "30px"
        }}
      >
        <li style={{ width: "50%" }}>
          {loading ? (
            <Skeleton width={"100%"} height={100} />
          ) : (
            <Card to={"/produtos/desconto"}>
              <strong> <i> Calçado usado por desconto </i></strong>

              <Button>
                <ArrowRight width={24} height={24}  />
              </Button>
            </Card>
          )}
        </li>

        <li style={{ width: "50%" }}>
          {loading ? (
            <Skeleton width={"100%"} height={100} />
          ) : (
            <Card to={"/produtos/desconto"}>
              <strong> <i> Calçado usado por desconto </i></strong>

              <Button>
                <ArrowRight width={24} height={24}  />
              </Button>
            </Card>
          )}
        </li>
      </ul>
    </Section>
  )
}