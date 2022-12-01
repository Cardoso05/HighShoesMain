import styled from "styled-components"

const ButtonRoot = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 30px;

  background: linear-gradient(90deg, #1DA6F2, #00659D);
  border-radius: 999px;
  font-weight: bold;
  font-size: 14px;
  line-height: 11px;

  width: 100%;
`

export const Button = ({ children, ...props }) => {
  return (
    <ButtonRoot {...props}>
      {children}
    </ButtonRoot>
  )
}