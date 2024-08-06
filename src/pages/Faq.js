import React from 'react';
import '../styling/main.css';
import ModeButtons from '../components/ModeButtons';

import emmaImage from '../screenshots/DLAMP_headshot.png';

function Faq() {
  return (
    <div className="Faq">
      
      <ModeButtons />

      <div className="header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <main className="questions-container">
        <h2 lang="en">1. How do I navigate academic integrity?</h2>
        <p lang="en">
          If you have questions about whether or not a tutor is allowed for a class you are taking, please ask your instructor and refer to Northwestern's{' '}
          <a href="https://www.northwestern.edu/provost/policies-procedures/academic-integrity/">academic integrity policies</a>.
        </p>

        <h2 lang="en">2. Can my tutor help me get extra time on exams?</h2>
        <p lang="en">
          If you need time accommodations on your exams, your peer tutors will not be able to arrange this for you. Please refer to{' '}
          <a href="https://www.northwestern.edu/accessiblenu/">AccessibleNU's website</a> for instructions on how to secure accommodations.
        </p>

        
      </main>

      <div id="images-container-mission" className="images-container-mission">
        <div className="image-text-wrapper">
          <a href={emmaImage}>
            <img
              alt="CatClass Founder, Emma Scally. Contact her with any questions you have at her email, shared beside this image."
              src={emmaImage}
            />
          </a>
          <h4>
            Questions? Concerns? Feel free to reach out to us at any time at{' '}
            <a href="mailto:emmascally2026@northwestern.edu">emmascally2026@northwestern.edu</a>.
          </h4>
        </div>
      </div>


      
    </div>
  );
}

export default Faq;
