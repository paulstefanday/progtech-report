import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import { ToastContainer, toast } from "react-toastify";
import { Flex, Heading, Button, Box, Text } from "rebass";
import theme from "../styles/theme";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const title = "The State of Progressive Tech in Australia - 2020 Report"
const desc = "This report was created by the Progressive Tech Network and is based off a comprehensive survey that was completed by more than 50 tech/digital staff from across the progressive sector in Australia."
const image = "https://progtech.net.au/images/2.jpg"
function MyApp({ Component, pageProps, router }) {
  console.log(pageProps, router.pathname)
  return (
    <ThemeProvider theme={theme}>
        <Head>
        <title>ProgTech Network Australia</title>
        <meta
          name="description"
          content={desc}
        />
        <meta name="author" content={title}/>
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1, minimum-scale=1, width=device-width"
        />
        <meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:image" content={image} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:image" content={image} />
<meta name="twitter:card" content="summary_large_image"></meta>
<link rel="icon" href="/favicon.png" type="image/gif" sizes="16x16"></link>
<link rel="icon" type="image/png" href="/favicon.png"/>
<link rel="icon" type="image/png" href="https://2020report.progtech.net.au/favicon.png"/>
      </Head>

        <Component {...pageProps} router={router} />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
    let userAgent;
    if (appContext.ctx.req) { // if you are on the server and you get a 'req' property from your context
      userAgent = appContext.ctx.req.headers['user-agent'] // get the user-agent from the headers
    } else {
      userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object


    }
    console.log(333, appProps)
    const isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      ))
  return { ...appProps, pageProps: { ...appProps.pageProps, isMobile } };
};

export default MyApp;
