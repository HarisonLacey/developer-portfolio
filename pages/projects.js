import Link from "next/link";
import Header from "../components/Navigation";
import Layout from "../components/Structure";
import Bottom from "../components/Bottom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Page showing the projects I have completed so far

const Projects = () => (
  <Layout>
    <Header
      name="Projects"
      link1="/"
      name1="Home"
      link2="/contact"
      name2="Contact"
    />
    <Container>
      <Row>
        <Col md={3}>
          <div className="left"></div>
        </Col>
        <Col md={9}>
          <div className="top">
            <h4>GitHub Repository</h4>
            <Link href="https://github.com/HarisonLacey?tab=repositories">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
          </div>
          <hr />
          <div>
            <h4>The Sour Lemon</h4>
            <Link href="https://github.com/HarisonLacey/the-sour-lemon-movie-reviews">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
            <Link href="https://the-sour-lemon.herokuapp.com/">
              <a target="_blank">
                <h6>View</h6>
              </a>
            </Link>
          </div>
          <hr />
          <div>
            <h4>Website User Authentication System</h4>
            <Link href="https://github.com/HarisonLacey/website-user-auth-system">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
            <Link href="https://website-user-auth-system.herokuapp.com/">
              <a target="_blank">
                <h6>View</h6>
              </a>
            </Link>
          </div>
          <hr />
          <div>
            <h4>THNK TNK Message Sharing</h4>
            <Link href="https://github.com/HarisonLacey/thnk-tnk-message-sharing">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
            <Link href="https://thnk-tnk.herokuapp.com/">
              <a target="_blank">
                <h6>View</h6>
              </a>
            </Link>
          </div>
          <hr />
          <div>
            <h4>Search Your Medium</h4>
            <Link href="https://github.com/HarisonLacey/search-your-medium">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
            <Link href="https://search-your-medium.herokuapp.com/">
              <a target="_blank">
                <h6>View</h6>
              </a>
            </Link>
          </div>
          <hr />
          <div>
            <h4>Card Game</h4>
            <Link href="https://github.com/HarisonLacey/card-game">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
            <Link href="https://reacttwentyone.herokuapp.com/">
              <a target="_blank">
                <h6>View</h6>
              </a>
            </Link>
          </div>
          <hr />
          <div>
            <h4>Online Store</h4>
            <Link href="https://github.com/HarisonLacey/online-store">
              <a target="_blank">
                <h6>GitHub</h6>
              </a>
            </Link>
            <Link href="https://harisonlacey.github.io/online-store/">
              <a target="_blank">
                <h6>View</h6>
              </a>
            </Link>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
    <Bottom />
    <style jsx>{`
      .left {
        border-right: solid 1px lightgrey;
        height: 90rem;
      }
      a {
        cursor: pointer;
        color: black;
      }
      h4 {
        color: skyblue;
      }
      .top {
        margin-top: 2%;
      }
    `}</style>
  </Layout>
);

export default Projects;
