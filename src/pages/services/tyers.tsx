import React, { useState } from 'react';
import Fquestions from '~/components/fquestions';
import Client from '~/components/client';

const Form = () => {
    const [byVarient, setByVarient] = useState(true);
    return (
        <div className="form-body">
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Find Tyers Of Your Performance</h3>
                            <div className="col-md-12 mt-3">
                                <label className="mb-3 mr-1" htmlFor="gender">Vehicle Type: </label>

                                <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off" required />
                                <label className="btn" htmlFor="male">Car</label>

                                <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off" required />
                                <label className="btn" htmlFor="female">Bike</label>

                                <input type="radio" className="btn-check" name="gender" id="secret" autoComplete="off" required />
                                <label className="btn" htmlFor="secret">Truck</label>
                                <div className="valid-feedback mv-up">You selected vehicle!</div>
                                <div className="invalid-feedback mv-up">Please select a vehicle!</div>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary btn-sm m-1" onClick={() => { setByVarient(true); }}>Select By Modal</button>
                                <button type="button" className="btn btn-primary btn-sm m-1" onClick={() => { setByVarient(false); }}>Select By TyerSize</button>
                            </div>
                            {
                                byVarient ? (
                                    <form className="requires-validation">
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="name" placeholder="Keywords" />
                                        </div>
                                        <div className="col-md-12">
                                            <select className="form-select mt-3" required>
                                                <option selected disabled value="">Brand</option>
                                                <option value="jweb">Maruti Suzuki</option>
                                                <option value="sweb">MRF</option>
                                                <option value="pmanager">Tarzen</option>
                                            </select>
                                            <div className="valid-feedback">You selected a brand!</div>
                                            <div className="invalid-feedback">Please select a brand!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <select className="form-select mt-3" required>
                                                <option selected disabled value="">Modal</option>
                                                <option value="jweb">MX2103</option>
                                                <option value="sweb">UI20</option>
                                                <option value="pmanager">MRF506</option>
                                            </select>
                                            <div className="valid-feedback">You selected a modal!</div>
                                            <div className="invalid-feedback">Please select a modal</div>
                                        </div>
                                        <div className="col-md-12">
                                            <select className="form-select mt-3" required>
                                                <option selected disabled value="">Varient</option>
                                                <option value="jweb">VAR-1</option>
                                                <option value="sweb">VAR-2</option>
                                                <option value="pmanager">VAR-3</option>
                                            </select>
                                            <div className="valid-feedback">You selected a varient!</div>
                                            <div className="invalid-feedback">Please select a varient!</div>
                                        </div>
                                        <div className="form-button mt-3">
                                            <button id="submit" type="submit" className="btn btn-primary m-3">Search Now</button>
                                        </div>
                                    </form>
                                ) : (
                                    <form className="requires-validation">
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="name" placeholder="Keywords" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="name" placeholder="Width" />
                                        </div>
                                        <div className="col-md-12">
                                            <select className="form-select mt-3" required>
                                                <option selected disabled value="">Profile</option>
                                                <option value="jweb">MX2103</option>
                                                <option value="sweb">UI20</option>
                                                <option value="pmanager">MRF506</option>
                                            </select>
                                            <div className="valid-feedback">You selected a modal!</div>
                                            <div className="invalid-feedback">Please select a modal</div>
                                        </div>
                                        <div className="col-md-12">
                                            <select className="form-select mt-3" required>
                                                <option selected disabled value="">Rims</option>
                                                <option value="jweb">VAR-1</option>
                                                <option value="sweb">VAR-2</option>
                                                <option value="pmanager">VAR-3</option>
                                            </select>
                                            <div className="valid-feedback">You selected a varient!</div>
                                            <div className="invalid-feedback">Please select a varient!</div>
                                        </div>
                                        <div className="form-button mt-3">
                                            <button id="submit" type="submit" className="btn btn-primary m-3">Search Now</button>
                                        </div>
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const index = () => (
    <React.Fragment>
        <div className="row justify-content-center marg-serice">
            <div className="col-md-5">
                <div className="py-4">
                    <span className="text-secondary text-uppercase">services</span>
                    <h1 className="text-capitalize font-weight-bold my-3">
                        Tyers
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
                <Form />
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
                    sit deleniti autem error eos totam nisi neque.Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
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
