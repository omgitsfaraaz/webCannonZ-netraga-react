import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="author" content="Netraga Inc." />
        <title>
          Digital Transformation | Custom Software Development | Netraga
        </title>
        <meta
          data-react-helmet="true"
          name="description"
          content="Asia’s finest custom software development company. More than 10 years of experience, over remote developers and designers specializing in software development, mobile development and product design."
        />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://www.netraga.com"
        />
        <meta data-react-helmet="true" property="og:type" content="article" />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="Digital Transformation | Custom Software Development | Netraga"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Asia’s finest custom software development company. More than 10 years of experience, over remote developers and designers specializing in software development, mobile development and product design."
        />

        {/* css files */}

                

        {/* Script tags */}

        <script src="../js/jquery-3.4.1.js"></script>
        <script src="../js/js-plugins/crum-mega-menu.js"></script>
        <script src="../js/js-plugins/swiper.jquery.min.js"></script>
        <script src="../js/js-plugins/waypoints.js"></script>
        <script src="../js/js-plugins/jquery.drawsvg.js"></script>
        <script src="../js/js-plugins/jquery-countTo.js"></script>
        <script src="../js/js-plugins/jquery.mousewheel.js"></script>
        <script src="../js/js-plugins/jquery.mCustomScrollbar.js"></script>
        <script src="../js/js-plugins/imagesLoaded.js"></script>
        <script src="../js/js-plugins/jquery.magnific-popup.js"></script>
        <script src="../js/js-plugins/jquery.matchHeight.js"></script>
        <script src="../js/js-plugins/segment.js"></script>
        <script src="../js/js-plugins/bootstrap.js"></script>
        <script src="../js/js-plugins/jquery-circle-progress.js"></script>
        <script src="../js/js-plugins/Headroom.js"></script>
        <script src="../js/js-plugins/smooth-scroll.js"></script>
        <script src="../js/js-plugins/jquery.nice-select.js"></script>
        <script src="../js/js-plugins/fastClick.js"></script>
        <script src="../js/js-plugins/form-actions.js"></script>
        <script src="../js/js-plugins/velocity.js"></script>
        <script src="../js/js-plugins/time-line.js"></script>
        <script src="../js/js-plugins/ScrollMagic.min.js"></script>
        <script src="../js/js-plugins/animation.velocity.min.js"></script>
        <script src="../js/js-plugins/ajax-pagination.js"></script>
        <script src="../js/js-plugins/donut-chart.js"></script>
        <script src="../js/js-plugins/isotope.pkgd.min.js"></script>
        <script src="../js/js-plugins/photo-gallery.js"></script>
        <script src="../js/js-plugins/ion.rangeSlider.js"></script>
        <script src="../js/js-plugins/leaflet.js"></script>
        <script src="../js/js-plugins/MarkerClusterGroup.js"></script>
        <script src="../js/main.js"></script>

        <script src="../modules/forms/src/js/jquery.validate.min.js"></script>
        <script src="../modules/forms/src/js/sweetalert2.all.js"></script>
        <script src="../modules/forms/src/js/scripts.js"></script>
      </Helmet>
      <div className="mCustomScrollbar">
        <div className="popup right-menu">
          <div className="right-menu-wrap">
            <div className="user-menu-close js-close-aside">
              <a href="#" className="user-menu-content js-clode-aside">
                <span></span>
                <span></span>
              </a>
            </div>
            <div className="logo">
              <Link to="/" className="full-block-link"></Link>
              <img loading="lazy" src="img/netraga_logo.png" alt="Netraga" />
              <div className="logo-text">
                <div className="logo-title">Netraga</div>
              </div>
            </div>
            <p className="text">
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius est etiam processus dynamicus.
            </p>
          </div>

          <div className="widget contacts">
            <h4 className="contacts-title">Get In Touch</h4>
            <p className="contacts-text">
              Lorem ipsum dolor sit amet, duis metus ligula amet in purus, vitae
              donec vestibulum enim, tincidunt massa sit, convallis ipsum.
            </p>
            <div className="contacts-item">
              <img loading="lazy" src="img/contact4.png" alt="phone" />
              <div className="content">
                <a href="#" className="title">
                  +91 63610 63552
                </a>
                <p className="sub-title">Mon-Fri 9am-6pm</p>
              </div>
            </div>
            <div className="contacts-item">
              <img loading="lazy" src="img/contact5.png" alt="phone" />
              <div className="content">
                <a href="#" className="title">
                  info@netraga.com
                </a>
                <p className="sub-title">24x7 Support</p>
              </div>
            </div>
            <div className="contacts-item">
              <img loading="lazy" src="img/contact6.png" alt="phone" />
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
      
      <div className="content-wrapper">
      <div className="container-full-width">
        <div
          className="swiper-container main-slider"
          data-effect="fade"
          data-autoplay="4000"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-border-color">
              <div className="container">
                <div className="row table-cell">
                  <div className="col-lg-12">
                    <div className="slider-content align-center">
                      <h1
                        className="slider-content-title"
                        data-swiper-parallax="-100"
                      >
                        Get a world-class agile product team, on demand
                      </h1>
                      <h5
                        className="slider-content-text c-gray"
                        data-swiper-parallax="-200"
                      >
                      At Netraga we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency
                      </h5>
                      <div
                        className="main-slider-btn-wrap"
                        data-swiper-parallax="-300"
                      >
                        <a
                          href="services/services.html"
                          className="btn btn-medium btn--dark btn-hover-shadow"
                        >
                          <span className="text">learn more</span>
                          <span className="semicircle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="slider-thumb"
                      data-swiper-parallax="-400"
                      data-swiper-parallax-duration="600"
                    >
                      <img loading="lazy" src="img/slider1.png" alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="swiper-slide bg-green-color main-slider-bg-dark">
              <div className="container table">
                <div className="row table-cell">
                  <div className="col-lg-6 table-cell">
                    <div className="slider-content">
                      <h3
                        className="h1 slider-content-title c-dark"
                        data-swiper-parallax="-100"
                      >
                        Mobile Development
                      </h3>
                      <h5
                        className="slider-content-text"
                        data-swiper-parallax="-200"
                      >
                        Build well-designed and optimized custom mobile
                        applications with a delightful UX for both iOS and
                        Android.
                      </h5>
                      <div
                        className="main-slider-btn-wrap"
                        data-swiper-parallax="-300"
                      >
                        <a
                          href="services/mobile-dev/mobile_development.html"
                          className="btn btn-medium btn--dark btn-hover-shadow"
                        >
                          <span className="text">learn more</span>
                          <span className="semicircle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 table-cell">
                    <div
                      className="slider-thumb"
                      data-swiper-parallax="-300"
                      data-swiper-parallax-duration="500"
                    >
                      <img loading="lazy" src="img/slider5.png" alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide bg-orange-color main-slider-bg-dark">
              <div className="container table">
                <div className="row table-cell">
                  <div className="col-lg-12">
                    <div className="slider-content align-center">
                      <h3
                        className="h1 slider-content-title c-dark"
                        data-swiper-parallax="-100"
                      >
                        Web Development
                      </h3>
                      <h5
                        className="slider-content-text"
                        data-swiper-parallax="-200"
                      >
                        Create beautiful, fast and secure web applications
                        tailored exclusively for your business goals.
                      </h5>
                      <div
                        className="main-slider-btn-wrap"
                        data-swiper-parallax="-300"
                      >
                        <a
                          href="services/web-dev/web_development.html"
                          className="btn btn-medium btn--dark btn-hover-shadow"
                        >
                          <span className="text">learn more</span>
                          <span className="semicircle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="slider-thumb"
                      data-swiper-parallax="-400"
                      data-swiper-parallax-duration="600"
                    >
                      <img loading="lazy" src="img/slider4.png" alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
                swiper-slide
                bg-primary-color
                main-slider-bg-dark
                thumb-left
              "
            >
              <div className="container table">
                <div className="row table-cell">
                  <div className="col-lg-5 table-cell">
                    <div className="slider-content">
                      
                      <h3
                        className="h1 slider-content-title c-dark"
                        data-swiper-parallax="-100"
                      >
                        Machine Learning
                      </h3>
                      <h6
                        className="slider-content-text"
                        data-swiper-parallax="-200"
                      >
                        It is the process of building applications that learn from data and computers learn to perform tasks without being explicitly programmed to do so
                      </h6>
                      <div
                        className="main-slider-btn-wrap"
                        data-swiper-parallax="-300"
                      >
                        <a
                          href="services/ml/machine_learning.html"
                          className="btn btn-medium btn--dark btn-hover-shadow"
                        >
                          <span className="text">learn more</span>
                          <span className="semicircle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 table-cell">
                    <div
                      className="slider-thumb"
                      data-swiper-parallax="-300"
                      data-swiper-parallax-duration="500"
                    >
                      <img loading="lazy" src="img/slider2.png" alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide bg-secondary-color main-slider-bg-dark">
              <div className="container table">
                <div className="row table-cell">
                  <div className="col-lg-6 table-cell">
                    <div className="slider-content">
                      <h3
                        className="h1 slider-content-title c-dark"
                        data-swiper-parallax="-100"
                      >
                        Social Media Marketing Services
                      </h3>
                      <h5
                        className="slider-content-text"
                        data-swiper-parallax="-200"
                      >
                        An effective social strategy can help you grow your
                        business, maintain your social presence and engage with
                        the audience.
                      </h5>
                      <div
                        className="main-slider-btn-wrap"
                        data-swiper-parallax="-300"
                      >
                        <a
                          href="services/social-media/social_media_marketing.html"
                          className="btn btn-medium btn--dark btn-hover-shadow"
                        >
                          <span className="text">learn more</span>
                          <span className="semicircle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 table-cell">
                    <div
                      className="slider-thumb"
                      data-swiper-parallax="-300"
                      data-swiper-parallax-duration="500"
                    >
                      <img loading="lazy" src="img/slider3.png" alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          <svg className="btn-next btn-next-black">
            <use xlinkHref="#arrow-right" />
          </svg>
          <svg className="btn-prev btn-prev-black">
            <use xlinkHref="#arrow-left" />
          </svg>

          <div className="slider-slides">
            <a
              href="#"
              className="slides-item bg-border-color main-slider-bg-light"
            >
              <div className="content">
                <div className="text-wrap">
                  <h4 className="slides-title">About Netraga</h4>
                </div>
                <div className="slides-number">01</div>
              </div>
            </a>

            <a href="#" className="slides-item bg-green-color">
              <div className="content">
                <div className="text-wrap">
                  <h4 className="slides-title">Mobile Development</h4>
                </div>
                <div className="slides-number">02</div>
              </div>
            </a>

            <a href="#" className="slides-item bg-orange-color">
              <div className="content">
                <div className="text-wrap">
                  <h4 className="slides-title">Web Development</h4>
                </div>
                <div className="slides-number">03</div>
              </div>
            </a>

            <a href="#" className="slides-item bg-primary-color">
              <div className="content">
                <div className="text-wrap">
                  <h4 className="slides-title">Machine Learning</h4>
                </div>
                <div className="slides-number">04</div>
              </div>
            </a>
            
            <a href="#" className="slides-item bg-secondary-color">
              <div className="content">
                <div className="text-wrap">
                  <h4 className="slides-title">Social Media Marketing</h4>
                </div>
                <div className="slides-number">05</div>
              </div>
            </a>
            
          </div>
        </div>
      </div>

      <div className="container info-boxes pt100 pb100">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="info-box--standard" data-mh="info-boxes">
              <div className="info-box-image">
                <img loading="lazy" src="img/1_flow.png" alt="image" />
              </div>
              <div className="info-box-content">
                <h5 className="info-box-title">Ideation & Evaluation</h5>
                <p className="text">
                  Give your product idea a shape. Plan and evaluate the
                  essential features of your product to accomplish your business
                  goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="info-box--standard" data-mh="info-boxes">
              <div className="info-box-image">
                <img loading="lazy" src="img/2_flow.png" alt="image" />
              </div>
              <div className="info-box-content">
                <h5 className="info-box-title">Wireframing</h5>
                <p className="text">
                  Wireframing is a visual guide that represents the skeletal
                  framework of a product.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="info-box--standard" data-mh="info-boxes">
              <div className="info-box-image">
                <img loading="lazy" src="img/3_flow.png" alt="image" />
              </div>
              <div className="info-box-content">
                <h5 className="info-box-title">UX Review</h5>
                <p className="text">
                  Eliminate all UX issues to get a truly appealing and
                  streamlined experience that users will love.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="info-box--standard" data-mh="info-boxes">
              <div className="info-box-image">
                <img loading="lazy" src="img/4_flow.png" alt="image" />
              </div>
              <div className="info-box-content">
                <h5 className="info-box-title">Product Design</h5>
                <p className="text">
                  Craft beautiful and engaging digital products that impress
                  your customers from the first moment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="info-box--standard" data-mh="info-boxes">
              <div className="info-box-image">
                <img loading="lazy" src="img/5_flow.png" alt="image" />
              </div>
              <div className="info-box-content">
                <h5 className="info-box-title">Product Development</h5>
                <p className="text">
                  Implement beautiful and responsive user interfaces that are
                  highly-interactive and give users a native-like experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="info-box--standard" data-mh="info-boxes">
              <div className="info-box-image">
                <img loading="lazy" src="img/6_flow.png" alt="image" />
              </div>
              <div className="info-box-content">
                <h5 className="info-box-title">24x7 Support</h5>
                <p className="text">
                  The project may be completed, but the product is never
                  finished. We provide support for incremental improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="seo-score scrollme">
            <div className="container">
              <div className="row">
                <div
                  className="
                    col-lg-8
                    col-lg-offset-2
                    col-md-8
                    col-md-offset-2
                    col-xs-12
                    col-sm-12
                  "
                >
                  <div className="seo-score-content align-center">
                    <div className="heading align-center">
                      <h4 className="h1 heading-title">
                        Want a free evaluation of your business?
                      </h4>
                      <p className="heading-text">
                        Fill the details below, we'll get back to you within 24
                        hours!
                      </p>
                    </div>
                    <div className="seo-score-form">
                      <form
                        className="seo-score-form input-inline crumina-submit"
                        data-nonce="crumina-submit-form-nonce"
                        data-type="standard"
                        action="modules/forms/submit.php"
                      >
                        <div className="row">
                          <div
                            className="
                              col-lg-8
                              no-padding
                              col-md-12 col-xs-12 col-sm-12
                            "
                          >
                            <input
                              name="site"
                              className="input-dark site"
                              placeholder="Type in your Website URL"
                              required
                            />
                          </div>
                          <div
                            className="
                              col-lg-4
                              no-padding
                              col-md-12 col-xs-12 col-sm-12
                            "
                          >
                            <input
                              name="email"
                              className="input-dark e-mail"
                              placeholder="Your Email"
                              type="email"
                              required
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-medium btn--green btn-hover-shadow"
                        >
                          <span className="text">Check Up!</span>
                          <span className="semicircle"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="images">
              <img loading="lazy" src="img/seoscore1.png" alt="image" />
              <img loading="lazy" src="img/seoscore2.png" alt="image" />
              <img loading="lazy" src="img/seoscore3.png" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row medium-padding120">
          <div className="col-lg-12">
            <div className="offers">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  <div className="heading">
                    <h4 className="h1 heading-title">
                      Bespoke digital solutions for your business
                    </h4>
                    <div className="heading-line">
                      <span className="short-line"></span>
                      <span className="long-line"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="heading">
                    <p className="heading-text">
                      At Netraga, we offer a complete range of services that
                      build up business value
                    </p>
                  </div>
                  <ul className="list list--secondary">
                    <li>
                      <i className="seoicon-check"></i>
                      <a className="" href="#">Web Application Development</a>
                    </li>
                    <li>
                      <i className="seoicon-check"></i>
                      <a href="#">Mobile Application Development</a>
                    </li>
                    <li>
                      <i className="seoicon-check"></i>
                      <a href="#">Machine Learning Services</a>
                    </li>
                    <li>
                      <i className="seoicon-check"></i>
                      <a href="#">Digital Marketing Solutions</a>
                    </li>
                    <li>
                      <i className="seoicon-check"></i>
                      <a href="#">Search Engine Optimization</a>
                    </li>
                  </ul>
                  <a
                    href="03_services.html"
                    className="btn btn-medium btn-border c-primary"
                  >
                    <span className="text">Learn More</span>
                    <span className="semicircle"></span>
                  </a>
                  <a
                    href="10_testimonials.html"
                    className="btn btn-medium btn--primary btn-hover-shadow"
                  >
                    <span className="text">Get a Quote</span>
                    <span className="semicircle"></span>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="offers-thumb">
                    <img loading="lazy" src="img/offers1.png" alt="offers" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="our-video js-equal-child">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">
              <div className="video theme-module">
                <div className="video-thumb"></div>
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
                no-padding
              "
            >
              <div
                className="
                  content
                  theme-module
                  centered-on-mobile
                  medium-padding100
                "
              >
                <div className="heading">
                  <h4 className="h1 heading-title">
                    Experts in every aspect of the product lifecycle
                  </h4>
                  <div className="heading-line">
                    <span className="short-line"></span>
                    <span className="long-line"></span>
                  </div>
                  <h3 className="heading-text">
                    We deploy world-className agile product teams on demand. Teams
                    that can design, build, ship and scale your vision in the
                    most efficient way. Whether you're a Fortune 500 or a
                    startup in stealth mode - we give our clients the creative,
                    technical and business talent they need to succeed.
                  </h3>
                </div>
                <a href="02_abouts.html" className="btn btn-medium btn--secondary">
                  <span className="text">About Us</span>
                  <span className="semicircle"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="background-mountains medium-padding120 scrollme">
            <div className="images">
              <img loading="lazy" src="img/mountain1.png" alt="mountain" />
              <img loading="lazy" src="img/mountain2.png" alt="mountain" />
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="
                    col-lg-8
                    col-lg-offset-2
                    col-md-8
                    col-md-offset-2
                    col-sm-12
                    col-xs-12
                  "
                >
                  <div className="heading align-center">
                    <h4 className="h1 heading-title">
                      More than 10 years in the game and we're just getting
                      started.
                    </h4>
                    <div className="heading-line">
                      <span className="short-line"></span>
                      <span className="long-line"></span>
                    </div>
                    <p className="heading-text">
                      We design and develop web and mobile applications for our
                      clients worldwide, focusing on outstanding user
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row align-center">
                <div className="btn-block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="testimonial-slider scrollme">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="heading">
                    <h4 className="h1 heading-title">
                      Here is what our clients say
                    </h4>
                    <div className="heading-line">
                      <span className="short-line bg-yellow-color"></span>
                      <span className="long-line bg-yellow-color"></span>
                    </div>
                    <p className="heading-text c-white"></p>
                  </div>
                  <div className="signature js-animate-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="60"
                    >
                      <path
                        fill="none"
                        stroke="#2f2c2c"
                        stroke-width="1.4"
                        d="M24.78 42.5C11.28 41.06.96 36 1.16 26.86 1.62 11.6 16.76 3.6 28.13 3.25c5.44-.16 9.8 2.38 10.2 5.8.86 7.66-19.23 15.62-19.23 15.62s17.86-6.57 24.66 2.2c2.8 3.6-11.8 10.65-11.8 10.65s-8.8 3.35-7.65-.24c1.78-5.52 16.8-10.1 18.42-10.3 3.17-.4 7.1-.4 8 .12 1.33.78-1.7 4.14-.94 4.86.76.72 3.82-2.55 3.94-1.97.12.57-.64 2.63.58 3 1.2.38 2.3-1.1 4.28-1.5 1.97-.4 1.83-.44 3.6-.12 1.76.32 2.1.64 3.47 1.4 1.36.74.86 2.22 1.96 1.6 1.1-.6 1.43-4.16 2.44-4.04 1.02.1.03 5.38 1.63 4.5 1.6-.85 4.74-7.97 4.74-7.97s-.82 4.04 0 3.93c3.14-.4 8.12-2.57 14.48-3.36 6.37-.78 8.67-.35 11 .24 1.92.48 2.67 2.3 2.67 2.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill="none"
                        stroke="#2f2c2c"
                        stroke-width="1.4"
                        d="M113.7 15.75s-1.1-2.78-3.6-2.08c-5.83 1.62-16.2 7.68-16.44 15.63-.46 16.3 21.1 11.14 22.7 11 13.6-1.2 17.38-9.96 17.36-14.48-.06-14.3-19.07-10.3-21.07-10.07-7.9.92-10.48 1.57-10.48 1.57"
                      />
                      <path
                        fill="none"
                        stroke="#2f2c2c"
                        stroke-width="1.4"
                        d="M119.7 1.05c-2.53 13.9-5.1 27.83-2.53 41.44"
                        stroke-linecap="round"
                      />
                      <path
                        fill="none"
                        stroke="#2f2c2c"
                        stroke-width="1.4"
                        d="M133.6 27.8c-6.62-.42-12.6.37-17.36 3.35"
                      />
                      <path
                        fill="none"
                        stroke="#2f2c2c"
                        stroke-width="1.4"
                        d="M131.52 32.77s3.95-.13 8.34-.93c2.4-.43 5-1.73 7.87-1.85 2.87-.12 1.74 1.44 3.6 1.38 4.62-.14 7.98-.3 14.92-.7 6.95-.4 9.76-2.76 12.86-.92 1.7 1 1.4 3.13 1.4 3.13"
                        stroke-linecap="round"
                      />
                      <path
                        fill="none"
                        stroke="#2f2c2c"
                        stroke-width="1.4"
                        d="M153.52 31.03s2.27-2.74-.7-3.35c-3.36-.7-3.7 2.43-3.7 2.43"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-lg-offset-1 col-md-8 col-sm-12 col-xs-12"
                >
                  <div className="testimonial-item">
                    <div
                      className="
                        swiper-container
                        testimonial__thumb
                        overflow-visible
                      "
                      data-effect="fade"
                      data-loop="false"
                    >
                      <div className="swiper-wrapper">
                        <div className="testimonial-slider-item swiper-slide">
                          <div className="testimonial-content">
                            <p className="text" data-swiper-parallax="-200">
                              “The best agency we’ve worked with so far. Netraga
                              understands our product and is able to add new
                              features with a great focus on speed to market.“
                            </p>
                            <a
                              href="#"
                              className="author"
                              data-swiper-parallax="-150"
                              >Michael Schmitt</a
                            >
                            <a
                              href="#"
                              className="company"
                              data-swiper-parallax="-150"
                              >CTO - Enki Learning</a
                            >
                          </div>
                          <div className="avatar" data-swiper-parallax="-50">
                            <img
                              loading="lazy"
                              src="img/avatar.png"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div className="testimonial-slider-item swiper-slide">
                          <div className="testimonial-content">
                            <p className="text" data-swiper-parallax="-200">
                              Our cooperation with Netraga is a true
                              partnership. Whenever we faced challenges this
                              year, we could rely on Netguru for our urgent
                              staffing needs and time-critical deliverables.
                            </p>
                            <a
                              href="#"
                              className="author"
                              data-swiper-parallax="-150"
                              >Jonathan Woakes</a
                            >
                            <a
                              href="#"
                              className="company"
                              data-swiper-parallax="-150"
                              >CPO - Shepper Inc.</a
                            >
                          </div>
                          <div className="avatar" data-swiper-parallax="-50">
                            <img
                              loading="lazy"
                              src="img/avatar.png"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div className="testimonial-slider-item swiper-slide">
                          <div className="testimonial-content">
                            <p className="text" data-swiper-parallax="-200">
                              I’ve had a long-lasting partnership with Netraga.
                              They always try to make things possible.
                            </p>
                            <a
                              href="#"
                              className="author"
                              data-swiper-parallax="-150"
                              >Susanne Paulson</a
                            >
                            <a
                              href="#"
                              className="company"
                              data-swiper-parallax="-150"
                              >COO - Babble</a
                            >
                          </div>
                          <div className="avatar" data-swiper-parallax="-50">
                            <img
                              loading="lazy"
                              src="img/avatar.png"
                              alt="avatar"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-pagination"></div>
                      <div className="quote">
                        <i className="seoicon-quotes"></i>
                      </div>
                    </div>
                    <div className="testimonial__thumb-img">
                      <img
                        loading="lazy"
                        src="img/testimonial1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-img">
              <img loading="lazy" src="img/testimonial2.png" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-green-color">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="subscribe scrollme">
                <div
                  className="
                    col-lg-6
                    col-lg-offset-5
                    col-md-6
                    col-md-offset-5
                    col-sm-12
                    col-xs-12
                  "
                >
                  <h4 className="subscribe-title">
                    Subscribe to our newsletter! Don't worry we wont spam you :)
                  </h4>
                  <form
                    className="subscribe-form crumina-submit"
                    method="post"
                    data-nonce="crumina-submit-form-nonce"
                    data-type="standard"
                    action="modules/forms/submit.php"
                  >
                    <input
                      className="input-standard-grey input-white"
                      name="email"
                      placeholder="Your Email Address"
                      type="email"
                      required
                    />
                    <button className="subscr-btn">
                      subscribe
                      <span className="semicircle--right"></span>
                    </button>
                  </form>
                  <div className="sub-title"></div>
                </div>
                <div className="images-block">
                  <img
                    loading="lazy"
                    src="img/subscr-gear.png"
                    alt="gear"
                    className="gear"
                  />
                  <img
                    loading="lazy"
                    src="img/subscr1.png"
                    alt="mail"
                    className="mail"
                  />
                  <img
                    loading="lazy"
                    src="img/subscr-mailopen.png"
                    alt="mail"
                    className="mail-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
