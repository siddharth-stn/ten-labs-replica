import "./Certification.css";

const Certification = () => {
  return (
    <div className="certificationMain">
      <img
        src="https://static.wixstatic.com/media/e0136acb6a91480b87e8514652680cbf.jpg/v1/fill/w_1411,h_2038,al_c,q_90,usm_0.66_1.00_0.01/e0136acb6a91480b87e8514652680cbf.webp"
        alt="somePic"
      />
      <span className="certHeading">TEN Certified Expert</span>
      <div className="certContent">
        <p className="cerPara1">Dear Intern,</p>
        <p className="cerPara2">
          We at TEN not only strive to provide the best guidance to our interns
          but also ensure their experience with us proves to be a career
          milestone.
        </p>
        <p className="cerPara3">
          We hereby offer to certify you as an Expert in your domain for a
          paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship
          encompasses all the major learnings you gave and received and
          establishes you as a certified professional. We are certain this
          accomplishment will go a long way in building your fledgling career
          and prove instrumental in making you the best in business.
        </p>
        <p className="cerPara4">
          The QR code below helps you to make the required payment. The
          certificate would be shared on your email Id registered with us, once
          the payment is successful. Also, fill up the form below that helps you
          subscribe for the required certificate.
        </p>
        <p className="cerPara5">
          We look forward to certifying you and thereby enhancing your skill set
          and enriching your ever-growing profile.
        </p>
        <span className="form-heading">Subscribe here to ger Certificates</span>
        <form action="submit">
          <select name="trackSelector" id="trackSelector">
            <option value="Internship Track">InternShip Track</option>
            <option value="Market Research">Market Research</option>
            <option value="Sales">Sales</option>
            <option value="Product Management">Product Management</option>
            <option value="Project Management">Project Management</option>
            <option value="General Management">General Management</option>
            <option value="Angular Developer">Angular Developer</option>
            <option value="React Developer">React Developer</option>
            <option value="Java Developer">Java Developer</option>
            <option value="Spring Boot Developer">Spring Boot Developer</option>
            <option value="Wordpress Developer">Wordpress Developer</option>
            <option value="Text Content Preparation">
              Text Content Preparation
            </option>
            <option value="Video Content Preparation">
              Video Content Preparation
            </option>
            <option value="Audio Content Preparation">
              Audio Content Preparation
            </option>
            <option value="Graphic Content Preparation">
              Graphic Content Preparation
            </option>
          </select>
          <input
            type="text"
            placeholder={"Full Name"}
            className="grayPlaceholder"
          />

          <input
            type="text"
            placeholder="Mobile No."
            className="grayPlaceholder"
          />

          <input
            type="email"
            placeholder={"Email"}
            className="grayPlaceholder"
          />
          <input
            type="text"
            placeholder={"Payment Transaction ID"}
            className="grayPlaceholder"
          />
        </form>
        <button>Subscribe</button>
        <div className="qrCode">
          <img
            src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_363,h_483,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp"
            alt="qrCode"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
