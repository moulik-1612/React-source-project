import { useNavigate } from "react-router-dom";

function SemTwoSubject({one}) {

    const navigate = useNavigate()
    function handleuserforsub1 () {
        navigate(`/chapters/${one}/${0}/${2}`)
    }
    
    return (<>
    <main>
        <section className="category-hero">
            <h1>Select a Subject</h1>
            <p>Choose from a variety of Semester to focus on for your exams.</p>
        </section>

        <section className="categories-list">
            <div className="category">
                <h2>Financial Accounting - II</h2>
                <p>Explore videos on Financial Account II..</p>
                <button onClick={handleuserforsub1}>Explore</button>
            </div>
            <div className="category">
                <h2>Coming Soon.....</h2>
                <p>Learn about biology, chemistry, physics, and other sciences.</p>
                <button>Explore</button>
            </div>
            <div className="category">
                <h2>Coming Soon.....</h2>
                <p>Dive into world history, ancient civilizations, and modern events.</p>
                <button>Explore</button>
            </div>
        </section>
    </main>
    </>
    );
}

export default SemTwoSubject;