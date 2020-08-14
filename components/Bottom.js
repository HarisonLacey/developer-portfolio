import Link from "next/link";

// Bottom container for social links

const Bottom = () => (
  <div className="nav">
    <div className="social">
      <Link href="https://www.facebook.com/harison.lacey/">
        <a target="_blank">
          <img src="/facebook.png" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/harisonlacey/">
        <a target="_blank">
          <img src="/linkedin.png" />
        </a>
      </Link>
      <Link href="https://github.com/HarisonLacey">
        <a target="_blank">
          <img src="/github.png" />
        </a>
      </Link>
    </div>
    <style jsx>{`
      .nav {
        border-top: solid 1px lightgrey;
      }
      .social {
        margin: auto;
        display: inline-block;
        margin-top: 4%;
        margin-bottom: 4%;
        width: 20%;
      }
      a {
        margin: 5%;
      }
      img:hover {
        transform: scale(1.05);
        opacity: 80%;
      }
    `}</style>
  </div>
);

export default Bottom;
