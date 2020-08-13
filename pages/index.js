import Header from "../components/Navigation";
import Layout from "../components/Structure";
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
              <h4>Git</h4>
              <h4>Next.js</h4>
            </div>
          </div>
        </Col>
        <Col md={9}>
          <div className="bio">
            Experienced Operations Planner with a demonstrated history of
            working in the E-commerce industry. Skilled In planning, E-commerce,
            sales operations, online and offline media and quality assurance.{" "}
            <br />
            <br />
            I Intend to make a shift into web development after completing the
            HyperionDev Full Stack Web Development Boootcamp. <br />
            <br />
            Proficient in building MERN Stack Applications as well as various other web
            development tools.
          </div>
          <hr />
          <h4 className="title">Experience</h4>
          <hr />
          <div className="top">
            <h5>Operations Planner</h5>
            <h5>Hyperli</h5>
            <h5 className="bottom">Nov 2016 - May 2020</h5>
            <p>
              After Groupon South Africa closed down, I was one of six people
              selected out of hundreds of employees to facilitate in the
              creation of the E-Commerce venture, Hyperli. <br />
              <br /> Working from the ground up in such a competitive industry
              has equipped me with a wealth of knowledge in the operational
              processes that make a company successful and the skills needed to
              ensure continued revenue growth. <br />
              <br /> In addition, this also means I have experience and
              expertise in various different departments, from marketing and
              sales to customer service and partner support. <br />
              <br /> Responsibilities <br />
              <br />
              -Creating and scheduling all daily marketing newsletters <br />{" "}
              -Quality assurance: sales leads, editorial processes and content{" "}
              <br /> -Using analytical software as a means to optimise revenue
              growth <br />
              -Managing editorial processes from lead creation to final deal and
              content publication <br /> -Daily reporting to the sales and
              operation teams <br /> -Copywriting
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>Local Account Planner</h5>
            <h5>Groupon</h5>
            <h5 className="bottom">Jun 2016 - Nov 2016</h5>
            <p>
              After a 3 month internship at Groupon I was employed permanently
              as a local account planner within the planning team. <br />
              <br />
              Responsibilities <br />
              <br />
              -Account management
              <br /> -Lead research, generation and management
              <br /> -Daily reporting to the sales and planning teams
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>Internship</h5>
            <h5>Groupon</h5>
            <h5 className="bottom">Mar 2016 - May 2016</h5>
            <p>
              Successfully selected out of a large pool of graduates to begin
              working as an intern at Groupon South Africa.
              <br />
              <br />
              Worked closely with the planning team and while still an intern
              received the Groupon Employee Of The Month Award.
              <br />
              <br />
              Responsibilities
              <br />
              <br /> -Lead research, account management and daily reporting to
              the sales and planning teams
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
              Proficient in building Full Stack Applications
              <br />
              MongoDB | Express.js | React.js | Node.js
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>Bristol Institute of Modern Music</h5>
            <h5>BA(Hons) Professional Musicianship</h5>
            <h5 className="bottom">2011 - 2014</h5>
            <p>
              Live Performance | Music Business | Music Theory | Practical
              Skills
            </p>
          </div>
          <hr />
          <div className="top">
            <h5>International School of Hout Bay</h5>
            <h5>International Baccalaureat</h5>
            <h5 className="bottom">2008 - 2010</h5>
            <p>Mathematics | English | Art | History | Physics | Spanish</p>
          </div>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      img {
        transform: scale(0.25);
        border-radius: 3%;
        position: relative;
        right: 142.65%;
        bottom: 29rem;
      }
      .left {
        border-right: solid 1px lightgrey;
        height: 130rem;
      }
      .bio {
        padding-top: 2%;
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
    `}</style>
  </Layout>
);

export default Home;
