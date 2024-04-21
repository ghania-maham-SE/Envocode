import img1 from '../images/d4.svg'
import img2 from '../images/d3.svg'
import img3 from '../images/d1.svg'
import img4 from '../images/d2.svg'
const Marquee = () => {
    return (
        <div>
            <marquee direction="left">
                <div className="row">
                    <div className="col-lg-2">
                        <img src={img1} height={30} alt="" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-1">
                        <img src={img2} height={30} alt="" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-1">
                        <img src={img3} height={30} alt="" />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-1">
                     
                        <img src={img4} height={30} alt="" />
                    </div>
                </div>
            </marquee>
        </div>
    );
}

export default Marquee;
