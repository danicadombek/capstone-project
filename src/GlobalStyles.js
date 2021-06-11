import { createGlobalStyle } from 'styled-components'
import '@fontsource/rubik'

export default createGlobalStyle`
:root {
  --img-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
}

*box {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 10px;
    font-family: Rubik, sans-serif;
    background-color: #a59997;
    color: #e4eaeb;
}
`
