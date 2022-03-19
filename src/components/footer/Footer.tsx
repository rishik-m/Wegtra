// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppImage from '~/components/shared/AppImage';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppLink from '~/components/shared/AppLink';
import Decor from '~/components/shared/Decor';
import FooterContacts from '~/components/footer/FooterContacts';
import FooterLinks from '~/components/footer/FooterLinks';
import FooterNewsletter from '~/components/footer/FooterNewsletter';
// data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from '~/data/theme';

const ColoredLine = () => (
    <hr
        style={{
            color: 'red',
            backgroundColor: 'white',
        }}
    />
);

export function Footer() {
    return (
        <div className="site-footer">
            <Decor className="site-footer__decor" type="bottom" />
            <div className="site-footer__widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <FooterContacts className="site-footer__widget" />
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                            <FooterLinks
                                className="site-footer__widget"
                                header={<FormattedMessage id="HEADER_SERVICES" />}
                                links={[
                                    { title: <FormattedMessage id="LINK_STORE_LOCATION" /> },
                                    { title: <FormattedMessage id="LINK_ORDER_HISTORY" /> },
                                    { title: <FormattedMessage id="LINK_WISH_LIST" /> },
                                    { title: <FormattedMessage id="LINK_NEWSLETTER" /> },
                                    { title: <FormattedMessage id="LINK_SPECIAL_OFFERS" /> },
                                    { title: <FormattedMessage id="LINK_GIFT_CERTIFICATES" /> },
                                    { title: <FormattedMessage id="LINK_AFFILIATE" /> },
                                ]}
                            />
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                            <FooterLinks
                                className="site-footer__widget"
                                header={<FormattedMessage id="HEADER_URL" />}
                                links={[
                                    { title: <FormattedMessage id="LINK_ABOUT_US" /> },
                                    { title: <FormattedMessage id="LINK_DELIVERY_INFORMATION" /> },
                                    { title: <FormattedMessage id="LINK_PRIVACY_POLICY" /> },
                                    { title: <FormattedMessage id="LINK_BRANDS" /> },
                                    { title: <FormattedMessage id="LINK_CONTACT_US" /> },
                                    { title: <FormattedMessage id="LINK_RETURNS" /> },
                                    { title: <FormattedMessage id="LINK_SITE_MAP" /> },
                                ]}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <FooterNewsletter className="site-footer__widget" />
                        </div>
                    </div>
                </div>
                <ColoredLine />
                <div className="row">
                    <div className=" col-md-2">
                        <h3 style={{ color: 'white' }}> Bangalore </h3>
                        <div className="mt-3">
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 style={{ color: 'white' }}> Delhi </h3>
                        <div className="mt-3">
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 style={{ color: 'white' }}> Chennai </h3>
                        <div className="mt-3">
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 style={{ color: 'white' }}> Hyderabad </h3>
                        <div className="mt-3">
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 style={{ color: 'white' }}> Noida </h3>
                        <div className="mt-3">
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3 style={{ color: 'white' }}> Pune </h3>
                        <div className="mt-3">
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                            {' '}
                            <br />
                            <a href="/" className="color-white border-0" style={{ fontSize: '13px', color: 'gray', border: '0' }}> Demo Text </a>
                        </div>
                    </div>
                </div>
                <ColoredLine />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-8">
                            <p className="flex-start" style={{ color: 'white' }}> © 2022 AgumentikSoftware. All Rights Reserved by  </p>
                        </div>
                        <div className="col-12 col-xl-4">
                            <p className="flex-start" style={{ color: 'white' }}>
                                {' '}
                                <a href="/terms" style={{ color: 'white' }}>
                                    {' '}
                                    Terms & Conditions |
                                    {' '}
                                    <a href="/faq" style={{ color: 'white' }}> Privacy Policy </a>
                                    {' '}
                                </a>
                                {' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Footer);
