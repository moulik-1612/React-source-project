import Footer from "../Landing Page/Footer";
import Navbar from "../Landing Page/navbar";

function About() {
    return (

    <div>    
    <Navbar />    
    <section className="about">
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>FutureWise</strong>, where we aim to make learning accessible and engaging for students around the globe. Our platform is designed to provide high-quality educational videos, interactive content, and the support students need to excel in their exams.
            </p>
            <p>
                Whether you're studying for school exams, college entrance, or any other academic goal, our courses are tailored to help you succeed. We are committed to making education accessible, flexible, and effective for all students, no matter where they are.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to empower students with the knowledge and tools to succeed academically and beyond. We believe that education should be simple, accessible, and effective.
            </p>
            <h2>Our Team</h2>
            <p>
                Our team consists of experienced educators and developers passionate about creating the best educational experience for our users. Together, we strive to continually improve the platform and add new content based on student needs.
            </p>
        </div>
    </section>
    <Footer />
    </div>
);
}

export default About;