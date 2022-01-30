import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <div className="my-footer">
        <div className="container top-footer-container">
          <div className="row footer-top">
            <div className="info">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="heading">
                  <h3 className="heading-title">Netraga Inc.</h3>
                  <div className="heading-line">
                    <span className="short-line"></span>
                    <span className="long-line"></span>
                  </div>
                  <p className="heading-text"></p>
                </div>
                <div className="socials">
                  <a href className="social__item">
                    <img
                      loading="lazy"
                      src="svg/circle-facebook.svg"
                      alt="facebook"
                    />
                  </a>
                  <a href className="social__item">
                    <img loading="lazy" src="svg/twitter.svg" alt="twitter" />
                  </a>
                  <a href className="social__item">
                    <img loading="lazy" src="svg/instagram.svg" alt="google" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/netraga/"
                    target="_blank"
                    className="social__item"
                  >
                    <img loading="lazy" src="svg/linkedin.svg" alt="youtube" />
                  </a>
                </div>
              </div>
              <div
                className="
                  col-lg-4
                  col-lg-offset-1
                  col-md-4
                  col-md-offset-1
                  col-sm-12
                  col-xs-12
                "
              >
                <div className="services">
                  <div className="heading">
                    <h3 className="heading-title">Services Provided</h3>
                    <div className="heading-line">
                      <span className="short-line"></span>
                      <span className="long-line"></span>
                    </div>
                  </div>
                  <ul className="list list--primary">
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="./services/web-dev/web_development.html">
                        Web Application Development
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="./services/mobile-dev/mobile_development.html">
                        Mobile Application Development
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="./services/ml/machine_learning.html">
                        Machine Learning Services
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="./services/social-media/social_media_marketing.html">
                        Social Media Marketing
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="./services//ml/data_annotation.html">
                        Data Annotation
                      </a>
                    </li>
                  </ul>

                  <ul className="list list--primary">
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="#">SEO Services</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="#">Digital Transformation</a>
                    </li>
                  </ul>
                  <ul className="list list--primary">
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="#">Product Design</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="#">UX Design</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                      <a href="#">Branding</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-down">
            <div className="contacts">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="contacts-item">
                  <div className="icon js-animate-icon">
                    <svg
                      enable-background="new 0 0 64 64"
                      version="1.1"
                      viewBox="0 0 64 64"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="  M45.1,44.2C42.9,42,39.6,40,37,42.6c-1.8,1.8-2.6,3.9-2.6,3.9s-4.3,2.3-11.7-5.2s-5.2-11.7-5.2-11.7s2.1-0.8,3.9-2.6  c2.6-2.6,0.6-5.9-1.7-8.1c-2.7-2.7-6.2-4.9-8.2-2.9c-3.7,3.7-4.4,8.4-4.4,8.4S9,35.5,18.7,45.3s20.9,11.6,20.9,11.6s4.7-0.7,8.4-4.4  C50,50.4,47.8,46.9,45.1,44.2z"
                        fill="none"
                        stroke="#fcb03b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M18.4,12.2C22.2,9.5,26.9,8,32,8c13.3,0,24,10.8,24,24c0,4-1.3,9-4.4,12.2"
                        fill="none"
                        stroke="#fcb03b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M27.3,55.6c-9.8-1.9-17.5-9.8-19.1-19.7"
                        fill="none"
                        stroke="#fcb03b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M30,21c0,0,4.4,0,5.2,0c1.2,0,1.8,0.2,1.8,1.1s0,0.7,0,1.3c0,0.6,0,1.4-1.6,2.5c-2.3,1.6-5.6,3.8-5.6,5.1c0,1.6,0.7,2,1.8,2  s5.3,0,5.3,0"
                        fill="none"
                        stroke="#fcb03b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M40,21c0,0,0,2.8,0,3.8S39.9,27,41.5,27c1.6,0,4.5,0,4.5,0v-6.1V33"
                        fill="none"
                        stroke="#fcb03b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <a href="#" className="title">
                      +91 63610 63552
                    </a>
                    <p className="sub-title">Mon-Fri 9am-6pm</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="contacts-item">
                  <div className="icon js-animate-icon">
                    <svg
                      enable-background="new 0 0 64 64"
                      version="1.1"
                      viewBox="0 0 64 64"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        fill="none"
                        points="  54,17 32,36 10,17 "
                        stroke="#f15b26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <line
                        fill="none"
                        stroke="#f15b26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        x1="10.9"
                        x2="26"
                        y1="48"
                        y2="36"
                      />
                      <path
                        d="  M32.7,49H13c-2.2,0-4-1.8-4-4V19c0-2.2,1.8-4,4-4h38c2.2,0,4,1.8,4,4v15.5"
                        fill="none"
                        stroke="#f15b26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <circle
                        cx="44.9"
                        cy="43.1"
                        fill="none"
                        r="10.1"
                        stroke="#f15b26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M44,41.4c0,0-1.3,3.4-0.9,5.1c0.4,1.7,2.6,2.1,3.7,1.1"
                        fill="none"
                        stroke="#f15b26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <g>
                        <circle cx="45.4" cy="38.3" fill="#DCE9EE" r="0.9" />
                        <path
                          d="M45.4,37.3c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9C46.4,37.8,46,37.3,45.4,37.3   L45.4,37.3z"
                          fill="#f15b26"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <a href="#" className="title">
                      info@netraga.com
                    </a>
                    <p className="sub-title">24x7 Support</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="contacts-item">
                  <div className="icon js-animate-icon">
                    <svg
                      enable-background="new 0 0 64 64"
                      version="1.1"
                      viewBox="0 0 64 64"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fill="none"
                        points="  38.7,36.4 56,32 38.7,27.6 42,22 36.4,25.3 32,8 27.6,25.3 22,22 25.3,27.6 8,32 25.3,36.4 22,42 27.6,38.7 32,56 36.4,38.7 42,42   "
                        stroke="#3cb878"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        fill="none"
                        r="4"
                        stroke="#3cb878"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M26.1,53.2c-7.9-2.2-13.9-8.6-15.6-16.7"
                        fill="none"
                        stroke="#3cb878"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M53.5,36.9c-1.8,8.1-8.2,14.6-16.3,16.5"
                        fill="none"
                        stroke="#3cb878"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M36.9,10.5c8.2,1.9,14.7,8.3,16.6,16.6"
                        fill="none"
                        stroke="#3cb878"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <path
                        d="  M10.5,27.1c1.9-8.2,8.3-14.6,16.4-16.5"
                        fill="none"
                        stroke="#3cb878"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <a href="#" className="title">
                      Bangalore, India
                    </a>
                    <p className="sub-title">HSR Layout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <span>
                Copyright © 2021
                <a href="https://www.netraga.com" className="sub-footer__link">
                  Netraga
                </a>
              </span>

              <a className="back-to-top" href="#">
                <svg className="back-to-top">
                  <use xlinkHref="#to-top" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <svg style={{ display: "none" }}>
        <symbol id="arrow-left" viewBox="122.9 388.2 184.3 85">
          <path
            d="M124.1,431.3c0.1,2,1,3.8,2.4,5.2c0,0,0.1,0.1,0.1,0.1l34.1,34.1c1.6,1.6,3.7,2.5,5.9,2.5s4.3-0.9,5.9-2.4
		c1.6-1.6,2.4-3.7,2.4-5.9s-0.9-3.9-2.4-5.5l-19.9-19.5h11.1c1.5,0,2.7-1.5,2.7-3c0-1.5-1.2-3-2.7-3h-17.6c-1.1,0-2.1,0.6-2.5,1.6
		c-0.4,1-0.2,2.1,0.6,2.9l24.4,24.4c0.6,0.6,0.9,1.3,0.9,2.1s-0.3,1.6-0.9,2.1c-0.6,0.6-1.3,0.9-2.1,0.9s-1.6-0.3-2.1-0.9
		l-34.2-34.2c0,0,0,0,0,0c-0.6-0.6-0.8-1.4-0.9-1.9c0,0,0,0,0,0c0-0.2,0-0.4,0-0.6c0.1-0.6,0.3-1.1,0.7-1.6c0-0.1,0.1-0.1,0.2-0.2
		l34.1-34.1c0.6-0.6,1.3-0.9,2.1-0.9s1.6,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1s-0.3,1.6-0.9,2.1l-24.4,24.4c-0.8,0.8-1,2-0.6,3
		c0.4,1,1.4,1.7,2.5,1.7h125.7c1.5,0,2.7-1,2.7-2.5c0-1.5-1.2-2.5-2.7-2.5H152.6l19.9-20.1c1.6-1.6,2.4-3.8,2.4-6s-0.9-4.4-2.4-6
		c-1.6-1.6-3.7-2.5-5.9-2.5s-4.3,0.9-5.9,2.4l-34.1,34.1c-0.2,0.2-0.3,0.3-0.5,0.5c-1.1,1.2-1.8,2.8-2,4.4
		C124.1,430.2,124.1,430.8,124.1,431.3C124.1,431.3,124.1,431.3,124.1,431.3z"
          />
          <path
            d="M283.3,427.9h14.2c1.7,0,3,1.3,3,3c0,1.7-1.4,3-3,3H175.1c-1.5,0-2.7,1.5-2.7,3c0,1.5,1.2,3,2.7,3h122.4
		c4.6,0,8.4-3.9,8.4-8.5c0-4.6-3.8-8.5-8.4-8.5h-14.2c-1.5,0-2.7,1-2.7,2.5C280.7,426.9,281.8,427.9,283.3,427.9z"
          />
        </symbol>
        <symbol id="arrow-right" viewBox="122.9 388.2 184.3 85">
          <path
            d="M305.9,430.2c-0.1-2-1-3.8-2.4-5.2c0,0-0.1-0.1-0.1-0.1l-34.1-34.1c-1.6-1.6-3.7-2.5-5.9-2.5c-2.2,0-4.3,0.9-5.9,2.4
		c-1.6,1.6-2.4,3.7-2.4,5.9s0.9,4.1,2.4,5.7l19.9,19.6h-11.1c-1.5,0-2.7,1.5-2.7,3c0,1.5,1.2,3,2.7,3h17.6c1.1,0,2.1-0.7,2.5-1.7
		c0.4-1,0.2-2.2-0.6-2.9l-24.4-24.5c-0.6-0.6-0.9-1.3-0.9-2.1s0.3-1.6,0.9-2.1c0.6-0.6,1.3-0.9,2.1-0.9c0.8,0,1.6,0.3,2.1,0.9
		l34.2,34.2c0,0,0,0,0,0c0.6,0.6,0.8,1.4,0.9,1.9c0,0,0,0,0,0c0,0.2,0,0.4,0,0.6c-0.1,0.6-0.3,1.1-0.7,1.6c0,0.1-0.1,0.1-0.2,0.2
		l-34.1,34.1c-0.6,0.6-1.3,0.9-2.1,0.9s-1.6-0.3-2.1-0.9c-0.6-0.6-0.9-1.3-0.9-2.1s0.3-1.6,0.9-2.1l24.4-24.4c0.8-0.8,1-1.9,0.6-2.9
		c-0.4-1-1.4-1.6-2.5-1.6H158.1c-1.5,0-2.7,1-2.7,2.5c0,1.5,1.2,2.5,2.7,2.5h119.3l-19.9,20c-1.6,1.6-2.4,3.7-2.4,6s0.9,4.4,2.4,5.9
		c1.6,1.6,3.7,2.5,5.9,2.5s4.3-0.9,5.9-2.4l34.1-34.1c0.2-0.2,0.3-0.3,0.5-0.5c1.1-1.2,1.8-2.8,2-4.4
		C305.9,431.3,305.9,430.8,305.9,430.2C305.9,430.2,305.9,430.2,305.9,430.2z"
          />
          <path
            d="M146.7,433.9h-14.2c-1.7,0-3-1.3-3-3c0-1.7,1.4-3,3-3h122.4c1.5,0,2.7-1.5,2.7-3c0-1.5-1.2-3-2.7-3H132.4
		c-4.6,0-8.4,3.9-8.4,8.5c0,4.6,3.8,8.5,8.4,8.5h14.2c1.5,0,2.7-1,2.7-2.5C149.3,434.9,148.1,433.9,146.7,433.9z"
          />
        </symbol>
        <symbol id="to-top" viewBox="0 0 32 32">
          <path
            d="M17,22 L25.0005601,22 C27.7616745,22 30,19.7558048 30,17 C30,14.9035809 28.7132907,13.1085075 26.8828633,12.3655101
         L26.8828633,12.3655101 C26.3600217,9.87224935 24.1486546,8 21.5,8 C20.6371017,8 19.8206159,8.19871575 19.0938083,8.55288165
         C17.8911816,6.43144875 15.6127573,5 13,5 C9.13400656,5 6,8.13400656 6,12 C6,12.1381509 6.00400207,12.275367 6.01189661,12.4115388
          L6.01189661,12.4115388 C4.23965876,13.1816085 3,14.9491311 3,17 C3,19.7614237 5.23249418,22 7.99943992,22 L16,22 L16,16 L12.75,19.25
           L12,18.5 L16.5,14 L21,18.5 L20.25,19.25 L17,16 L17,22 L17,22 Z M16,22 L16,27 L17,27 L17,22 L16,22 L16,22 Z"
            id="cloud-upload"
          />
        </symbol>
      </svg>

      <div className="overlay_search">
        <div className="container">
          <div className="row">
            <div className="form_search-wrap">
              <form>
                <input
                  className="overlay_search-input"
                  placeholder="Type and hit Enter..."
                  type="text"
                />
                <a href="#" className="overlay_search-close">
                  <span></span>
                  <span></span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
