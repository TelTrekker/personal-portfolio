import { Link } from "react-router-dom";

function Home() {
  return (
    <>   
        {/* header-start */}
        <header>
        <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
            <div className="container-fluid ">
            <div className="header_bottom_border">
                <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                    <a>
                        <img src="img/logo.png" alt="" />
                    </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                    <nav>
                        <ul id="navigation">
                          <li>
                            <a href="/">home</a>
                          </li>
                          <li>
                            <Link to="/works">Works</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                        <a href="contact">Let’s Talk</a>
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
        {/* slider_area_start */}
        <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
        <div className="container">
            <div className="row align-items-center position-relative">
            <div className="col-lg-9">
                <div className="slider_text">
                <h3>
                    Hi there, I am Kristel <br />
                    <span>UI/UX Designer</span>
                </h3>
                <a className="boxed-btn3-line" href="#">
                    View Works
                </a>
                </div>
            </div>
            <div className="my_img d-none d-lg-block">
                <img src="img/about/my_img2.png" alt="" />
            </div>
            </div>
        </div>
        </div>
        </div>
        {/* slider_area_end */}
        <div className="download_area">
        <div className="container">
        <div className="row">
            <div className="col-xl-10">
            <div className="download_text">
                <h3>
                I’m a UI/UX Designer and Data Scientist based in Philippines, passionate about creating innovative, data-driven, and user-centric designs. 
                I strive to craft clean, simple, and unique interfaces, blending creativity with analytical insights.{" "}
                </h3>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6">
            <div className="download_left">
                <p>
                    Hi, I'm Kristel Magpayo from the Philippines—a passionate designer 
                    focused on creating user-centric interfaces and leveraging data to 
                    develop impactful solutions.{" "}
                </p>
                <p>
                    With a strong foundation in Information Systems and Computer Technology, 
                    I blend technical expertise with creative vision to craft designs that are both functional and data-driven.{" "}
                </p>
                <p>
                    I have experience in web development, SQL, and programming, as well as skills in copywriting and visual storytelling. 
                    My goal is to enhance user experiences through thoughtful design and data analysis, crafting interfaces that prioritize usability and clarity.{" "}
                </p>
                <a href="Resume.pdf" className="boxed-btn3-line">
                Download CV
                </a>
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
                    <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    />
                </div>
                </div>
                <div className="single_progress">
                <div className="label d-flex justify-content-between">
                    <span>UI/UX</span>
                    <span>70%</span>
                </div>
                <div className="progress">
                    <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    />
                </div>
                </div>
                <div className="single_progress">
                <div className="label d-flex justify-content-between">
                    <span>Data Analysis & Visualization</span>
                    <span>45%</span>
                </div>
                <div className="progress">
                    <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    />
                </div>
                </div>
                <div className="single_progress">
                <div className="label d-flex justify-content-between">
                    <span>Machine Learning & Data Science</span>
                    <span>40%</span>
                </div>
                <div className="progress">
                    <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        {/* service_area start  */}
        <div className="service_area">
        <div className="container">
        <div className="row">
            <div className="col-xl-12">
            <div className="section_title mb-50">
                <h3>My Services</h3>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
            <div className="single_service text-center">
                <div className="icon">
                <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <h3>UI/UX Design & Consultation</h3>
                <p>
                Provide user the Design intuitive and visually appealing user 
                interfaces for websites and mobile apps.
                </p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6">
            <div className="single_service text-center">
                <div className="icon">
                <img src="img/svg_icon/2.svg" alt="" />
                </div>
                <h3>Web Development & Responsive Design</h3>
                <p>
                Deploy and maintain personal or business websites with 
                a focus on both aesthetics and performance.
                </p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6">
            <div className="single_service text-center">
                <div className="icon">
                <img src="img/svg_icon/3.svg" alt="" />
                </div>
                <h3>Data-Driven Design Solutions</h3>
                <p>
                Use data visualization to create interfaces that 
                present compplex information in clear and understandable formats.
                </p>
            </div>
            </div>
        </div>
        </div>
        </div>
        {/* service_area end  */}
        {/* gallery_area start  */}
        <div className="gallery_area">
        <div className="container">
        <div className="row">
            <div className="col-xl-12">
            <div className="section_title mb-50">
                <h3>My Works</h3>
            </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="single_gallery">
                    <div className="thumb">
                    <img src="img/gallery/1.png" alt="" />
                    </div>
                    <div className="gallery_heading">
                    <span>PARA SYTEM</span>
                    <a href="">
                        <h4>The Para system interactive embedded IoT devices 
                            that automatically notify passengers of their destination using their smartphones. </h4>
                    </a>
                    </div>
                </div>
                <div className="single_gallery">
                    <div className="thumb">
                    <img src="img/gallery/2.png" alt="" />
                    </div>
                    <div className="gallery_heading">
                    <span>Cat Website</span>
                    <a href="">
                        <h4> The webpage a about intriguing dynamics of the human-cat relationship, 
                            noting both their charming qualities and independent nature.</h4>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="single_gallery">
                    <div className="thumb">
                    <img src="img/gallery/3.png" alt="" />
                    </div>
                    <div className="gallery_heading">
                    <span>Dormitory App System</span>
                    <a href="">
                        <h4> The system that provides a user-friendly platform to browse available dormitories, 
                            compare amenities, and connect with landlords or other students.</h4>
                    </a>
                    </div>
                </div>
                <div className="single_gallery">
                    <div className="thumb">
                    <img src="img/gallery/4.png" alt="" />
                    </div>
                    <div className="gallery_heading">
                    <span>Northwings Mobile App</span>
                    <a href="">
                        <h4>The "Northwings" website and mobile app for small businesses, 
                            particularly those specializing in chicken wings.</h4>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="more_works">
                    <a className="boxed-btn3-line" href="https://github.com/TelTrekker">
                    More Works
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        {/* gallery_area end  */}
        {/* ================ contact section start ================= */}
        <section className="contact-section section_padding">
            <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
                {/* <div id="map" style={{ height: 0px }} /> */}
            </div>
            <div className="row">
                <div className="col-12">
                <h2 className="contact-title">Contact Us</h2>
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
                    <h3>Apalit, Pampangga.</h3>
                    <p>Larlin, 2016</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon">
                    <i className="ti-email" />
                    </span>
                    <div className="media-body">
                    <h3>krystelmagpayo@laverdad.edu.ph</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon">
                    <i className="ti-email" />
                    </span>
                    <div className="media-body">
                    <h3>magpayk707@gmail.com</h3>
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
                    Do you have a project in mind? <a href="#">Let’s Talk</a>{" "}
                </h3>
                <p>
                    Let’s discuss how we can bring your vision to life! 
                    We are eager to collaborate and offer solutions tailored to your needs.
                    Whether you’re looking for design, development, or consultation, reach out today! <br />

                    Follow us on: <br />
                    Facebook: Kristel.magpayo <br />
                </p>
                
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                <span>Behance</span>
                <a href="https://www.behance.net/meehh-_-">
                    {" "}
                    <i className="fa fa-behance" />{" "}
                </a>
                </div>
            </div>
            <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                <span>Dribbble</span>
                <a href="https://dribbble.com/Magpayo">
                    {" "}
                    <i className="fa fa-dribbble" />{" "}
                </a>
                </div>
            </div>
            <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                <span>Medium</span>
                <a href="https://medium.com/@magpayok707">
                    {" "}
                    <i className="fa fa-medium" />{" "}
                </a>
                </div>
            </div>
            <div className="col-md-3">
                <div className="single_links d-flex justify-content-between align-items-center">
                <span>Linkedin</span>
                <a href="https://www.linkedin.com/in/tel-magpayo-b8720432b/">
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
        {/* link that opens popup */}
        {/* JS here */}
        {/*  */}
        {/*contact js*/}
    </>
  );
}

export default Home;
