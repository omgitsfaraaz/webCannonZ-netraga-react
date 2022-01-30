import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header" id="site-header">
        <div className="container">
          <div className="header-content-wrapper">
            <div className="logo">
              <Link to="/" className="full-block-link"></Link>
              <img loading="lazy" src="img/netraga_logo.png" alt="Netraga" />
              <div className="logo-text">
                <div className="logo-title">Netraga</div>
              </div>
            </div>
            <nav id="primary-menu" className="primary-menu">
              <a
                href="javascript:void(0)"
                id="menu-icon-trigger"
                className="menu-icon-trigger showhide"
              >
                <span
                  id="menu-icon-wrapper"
                  className="menu-icon-wrapper"
                  style={{ visibility: "hidden" }}
                >
                  <svg width="1000px" height="1000px">
                    <path
                      id="pathD"
                      d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                    />
                    <path id="pathE" d="M 300 500 L 700 500" />
                    <path
                      id="pathF"
                      d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                    />
                  </svg>
                </span>
              </a>

              <ul className="primary-menu-menu">
                <li className="menu-item-has-children">
                  <a href>Home</a>
                </li>
                <li className="has-megamenu menu-item-has-children">
                  <a href="./services/services.html">Services</a>
                  <div
                    className="megamenu"
                    style={{
                      backgroundImage: "url('../../../public/img/menu-bg.png')",
                    }}
                  >
                    <div className="megamenu-row">
                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h5 className="megamenu-item-info-title">
                              Web Development
                            </h5>
                          </li>
                          <li>
                            <a href="services/web-dev/web_development.html">
                              Web Development
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/web-dev/reactjs.html">
                              React.js<i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/web-dev/nodejs.html">
                              Node.js <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/web-dev/django.html">
                              Django<i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/web-dev/chatbots.html">
                              Chatbots<i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h5 className="megamenu-item-info-title">
                              Mobile Development
                            </h5>
                          </li>
                          <li>
                            <a href="services/mobile-dev/mobile_development.html">
                              Mobile Development
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/mobile-dev/ios.html">
                              iOS<i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/mobile-dev/android.html">
                              Android<i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/mobile-dev/react_native.html">
                              React Native
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/mobile-dev/flutter.html">
                              Flutter<i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h5 className="megamenu-item-info-title">
                              Machine Learning
                            </h5>
                          </li>
                          <li>
                            <Link to="/service/machine-learning">
                              Machine Learning
                              <i className="seoicon-right-arrow"></i>
                            </Link>
                          </li>
                          <li>
                            <a href="services/ml/deep_learning.html">
                              Deep Learning
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/ml/computer_vision.html">
                              Computer Vision
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/ml/nlp.html">
                              Natural Language Processing
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/ml/data_annotation.html">
                              Data Annotation
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col3">
                        <ul>
                          <li className="megamenu-item-info">
                            <h5 className="megamenu-item-info-title">
                              Social Media Marketing
                            </h5>
                          </li>
                          <li>
                            <a href="services/social-media/social_media_marketing.html">
                              Social Media Marketing
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/social-media/search_engine_optimization.html">
                              Search Engine Optimization
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                          <li>
                            <a href="services/social-media/content_writing.html">
                              Content Writing
                              <i className="seoicon-right-arrow"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className>
                  <a href="#">Clients</a>
                  <ul className="dropdown">
                    <li className>
                      <a href="09_our_clients.html">
                        Our Clients
                        <i className="seoicon-right-arrow"></i>
                      </a>
                    </li>
                    <li className>
                      <a href="11_case_studies.html">
                        Case Studies Page
                        <i className="seoicon-right-arrow"></i>
                      </a>
                    </li>
                    <li className>
                      <a href="13_project_details_ver_02.html">
                        Project details ver2
                        <i className="seoicon-right-arrow"></i>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className>
                  <a href="blog/blogs_1.html">Blog</a>
                </li>

                <li className>
                  <Link to="/about">About Us</Link>
                </li>

                <li className>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <ul className="nav-add">
              <li></li>
              <li></li>
            </ul>
            <div className="user-menu open-overlay">
              <a href="#" className="user-menu-content js-open-aside">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;