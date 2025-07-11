import React from 'react'

const Contact= () => {

    return (
        <section className="contact section" id='contact'>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className="contact-title padd-15">Do you have any Questions ?</h3>
                <h4 className="contact-subtitle padd-15">Contact me here</h4>

                <div className="row">
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i class='fa fa-phone'></i></div>
                        <h4>Call Us On</h4>
                        <p>+91-9205518660</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i class='fa fa-map-marker-alt'></i></div>
                        <h4>Location</h4>
                        <p>Gurugram, Haryana</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i class='fa fa-envelope'></i></div>
                        <h4>Email-Id</h4>
                        <p>navneetajmani17@gmail.com</p>
                    </div>
                </div>

                <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                <h4 className="contact-subtitle padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                
                <div className="row">
                    <div className="contact-form padd-15">
                        <div className="row">
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type='text' class='form-control' placeholder='Name'></input>
                                </div>
                            </div>
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type='text' class='form-control' placeholder='Email'></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input type='text' class='form-control' placeholder='Subject'></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea name='' class='form-control' id='' placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-6 padd-15">
                                <button type='submit' class='btn'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;