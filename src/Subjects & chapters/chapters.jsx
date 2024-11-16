import {  useNavigate, useParams } from "react-router-dom";
import Footer from '../Landing Page/Footer'
import Navbar from "../Landing Page/Navbar";

function Chapters() {

    const navigate = useNavigate()
    const {number} = useParams()
    const { sub } = useParams()
    const { sem } = useParams()
    const num = parseInt(number, 10)
    

    function handleuser (number) {
        navigate(`/chaptervideos${sem}/${number}/${sub}`);
    }

    return (<>
        <Navbar />
        <main>
        <section className="chapter-hero">
            <h1 id="sub_name">select your chapter</h1>
            <p>Select a chapter to start studying.</p>
        </section>

        <section className="chapters-list">
            {Array.from({length:10}, (_,index) => (
                <div key={index} className="chapter" style={{display : index < num ? 'block' : 'none'}}>
                    <h2>chapter {index+1}</h2>
                    <p>Learn the basics of this subject.</p>
                    <button onClick={() => handleuser(index)}>start learning</button>
                </div>
            ))}
        </section>
    </main>
    <Footer />
    </>);
}

export default Chapters;