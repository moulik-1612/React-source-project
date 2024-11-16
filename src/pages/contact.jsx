import Navbar from '../Landing Page/Navbar';
import Footer from '../Landing Page/Footer'

function Contact() {
    return (<>
    <Navbar />
        <section className="contact">
        <div className="container">
            <h1>Contact Us</h1>
            <p>Hello! I'm Moulik Tiwari, the creator of this educational platform. I'm passionate about helping students succeed in their exams by providing engaging, accessible learning resources.</p>

            <p>If you have any questions, feedback, or suggestions about how we can improve this platform, feel free to reach out to me. I would love to hear from you!</p>

            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:mouliktiwari229@gmail.com">Tap to mail</a></p>
            <p>Instagram: <a href="https://www.instagram.com/mr_moulik/" target="_blank">Tap to dm on insta</a></p>

            <p>For suggestions related to the website, be sure to message us. We value your input and strive to make this platform better for you.</p>
        </div>
    </section>
    <Footer />
    </>);
}

export default Contact;