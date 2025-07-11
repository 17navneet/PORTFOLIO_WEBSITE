import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profilePic from '../assets/profilepic.png';

const Home = () => {
    const typedRef = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedRef.current, {
            strings: ["Web Developer", "Coder"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        return () => {
            typedInstance.current.destroy();
        };
    }, []);

    return (
        <section className="home active section" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">
                            Hello, my name is <span className="name">Navneet Ajmani</span>
                        </h3>
                        <h3 className="my-profession">
                            I'm a <span className="typing" ref={typedRef}></span>
                        </h3>
                        <p>
                            I’m enthusiastic about contributing to meaningful, real-world projects while learning through mentorship and professional growth opportunities.
                        </p>
                        <a href="#contact" className="btn resume">
                            <i className="fa fa-download"></i> Resume
                        </a>
                    </div>
                    <div className="home-img padd-15">
                        <img src={profilePic} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
