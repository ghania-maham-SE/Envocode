import img1 from '../images/clutch-deliver.svg';
import img2 from '../images/clutch-2020.svg';
import img3 from '../images/extract.svg';
import img4 from '../images/forbes-2019.svg';
import img5 from '../images/manifest.svg';
import img6 from '../images/upvotes.svg';
import img7 from '../images/wadline.svg';

function Section4() {
  return (
      <div>
          <section className="textimg">
              <div className="container py-4">
                  <div className="row">
                      <div className="col-lg-4 py-4 ">
                          <h1>Achievements and</h1>
                          <h1 className="mf-12">Awards</h1>
                      </div>
                      <div className="col-lg-8">
                          <div className="row">
                              <div className="col-lg-3">
                                  <img src={img1} alt="" />
                                  <img src={img4} alt="" />
                              </div>

                              <div className="col-lg-3">
                                  <img src={img2} alt="" />
                                  <img src={img5} alt="" />
                              </div>

                              <div className="col-lg-3">
                                  <img src={img3} alt="" />
                                  <img src={img6} alt="" />
                              </div>
                              <div className="col-lg-3">
                                  <img src={img4} alt="" />
                                  <img src={img7} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}

export default Section4
