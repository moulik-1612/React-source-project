import { useNavigate } from "react-router-dom";

function SemFiveSubject({one, three}) {

    const navigate = useNavigate()

    function handleuserforsub1 () {
        navigate(`/chapters/${one}/${0}/${5}`)
    }

    function handleuserforsub3 () {
        navigate(`/chapters/${three}/${2}/${5}`)
    }

    return (<>
    <main>
        <section className="category-hero">
            <h1>Select a Subject</h1>
            <p>Choose from a variety of Semester to focus on for your exams.</p>
        </section>

        <section className="categories-list">
            <div className="category">
                <h2>Advance Accounting & Auditing</h2>
                <p>(cost and Financial accounting)</p>
                <button onClick={handleuserforsub1}>Explore</button>
            </div>
            <div className="category">
                <h2>chapters coming soon.....</h2>
                <p>(mangement accounting-1)</p>
                <button>Explore</button>
            </div>
            <div className="category">
                <h2>Statistics-V</h2>
                <p>Dive into world history of Statistics-V from here.</p>
                <button onClick={handleuserforsub3}>Explore</button>
            </div>
        </section>
    </main>
    </>
    );
}

export default SemFiveSubject;