import "./Hiring.css";

const Hiring = () => {
  return (
    <div className="hiringWrapperDiv">
      <div className="hiringMain">
        <h3>We are Hiring Interns</h3>
        <p className="para1">
          The Student Intern program is a structured and guided work-based
          learning program for students currently enrolled in India.
        </p>
        <p className="para2">
          There is a small registration fee, INR 100 /- (RUPEES ONE HUNDRED
          ONLY) applicable to all incoming interns as part of this One-of-a-Kind
          Point based Program. This is required not just to ensure a seamless
          on-boarding and exit process but also to supply the interns with
          relevant study material and make them aware of how a corporate setup
          works.
        </p>
        <img
          src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_358,h_478,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp"
          alt="scan code to make a payment"
        />
        <p className="para3">
          Scan the QR code to complete your payment and submit the below
          application form to start with your registration process.
        </p>
        <p className="para4">
          Please keep the payment transaction ID handy for submitting the form.
        </p>

        <p className="para5">
          Note: This internship does not offer an opportunity to earn money,
          rather helps an individual grow by working on the job and earn a
          certificate upon successful completion.
        </p>

        <p className="para6">
          Check out few of our open internship positions below Refer the
          application form for more open positions
        </p>

        <span className="course1">Digital Marketing Interns</span>

        <span className="course2">General Management Interns</span>

        <span className="course3">Technical/Software Experts</span>

        <span className="course4">Product Management Interns</span>

        <span className="course5">Content Interns and more...</span>
      </div>
      <div className="formDiv">
        <div className="bgImage">
          <img
            src="https://static.wixstatic.com/media/0c2d11194b8042ca9f11f7f681339102.jpg/v1/fill/w_1129,h_671,al_c,q_85,usm_0.66_1.00_0.01/0c2d11194b8042ca9f11f7f681339102.webp"
            alt="bgImage"
          />
        </div>
        <h3 className="formHeading">Application Form</h3>
        <span>Registration Fee Rs. 100/-</span>
        <form action="submit">
          <label htmlFor="opening">Choose relevant internship opening *</label>
          <select id="opening" required>
            <option value="" disabled></option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Market Research">Market Research</option>
            <option value="Sales">Sales</option>
            <option value="Text Content Preparation">
              Text Content Preparation
            </option>
            <option value="Graphic Content Preparation">
              Graphic Content Preparation
            </option>
            <option value="Video Content Preparation">
              Video Content Preparation
            </option>
            <option value="Audio Content Preparation">
              Audio Content Preparation
            </option>
            <option value="Angular Developer">Angular Developer</option>
            <option value="React Developer">React Developer</option>
            <option value="Java Developer">Java Developer</option>
            <option value="SpringBoot Developer">SpringBoot Developer</option>
            <option value="WordPress Developer">WordPress Developer</option>
            <option value="Product Management">Product Management</option>
            <option value="Project Management">Project Management</option>
            <option value="Program Management">Program Management</option>
            <option value="Strategic Relationship Management">
              Strategic Relationship Management
            </option>
            <option value="Entrepreneur in residence">
              Entrepreneur in residence
            </option>
            <option value="Technical Program Management">
              Technical Program Management
            </option>
          </select>
          <label htmlFor="status">Whats your employment status? *</label>
          <select id="status" required={true}>
            <option value="" disabled={true}></option>
            <option value="College Student">College Student</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="experience">
            Do you have a previous experience? *
          </label>
          <select id="experience" required={true}>
            <option value="" disabled={true}></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label htmlFor="transId">Payment Transaction ID *</label>
          <input type="text" id="transId" />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Hiring;
