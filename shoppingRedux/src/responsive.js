import { css } from "styled-components";
export const mobile = (props) => {
  return css`
     @media only screen and (max-width: 380px){
        ${props}
    }
  `
}

export const BigmMobiles = (props) => {
  return css`
   @media only screen and (max-width: 480px){
      ${props}
  }
`
}

export const TabletScreen = (props) => {
  return css`
   @media only screen and (max-width: 776px){
      ${props}
  }
`
}