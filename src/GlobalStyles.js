import '@fontsource/rubik'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --border-radius-global: 50px;
  --color-background-white: #e4eaeb;
  --color-background: hsl(60, 2%, 80%, 0.8);
  --color-text: #230707;
  --shadow-img: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  --shadow-text: 2px 2px 2px rgb(150, 150, 150);

}

* {
    box-sizing: border-box;
}

body {
    background-color: #a59997;
    color: #e4eaeb;
    font-family: Rubik, sans-serif;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    padding: 10px;
    width: 95%;
}
`
