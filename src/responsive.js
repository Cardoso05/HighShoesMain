import { css } from "styled-components"

export const mobile = (props) =>{
    return css`
        @media screen and (max-width: 767px){
            ${props}
        }
    `

}
export const tablet = (props) =>{
    return css`
        @media screen and (min-width: 768px) and (max-width: 1023px){
            ${props}
        }
    `

}
export const desktop = (props) =>{
    return css`
        @media screen and (min-width: 1024px){
            ${props}
        }
    `

}