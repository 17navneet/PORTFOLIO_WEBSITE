import React from 'react'

const Skills = () => {

    return (
        <section className="skills section" id='skills'>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Skills</h2>
                    </div>
                </div>

                <div className="row skills-layout">
                    {/* Column 1: Programming Languages & Tools */}
                    <div className="skills-container padd-15">
                        {/* Programming Languages */}
                        <div className="skills-category">
                            <h3 >Programming Languages</h3>
                            <div className="row">
                                <div className="skill-item padd-15">
                                    <h5>Python</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>C++</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>C</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="skills-category">
                            <h3 >Tools </h3>
                            <div className="row">
                                <div className="skill-item padd-15">
                                    <h5>VS-Code</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Figma</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>GIT / GITHUB</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "60%" }}></div>
                                    </div>
                                </div>
                                 <div className="skill-item padd-15">
                                    <h5>Postman</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "60%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Webdev*/}
                    <div className="skills-container padd-15">
                        <div className="skills-category">
                            <h3>Web-Dev</h3>
                            <div className="row">
                                <div className="skill-item padd-15">
                                    <h5>HTML-5</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Vanilla CSS</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Tailwind CSS</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Bootstrap</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "90%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>JS</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>React.js</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Node.js</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "70%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Express.js</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "70%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>MongoDB</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "70%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>SQL</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "60%" }}></div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>API</h5>
                                    <div className="progress">
                                       <div className="progress-in" style={{ width: "80%" }}></div>
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

export default Skills;
