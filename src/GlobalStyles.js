import '@fontsource/montserrat'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --border-radius-global: 50px;
  --border-radius-form: 20px;
  --border-radius-title-date: 10px;
  --color-background-white: #e4eaeb;
  --color-background: hsl(60, 2%, 80%, 0.8);
  --color-text: #230707;
  --font-size-title: 24px;
  --font-weight-title: bold;
  --shadow-img: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  --shadow-text: 2px 1px 1px rgb(150, 150, 150);

}

* {
    box-sizing: border-box;
}

body {
    background-color: #a59997;
    color: #e4eaeb;
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    padding: 10px;
}
`
