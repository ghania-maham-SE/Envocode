import {FaLongArrowAltRight} from "react-icons/fa";
import img1 from "../images/d1.svg";
import img2 from "../images/d2.svg";
import img3 from "../images/d3.svg";
import img4 from "../images/d4.svg";
import img5 from "../images/d5.svg";
import img6 from "../images/uj-profile.png";

// import Cardh from "../Components/Cardh";
// import Hero from "../Components/Hero";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Cardh from "../components/Cardh";
// import Section4 from "./Section4";
function Home() {
    return (
        <div>
            <Hero/>
            <div className="secondsection">
                <div className="container mx-9 py-4">
                    <div className="row">
                        <div className="col-lg-2 mx-3">
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-lg-2 mx-3">
                            <img src={img2} alt="" />
                        </div>
                        <div className="col-lg-2 mx-3">
                            <img src={img3} alt="" />
                        </div>
                        <div className="col-lg-2 mx-3">
                            <img src={img4} alt="" />
                        </div>
                        <div className="col-lg-2 mx-3">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="section3">
                <Cardh/>
            </section>
            <section className="sectionimg colored my-3">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 textual ">
                            <h1 className=" ">Our Vision</h1>
                            <p className="py-4">
                                At Envocode, we distinguish ourselves by our commitment to deliver concrete value to our
                                clients. Our dedication to precision and excellence sets us apart from the rest of the
                                industry. We don t merely offer resources; rather, we prioritize our customers triumphs
                                as much as our own and empower them to confidently embrace new technologies.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img className="image-fluid" src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <Section4/> */}
            <section className="sectioncounting bg-primary py-4">
                <h2>What sets us apart?</h2>
                <div className="">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-1 py-2">
                            <h2>15+</h2>
                            <p>Years in Business </p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-1 py-2">
                            <h2>30+</h2>
                            <p>Industries Explored</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-1 py-2">
                            <h2>500+</h2>
                            <p>Clients that trust us</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="explore py-3">
                <h2>
                    What works best for you?<a href=""> Explore more</a>
                </h2>
            </section>
            <section className="offshare py-4">
                <div className="container py-4">
                    <div className="row gx-4">
                        <div className="col-lg-5">
                            <h1>Our Offshore Teams</h1>
                            <p>
                                By partnering with offshore software development team, you gain access to a talent pool
                                consisting of the top 2% of multi-skilled specialists, who can fill any skill gaps
                                within your in-house team. With our offices located in key cities across six different
                                countries, our experts are strategically positioned for a seamless working partnership.
                            </p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 py-3 ">
                            <h2 className="blue">
                                Our cooperation models are flexible and designed to suit your goals, resources, and
                                timeline.
                            </h2>
                            <button type="button" className="btn btn-light btn2">
                                Contact us
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Form/>
        </div>
    );
}

export default Home;
