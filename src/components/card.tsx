/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Card = () => (
    <React.Fragment>
        <div className="cards-list">

            <div className="content__card_1">
                <div className="card__card_1">
                    <div className="icon_1"><i className="fa fa-cogs" /></div>
                    <p className="title">Service One</p>
                    <p className="text">
                        Click to see or edit your profile page.
                        <button type="button" className="btn btn-xs btn-dark">Know More</button>
                    </p>
                </div>
                <div className="card__card_1">
                    <div className="icon_1"><i className="fa fa-cogs" /></div>
                    <p className="title">Service Two</p>
                    <p className="text">Check all your favourites in one place.</p>
                </div>
                <div className="card__card_1">
                    <div className="icon_1"><i className="fa fa-cogs" /></div>
                    <p className="title">Service Three</p>
                    <p className="text">Add or change your contacts and links.</p>
                </div>
            </div>

        </div>
    </React.Fragment>
);

export default Card;
