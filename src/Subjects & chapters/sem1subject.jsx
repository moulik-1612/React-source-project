import { useNavigate } from "react-router-dom";


function SemOneSubject({one, two, three}) {

    const navigate = useNavigate()

    function handleuserforsub1 () {
        navigate(`/chapters/${one}/${0}/${1}`)
    }

    function handleuserforsub2 () {
        navigate(`/chapters/${two}/${1}/${1}`)
    }

    function handleuserforsub3 () {
        navigate(`/chapters/${three}/${2}/${1}`)
    }

    return (<>
    <main>
        <section className="category-hero">
            <h1>Select a Subject</h1>
            <p>Choose from a variety of Semester to focus on for your exams.</p>
        </section>

        <section className="categories-list">
            <div className="category">
                <h2>Financial Account-1</h2>
                <p>Explore videos on Financial Account 1.</p>
                <button onClick={handleuserforsub1}>Explore</button>
            </div>
            <div className="category">
                <h2>Financial Account-2</h2>
                <p>Learn about Financial Account 2</p>
                <button onClick={handleuserforsub2}>Explore</button>
            </div>
            <div className="category">
                <h2>Descriptive Statistics</h2>
                <p>Dive into world of statistics.</p>
                <button onClick={handleuserforsub3}>Explore</button>
            </div>
        </section>
    </main>
    </>
    );
}

export default SemOneSubject;