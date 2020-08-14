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

        <meta
          name="description"
          content="We team up on tech to win to move to a world where progressive organisations 
and activists have the best tools possible, and the skills & support to use them."
        />
        <meta name="author" content="Progressive Tech Network" />
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        {/* <link rel="icon" href="/static/favicon.ico" /> */}
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1, minimum-scale=1, width=device-width"
        />
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
