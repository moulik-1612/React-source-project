import Footer from "../Landing Page/Footer";
import Navbar from "../Landing Page/Navbar";

function SemThreeSubject() {

    function notifyuser () {
        alert('Videos will be upload soon by FutureWise stay active and explore another semesters')
    }

    return (<>
    <Navbar />
    <main>
        <section className="category-hero">
            <h1>Select a Subject</h1>
            <p>Choose from a variety of Semester to focus on for your exams.</p>
        </section>

        <section className="categories-list">
            <div className="category">
                <h2>Coming soon.....</h2>
                <p>Explore videos on algebra, calculus, geometry, and more.</p>
                <button onClick={notifyuser}>Explore</button>
            </div>
            <div className="category">
                <h2>Coming soon.....</h2>
                <p>Learn about biology, chemistry, physics, and other sciences.</p>
                <button onClick={notifyuser}>Explore</button>
            </div>
            <div className="category">
                <h2>Coming soon.....</h2>
                <p>Dive into world history, ancient civilizations, and modern events.</p>
                <button onClick={notifyuser}>Explore</button>
            </div>
        </section>
    </main>
    <Footer />
    </>
    );
}

export default SemThreeSubject;