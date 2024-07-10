import "@/styles/globals.css";
import Layout from "./layout";
import Notifications from "./notifications";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Notifications />
      <Component {...pageProps} />
    </Layout>
  );
}
