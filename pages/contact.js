import Link from "next/link";
import Header from ".././Components/Nav";
import Layout from ".././Components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Basic contact page

const Contact = () => (
  <Layout>
    <Header
      name="Contact"
      link1="/"
      name1="Home"
      link2="/projects"
      name2="Projects"
    />
    <Container>
      <Row>
        <Col md={3}>
          <div className="left"></div>
        </Col>
        <Col md={9}>
          <div>
            <h5 className="top">harisonlacey@gmail.com</h5>
            <h5>079 606 3612</h5>
            <Link href="https://www.linkedin.com/in/harisonlacey/">
              <a>
                <h5>https://www.linkedin.com/in/harisonlacey/</h5>
              </a>
            </Link>
            <hr />
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
      .height {
        height: 30rem;
      }
    `}</style>
  </Layout>
);

export default Contact;
