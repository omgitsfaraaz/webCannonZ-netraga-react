import React from 'react';

const MachineLearning = () => {
    return (
        <>
        <header class="header" id="site-header">
            <div class="container">
                <div class="header-content-wrapper">
                    <div class="logo">
                        <a href="../../index.html" class="full-block-link"></a>
                        <img loading="lazy" src="../../img/netraga_logo.png" alt="Netraga" />
                        <div class="logo-text">
                            <div class="logo-title">Netraga</div>
                        </div>
                    </div>
                    <nav id="primary-menu" class="primary-menu">
                        <a
                            href="javascript:void(0)"
                            id="menu-icon-trigger"
                            class="menu-icon-trigger showhide"
                        >
                            <span class="mob-menu--title">Menu</span>
                            <span
                                id="menu-icon-wrapper"
                                class="menu-icon-wrapper"
                                style="visibility: hidden"
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
        
                        <ul class="primary-menu-menu">
                            <li class="menu-item-has-children">
                                <a href="../../index.html">Home</a>
                            </li>
                            <li class="has-megamenu menu-item-has-children">
                                <a href="./services/services.html">Services</a>
                                <div
                                    class="megamenu"
                                    style="background-image: url('../../img/menu-bg.png')"
                                >
                                    <div class="megamenu-row">
                                    <div class="col3">
                                        <ul>
                                            <li class="megamenu-item-info">
                                                <h5 class="megamenu-item-info-title">
                                                Web Development
                                                </h5>
                                                
                                            </li>
                                            <li>
                                                <a href="../web-dev/web_development.html"
                                                >Web Development<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../web-dev/reactjs.html"
                                                >React.js<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../web-dev/nodejs.html"
                                                >Node.js <i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../web-dev/django.html"
                                                >Django<i
                                                    class="seoicon-right-arrow"
                                                ></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../web-dev/chatbots.html"
                                                >Chatbots<i
                                                    class="seoicon-right-arrow"
                                                ></i
                                                ></a>
                                            </li>
                                        
                                        </ul>
                                    </div>
                                    <div class="col3">
                                        <ul>
                                            <li class="megamenu-item-info">
                                                <h5 class="megamenu-item-info-title">Mobile Development</h5>
                                                
                                            </li>
                                            <li>
                                                <a href="../mobile-dev/mobile_development.html"
                                                >Mobile Development<i
                                                    class="seoicon-right-arrow"
                                                ></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../mobile-dev/ios.html"
                                                >iOS<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../mobile-dev/android.html"
                                                >Android<i
                                                    class="seoicon-right-arrow"
                                                ></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../mobile-dev/react_native.html"
                                                >React Native<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../mobile-dev/flutter.html"
                                                >Flutter<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col3">
                                        <ul>
                                            <li class="megamenu-item-info">
                                                <h5 class="megamenu-item-info-title">Machine Learning</h5>
                                            </li>
                                            <li>
                                                <a href="./machine_learning.html"
                                                >Machine Learning<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="./deep_learning.html"
                                                >Deep Learning<i
                                                    class="seoicon-right-arrow"
                                                ></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="./computer_vision.html"
                                                >Computer Vision<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="./nlp.html"
                                                >Natural Language Processing<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="./data_annotation.html"
                                                >Data Annotation<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
            
                                    <div class="col3">
                                        <ul>
                                            <li class="megamenu-item-info">
                                                <h5 class="megamenu-item-info-title">Social Media Marketing</h5>
                                            </li>
                                            <li>
                                                <a href="../social-media/social_media_marketing.html"
                                                >Social Media Marketing<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../social-media/search_engine_optimization.html"
                                                >Search Engine Optimization<i class="seoicon-right-arrow"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="../social-media/content_writing.html"
                                                >Content Writing<i
                                                    class="seoicon-right-arrow"
                                                ></i
                                                ></a>
                                            </li>                        
                                        </ul>
                                    </div>
                                
                                </div>
                            </div>
                            </li>
            
                            
                            <li class>
                            <a href="../../clients/our_clients.html">Clients</a>
                            <ul class="dropdown">
                                <li class>
                                <a href="../../clients/our_clients.html">
                                    Our Clients
                                    <i class="seoicon-right-arrow"></i>
                                </a>
                                </li>
                                <li class>
                                <a href="../../clients/11_case_studies.html">
                                    Case Studies Page
                                    <i class="seoicon-right-arrow"></i>
                                </a>
                                </li>
                                <li class>
                                <a href="../../clients/details/project_details_ver_02.html">
                                    Project details ver2
                                    <i class="seoicon-right-arrow"></i>
                                </a>
                                </li>
                            </ul>
                            </li>
                            
                            <li class>
                            <a href="../../blog/blogs_1.html">Blog</a>
                            </li>
            
                            <li class>
                            <a href="../../about_us.html">About Us</a>
                            </li>
                            
                            <li class>
                            <a href="../../contact_us.html">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <ul class="nav-add">
                    <li></li>
                    <li></li>
                    </ul>
                    <div class="user-menu open-overlay">
                    <a href="#" class="user-menu-content js-open-aside">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    </div>
                </div>
            </div>
        </header>
      </>
    )
}

export default MachineLearning;
