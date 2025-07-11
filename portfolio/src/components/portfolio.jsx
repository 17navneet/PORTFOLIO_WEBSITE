import React from 'react';
import pic1 from '../assets/project1.jpg';
import pic2 from '../assets/project2.jpg';
import pic3 from '../assets/project3.jpg';
import pic4 from '../assets/project4.jpg';

const Portfolio= () => {

    return (
        <section className="portfolio section" id='portfolio'>
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading">
                        <h2>My Last Projects :</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a 
                                    href="https://github.com/17navneet/SPOTIFY_CLONE" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                <img src={pic1} alt=''></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a 
                                    href="https://github.com/17navneet/WEATHER_APP" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                <img src={pic2} alt=''></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                               <a 
                                    href="https://github.com/17navneet/TODO_LIST" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                <img src={pic3} alt=''></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a 
                                    href="https://github.com/17navneet/ECOMMERCE_WEBSITE" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                <img src={pic4} alt=''></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;