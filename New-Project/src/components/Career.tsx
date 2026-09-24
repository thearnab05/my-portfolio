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
                <h4>Full Stack Web Development Trainee</h4>
                <h5>NIIT</h5>
              </div>
              <h3>Jun 2025 - Aug 2025</h3>
            </div>
            <p>
              Completed industrial training on MERN Stack. Built responsive web applications and secured an 'O' Grade for excellence in practical tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student</h4>
                <h5>Dr. B.C. Roy Academy</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              CGPA: 7.11. Strong understanding of Data Structures, DBMS, and Operating Systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Self-Taught</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              AINCAT Certification – IT Fundamentals, Web Development Course – Udemy. Demonstrated strong problem-solving and AI/ML interest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
