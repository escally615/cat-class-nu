import React from 'react';
import '../styling/main.css';
import ModeButtons from '../components/ModeButtons';

import ellenImage from '../screenshots/ellen.png';
import rebeccaImage from '../screenshots/rebecca.png';
import ellaImage from '../screenshots/ella.png';
import missionImage from '../screenshots/missionpic.png';
import emmaImage from '../screenshots/DLAMP_headshot.png';

function Home() {
  return (
    <div className="Home">

      
      <ModeButtons />
      
      <div className="header">
        <h1>CatClass</h1>
        <p>Need help with your homework? Find a peer tutor today!</p>
      </div>

      <div className="imageheader">
        <h3>See what other Northwestern students have to say.</h3>
      </div>

      <div className="images-container">
        <div>
          <a href={ellenImage}>
            <img alt="Ellen, Class of '26 and her testimonial about how her CatClass tutor got her through chemistry." src={ellenImage} />
          </a>
          <h4>Ellen, Class of '26</h4>
          <p>"Couldn't have passed orgo without my tutor!"</p>
        </div>

        <div>
          <a href={rebeccaImage}>
            <img alt="Rebecca, Class of '27 and her testimonial about she became a tutor herself." src={rebeccaImage} />
          </a>
          <h4>Rebecca, Class of '27</h4>
          <p>"Highly recommend everyone check this out. I loved it so much I became a peer tutor myself."</p>
        </div>

        <div>
          <a href={ellaImage}>
            <img alt="Ella, Class of '25 and her testimonial about how CatClass improved her grade." src={ellaImage} />
          </a>
          <h4>Ella, Class of '25</h4>
          <p>"My calc grade went up from a C to an A! My tutor was the best."</p>
        </div>
      </div>

      <div className="nav-link">
        <a href="#images-container-mission" id="missionheader">
          <h1>Our Mission</h1>
        </a>
      </div>

      <div id="images-container-mission" className="images-container-mission">
        <div className="image-text-wrapper">
          <a href={missionImage}>
            <img alt="An illustration of people working together doing different academic tasks, representing CatClass' purpose." src={missionImage} />
          </a>
          <p lang="en">
            Our mission is to ensure equitable education for all students, regardless of their backgrounds. We understand that transitioning to college level work can be very challenging, and that many students are not adequately prepared in high school for the workload and responsibilities. Being able to ask for/receive help is integral to student success, but many students enter college without the knowledge of where to go, how to join study groups or interact with professors in office hours. Our goal is the level the playing field, provide students not only with tutors, but mentors, who can help them navigate higher education.
          </p>
        </div>
      </div>

      <div className="nav-link">
        <a href="#team-container" id="teamheader">
          <h1>Meet the Team</h1>
        </a>
      </div>

      <div id="team-container" className="team-container">
        <div>
          <a href={emmaImage}>
            <img alt="Emma Scally, the founder and main web developer of CatClass." src={emmaImage} />
          </a>
          <h4>Emma Scally, Class of '26</h4>
          <p lang="en">
            Hi! My name is Emma, and I'm the creator/designer of the CatClass website. I'm a junior in Weinberg studying computer science and data science. My passion for education started when I was a Kumon instructor, and through the years, I've taught CS and Math at iD Tech Summer Camps, and most recently, here at Northwestern as a peer guided study group leader.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
