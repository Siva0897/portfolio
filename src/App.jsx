import React, { useEffect } from "react";
import profilePic from "./img/profile-pic.png";


export default function App() {

  useEffect(() => {

    // -------------------------
    // Mobile Menu Toggle
    // -------------------------
    const toggleMobileMenu = () => {
      const menu = document.getElementById("mobileMenu");
      if (menu) menu.classList.toggle("hidden");
    };
    window.toggleMobileMenu = toggleMobileMenu;

    // Close menu when clicking a mobile link
    const mobileLinks = document.querySelectorAll("#mobileMenu a");
    mobileLinks.forEach((link) =>
      link.addEventListener("click", () => {
        const menu = document.getElementById("mobileMenu");
        if (menu) menu.classList.add("hidden");
      })
    );

    // -------------------------
    // Smooth Scroll
    // -------------------------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // -------------------------
    // Scroll Animation Observer
    // -------------------------
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      mobileLinks.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
    };
  }, []);

  // -------------------------
  // JSX RETURN STARTS HERE
  // -------------------------

  return (
    <div className="bg-dark-bg text-gray-200 aurora-bg min-h-screen relative">

      {/* Aurora Overlay */}
      <div className="aurora-overlay"></div>

      {/* -------------------------------- */}
      {/* NAVIGATION BAR */}
      {/* -------------------------------- */}
      <nav className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-md border-b border-dark-border z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            
            <div className="text-2xl font-bold gradient-text">Siva</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              <li><a href="#home" className="hover:text-aurora-green transition">Home</a></li>
              <li><a href="#about" className="hover:text-aurora-green transition">About</a></li>
              <li><a href="#experience" className="hover:text-aurora-green transition">Experience</a></li>
              <li><a href="#skills" className="hover:text-aurora-green transition">Skills</a></li>
              <li><a href="#services" className="hover:text-aurora-green transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-aurora-green transition">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-aurora-green transition">Testimonials</a></li>
              <li><a href="#blog" className="hover:text-aurora-green transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-aurora-green transition">Contact</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => window.toggleMobileMenu()}>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div id="mobileMenu" className="hidden md:hidden mt-4 space-y-2">
            <a href="#home" className="block py-2 hover:text-aurora-green">Home</a>
            <a href="#about" className="block py-2 hover:text-aurora-green">About</a>
            <a href="#experience" className="block py-2 hover:text-aurora-green">Experience</a>
            <a href="#skills" className="block py-2 hover:text-aurora-green">Skills</a>
            <a href="#services" className="block py-2 hover:text-aurora-green">Services</a>
            <a href="#portfolio" className="block py-2 hover:text-aurora-green">Portfolio</a>
            <a href="#testimonials" className="block py-2 hover:text-aurora-green">Testimonials</a>
            <a href="#blog" className="block py-2 hover:text-aurora-green">Blog</a>
            <a href="#contact" className="block py-2 hover:text-aurora-green">Contact</a>
          </div>
        </div>
      </nav>

      {/* -------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------- */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-slide-up">

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hello, I'm <span className="gradient-text">Siva Nagireddy Mulagolla</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Frontend Developer
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              Crafting digital experiences that illuminate the web like the Northern Lights.
              Passionate about cutting-edge technology and beautiful, functional design.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-aurora-green to-aurora-blue rounded-full text-dark-bg font-semibold hover:shadow-lg hover:shadow-aurora-green/50 transition transform hover:scale-105">
                View My Work
              </a>

              <a href="https://drive.google.com/file/d/1HgWWH-uPh8lzzNluCDoQEKqnVZZeTTeW/view?usp=sharing" target="_blank" className="px-8 py-3 border-2 border-aurora-green rounded-full hover:bg-aurora-green hover:text-dark-bg transition transform hover:scale-105">
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex justify-center space-x-6">
              <a href="https://github.com/Siva0897" target="_blank" className="text-2xl hover:text-aurora-green transition"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sivanagireddymulagolla/" target="_blank" className="text-2xl hover:text-aurora-blue transition"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank" title="Currently Not Available" className="text-2xl cursor-not-allowed"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" title="Currently Not Available" className="text-2xl cursor-not-allowed"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          <div className="absolute w-2 h-2 bg-aurora-green rounded-full animate-float"
               style={{ top: "20%", left: "10%" }}></div>

          <div className="absolute w-2 h-2 bg-aurora-blue rounded-full animate-float"
               style={{ top: "60%", left: "80%", animationDelay: "1s" }}></div>

          <div className="absolute w-2 h-2 bg-zinc-400 rounded-full animate-float"
               style={{ top: "20%", left: "50%", animationDelay: "1s" }}></div>

          <div className="absolute w-2 h-2 bg-aurora-purple rounded-full animate-float"
               style={{ top: "40%", left: "60%", animationDelay: "2s" }}></div>

          <div className="absolute w-2 h-2 bg-aurora-pink rounded-full animate-float"
               style={{ top: "80%", left: "30%", animationDelay: "3s" }}></div>

        </div>
      </section>
      {/* -------------------------------- */}
      {/* ABOUT SECTION */}
      {/* -------------------------------- */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <p className="text-gray-400 leading-relaxed">
                With over 4 years of experience in web development and
                specialize in creating immersive digital experiences that captivate
                users and drive business growth.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My journey began with a fascination for the intersection of art and
                technology. Today, I work with cutting-edge technologies to build
                scalable, performant applications that push the boundaries of what's
                possible on the web.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">

                <div className="bg-dark-card p-4 rounded-lg border border-dark-border">
                  <div className="text-3xl font-bold text-aurora-green">20+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>

                <div className="bg-dark-card p-4 rounded-lg border border-dark-border">
                  <div className="text-3xl font-bold text-aurora-purple">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>

                <div className="bg-dark-card p-4 rounded-lg border border-dark-border">
                  <div className="text-3xl font-bold text-aurora-pink">3</div>
                  <div className="text-sm text-gray-400">Best Performace Awards Won</div>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-aurora-green via-aurora-blue to-aurora-purple p-1">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <span className="text-6xl">
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* -------------------------------- */}
      {/* EXPERIENCE SECTION */}
      {/* -------------------------------- */}
      <section id="experience" className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">

            {/* 1 - Frontend Developer */}
            <div className="relative pl-8 border-l-2 border-aurora-green">

              <div className="absolute -left-2 top-0 w-4 h-4 bg-aurora-green rounded-full"></div>

              <div className="bg-dark-card p-6 rounded-lg card-hover">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-aurora-green">
                    Frontend Developer
                  </h3>
                  <span className="text-sm text-gray-400">2022 (May) - 2026 (August)</span>
                </div>

                <p className="text-gray-300 font-medium mb-2">
                  SOPEONOW
                </p>

                <p className="text-gray-400">
                  Designed and implemented frontend solutions for a healthcare management system supporting hospital-wide data visibility and administration.
                  Created dynamic role-based dashboards for hospital staff, enabling efficient monitoring and management of medical and operational data.
                  Improved application performance by refactoring legacy code, optimizing component structure, and reducing redundant renders.
                  Ensured cross-browser compatibility, accessibility, and responsive design across devices.
                </p>

              </div>
            </div>

            <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
            Learning Experience
            </h3>

            {/* 2 - Learnig Phase */}
            <div className="relative pl-8 border-l-2 border-aurora-blue">
              
              <div className="absolute -left-2 top-0 w-4 h-4 bg-aurora-blue rounded-full"></div>

              <div className="bg-dark-card p-6 rounded-lg card-hover">

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-aurora-blue">
                    Frontend Development – Learning Phase

                  </h3>
                  <span className="text-sm text-gray-400">2022</span>
                </div>

                <p className="text-gray-300 font-medium mb-2">
                  Fullstack Developer Course at NxtWave
                </p>

                <p className="text-gray-400">
                  Built interactive UIs using HTML, CSS, and JavaScript.Converted UI mockups into responsive web pages.
                  Focused on cross-browser compatibility and UI fundamentals
                </p>

              </div>
            </div>


          </div>
        </div>
      </section>
      {/* -------------------------------- */}
      {/* SKILLS SECTION */}
      {/* -------------------------------- */}

      <section id="skills" className="py-20">
        <h2 className="text-center text-4xl font-bold text-cyan-400 mb-14">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          
          {/* Production Experience */}
          <div className="bg-[#0b1d33] border border-cyan-500/20 rounded-xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Production Experience
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "jQuery"].map(skill => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Project Experience */}
          <div className="bg-[#0b1d33] border border-blue-500/20 rounded-xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              Project Experience
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS"].map(skill => (
                <span key={skill} className="skill-pill blue">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning & Practice */}
          <div className="bg-[#0b1d33] border border-purple-500/20 rounded-xl p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">
              Learning & Practice
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Django"].map(skill => (
                <span key={skill} className="skill-pill purple">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>





      {/* -------------------------------- */}
      {/* SERVICES SECTION */}
      {/* -------------------------------- */}
      <section id="services" className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Services
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* Web Dev */}
            <div className="bg-dark-card p-6 rounded-lg card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue flex items-center justify-center">
                <i className="fas fa-laptop-code text-2xl text-dark-bg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-400">
                Custom web applications built with modern frameworks and best
                practices for optimal performance.
              </p>
            </div>

            {/* Mobile */}
            <div className="bg-dark-card p-6 rounded-lg card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple flex items-center justify-center">
                <i className="fas fa-mobile-alt text-2xl text-dark-bg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
              <p className="text-gray-400">
                Native and cross-platform mobile apps that deliver seamless user
                experiences.
              </p>
            </div>

            {/* Consulting */}
            <div className="bg-dark-card p-6 rounded-lg card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-aurora-green to-aurora-purple flex items-center justify-center">
                <i className="fas fa-chart-line text-2xl text-dark-bg"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-gray-400">
                Technical consulting and strategic planning for digital
                transformation.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* -------------------------------- */}
      {/* PORTFOLIO SECTION */}
      {/* -------------------------------- */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Portfolio
          </h2>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Project 1 */}
            <a href="https://siva7jobbyapp.ccbp.tech" target="_blank" className="bg-dark-card rounded-lg overflow-hidden border border-dark-border card-hover">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60"
                alt="Project"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jobby App</h3>
                <p className="text-gray-400 text-sm">
                  A fully responsive dashboard built using React for job seekers.
                </p>
                <p className="text-gray-400 text-sm">
                  Test username: rahul, Test password: rahul@2021
                </p>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://siva7blogapp.ccbp.tech" target="_blank" className="bg-dark-card rounded-lg overflow-hidden border border-dark-border card-hover">
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=60"
                alt="Project"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bolg App UI</h3>
                <p className="text-gray-400 text-sm">
                  A blog page to check dail tech updates.
                </p>
              </div>
            </a>

            {/* Project 3 */}
            <a href="https://siva7emojigame.ccbp.tech" target="_blank" className="bg-dark-card rounded-lg overflow-hidden border border-dark-border card-hover">
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868"
                alt="Project"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emoji Game</h3>
                <p className="text-gray-400 text-sm">
                  A fun emoji matching game built with React.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>



     


      {/* -------------------------------- */}
      {/* CONTACT SECTION */}
      {/* -------------------------------- */}
      <section id="contact" className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Contact Me
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

            {/* LEFT INFO */}
            <div className="space-y-6">

              <p className="text-gray-400 leading-relaxed">
                Have a project in mind? Let's build something amazing together.
                Feel free to reach out via the form or social platforms.
              </p>

              <div className="space-y-4">

                <div className="flex items-center space-x-4">
                  <i className="fas fa-envelope text-aurora-green text-xl"></i>
                  <span>sivamulagolla@gmail.com</span>
                </div>

                <div className="flex items-center space-x-4">
                  <i className="fas fa-phone text-aurora-blue text-xl"></i>
                  <span>+91 9989337973</span>
                </div>

                <div className="flex items-center space-x-4">
                  <i className="fas fa-map-marker-alt text-aurora-purple text-xl"></i>
                  <span>Vijayawada, Andhra Pradesh</span>
                </div>

              </div>

            </div>

            {/* RIGHT FORM */}
            <form className="bg-dark-card p-8 rounded-xl border border-dark-border space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-aurora-green outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-aurora-blue outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-aurora-purple outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-aurora-green to-aurora-blue text-dark-bg font-semibold hover:shadow-lg hover:shadow-aurora-green/50 transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>




      {/* -------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------- */}
      <footer className="py-8 bg-dark-bg border-t border-dark-border text-center">

        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} Siva Portfolio. All Rights Reserved.
        </p>

        <div className="flex justify-center space-x-6 text-xl">
          <a href="https://github.com/Siva0897" target="_blank" className="hover:text-aurora-green transition">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/sivanagireddymulagolla/" target="_blank" className="hover:text-aurora-blue transition">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="#" target="_blank" title="Currently Not Available" className="cursor-not-allowed">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" target="_blank" title="Currently Not Available" className="cursor-not-allowed">
            <i className="fab fa-instagram"></i>
          </a>

        </div>

      </footer>

    </div>
  );
}
