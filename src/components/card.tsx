/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Card = () => (
    <div className="cards-list">

        <div className="card 1">
            <div className="card_image">
                {' '}
                <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
                {' '}
            </div>
            <div className="card_title title-white">
                <p>Card Title</p>
            </div>
        </div>

        <div className="card 2">
            <div className="card_image">
                <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
            </div>
            <div className="card_title title-white">
                <p>Card Title</p>
            </div>
        </div>

        <div className="card 3">
            <div className="card_image">
                <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
            </div>
            <div className="card_title">
                <p>Card Title</p>
            </div>
        </div>

        <div className="card 4">
            <div className="card_image">
                <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
            </div>
            <div className="card_title title-black">
                <p>Card Title</p>
            </div>
        </div>

    </div>
);

export default Card;
