/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React from 'react';

const Blockcard = () => (
    <div
        className="container"
        style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
        <div className="card_block">
            <div className="face face1">
                <div className="content_block">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20card_block%20Hover%20Effects/img/design_128.png?raw=true" />
                    <h3>Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content_block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card_block">
            <div className="face face1">
                <div className="content_block">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20card_block%20Hover%20Effects/img/code_128.png?raw=true" />
                    <h3>Code</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content_block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card_block">
            <div className="face face1">
                <div className="content_block">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20card_block%20Hover%20Effects/img/launch_128.png?raw=true" />
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content_block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
);

export default Blockcard;
