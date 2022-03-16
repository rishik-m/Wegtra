import React from 'react';

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

        <div className="content">
            <div className="card">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <p className="title">Service One</p>
                <p className="text">
                    Click to see or edit your profile page.
                    <button type="button" className="btn btn-xs btn-dark">Know More</button>
                </p>
            </div>
            <div className="card">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <p className="title">Service Two</p>
                <p className="text">Check all your favourites in one place.</p>
            </div>
            <div className="card">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <p className="title">Service Three</p>
                <p className="text">Add or change your contacts and links.</p>
            </div>
            <div className="card">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <p className="title">Service Four</p>
                <p className="text">Add or change your contacts and links.</p>
            </div>
            <div className="card">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <p className="title">Service Five</p>
                <p className="text">Add or change your contacts and links.</p>
            </div>
            <div className="card">
                <div className="icon"><i className="fa fa-cogs" /></div>
                <p className="title">Service Five</p>
                <p className="text">Add or change your contacts and links.</p>
            </div>
        </div>
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
    </div>
);

export default index;
