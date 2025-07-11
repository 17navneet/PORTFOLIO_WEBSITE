import React from 'react'

const About= () => {

    return (
        <section class=" about section" id='about'>
            <div class='container'>
                <div class='row'>
                    <div class='section-title padd-15'>
                        <h2>About Me</h2>
                    </div>
                </div>


                <div className="row">
                    <div className="about-content ">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3> I'm Navneet Ajmani, a <span>Web Developer</span></h3>
                                <p>
                                    I’m a Computer Science undergraduate at IIIT Delhi with a deep interest in software development and full-stack web technologies. I enjoy building practical, user-focused solutions while constantly exploring new tools and frameworks. Through hands-on experience, collaboration, and mentorship, I strive to grow as a developer and take on challenges that make a real-world impact.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="personal-info">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Location: <span>Gurgaon, Haryana</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Age: <span>18</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Employment: <span>Student</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Nationality: <span>American</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Education: <span>B.Tech (Batch of 2028)</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Language: <span>English, Hindi</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Availability: <span>Open to Opportunities</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Hobbies: <span>Painting, TableTennis</span></p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="buttons padd-15">
                                        <a 
                                            href="https://www.linkedin.com/in/navneet-ajmani-7378b4321/" 
                                            className="btn" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn Profile
                                        </a>
                                        <a 
                                            href="https://github.com/17navneet" 
                                            className="btn" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Github Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="education padd-15">
                                <h3 class='title'>EDUCATION</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">

                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i class='fa fa-calendar'></i> 2024-2028
                                                </h3>
                                                <h4 class='timeline-title'>B.Tech in Computer Science and Applied Mathematics</h4>
                                                <p className="timeline-text"><b>Indraprastha Institute of Information Technology, Delhi</b></p>
                                                <p className="timeline-text"><b>CGPA: 8.2</b></p>
                                                <p className="timeline-text">Secured a 9 GPA in key subjects including Introduction to Programming, Linear Algebra, Digital Circuits, and Computer Organization, with comprehensive coursework covering Data Structures, Probability, HCI, and related areas.</p>
                                            </div>

                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i class='fa fa-calendar'></i> March 2024
                                                </h3>
                                                <h4 class='timeline-title'>CLASS 12TH - CBSE</h4>
                                                <p className="timeline-text"><b>Mount Carmel School, Dwarka, Delhi</b></p>
                                                <p className="timeline-text"><b>Percentage: 88.6%</b></p>
                                                <p className="timeline-text">Studied core subjects including Physics, Chemistry, Mathematics, English, and Physical Education.</p>
                                            </div>

                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i class='fa fa-calendar'></i> March 2022
                                                </h3>
                                                <h4 class='timeline-title'>CLASS 10TH - CBSE</h4>
                                                <p className="timeline-text"><b>Mount Carmel School, Dwarka, Delhi</b></p>
                                                <p className="timeline-text"><b>Percentage: 97.6%</b></p>
                                                <p className="timeline-text">Achieved 100/100 in Mathematics with subjects including Science, Mathematics, Social Science, English, and Hindi.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="experience padd-15">
                                <h3 class='title'>CERTIFICATIONS</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">

                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <i class='fa fa-calendar'></i> May-June 2025
                                                </h3>
                                                <h4 class='timeline-title'>Full Stack Web Development</h4>
                                                <p className="timeline-text"><b>Udemy</b></p>
                                                <p className="timeline-text">Completed a comprehensive course covering HTML, CSS, JavaScript, React, Node.js, Express.js, and SQL with hands-on project experience.</p>
                                                <p className="timeline-text">
                                                    <b>
                                                    <a href="https://drive.google.com/file/d/1H5Yngc9GjVh2VMOglVQzd_Fyoiroze1Q/view?usp=sharing" 
                                                       target="_blank" 
                                                       rel="noopener noreferrer">
                                                        CERTIFICATE  LINK
                                                    </a>
                                                    </b>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;