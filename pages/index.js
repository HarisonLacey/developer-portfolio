import Header from "../components/Navigation";
import Layout from "../components/Structure";
import Bottom from "../components/Bottom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Home page with bio, experience and education

const Home = () => (
  <Layout>
    <Header
      name="About"
      link1="/projects"
      name1="Projects"
      link2="/contact"
      name2="Contact"
    />
    <Container>
      <Row>
        <Col md={3}>
          <div className="left">
            <div>
              <img className="image" src="/profile.jpg" alt="profile" />
            </div>
            <div className="skills">
              <h3 className="skilltitle">Skills</h3>
              <hr />
              <h4>MongoDB</h4>
              <h4>Express.js</h4>
              <h4>React.js</h4>
              <h4>Node.js</h4>
              <h4>JavaScript</h4>
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>Bootstrap</h4>
              <h4>Web APIs</h4>
              <h4>Server Architecture</h4>
              <h4>Database Design</h4>
              <h4>Google Analytics</h4>
              <h4>Next.js</h4>
              <h4>Git</h4>
              <h4>Session & JWT Authentication</h4>
            </div>
          </div>
        </Col>
        <Col md={9}>
          <div className="bio">
            <div className="biocon">
              Full stack web developer with operations experience and a love for design.
              <img className="heart" src="/heart.png" alt="heart" />
            </div>
          </div>
          <hr />
          <h4 className="title">Experience</h4>
          <hr />
          <div className="top">
            <h5>Operations Planner</h5>
            <h5>Hyperli</h5>
            <h5 className="bottom">Nov 2016 - May 2020</h5>
            <p>
              <em>Hyperli is a daily discount eCommerce website</em>
              <br />
              <br />
              - First six employees
              <br />
              - Daily newsletter creation
              <br />
              - Quality assurance
              <br />
              - Daily deal creation
              <br />- Daily deal planning
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>Local Account Planner</h5>
            <h5>Groupon</h5>
            <h5 className="bottom">Jun 2016 - Nov 2016</h5>
            <p>
              - Worked with the city planning team
              <br />
              - Account management
              <br />- Lead management
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>Internship</h5>
            <h5>Groupon</h5>
            <h5 className="bottom">Mar 2016 - May 2016</h5>
            <p>
              - Worked with the city planning team
              <br />
              - Account management
              <br />
              - Lead management
              <br />- Received employee of the month award while still an intern
            </p>
          </div>
          <hr />
          <h4 className="title">Education</h4>
          <hr />
          <div className="top">
            <h5>HyperionDev</h5>
            <h5>Full Stack Web Developer Bootcamp</h5>
            <h5 className="bottom">2020 - 2020</h5>
            <p>
              - 99% Final Grade
              <br />
              - Building full stack web applications
              <br />
              - MongoDB, Express.js, React.js, Node.js
              <br />
              - HTML, CSS, JavaScript, Bootstrap
              <br />
              - Session & JWT Authentication
              <br />
              - RESTful API, Server and Database Architecture, Google
              Analytics
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>Bristol Institute of Modern Music</h5>
            <h5>BA(Hons) Professional Musicianship</h5>
            <h5 className="bottom">2011 - 2014</h5>
          </div>
          <hr />
          <div className="top">
            <h5>International School of Hout Bay</h5>
            <h5>International Baccalaureate Diploma</h5>
            <h5 className="bottom">2008 - 2010</h5>
          </div>
        </Col>
      </Row>
    </Container>
    <Bottom />
    <style jsx>{`
      .image {
        transform: scale(0.25);
        border-radius: 3%;
        position: relative;
        right: 142.65%;
        bottom: 29rem;
      }
      .left {
        border-right: solid 1px lightgrey;
        height: 90rem;
      }
      .bio {
        padding-top: 3%;
      }
      .top {
        margin: 2%;
      }
      .bottom {
        margin-bottom: 2%;
      }
      .title {
        margin-left: 39%;
        color: skyblue;
      }
      .skills {
        position: relative;
        bottom: 58rem;
        text-align: center;
        padding-right: 5%;
      }
      .skilltitle {
        color: skyblue;
      }
      .heart {
        margin-left: 0.5%;
      }
      .biocon {
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Home;
