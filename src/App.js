import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fullImage, setFullImage] = useState(null);

  return (
    <>
      <Navbar />
      <SectionWrapper id="home">
        <HomeContent setFullImage={setFullImage} />
      </SectionWrapper>
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects setFullImage={setFullImage} />
      </SectionWrapper>
      <Footer />

      {fullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => setFullImage(null)}
            >
              Back
            </button>
            <img src={fullImage} alt="Full View" className="max-w-screen-lg max-h-screen rounded" />
          </div>
        </div>
      )}
    </>
  );
};

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-gray-900 text-white sticky top-0 z-50 w-full">
    <div className="text-xl font-semibold">Quang Le</div>
    <div className="space-x-6 text-sm">
      <a href="#home" className="hover:text-cyan-400 transition">Home</a>
      <a href="#about" className="hover:text-cyan-400 transition">About</a>
      <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
    </div>
  </nav>
);

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="snap-start w-screen h-screen flex flex-col justify-center overflow-auto bg-gray-900 text-white">
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {children}
    </div>
  </section>
);

const HomeContent = ({ setFullImage }) => (
  <div className="text-center">
    <img 
      src="/images/046c252d-050a-4e7b-af2f-d2556362d83d.png" 
      alt="Quang Le" 
      className="rounded-full w-64 h-64 object-cover mx-auto mb-8 cursor-pointer" 
      onClick={() => setFullImage("/images/046c252d-050a-4e7b-af2f-d2556362d83d.png")} 
    />
    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p className="text-gray-300">Creative Designer & Developer</p>
  </div>
);

const About = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
      I’m Quang Le, a creative and analytical thinker with a hybrid background in data analysis and multimedia design. I graduated from RMIT University as a Multimedia Designer and am currently completing a Computer Science degree at California State University, Fullerton. My expertise lies in brand identity, editorial layouts, packaging design, data analysis, and interactive web development.
    </p>

    <div className="text-gray-300 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Education Timeline</h3>
      <ul className="space-y-4">
        <li><strong>2016:</strong> Graduated from RMIT University (Multimedia Design)</li>
        <li><strong>2016-2017:</strong> Attended Cypress College</li>
        <li><strong>2018-2019:</strong> Attended Orange Coast College</li>
        <li><strong>2020 - Present:</strong> California State University, Fullerton (Computer Science)</li>
      </ul>

      <h3 className="text-xl font-bold mt-10 mb-4">Skills</h3>
      <ul className="space-y-2">
        <li><strong>Brand Identity:</strong> Expert in creating visual brand guidelines and assets.</li>
        <li><strong>Magazine & Layout Design:</strong> Experienced in editorial and publication layouts.</li>
        <li><strong>Photography:</strong> Skilled in product and brand lifestyle photography.</li>
        <li><strong>Data Analysis:</strong> Proficient in analyzing business data for actionable insights.</li>
        <li><strong>Web & App Development:</strong> Focused on building responsive and interactive user interfaces.</li>
      </ul>

      <div className="mt-8">
        <a href="/resume/Quang_Le_Resume.pdf" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded transition" download>
          Download My Resume
        </a>
      </div>
    </div>
  </div>
);

const Projects = ({ setFullImage }) => (
  <div className="space-y-20">
    <div>
      <h3 className="text-2xl font-bold mb-6">Kanban Project</h3>
      <img
        src="/images/kanban-diagram.png"
        alt="Kanban Project"
        className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
        onClick={() => setFullImage("/images/kanban-diagram.png")}
      />
      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        A dynamic and responsive Kanban-style task management app that allows users to create, move, and delete tasks across different boards. Built with React for interactive UI and Firebase for real-time data updates.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6">Count to 30 – AI Strategy Game</h3>
      <video controls className="w-full h-auto rounded mb-3">
        <source src="/videos/481FinalMovie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        This web-based project recreates the strategic game "Count to 30," using the Minimax algorithm with Alpha-Beta Pruning and memoization for optimal decision-making. Built with React and JavaScript.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6">Digital Design</h3>
      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        Showcasing projects focused on brand identity, packaging, and layout design.
      </p>

      <div className="mt-10">
        <h4 className="text-xl font-bold mb-4">Shisoko Moon Cake Packaging Design</h4>
        <img
          src="/images/shisoko-packaging.png"
          alt="Shisoko Moon Cake"
          className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
          onClick={() => setFullImage("/images/shisoko-packaging.png")}
        />
        <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A refined moon cake packaging concept combining cultural elegance with modern brand identity. Focused on delivering a luxurious unboxing experience.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-xl font-bold mb-4">Corteque Wine Branding</h4>
        <img
          src="/images/corteque-wine.png"
          alt="Corteque Wine"
          className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
          onClick={() => setFullImage("/images/corteque-wine.png")}
        />
        <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A luxury wine branding project featuring a bold lion emblem and a premium bottle design to establish a strong brand presence.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-xl font-bold mb-4">Music CD Cover Redesign</h4>
        <img
          src="/images/cd-cover-redesign.png"
          alt="Music CD Cover"
          className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
          onClick={() => setFullImage("/images/cd-cover-redesign.png")}
        />
        <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A modern redesign of a classic music CD cover focusing on minimalist aesthetics and impactful typography to attract a contemporary audience.
        </p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-center text-sm text-gray-400 py-6 border-t border-gray-700 w-full">
    <p>Email: lequang449@gmail.com | Phone: (+1) 714-913-3183, (+84) 932-732-862</p>
    <p>
      <a href="https://facebook.com/yourprofile" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
    </p>
    <p className="mt-2">&copy; {new Date().getFullYear()} Quang Le. All rights reserved.</p>
  </footer>
);

export default App;
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fullImage, setFullImage] = useState(null);

  return (
    <>
      <Navbar />
      <SectionWrapper id="home">
        <HomeContent setFullImage={setFullImage} />
      </SectionWrapper>
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects setFullImage={setFullImage} />
      </SectionWrapper>
      <Footer />

      {fullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => setFullImage(null)}
            >
              Back
            </button>
            <img src={fullImage} alt="Full View" className="max-w-screen-lg max-h-screen rounded" />
          </div>
        </div>
      )}
    </>
  );
};

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-gray-900 text-white sticky top-0 z-50 w-full">
    <div className="text-xl font-semibold">Quang Le</div>
    <div className="space-x-6 text-sm">
      <a href="#home" className="hover:text-cyan-400 transition">Home</a>
      <a href="#about" className="hover:text-cyan-400 transition">About</a>
      <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
    </div>
  </nav>
);

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="snap-start w-screen h-screen flex flex-col justify-center overflow-auto bg-gray-900 text-white">
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {children}
    </div>
  </section>
);

const HomeContent = ({ setFullImage }) => (
  <div className="text-center">
    <img 
      src="/images/046c252d-050a-4e7b-af2f-d2556362d83d.png" 
      alt="Quang Le" 
      className="rounded-full w-64 h-64 object-cover mx-auto mb-8 cursor-pointer" 
      onClick={() => setFullImage("/images/046c252d-050a-4e7b-af2f-d2556362d83d.png")} 
    />
    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p className="text-gray-300">Creative Designer & Developer</p>
  </div>
);

const About = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
      I’m Quang Le, a creative and analytical thinker with a hybrid background in data analysis and multimedia design. I graduated from RMIT University as a Multimedia Designer and am currently completing a Computer Science degree at California State University, Fullerton. My expertise lies in brand identity, editorial layouts, packaging design, data analysis, and interactive web development.
    </p>

    <div className="text-gray-300 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Education Timeline</h3>
      <ul className="space-y-4">
        <li><strong>2016:</strong> Graduated from RMIT University (Multimedia Design)</li>
        <li><strong>2016-2017:</strong> Attended Cypress College</li>
        <li><strong>2018-2019:</strong> Attended Orange Coast College</li>
        <li><strong>2020 - Present:</strong> California State University, Fullerton (Computer Science)</li>
      </ul>

      <h3 className="text-xl font-bold mt-10 mb-4">Skills</h3>
      <ul className="space-y-2">
        <li><strong>Brand Identity:</strong> Expert in creating visual brand guidelines and assets.</li>
        <li><strong>Magazine & Layout Design:</strong> Experienced in editorial and publication layouts.</li>
        <li><strong>Photography:</strong> Skilled in product and brand lifestyle photography.</li>
        <li><strong>Data Analysis:</strong> Proficient in analyzing business data for actionable insights.</li>
        <li><strong>Web & App Development:</strong> Focused on building responsive and interactive user interfaces.</li>
      </ul>

      <div className="mt-8">
        <a href="/resume/Quang_Le_Resume.pdf" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded transition" download>
          Download My Resume
        </a>
      </div>
    </div>
  </div>
);

const Projects = ({ setFullImage }) => (
  <div className="space-y-20">
    <div>
      <h3 className="text-2xl font-bold mb-6">Kanban Project</h3>
      <img
        src="/images/kanban-diagram.png"
        alt="Kanban Project"
        className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
        onClick={() => setFullImage("/images/kanban-diagram.png")}
      />
      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        A dynamic and responsive Kanban-style task management app that allows users to create, move, and delete tasks across different boards. Built with React for interactive UI and Firebase for real-time data updates.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6">Count to 30 – AI Strategy Game</h3>
      <video controls className="w-full h-auto rounded mb-3">
        <source src="/videos/481FinalMovie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        This web-based project recreates the strategic game "Count to 30," using the Minimax algorithm with Alpha-Beta Pruning and memoization for optimal decision-making. Built with React and JavaScript.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-6">Digital Design</h3>
      <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
        Showcasing projects focused on brand identity, packaging, and layout design.
      </p>

      <div className="mt-10">
        <h4 className="text-xl font-bold mb-4">Shisoko Moon Cake Packaging Design</h4>
        <img
          src="/images/shisoko-packaging.png"
          alt="Shisoko Moon Cake"
          className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
          onClick={() => setFullImage("/images/shisoko-packaging.png")}
        />
        <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A refined moon cake packaging concept combining cultural elegance with modern brand identity. Focused on delivering a luxurious unboxing experience.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-xl font-bold mb-4">Corteque Wine Branding</h4>
        <img
          src="/images/corteque-wine.png"
          alt="Corteque Wine"
          className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
          onClick={() => setFullImage("/images/corteque-wine.png")}
        />
        <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A luxury wine branding project featuring a bold lion emblem and a premium bottle design to establish a strong brand presence.
        </p>
      </div>

      <div className="mt-10">
        <h4 className="text-xl font-bold mb-4">Music CD Cover Redesign</h4>
        <img
          src="/images/cd-cover-redesign.png"
          alt="Music CD Cover"
          className="rounded transform transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
          onClick={() => setFullImage("/images/cd-cover-redesign.png")}
        />
        <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A modern redesign of a classic music CD cover focusing on minimalist aesthetics and impactful typography to attract a contemporary audience.
        </p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-center text-sm text-gray-400 py-6 border-t border-gray-700 w-full">
    <p>Email: lequang449@gmail.com | Phone: (+1) 714-913-3183, (+84) 932-732-862</p>
    <p>
      <a href="https://facebook.com/yourprofile" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
    </p>
    <p className="mt-2">&copy; {new Date().getFullYear()} Quang Le. All rights reserved.</p>
  </footer>
);

export default App;

