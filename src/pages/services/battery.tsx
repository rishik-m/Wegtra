import React from 'react';
import ServiceForm from '~/components/blocks/ServiceForm';
import Fquestions from '~/components/fquestions';
import Client from '~/components/client';

const index = () => (
    <React.Fragment>
        <div className="row justify-content-center marg-serice">
            <div className="col-md-5">
                <div className="py-4">
                    <span className="text-secondary text-uppercase">services</span>
                    <h1 className="text-capitalize font-weight-bold my-3">
                        Battery
                        <span style={{ color: '#9B5DE5' }}>Services</span>
                    </h1>
                    <p className="text-secondary" style={{ lineHeight: '2' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ea atque reiciendis saepe et similique eveniet distinctio autem odit blanditiis. Magnam, ea atque reiciendis saepe et similique eveniet distinctio autem odit blanditiis. Magnam, ea atque reiciendis saepe et similique eveniet distinctio autem odit blanditiis. Magnam, ea atque reiciendis saepe et similique eveniet distinctio autem odit blanditiis. Magnam, ea atque reiciendis saepe et similique eveniet distinctio autem odit blanditiis. </p>
                    <p>
                        <i className="fas fa-check-square" />
                        {'  '}
                        24/7 Support
                    </p>
                    <p>
                        <i className="fas fa-check-square" />
                        {'  '}
                        Lorem ipsum, dolor sit amet consectetur.
                    </p>
                    <p>
                        <i className="fas fa-check-square" />
                        {'  '}
                        Lorem ipsum, dolor sit amet consectetur.
                    </p>
                    <button type="button" className="custom-btn btn-12" data-toggle="modal" data-target="#myModal">
                        <span>Click!</span>
                        <span>Read More</span>
                    </button>
                </div>
            </div>
            <div className="col-md-5 justify-content-center">
                <br />
                <br />
                <ServiceForm />
            </div>
        </div>
        <br />
        <br />
        <div className="col-md-12">
            <div className="site-heading text-center">
                <h2>
                    Brands Available
                </h2>
            </div>
        </div>
        <Client />
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
                    <span>Best Quality</span>
                </div>
                <br />
                <button type="button" className="custom-btn btn-12">
                    <span>Click!</span>
                    <span>Read More</span>
                </button>
            </div>
        </div>
        <br />
        <br />
        <div className="col-md-12">
            <div className="site-heading text-center">
                <h2>
                    Frequently Asked Questions
                </h2>
            </div>
        </div>
        <Fquestions />
    </React.Fragment>
);

export default index;
