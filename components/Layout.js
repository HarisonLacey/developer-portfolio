import Link from "next/link";
import Head from "next/head";

// Basic layout component for all pages

const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <div className="container">{props.children}</div>
    <style jsx>{`
      .container {
        border-left: solid 1px lightgrey;
        border-right: solid 1px lightgrey;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
