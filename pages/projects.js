import Link from "next/link";
import Header from ".././Components/Nav";
import Layout from ".././Components/Layout";
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
            <Link
              href="https://github.com/HarisonLacey?tab=repositories"
            >
              <a>
                <h4>GitHub Repo.</h4>
              </a>
            </Link>
            <h5>Contains a few past projects</h5>
          </div>
          <hr />
          <div>
            <Link href="https://search-your-medium.herokuapp.com/">
              <a>
                <h4>iTunes Search API</h4>
              </a>
            </Link>
            <h5>Search application built with React.js and Express.js</h5>
          </div>
          <hr />
          <div>
            <Link href="https://reacttwentyone.herokuapp.com/">
              <a>
                <h4>21 Card Game</h4>
              </a>
            </Link>
            <h5>Card Game built with React.js</h5>
          </div>
          <hr />
          <div>
            <Link href="https://harisonlacey.github.io/online-store/">
              <a>
                <h4>Online Store with Checkout Cart</h4>
              </a>
            </Link>
            <h5>Online store built with JavaScript, HTML and Bootstrap</h5>
          </div>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .left {
        border-right: solid 1px lightgrey;
        height: 50rem;
      }
      a {
        cursor: pointer;
        color: skyblue;
      }
      .top {
        margin-top: 2%;
      }
    `}</style>
  </Layout>
);

export default Projects;
