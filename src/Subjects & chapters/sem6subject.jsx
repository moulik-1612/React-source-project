import { useNavigate } from "react-router-dom";

function SemSixSubject({one, two, three}) {

    const navigate = useNavigate()

    function handleuserforsub1 () {
        navigate(`/chapters/${one}/${0}/${6}`)
    }

    function handleuserforsub2 () {
        navigate(`/chapters/${two}/${1}/${6}`)
    }

    function handleuserforsub3 () {
        navigate(`/chapters/${three}/${2}/${6}`)
    }

    return (<>
    <main>
        <section className="category-hero">
            <h1>Select a Subject</h1>
            <p>Choose from a variety of Semester to focus on for your exams.</p>
        </section>

        <section className="categories-list">
            <div className="category">
                <h2>Advance Account and Auditing</h2>
                <p>(Management accounting-2)</p>
                <button onClick={handleuserforsub1}>Explore</button>
            </div>
            <div className="category">
                <h2>Fundamental of Financial Management</h2>
                <p>Learn about biology, chemistry, physics, and other sciences.</p>
                <button onClick={handleuserforsub2}>Explore</button>
            </div>
            <div className="category">
                <h2>Statistics-VI</h2>
                <p>Dive into world history of Statistics-V from here.</p>
                <button onClick={handleuserforsub3}>Explore</button>
            </div>
        </section>
    </main>
    </>
    );
}

export default SemSixSubject;