import { forwardRef } from "react"
import styled from "styled-components"

const InputRoot = styled.input`
  width: 100%;

  padding: 8px 16px;
  /* background: #D2D2D2; */
  color: #fff;
  background: #373737;
  border-radius: 999px;
  font-size: 14px;
  
  ::placeholder {
    color: #595959;
  }

  &:disabled {
    cursor: not-allowed;
    filter: opacity(50%);
  }
`

export const Input = forwardRef(({ ...props }, ref) => (
  <InputRoot ref={ref} {...props} />
))