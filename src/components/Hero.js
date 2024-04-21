import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
      <div>
          <section className="section-hero">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-2"></div>
                      <div className="col-lg-8">
                          <h1 className="mb-1">
                              Experience excellence with <br /> us!{" "}
                          </h1>
                          <h5 className="mb-1">
                              Envocode is the go-to partner for numerous global enterprises, SMEs, and tech innovators
                              to maximize their business value.{" "}
                          </h5>
                          <button type="button" className="btn btn-light btn1">
                              Contact us
                              <FaLongArrowAltRight />
                          </button>
                      </div>
                      <div className="col-lg-2"></div>
                  </div>
              </div>
          </section>
      </div>
  );
}
export default Hero