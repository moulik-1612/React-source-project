import Footer from "../Landing Page/Footer";
import Navbar from "../Landing Page/Navbar";

function Help() {
    return (<>
    <Navbar />
        <section className="help">
        <div className="help-container">
            <h1>Help</h1>
            <p><strong>Need Assistance or Have a Suggestion?</strong></p>
            <p>
                If you're experiencing any issues while using the platform or have suggestions that could help us improve, we’d love to hear from you! Our goal is to provide the best possible learning experience, and your feedback is essential in helping us achieve that.
            </p>
            
            <h2>Common Issues:</h2>
            <ul>
                <li><strong>Videos not loading properly?</strong></li>
                <li><strong>Facing difficulties with navigation?</strong></li>
                <li><strong>Problems with accessing content on mobile devices?</strong></li>
            </ul>

            <p>If you encounter any of these issues or other technical difficulties, please reach out to us through the <a href="contact.html">Contact Us</a> page. You can share your concerns, and we’ll get back to you as soon as possible.</p>

            <p><strong>Want to help us improve?</strong><br/>We’re always looking for ways to make the platform better. Feel free to send your suggestions and ideas on how we can enhance the learning experience.</p>

            <p>Visit our <a href="contact.html">Contact Us</a> page and let us know!</p>
        </div>
    </section>
    <Footer />
    </>
    );
}

export default Help;