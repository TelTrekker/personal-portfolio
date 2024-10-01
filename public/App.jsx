import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header Start */}
      <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img src="img/logo.png" alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="Works.html">Works</a></li>
                          <li><a href="Services.html">Services</a></li>
                          <li>
                            <a href="#">Pages <i className="ti-angle-down"></i></a>
                            <ul className="submenu">
                              <li><a href="works_details.html">Work Details</a></li>
                              <li><a href="elements.html">Elements</a></li>
                            </ul>
                          </li>
                          <li><a href="about.html">About</a></li>
                          <li>
                            <a href="#">Blog <i className="ti-angle-down"></i></a>
                            <ul className="submenu">
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="single-blog.html">Single Blog</a></li>
                            </ul>
                          </li>
                          <li><a href="contact.html">Contact</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      <div className="book_btn d-none d-lg-block">
                        <a href="#">Let’s Talk</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Slider Area Start */}
      <div className="slider_area">
        <div className="single_slider d-flex align-items-center slider_bg_1">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-lg-12">
                <div className="slider_text text-center about_slide">
                  <h3>
                    Hi there, I am Jony <br />
                    Creative director based <br />
                    in New York
                  </h3>
                  <a className="boxed-btn3-line" href="#">View Works</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Area End */}

      {/* Download Area Start */}
      <div className="download_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="download_text">
                <h3>
                  I’m a Creative director based in New York, who loves clean,
                  simple & unique design. I also enjoy crafting
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="download_left">
                <p>
                  Proin laoreet elementum ligula, ac tincidunt lorem accumsan
                  nec. Fusce eget urna ante. Donec massa velit, varius a
                  accumsan ac, tempor iaculis massa. Sed placerat justo sed
                  libero varius vulputate. Ut a mi tempus massa malesuada
                  fermentum.
                </p>
                <p>
                  Sed eleifend sed nibh nec fringilla. Donec eu cursus sem,
                  vitae tristique ante. Cras pretium rutrum egestas. Integer
                  ultrices libero sed justo vehicula, eget
                </p>
                <a href="#" className="boxed-btn3-line">Download CV</a>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-6">
              <div className="progress_skills">
                <div className="single_progress">
                  <div className="label d-flex justify-content-between">
                    <span>Wireframing</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="single_progress">
                  <div className="label d-flex justify-content-between">
                    <span>UI/UX</span>
                    <span>70%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="single_progress">
                  <div className="label d-flex justify-content-between">
                    <span>Interaction design</span>
                    <span>45%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Download Area End */}

      {/* Testimonial Area Start */}
      <div className="testimonial_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title">
                <h3>What Clients Say</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="testmonial_active owl-carousel">
                <div className="single_carousel">
                  <div className="row">
                    <div className="col-xl-9 col-md-9">
                      <div className="single_testmonial">
                        <p>
                          “There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form by injected humour or randomised words
                          which don’t look even slightly believable.”
                        </p>
                        <div className="testmonial_author">
                          <div className="thumb">
                            <img src="img/case/testmonial.png" alt="Testimonial" />
                          </div>
                          <div className="author_name">
                            <h3>Kalvin Piterson</h3>
                            <span>Business Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more testimonials here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Area End */}

      {/* Footer Start */}
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="lets_talk">
                  <h3>Do you have any Project? <a href="#">Let’s Talk</a></h3>
                  <p>
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem,
                    vitae tristique ante. Cras pretium rutrum egestas. Integer
                    ultrices libero sed justo vehicula, eget tincidunt tortor
                    tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default App;
