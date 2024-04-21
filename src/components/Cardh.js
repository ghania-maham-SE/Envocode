import imge1 from '../images/accelerate.svg';
import imge2 from '../images/dream-team.svg';
import imge3 from '../images/optimize-ecosystem.svg';
function Cardh() {
    
    return (
        <div>
            <div className="container">
                <h1 className="mb-3">Problems well Help You </h1>
                <h1 className="mb-4">Solve</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={imge1} alt="" />
                                </h5>
                                <h6 className="card-subtitle  text-muted">
                                    <h4 className='heading'>Accelerate digital transformation</h4>
                                </h6>
                                <p className="card-text">
                                    We can help you meet evolving requirements by leveraging agile and innovative
                                    scalable, technologies and tailored to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100 w-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={imge2} alt="" />
                                </h5>
                                <h6 className="card-subtitle  text-muted">
                                    <h2 className='heading' >Build your dream team</h2>
                                </h6>
                                <p className="card-text">
                                    With a team of 700+ software experts, we customize our core services to meet your
                                    business needs.technologies and tailored to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={imge3} alt="" />
                                </h5>
                                <h6 className="card-subtitle text-muted">
                                    <h4 className='heading'>Optimize your digital ecosystem</h4>
                                </h6>
                                <p className="card-text">
                                    By optimizing and unifying your digital ecosystem, we help you facilitate ongoing
                                    growth and ensure long-term scalability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardh;
