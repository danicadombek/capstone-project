import { createGlobalStyle } from 'styled-components'
import '@fontsource/rubik'

export default createGlobalStyle`
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
