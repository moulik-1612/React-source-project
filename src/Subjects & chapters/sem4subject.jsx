import { useNavigate } from "react-router-dom";
import Footer from "../Landing Page/Footer";
import Navbar from "../Landing Page/Navbar";

function SemFourSubject({one, two, three, four}) {

    const navigate = useNavigate()
    function handleuserforsub1 () {
        navigate(`/chapters/${one}/${0}/${4}`)
    }

    function handleuserforsub2 () {
        navigate(`/chapters/${two}/${1}/${4}`)
    }

    function handleuserforsub3 () {
        navigate(`/chapters/${three}/${2}/${4}`)
    }

    function handleuserforsub4 () {
        navigate(`/chapters/${four}/${3}/${4}`)
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
                <h2>Cost Accounting-2</h2>
                <p>Explore videos on cost accounting 2 in the series.</p>
                <button onClick={handleuserforsub1}>Explore</button>
            </div>
            <div className="category">
                <h2>Taxation-2</h2>
                <p>Learn about Taxation-2 from here and master it.</p>
                <button onClick={handleuserforsub2}>Explore</button>
            </div>
            <div className="category">
                <h2>Statistics-IV</h2>
                <p>Dive into world Statistics-IV and explor more.</p>
                <button onClick={handleuserforsub3}>Explore</button>
            </div>
            <div className="category">
                <h2>Auditing-1</h2>
                <p>Master different Subject, including Taxation-2, Auditing-1, and more.</p>
                <button onClick={handleuserforsub4}>Explore</button>
            </div>
        </section>
    </main>
    <Footer />
    </>
    );
}

export default SemFourSubject;