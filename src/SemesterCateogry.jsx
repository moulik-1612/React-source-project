import { useNavigate } from "react-router-dom";

function SemesterCateogry() {

    const navigate = useNavigate()

    return (<>
    <main>
        <section className="category-hero">
            <h1>Select a Study Semester</h1>
            <p>Choose from a variety of Semester to focus on for your exams.</p>
        </section>

        <section className="categories-list">
            <div className="category">
                <h2>Semester 1</h2>
                <p>Explore videos on Financial acc-1, Financial acc-2 & more.</p>
                <button onClick={() => navigate('/sem1subject')}>Explore</button>
            </div>
            <div className="category">
                <h2>Semester 2</h2>
                <p>Learn about Statistics, Financial acc-2 & more in there.</p>
                <button onClick={() => navigate('/sem2subject')}>Explore</button>
            </div>
            <div className="category">
                <h2>Semester 3</h2>
                <p>Dive into world accounts and Statistics through here.</p>
                <button onClick={() => navigate('/sem3subject')}>Explore</button>
            </div>
            <div className="category">
                <h2>Semester 4</h2>
                <p>Master different Subject, including Taxation-2, Auditing-1, and more.</p>
                <button onClick={() => navigate('/sem4subject')}>Explore</button>
            </div>
            <div className="category">
                <h2>Semester 5</h2>
                <p>Watch tutorials on Statistics-V, Advance accounting & auditing.</p>
                <button onClick={() => navigate('/sem5subject')}>Explore</button>
            </div>
            <div className="category">
                <h2>Semester 6</h2>
                <p>Expolre more vidoes on Fundamental of Financial mangement and Statistics-VI.</p>
                <button onClick={() => navigate('/sem6subject')}>Explore</button>
            </div>
        </section>
    </main>
</>
);
}

export default SemesterCateogry;