import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from 'styled-components'
import GlobalStyles from "../styles/global";

/**
 * Rendered Server Side
 */
export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //     const sheet = new ServerStyleSheet()
  //     const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
  //     const styleTags = sheet.getStyleElement()
  //     return { ...page, styleTags }
  // }

  render = () => (
    <Html lang="en">
      <Head>


        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        {/* <link rel="icon" href="/static/favicon.ico" /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <GlobalStyles />
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  );
}
