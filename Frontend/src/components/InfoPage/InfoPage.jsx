import React from 'react';
import './App.css';

const AboutPage = () => {
  return (

      
      <section className="about-section">
        <h1>About Us</h1>
        <p>We are a team dedicated to bringing you the best food experiences...</p>
        
        <h2>Our Mission</h2>
        <p>To revolutionize how people explore and enjoy recipes.It  is a platform 
          designed to explore and share recipes while fostering community interaction. 
          It features a user-friendly interface with recipe details, team member information,
           and a feedback form, making it both functional and visually appealing.</p>

        <h2>Meet the Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://th.bing.com/th/id/OIP.o0tiTA3ZelM_9Dgc1kFKwAHaD2?rs=1&pid=ImgDetMain" alt="John Doe" />
            <h3>D.Saketh Surya</h3>
            <p>Lead,Backend</p>
          </div>
          <div className="team-member">
            <img src="https://i.pinimg.com/736x/b5/7c/db/b57cdbc9f87989a2c480195c60475d45.jpg" alt="Jane Smith" />
            <h3>B.Uday Prabhas</h3>
            <p>Designer,Frontend</p>
          </div>
          <div className="team-member">
            <img src="https://th.bing.com/th/id/OIP.MlMCGBfaQc2oi1XiOcryFAHaEL?rs=1&pid=ImgDetMain" alt="Mark Lee" />
            <h3>B.Charanjith</h3>
            <p>Frontend</p>
          </div>
          <div className='team-member'>
            <img src="https://th.bing.com/th/id/OIP.UQm6HPcmQrb2ijXzdJGzQAHaEo?rs=1&pid=ImgDetMain" alt="mark lee"/>
            <h3>Pavan</h3>
            <p>backend</p>

          </div>
        </div>

        <h2>Feedback Form</h2>
        <form>
          <input type="text" placeholder="Your name" required />
          <textarea placeholder="Your feedback" required />
          <button type="submit">Submit</button>
        </form>
      </section>
  
  );
};

export default AboutPage;

  