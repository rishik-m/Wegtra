import React from 'react';

const Client = () => (
    <div className="block block-brands block-brands--layout--columns-8-full">
        <div className="container">
            <ul className="block-brands__list">
                {
                    /* {brands.map((brand, brandIdx) => (
                        <React.Fragment key={brandIdx}>
                        <li className="block-brands__item">
                            <AppLink href="/" className="block-brands__item-link">
                                <AppImage src={brand.image} />
                                <span className="block-brands__item-name">{brand.name}</span>
                            </AppLink>
                        </li>
                        <li className="block-brands__divider" role="presentation" />
                        </React.Fragment>
                    ))} */
                }
                <div className="slider__container">
                    <div className="slide-track">
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="170" width="400" alt="" />
                        </div>
                        <div className="slide">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="170" width="400" alt="" />
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
);

export default Client;
