import styled from "styled-components"
import { ArrowDownwardRounded } from "@material-ui/icons"

import { Section } from "./section"

const Question = styled.details`
  width: 100%;
  overflow: overlay;
  background: #F5F5F5;

  border-radius: 20px;

  summary {
    width: 100%;
    height: 80px;
    color: #000;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 30px;
    cursor: pointer;
  }

  span {
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
  }

  summary div {
    display: grid;
    place-content: center;

    background: #F5F5F5;
    border-radius: 50%;

    --size: 36px;
    width: var(--size);
    height: var(--size);

    svg {
      color: #C2C2C2;
    }
  }
  
  .content {
    color: #000;
    padding: 30px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const FAQ = ({ questions }) => {
  return (
    <Section>
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px"
        }}
      >
        {questions.map(({ id, title, description }) => (
          <li style={{width: "100%"}} key={id}>
            <Question>
              <summary>
                <span>{title}</span>

                <div>
                  <ArrowDownwardRounded
                    width={20}
                    height={20}
                  />
                </div>
              </summary>

              <div className="content">{description}</div>
            </Question>
          </li>
        ))}
      </ul>
    </Section>    
  )
}