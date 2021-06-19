import { useState, useEffect } from "react";
import "./Reset.css";
import "./App.css";
import Online from "./Online.jsx";
import Hiring from "./Hiring.jsx";
import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header>
        <div className="header-top">
          <div className="heading-text">
            <div>
              <p>
                <span>T</span>he
              </p>
              <p>
                <span>E</span>ntrepreneurship
              </p>
              <p>
                <span>N</span>etwork
              </p>
            </div>
          </div>
          <div className="searchDiv">
            <div className="cartAndLogDiv">
              <button className="cartBtn">
                <svg
                  data-bbox="20.153 28.24 159.847 143.521"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  data-type="shape"
                >
                  <g>
                    <path d="M171.759 52.497H61.593L56.539 28.24H25.207c-3.032 0-5.054 1.565-5.054 4.043s2.021 4.043 5.054 4.043h25.268l15.161 78.835c1.127 5.026 4.808 8.086 10.107 8.086h80.856c5.299 0 8.982-3.059 10.107-8.086l13.139-55.589c1.008-4.501-3.033-7.075-8.086-7.075zm-12.128 61.653c-.194.865-1.011 2.021-3.032 2.021H76.753c-2.021 0-2.838-1.155-3.032-2.021L63.614 60.583h108.145l-12.128 53.567z"></path>
                    <path d="M84.839 135.375c-10.047 0-18.193 8.145-18.193 18.193s8.145 18.193 18.193 18.193 18.193-8.145 18.193-18.193-8.146-18.193-18.193-18.193zm0 28.299c-5.582 0-10.107-4.525-10.107-10.107s4.525-10.107 10.107-10.107 10.107 4.525 10.107 10.107-4.525 10.107-10.107 10.107z"></path>
                    <path d="M145.481 135.375c-10.047 0-18.193 8.145-18.193 18.193s8.145 18.193 18.193 18.193 18.193-8.145 18.193-18.193-8.146-18.193-18.193-18.193zm0 28.299c-5.582 0-10.107-4.525-10.107-10.107s4.525-10.107 10.107-10.107 10.107 4.525 10.107 10.107-4.525 10.107-10.107 10.107z"></path>
                  </g>
                </svg>
              </button>
              <button className="logBtn">
                <svg
                  data-bbox="0 0 50 50"
                  data-type="shape"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g>
                    <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                  </g>
                </svg>
                Log In
              </button>
            </div>
            <div className="inputDiv">
              <input type="text" placeholder="Search here..." />
              <svg viewBox="5 5 14 14">
                <path
                  fill="currentColor"
                  d="M15.683 14.6l3.265 3.265a.2.2 0 010 .282l-.8.801a.2.2 0 01-.283 0l-3.266-3.265a5.961 5.961 0 111.084-1.084zm-4.727 1.233a4.877 4.877 0 100-9.754 4.877 4.877 0 000 9.754z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="image-div"></div>
          <nav className="header-nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="link"
                  className="inactiveLink"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/online"
                  exact
                  activeClassName="link"
                  className="inactiveLink"
                >
                  Online Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hiring"
                  exact
                  activeClassName="link"
                  className="inactiveLink"
                >
                  We're Hiring
                </NavLink>
              </li>
              <li>More</li>
            </ul>
          </nav>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/online" component={Online} />
        <Route exact path="/hiring" component={Hiring} />
      </Switch>
      <footer>This is the Footer</footer>
    </div>
  );
}

const Home = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <main className="home-main">
      <div className="banner1">
        <img
          src="https://static.wixstatic.com/media/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.jpg"
          alt="banner one pic"
        />
        <div className="banner1-image-text">
          A World of Knowledge at <span>Your Fingertips</span>
        </div>
      </div>
      <div className="banner2">
        <header>About Us</header>
        <section className="sec1">
          <p>
            Learning Together <br />
            From the Comfort <br /> of Your Home
          </p>
          <button>Learn More</button>
        </section>
        <section className="sec2">
          <img
            src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_441,h_296,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
            alt="learn together"
          />
        </section>
      </div>
      <div className="banner3">
        <div className="banner3-background" style={{transform: `translateY(${(offsetY-1200) * 0.5}px)`}}></div>
        <div className="banner-wrap">
          <header>Welcome to</header>
          <h2>THE NEXT BIG THING</h2>
          <div className="horiz-rule-white"></div>
          <div className="joinBtn">Join TEN Virtual Campus</div>
        </div>
      </div>
      <div className="banner4">
        <div className="pic1">
          <p>Our Courses</p>
          <span>Your New</span> <br/>
          <span>Journey Begins Here,</span> <br/>
          <span>Today</span>
        </div>
        <div className="pic2">
          <span>Entrepreneurship</span> 
          <span>made fun</span>
          <button className="explore-btn">Explore Here</button>
        </div>
        <div className="pic3"></div>
        <div className="pic4">
          <span>Digital</span> 
          <span>Marketing</span>
          <button className="explore-btn">Explore Here</button>
        </div>
        <div className="pic5"></div>
        <div className="pic6">
          <span>Product Management</span> 
          <span>like a pro</span>
          <button className="explore-btn">Explore Here</button>
        </div>
        <div className="pic7"></div>
      </div>
      <div className="banner5"></div>
      <div className="banner6"></div>
      <div className="banner7"></div>
    </main>
  );
};

export default App;
