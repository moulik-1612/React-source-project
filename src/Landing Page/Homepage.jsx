import { NavLink } from "react-router-dom";

function HomePage() {
    return (
    <div className="container">
        <section className="hero">
            <h1>Empowering Students to Succeed</h1>
            <p>Access high-quality educational videos for B.Com.</p>
            <NavLink className="cta-button" to='/category'>Click Here To Start Learning</NavLink>
        </section>
        
        <section className="featured-courses">
            <h2>Featured Courses</h2>
            <div className="course-card">
                <h3>B.Com Introduction</h3>
                <p>Learn the fundamentals of B.Com.</p>
            </div>
            <div className="course-card">
                <h3>Accounting Basics</h3>
                <p>Understand the basics of accounting.</p>
            </div>
            <div className="course-card">
                <h3>Business Law</h3>
                <p>Get familiar with essential business laws.</p>
            </div>
        </section>

        <section className="benefits">
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Accessible Learning</li>
                <li>Expert Instructors</li>
                <li>Interactive Content</li>
            </ul>
        </section>
        
        <section className="testimonials">
            <h2>What Our Students Say</h2>
            <p>"This platform has transformed my learning experience!" - Student A</p>
        </section>

        <section className="upcoming">
            <h2>Upcoming Features</h2>
            <p>Stay tuned for new courses based on your feedback!</p>
        </section>

        <section className="community">
            <h2>Join Our Community</h2>
            <p>Connect with fellow learners on our forums!</p>
        </section>

        <section className="resources">
            <h2>Latest Resources</h2>
            <p>Check out our blog for helpful tips and articles!</p>
        </section>

        <section className="courses-info">
    <div className="courses-container">
        <h2>Current Offerings</h2>
        <p>Currently, this site features videos exclusively for the B.Com course. However, we are committed to enhancing our platform. Based on the feedback and response we receive from our users, we plan to introduce additional courses in the future. Stay tuned for more educational resources that cater to your learning needs!</p>
    </div>
</section>
</div>
);
}

export default HomePage;