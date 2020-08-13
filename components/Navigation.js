import Link from "next/link";

// Navigation menu for all pages

const Header = (props) => (
  <div className="nav">
    <h2>{props.name}</h2>
    <Link href={props.link1}>
      <a>{props.name1}</a>
    </Link>
    <Link href={props.link2}>
      <a className="right">{props.name2}</a>
    </Link>

    <style jsx>{`
      .nav {
        border-bottom: solid 1px lightgrey;
        padding-top: 2%;
      }
      h2 {
        margin-left: 2%;
      }
      a {
        margin-left: 2%;
        margin-top: 0.9%;
        color: black;
      }
      .right {
        margin-left: 1%;
      }
    `}</style>
  </div>
);

export default Header;
