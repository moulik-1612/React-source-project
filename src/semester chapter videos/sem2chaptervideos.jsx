import { useParams } from "react-router-dom";
import Footer from "../Landing Page/Footer";
import Navbar from "../Landing Page/navbar";
import { data } from "../../semester api/sem2";

function Sem2chaptervideos() {

    const { number, sub } = useParams()
    const num = parseInt(number, 10);
    console.log(data)
    const newArray = data.filter((data) => sub == data.id)
    
    return (<>
    <Navbar />
        <div>
            {newArray.map((chapterData, chapterIndex) => (
                <div key={chapterIndex}>
                    {chapterData[num].map((chapter, index) => (
                        <div key={index}>
                            <section className="chapter-intro">
                            <h1>{chapter.name}</h1>
                            <p>{chapter.instruction}</p>
                            </section>
                            {chapter.url.map((url, urlIndex) => (
                                <section className="video-list">
                                <div className="video-container" id={`vc${urlIndex}`} key={urlIndex}>
                                    <div className="video-placeholder">
                                        <iframe
                                            id={`video${urlIndex}`}
                                            height="100%"
                                            width="100%"
                                            src={url}
                                            title={`YouTube video player ${urlIndex}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                                </section>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    <Footer />
    </>
    );
}

export default Sem2chaptervideos;