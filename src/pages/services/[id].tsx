import React from 'react';
import Image from 'next/image';
import ServiceForm from '~/components/blocks/ServiceForm';

const index = () => (
    <React.Fragment>
        <ServiceForm />
        <div className="row justify-content-center marg-serice">
            <div className="col-md-5">
                <div className="py-4">
                    <span className="text-secondary text-uppercase">services</span>
                    <h1 className="text-capitalize font-weight-bold my-3">
                        RTO
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
                    <button type="button" className="custom-btn btn-12">
                        <span>Click!</span>
                        <span>Read More</span>
                    </button>
                </div>
            </div>
            <div className="col-md-5 justify-content-center">
                <br />
                <br />
                <Image
                    src="/images/serv.png"
                    alt="Picture of the author"
                    width={600}
                    height={500}
                />
            </div>
        </div>
    </React.Fragment>
);

export default index;
