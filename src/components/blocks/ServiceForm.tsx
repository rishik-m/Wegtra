import React from 'react';

const ServiceForm = () => (
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Find Battery Of Your Performance</h3>
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
                        <p>Search By Modal: </p>
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
                                <button id="submit" type="submit" className="btn btn-primary">Search Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ServiceForm;
