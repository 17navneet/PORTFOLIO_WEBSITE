import React, { useEffect, useRef } from 'react';

const Sidebar = () => {
    const navRef = useRef(null);
    const asideRef = useRef(null);
    const togglerRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const navList = nav.querySelectorAll("li");
        const totalNavList = navList.length;
        const allSection = document.querySelectorAll("section");
        const totalSection = allSection.length;

        // Function to show a section based on clicked nav item
        function showSection(element) {
            // Remove active class from all sections
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove("active");
            }

            const target = element.getAttribute("href").split("#")[1];
            const targetSection = document.querySelector("#" + target);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        }

        // Toggling sidebar + sections for mobile view
        const navTogglerBtn = document.querySelector(".nav-toggler");
        const aside = document.querySelector(".aside");

        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.toggle("open");
            }
        }

        navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

        for (let i = 0; i < totalNavList; i++) {
            const a = navList[i].querySelector("a");

            a.addEventListener("click", function (e) {
                e.preventDefault();

                // Remove all "back-section" classes first
                for (let i = 0; i < totalSection; i++) {
                    allSection[i].classList.remove("back-section");
                }

                // Find currently active nav link and mark its section as "back-section"
                for (let j = 0; j < totalNavList; j++) {
                    const navLink = navList[j].querySelector("a");

                    if (navLink.classList.contains("active")) {
                        const targetId = navLink.getAttribute("href").split("#")[1];
                        const targetSection = document.querySelector(`#${targetId}`);
                        if (targetSection) {
                            targetSection.classList.add("back-section");
                        }
                    }

                    // Remove "active" from all nav links
                    navLink.classList.remove("active");
                }

                // Add "active" to clicked nav link
                this.classList.add("active");

                // Show the clicked section
                showSection(this);
            });
        }
    }, []);

    return (
        <div className='aside' ref={asideRef}>
            <div className='logo'>
                <a href='#'><span>N</span></a>
            </div>
            <div className="nav-toggler" ref={togglerRef}>
                <span></span>
            </div>
            <ul className='nav' ref={navRef}>
                <li><a href='#home' className='active'><i className='fa fa-home'></i>Home</a></li>
                <li><a href='#about'><i className='fa fa-user'></i>About</a></li>
                <li><a href='#skills'><i className='fa fa-list'></i>Skills</a></li>
                <li><a href='#portfolio'><i className='fa fa-briefcase'></i>Projects</a></li>
                <li><a href='#contact'><i className='fa fa-comments'></i>Contact</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
