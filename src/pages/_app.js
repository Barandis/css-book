// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createGlobalStyle } from 'styled-components'

/* eslint-disable max-len */
const GlobalStyle = createGlobalStyle`
:root {
  --nav-width: 300px;
  --content-width: 800px;
  --header-height: 54px;

  --text-color-primary: black;
  --text-color-secondary: #747474;
  --background-color: white;

  box-sizing: border-box;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.03rem;
  color: var(--text-color-primary);
}

[data-theme="dark"] {
  --background-color: #131516;
  --text-color-primary: #98a3ad;
  --text-color-secondary: #43484d;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  letter-spacing: normal;
  color: var(--text-color-primary);
}

h1, h2 {
  border-bottom: 1px solid black;
}
`
/* eslint-enable max-len */

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
