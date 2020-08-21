import Link from "next/link";
import Head from "next/head";

// Basic layout component for all pages

const Layout = (props) => (
  <div>
    <Head>
      <title>Harison Lacey | Developer Portfolio</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="icon" href="/heart.png"></link>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-175432296-1"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-175432296-1');
        `,
        }}
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
