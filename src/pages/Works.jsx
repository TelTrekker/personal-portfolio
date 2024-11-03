function Works() {
  return (
    <>
      {/* header-start T_T*/}
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid ">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="index.html">home</a>
                          </li>
                          <li>
                            <a href="Works.html">Works</a>
                          </li>
                          <li>
                            <a href="Services.html">Services</a>
                          </li>
                          <li>
                            <a href="#">
                              pages <i className="ti-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="works_details.html">work details</a>
                              </li>
                              <li>
                                <a href="elements.html">elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">about</a>
                          </li>
                          <li>
                            <a href="#">
                              blog <i className="ti-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">blog</a>
                              </li>
                              <li>
                                <a href="single-blog.html">single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
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
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-end */}
      {/* bradcam_area  */}
      <div className="bradcam_area bradcam_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ bradcam_area  */}
      {/* ================ contact section start ================= */}
      <section className="contact-section section_padding">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <div id="map" style={{ height: 480 }} />
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols={30}
                        rows={9}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder="Enter Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm btn_4 boxed-btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home" />
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet" />
                </span>
                <div className="media-body">
                  <h3>00 (440) 9865 562</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email" />
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ contact section end ================= */}
      {/* footer start */}
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="lets_talk">
                  <h3>
                    Do you have any Project? <a href="#">Let’s Talk</a>{" "}
                  </h3>
                  <p>
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae
                    tristique ante. Cras pretium rutrum egestas. Integer ultrices
                    libero sed justo vehicula, eget tincidunt tortor tempus.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                  <span>Behance</span>
                  <a href="#">
                    {" "}
                    <i className="fa fa-behance" />{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                  <span>Dribbble</span>
                  <a href="#">
                    {" "}
                    <i className="fa fa-dribbble" />{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                  <span>Medium</span>
                  <a href="#">
                    {" "}
                    <i className="fa fa-medium" />{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                  <span>Linkedin</span>
                  <a href="#">
                    {" "}
                    <i className="fa fa-linkedin" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border" />
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*/ footer end  */}
      {/* JS here */}
      {/*contact js*/}
    </>

  );
}

export default Works;
