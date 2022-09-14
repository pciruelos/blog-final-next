import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, children, keywords, description }) => {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to ciru world",
  keywords:
    "coding, develoment, pop culture, photograpy, video, climbing, slackline, programming",
  description: "a place where coding mets pop",
};

export default Layout;
