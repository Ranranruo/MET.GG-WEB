import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


export const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    color: inherit;
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
  }
`;