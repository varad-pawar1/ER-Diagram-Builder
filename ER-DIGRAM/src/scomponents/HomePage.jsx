import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="container my-5">
      {/* Main Section */}
      <div className="text-center mb-5">
        <h1 className="display-4">
          Beautiful <span className="text-primary" style={{ fontWeight: "bold", color: "rgb(34, 139, 34)" }}>database diagrams</span>
        </h1>
        <p className="lead">
          Design, visualize and collaborate on entity relationship diagrams for
          your databases
        </p>
        <div className="my-4 d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-primary me-2" style={{ width: "120px" }}>
            Learn more
          </button>
          <button className="btn btn-primary" style={{ width: "120px" }}>
            Get started
          </button>
        </div>
        <div className="my-5 d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <img
              src="https://www.holistics.io/blog/content/images/2022/06/drawsql.png"
              alt="Database Diagram Preview"
              className="img-fluid shadow rounded"
            />
          </div>
        </div>
      </div>

      {/* Loved by Developers Section */}
      <div className="text-center my-5 loved-by-developers">
        <h2 className="display-6">
          <span role="img" aria-label="heart">
            💖
          </span>{" "}
          Loved by Developers
        </h2>
        <p className="lead">
          Database design tool for creating schema diagrams, built for the
          modern development workflow.
        </p>
        <div id="features" className="my-4 d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-danger me-2 mb-2 mb-md-0" style={{ width: "300px" }} >
            Featured on Product Hunt
          </button>
          <button className="btn btn-outline-secondary" style={{ width: "300px" }}>
            #2 Product of the Day
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div  className="row text-center my-5">
        {/* Feature 1 */}
        <div className="col-12 col-md-6 mb-4">
          <h3 className="h5">See the big picture</h3>
          <p>
            Visualize your database schema and gain a birds-eye view of how
            different models fit together. Create a living document of your
            database schema that helps when architecting new features or
            onboarding new team members.
          </p>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIcvlVd-VbN2p-C232WOprGmubT15QDoHmpcgO9Ap-apRrOCyZ"
            alt="See the Big Picture Illustration"
            className="img-fluid my-3"
          />
        </div>

        {/* Feature 2 */}
        <div className="col-12 col-md-6 mb-4">
          <h3 className="h5">Streamline your team's development workflow</h3>
          <p>
            DrawSQL makes it easy for teams to collaborate on creating and
            maintaining schema diagrams. With a single source of truth, there’s
            no need for manually syncing diagram files between developers and
            offline tools anymore.
          </p>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKY3ukHJvQPCtd-VPcAnKJ9_PDr5k0bTC3X0m6vjnBCpZGbUQ7"
            alt="Streamline Workflow Illustration"
            className="img-fluid my-3"
          />
        </div>
      </div>

      {/* "Visually Stunning" Section */}
      <div className="text-center my-5">
        <button className="btn btn-primary mb-4" style={{ width: "300px" }}>See examples</button>

        {/* Supported DBMS logos */}
        <h4 className="display-6 lead text-muted">
          Supports these relational DBMS
        </h4>
        <div className="d-flex justify-content-center my-4 flex-wrap">
          <img
            src="https://naroissoft.com/wp-content/uploads/2023/07/tech-03.jpeg"
            alt="PostgreSQL Logo"
            className="mx-2 my-2"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="text-center my-5" id="pricing">
        <h2 className="display-6">Pricing plans for teams of all sizes</h2>
        <p>Start for free. Upgrade anytime.</p>
        <div className="row">
          {/* Hobbyist Plan */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card p-4 h-100 text-center shadow-sm">
              <h5 className="card-title">Hobbyist</h5>
              <p>Public diagrams only</p>
              <ul className="list-unstyled">
                <li>15 tables/diagram</li>
                <li>1 user</li>
              </ul>
              <h3 className="mb-3">$0/mo</h3>
              <button className="btn btn-outline-primary">Get Started</button>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card p-4 h-100 text-center shadow-sm">
              <h5 className="card-title">Starter</h5>
              <p>10 private diagrams</p>
              <ul className="list-unstyled">
                <li>50 tables/diagram</li>
                <li>1 user</li>
              </ul>
              <h3 className="mb-3">$19/mo</h3>
              <button className="btn btn-outline-primary">Get Started</button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card p-4 h-100 text-center shadow-sm">
              <h5 className="card-title">Growth</h5>
              <p>∞ private diagrams</p>
              <ul className="list-unstyled">
                <li>100 tables/diagram</li>
                <li>Up to 5 users</li>
                <li>Diagram versioning and access controls</li>
              </ul>
              <h3 className="mb-3">$59/mo</h3>
              <button className="btn btn-outline-primary">Get Started</button>
            </div>
          </div>

          {/* Large Plan */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card p-4 h-100 text-center shadow-sm">
              <h5 className="card-title">Large</h5>
              <p>All features from growth</p>
              <ul className="list-unstyled">
                <li>Unlimited tables/diagram</li>
                <li>Unlimited users</li>
              </ul>
              <h3 className="mb-3">$179/mo</h3>
              <button className="btn btn-outline-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="text-center my-5">
        <div className="d-flex justify-content-center flex-wrap my-3">
          <img
            src="https://knowledge.hubspot.com/hubfs/saas-website-design-18-20241002-1730364.webp"
            alt="Storytel Logo"
            className="mx-3 my-2"
            style={{ width: "60%", height: "auto" }}
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-light py-5">
        <h2>Ready to get started?</h2>
        <p className="lead">
          Create a{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          diagram for your app database in less than 15 minutes.
        </p>
        <button className="btn btn-primary" style={{ width: "300px" }}>Start diagramming</button>
      </div>

 {/* Footer Section */}
 <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-4">
              <h5>drawSQL</h5>
              <p>
                Work together to design, model, and document the database schema
                of your app.
              </p>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <h6>FEATURES</h6>
              <ul className="list-unstyled">
                <li>All features</li>
                <li>Import from SQL</li>
                <li>Export to Image</li>
                <li>Export to SQL</li>
                <li>Version History</li>
                <li>Embed</li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <h6>PRODUCT</h6>
              <ul className="list-unstyled">
                <li>Pricing</li>
                <li>Help docs</li>
                <li>Changelog</li>
                <li>Feedback & Contact</li>
                <li>Affiliate Program</li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <h6>RESOURCES</h6>
              <ul className="list-unstyled">
                <li>Database Templates</li>
                <li>Laravel Schemas</li>
                <li>Rails Schemas</li>
                <li>Django Schemas</li>
                <li>Open-sourced Schemas</li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <h6>LEGAL</h6>
              <ul className="list-unstyled">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
