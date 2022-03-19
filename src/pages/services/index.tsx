import React from 'react';
import Testimonial from '~/components/testimonial';
import Fquestions from '~/components/fquestions';
import Card2 from '~/components/card2';

const index = () => (
    <div>
        <div className="services-heading">
            <h1>Services We Provide</h1>
            <p>
                Agumentik Consultancy is here to provide you with
                the solution to your complications and to install wings
                to your Business with our following service.
            </p>
        </div>
        <Card2 />
        <div className="about-section">
            <div className="inner-container">
                <h1>Why Us?</h1>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus velit ducimus, enim inventore earum, eligendi
                    nostrum pariatur necessitatibus eius dicta a voluptates
                    sit deleniti autem error eos totam nisi neque voluptates
                    sit deleniti autem error eos totam nisi neque.
                </p>
                <div className="skills">
                    <span>24/7 Suppot</span>
                    <span>All India Delivery</span>
                    <span>RTO Service</span>
                </div>
                <br />
                <button type="button" className="custom-btn btn-12">
                    <span>Click!</span>
                    <span>Read More</span>
                </button>
            </div>
        </div>
        <Fquestions />
        <Testimonial />
    </div>
);

export default index;
