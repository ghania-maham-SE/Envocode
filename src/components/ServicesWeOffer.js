import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

const ServicesWeOffer = () => {
  const services = [
    {
      title: 'Software Development',
      icon: <IoMdSettings />,
      list: [
        'Custom Software Development',
        'Web App Development',
        'Mobile App Development',
        'UI/UX Design',
        'QA Testing',
        'DevOps',
        'Application Re-Engineering',
      ],
    },
    {
      title: 'Solutions',
      icon: <IoMdSettings />,
      list: [
        'Custom Software Development',
        'Web App Development',
        'Mobile App Development',
        'UI/UX Design',
        'QA Testing',
        'DevOps',
        'Application Re-Engineering',
      ],
    },
    {
      title: 'Emerging Technologies',
      icon: <IoMdSettings />,
      list: [
        'Custom Software Development',
        'Web App Development',
        'Mobile App Development',
        'UI/UX Design',
        'QA Testing',
        'DevOps',
        'Application Re-Engineering',
      ],
    },
    {
      title: 'Advisory',
      icon: <IoMdSettings />,
      list: [
        'Custom Software Development',
        'Web App Development',
        'Mobile App Development',
        'UI/UX Design',
        'QA Testing',
        'DevOps',
        'Application Re-Engineering',
      ],
    },
  ];

  return (
    <div>
      <h2 className='container services my-5'>Services We Offer</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <span className="icon-font">{service.icon}</span>
                    </div>
                    <div className="col-md-8">
                      <h5 className="text-bold">{service.title}</h5>
                      <ul className="style">
                        {service.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary my-3" id="button">
          View All Services
          <span className="mx-2 link-arrow">
            <LiaLongArrowAltRightSolid />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServicesWeOffer;
