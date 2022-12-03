import { forwardRef } from "react"
import styled from "styled-components"

const InputRoot = styled.input`
  width: 100%;

  padding: 8px 16px;
  color: #000;
  background: #D2D2D2;
  border-radius: 999px;
  font-size: 14px;
  
  ::placeholder {
    color: #595959;
  }
`

export const Input = forwardRef(({ ...props }, ref) => (
  <InputRoot ref={ref} {...props} />
))