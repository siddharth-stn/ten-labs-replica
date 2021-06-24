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
  // *** Parallax Effect Engine ----------------->
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //////////////////////////////**X**////////////////////////////////////////

  // *** Image Slider Engine (with buttons/arrows)--------------------------->
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideOne, setSlideOne] = useState("");
  const [slideTwo, setSlideTwo] = useState("hidden");
  const [slideThree, setSlideThree] = useState("hidden");
  const [slideFour, setSlideFour] = useState("hidden");

  const nextSlide = () => {
    //** Works with Forward Arrow Click */
    switch (currentSlide) {
      case 1:
        setSlideOne("hidden");
        setSlideTwo("show");
        setCurrentSlide(2);
        break;
      case 2:
        setSlideTwo("hidden");
        setSlideThree("show");
        setCurrentSlide(3);
        break;
      case 3:
        setSlideThree("hidden");
        setSlideFour("show");
        setCurrentSlide(4);
        break;
      case 4:
        setSlideFour("hidden");
        setSlideOne("show");
        setCurrentSlide(1);
        break;
    }
  };

  const prevSlide = () => {
    //** Works with back arrow Click*/
    switch (currentSlide) {
      case 4:
        setSlideFour("hidden");
        setSlideThree("show");
        setCurrentSlide(3);
        break;
      case 3:
        setSlideThree("hidden");
        setSlideTwo("show");
        setCurrentSlide(2);
        break;
      case 2:
        setSlideTwo("hidden");
        setSlideOne("show");
        setCurrentSlide(1);
        break;
      case 1:
        setSlideOne("hidden");
        setSlideFour("show");
        setCurrentSlide(4);
        break;
    }
  };
  //////////////////////////////**X**////////////////////////////////////////

  // *** Image Slider Engine (with time) -------------------------->
  useEffect(() => {
    let intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  });
  ////////////////////////*X**///////////////////////////////////////////////

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
        <div
          className="banner3-background"
          style={{ transform: `translateY(${(offsetY - 1200) * 0.5}px)` }}
        ></div>
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
          <span>Your New</span> <br />
          <span>Journey Begins Here,</span> <br />
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
      <div className="banner5">
        <div className="outer-ribbon">
          <div class="ribbon">
            <span>Our Course&nbsp;Benefits</span>
            <div class="left-cut"></div>
            <div class="band"></div>
            <div class="right-cut"></div>
          </div>
        </div>
        <div className="expert-div">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20 20 160 160"
            viewBox="20 20 160 160"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
          >
            <g>
              <path
                d="M180 180H20V20h160v160zm-154.775-5.225h149.549V25.225H25.225v149.55z"
                fill="#000016"
                data-color="1"
              ></path>
              <path
                d="M35.519 35.467v129.327h129.327V35.467H35.519zm124.102 26.189a37.305 37.305 0 0 0-8.465-12.894 37.364 37.364 0 0 0-12.083-8.069h20.548v20.963zm-63.642 38.503c-5.722 4.718-12.837 7.294-20.351 7.314h-.084c-7.539 0-14.684-2.579-20.431-7.317 5.722-4.718 12.837-7.294 20.351-7.314h.084c7.539 0 14.684 2.578 20.431 7.317zM92.58 75.367c-.02-7.919 2.842-15.182 7.588-20.808 4.875 5.772 7.546 12.999 7.565 20.643.02 7.7-2.654 14.99-7.568 20.807-4.71-5.583-7.565-12.783-7.585-20.642zm7.588 28.937c4.875 5.772 7.546 12.999 7.565 20.643.02 7.919-2.842 15.182-7.588 20.807-4.875-5.772-7.546-12.999-7.565-20.643-.02-7.918 2.842-15.181 7.588-20.807zm4.194-4.146a32.034 32.034 0 0 1 20.324-7.317h.084c7.533 0 14.672 2.574 20.416 7.304-5.539 4.557-12.62 7.307-20.336 7.326h-.083a32.031 32.031 0 0 1-20.405-7.313zm20.311-12.542a37.188 37.188 0 0 0-15.091 3.232 37.283 37.283 0 0 0 3.377-15.66c-.023-9.043-3.241-17.581-9.1-24.347 5.609-4.805 12.88-7.725 20.827-7.745h.083c17.71 0 32.142 14.385 32.187 32.106.021 8.149-3.01 15.602-8.005 21.292-6.779-5.758-15.295-8.879-24.278-8.878zm-24.501-40.487a37.247 37.247 0 0 0-10.354-6.436h20.734a37.54 37.54 0 0 0-10.38 6.436zm-3.694 3.714c-5.698 6.586-9.147 15.166-9.124 24.537a37.299 37.299 0 0 0 3.368 15.443 37.305 37.305 0 0 0-15.175-3.207h-.098c-8.933.023-17.374 3.162-24.1 8.885-5.145-5.85-7.972-13.271-7.992-21.135-.045-17.749 14.357-32.225 32.106-32.27 7.775-.033 15.161 2.718 21.015 7.747zm-48.875 49.312a37.24 37.24 0 0 0-6.858 11.113V89.045a37.233 37.233 0 0 0 6.858 11.11zm3.747 3.656c6.755 5.748 15.232 8.888 24.193 8.887h.098a37.31 37.31 0 0 0 15.112-3.22 37.164 37.164 0 0 0-3.398 15.648c.023 9.043 3.241 17.581 9.1 24.347-5.609 4.805-12.88 7.725-20.827 7.745h-.084c-8.566 0-16.625-3.326-22.7-9.369-6.095-6.064-9.464-14.138-9.486-22.736-.021-7.921 2.807-15.407 7.992-21.302zm48.806 49.387a37.275 37.275 0 0 0 10.208 6.371H89.945a37.246 37.246 0 0 0 10.211-6.371zm24.61 4.02c-7.755 0-15.089-2.734-20.916-7.734 5.91-6.821 9.133-15.438 9.109-24.549a37.299 37.299 0 0 0-3.368-15.443 37.305 37.305 0 0 0 15.175 3.207h.098c9.181-.023 17.586-3.375 24.089-8.898 5.152 5.853 7.984 13.279 8.004 21.148.045 17.748-14.357 32.225-32.106 32.27l-.085-.001zm27.932-57.073a37.519 37.519 0 0 0 6.923-11.268v22.518a37.24 37.24 0 0 0-6.923-11.25zM61.246 40.692a37.347 37.347 0 0 0-12.223 8.204 37.327 37.327 0 0 0-8.278 12.621V40.692h20.501zm-20.502 98.047a37.612 37.612 0 0 0 20.429 20.83H40.744v-20.83zm98.39 20.83a37.611 37.611 0 0 0 20.487-20.963v20.963h-20.487z"
                fill="#000016"
                data-color="1"
              ></path>
            </g>
          </svg>
          <span className="heading-span">Expert Teachers</span>
          <div className="horiz-rule-black"></div>
          <p className="banner5-para">
            Our instructors are more adept at monitoring student problems and
            assessing their level of understanding and progress, and they
            provide much more relevant, useful feedback. We are experts in
            developing and testing hypotheses about learning difficulties or
            instructional strategies.
          </p>
        </div>
        <div className="community-div">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20 20 160 160"
            viewBox="20 20 160 160"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
          >
            <g>
              <path
                d="M20 20v160h160V20H20zm154.774 154.775H25.225V25.225h149.549v149.55z"
                fill="#000016"
                data-color="1"
              ></path>
              <path
                d="M164.742 35.467H35.467v129.275h129.275V35.467zm-28.723 61.711c-.179-7.742-1.169-15.23-2.892-22.167 2.63 1.043 5.128 2.209 7.451 3.508 9.232 5.164 14.755 11.712 15.85 18.659h-20.409zm-5.225 0h-27.939l.039-28.014c8.611.247 16.858 1.541 24.27 3.77 2.177 7.419 3.423 15.656 3.63 24.244zm-27.893-33.242l.029-20.761c6.887 1.155 13.373 6.668 18.497 15.828 1.383 2.472 2.616 5.141 3.708 7.959-6.946-1.773-14.458-2.811-22.234-3.026zm-5.195-20.791l-.029 20.778c-7.789.152-15.329 1.122-22.315 2.837 1.073-2.743 2.279-5.345 3.629-7.757 5.176-9.257 11.746-14.784 18.715-15.858zm-.037 26.002l-.039 28.031H69.624c.209-8.676 1.476-16.995 3.695-24.474 7.457-2.159 15.73-3.38 24.35-3.557zM64.398 97.178h-21.14c1.095-6.947 6.618-13.495 15.85-18.659 2.561-1.432 5.331-2.707 8.262-3.827-1.773 7.026-2.791 14.626-2.972 22.486zm.001 5.225c.188 7.823 1.206 15.387 2.97 22.382-2.931-1.12-5.701-2.395-8.262-3.828-9.185-5.138-14.702-11.646-15.836-18.554h21.128zm5.226 0h27.998l-.039 27.925c-8.589-.183-16.832-1.404-24.265-3.556-2.21-7.448-3.477-15.73-3.694-24.369zm27.951 33.151l-.029 20.755c-6.909-1.133-13.418-6.65-18.557-15.836-1.349-2.412-2.555-5.012-3.628-7.754 6.956 1.707 14.461 2.677 22.214 2.835zm5.196 20.769l.029-20.778c7.811-.208 15.357-1.247 22.334-3.027-1.092 2.817-2.325 5.485-3.707 7.956-5.164 9.229-11.71 14.752-18.656 15.849zm.037-26.006l.039-27.914h27.945c-.214 8.551-1.461 16.75-3.629 24.14-7.436 2.237-15.714 3.532-24.355 3.774zm33.209-27.914h20.396c-1.134 6.908-6.651 13.417-15.836 18.554-2.323 1.299-4.821 2.466-7.452 3.509 1.716-6.906 2.706-14.358 2.892-22.063zm7.111-28.443c-3.596-2.012-7.555-3.742-11.791-5.173-1.466-4.439-3.253-8.586-5.35-12.335-2.367-4.231-5.032-7.78-7.914-10.628 8.321 2.746 15.956 7.396 22.348 13.756 6.615 6.581 11.411 14.499 14.158 23.145-2.971-3.211-6.805-6.167-11.451-8.765zm-68.7-17.508c-2.056 3.675-3.817 7.731-5.267 12.072-4.541 1.482-8.781 3.297-12.605 5.436-4.246 2.375-7.805 5.05-10.657 7.944 2.756-8.232 7.379-15.785 13.68-22.119 6.51-6.543 14.331-11.303 22.867-14.065-2.922 2.864-5.623 6.45-8.018 10.732zm-17.872 69.067c3.825 2.139 8.065 3.954 12.606 5.437 1.45 4.34 3.21 8.394 5.266 12.068 2.719 4.861 5.831 8.826 9.215 11.85-8.91-2.665-17.081-7.5-23.859-14.244-6.684-6.651-11.515-14.665-14.247-23.417 2.908 3.034 6.596 5.832 11.019 8.306zm69.431 17.505c2.096-3.748 3.883-7.893 5.349-12.331 4.236-1.432 8.196-3.162 11.792-5.174 4.835-2.705 8.785-5.799 11.803-9.163-2.652 8.99-7.507 17.236-14.303 24.067-6.736 6.77-14.868 11.646-23.751 14.358 3.344-3.012 6.419-6.946 9.11-11.757zm33.528-62.022c-3.005-9.383-8.222-17.978-15.407-25.126-7.11-7.074-15.628-12.211-24.911-15.184h40.318v40.31zm-78.512-40.31c-9.384 3.005-17.98 8.222-25.129 15.408-7.074 7.11-12.211 15.628-15.183 24.913v-40.32h40.312zm-40.312 78.513c3.005 9.384 8.222 17.98 15.408 25.129 7.11 7.074 15.626 12.211 24.909 15.183H40.692v-40.312zm78.513 40.312c9.384-3.005 17.98-8.222 25.129-15.408 7.074-7.11 12.209-15.627 15.182-24.91v40.318h-40.311z"
                fill="#000016"
                data-color="1"
              ></path>
            </g>
          </svg>
          <span className="heading-span">Online Community</span>
          <div className="horiz-rule-black"></div>
          <p className="banner5-para">
            Feel like home, with a "family of invisible friends".
          </p>
        </div>
        <div className="curriculum-div">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20 20 160 160"
            viewBox="20 20 160 160"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
          >
            <g>
              <path
                d="M20 20v160h160V20H20zm154.798 154.798H25.202V25.202h149.597v149.596z"
                fill="#000016"
                data-color="1"
              ></path>
              <path
                d="M164.76 35.449H35.501v129.259H164.76V35.449zm-5.202 70.637h-52.797l52.797-45.759v45.759zm-56.853-3.367V56.983h52.77l-52.77 45.736zm-5.202.484l-54.064-46.22h54.064v46.22zm-4.632 2.883H40.702V61.487l52.169 44.599zm-52.169 5.201h52.116l-52.116 45.168v-45.168zm56.801 2.823v45.396H45.125l52.378-45.396zm5.202.383l52.653 45.013h-52.653v-45.013zm4.255-3.206h52.598v44.966l-52.598-44.966zm52.598-70.637v11.131H40.702V40.65h118.856z"
                fill="#000016"
                data-color="1"
              ></path>
            </g>
          </svg>
          <span className="heading-span">Flexible Curriculum</span>
          <div className="horiz-rule-black"></div>
          <p className="banner5-para">
            Our expert teachers design and curate the curriculum using best
            practices and careful consideration of how people learn and retain
            information with the ongoing tech trends in the professional domain.
            We've debated every facet of our methodology, from the order in
            which to teach concepts, the analogies used to clarify them and how
            exercises should be structured to deliver the maximum educational
            punch.
          </p>
        </div>
      </div>
      <div className="banner6">
        <span>Testimonials</span>
        <div className="horiz-rule-black"></div>
        <div className="slider-div">
          <div onClick={prevSlide} className=".leftArrowDiv">
            <svg className="left-arrow" viewBox="0 0 21 41">
              <path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
            </svg>
          </div>
          <div onClick={nextSlide} className=".rightArrowDiv">
            <svg className="right-arrow" viewBox="0 0 21 41">
              <path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
            </svg>
          </div>
          <div className={slideOne}>
            <p>
              Working with TEN is a great opportunity for the students who want
              to extend their career in digital marketing!
            </p>
            <cite>-Aakriti Malik, DM Intern</cite>
          </div>
          <div className={slideTwo}>
            <p>
              Working with TEN as a digital marketing intern has been a great
              experience. I learnt a lot of new stuff and worked on different
              tasks which helped me understand the marketing field better.
            </p>
            <cite>-Harsh Rajput, General Management Intern</cite>
          </div>
          <div className={slideThree}>
            <p>
              TEN was my first ever experience into internship. Even though I
              didn't have much of an idea about my responsibilities, my mentors
              at TEN and fellow colleagues helped me a lot in making me
              understand my roles and were very cooperative throughout. ​
            </p>
            <cite>-Anjali Srivastava, Content Intern</cite>
          </div>
          <div className={slideFour}>
            <p>
              I thoroughly enjoyed my internship during this pandemic situation
              and gained valuable experience under my belt. I know this
              internship will be instrumental in getting myself a job and it
              would be glowing reference on my CV. I was very hesitant at the
              time of joining TEN due to my inexperience, but now I feel so
              happy that I was able to be a part of it as it has made me so much
              more confident and empowered. As much as this organization
              changes, I hope that it’s class remains constant.
            </p>
            <span>Thank you team TEN!</span>
            <cite>-Kshema Unni, Business Development Intern</cite>
          </div>
        </div>
      </div>
      <div className="banner7">
        <video autoplay="true" muted="true">
          <source src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/1080p/mp4/file.mp4" />
          Your Browser Does Not Support Video File.
        </video>
        <div>
          <div>
            <span>Power of</span>&nbsp;
            <span>TEN</span>&nbsp;
            <span>Consulting</span>
          </div>
          <button>Explore Here &gt;</button>
        </div>
      </div>
    </main>
  );
};

export default App;
