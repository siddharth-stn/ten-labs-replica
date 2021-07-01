import "./Online.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Online = () => {
  return (
    <div className="onlineWrapper">
      <aside className="asideFilter">
        <h2>Filter by</h2>
        <hr />
        <div className="priceSliderDiv">
          <span>Price</span>
          <div className="sliderDiv">
            <Range className="range" />
          </div>
        </div>
        <hr />
      </aside>
      <div className="mainOnlineDiv">
        <div className="dropdown">
          <select name="SortBy" id="sort">
            <option value="" disabled selected>
              Sort By
            </option>
            <option value="Newest">Newest</option>
            <option value="Price(low to high)">Price(low to high)</option>
            <option value="Price(high to low)">Price(high to low)</option>
            <option value="Name A-Z">Name A-Z</option>
            <option value="Name Z-A">Name Z-A</option>
          </select>
        </div>
        <div className="content">
          <div className="content1">
            <div className="showOnHover">
              <a href="#">Quick View</a>
            </div>
            <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content2">
          <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content3">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content4">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content5">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content6">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content7">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content8">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content9">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content10">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content11">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content12">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content13">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content14">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content15">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content16">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content17">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content18">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content19">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content20">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content21">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content22">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content23">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content24">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content25">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content26">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content27">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content28">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content29">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content30">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content31">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content32">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content33">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content34">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content35">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
          <div className="content36">
              <div className="imgDiv">
              <img
                src="https://static.wixstatic.com/media/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.jpg/v1/fill/w_320,h_157,al_c,q_80/ffd844_95f0b1a2beb74a228fec873a16af5a21~mv2.webp"
                alt="cont1"
              />
            </div>
            <div className="hook">
              <svg
                viewBox="0 0 73 74"
                fill="currentColor"
                width="73"
                height="74"
              >
                <path
                  d="M43.333,37.25L38,42.14V21H36V42.14l-5.333-4.89-1.333,1.417,7.667,7,7.667-7ZM22,51H52v2H22V51Z"
                  class="cls-2 content"
                ></path>
              </svg>
            </div>
            <h3>Sales: Internship + Training + Career Councelling + Resume & LinkedIn Profile</h3>
            <span>&#8377;200.00</span>
          </div>
        </div>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Online;
