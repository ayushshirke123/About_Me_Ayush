import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Application Development Intern</h4>
                <h5>EdTech Society, IIT Bombay</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed AptiBattle using Angular and Node.js with RESTful API integration.
              Implemented MongoDB database and Firebase Authentication for secure login and data storage.
              Improved UI responsiveness and collaborated in a 4-member Agile team using Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
