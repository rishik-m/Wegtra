// react
import React, { FunctionComponent } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
// data

const FooterNewsletter: FunctionComponent<React.HTMLAttributes<HTMLElement>> = () => {
    const intl = useIntl();

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const socialLinks = [
        { type: 'facebook', icon: 'fab fa-facebook-f' },
        { type: 'twitter', icon: 'fab fa-twitter' },
        { type: 'youtube', icon: 'fab fa-youtube' },
        { type: 'instagram', icon: 'fab fa-instagram' },
        { type: 'rss', icon: 'fas fa-rss' },
    ];

    return (
        <div className="footer-newsletter">
            <h5 className="footer-newsletter__title">
                <FormattedMessage id="HEADER_ACCOUNT" />
            </h5>

            <form className="footer-newsletter__form" onSubmit={handleFormSubmit}>
                <label className="sr-only" htmlFor="footer-newsletter-address">
                    <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                </label>
                <input
                    id="footer-newsletter-address"
                    type="text"
                    className="footer-newsletter__form-input"
                    placeholder={intl.formatMessage({ id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER' })}
                />
                <button
                    type="submit"
                    className="footer-newsletter__form-button"
                >
                    <FormattedMessage id="BUTTON_SUBSCRIBE" />
                </button>
            </form>

            <div className="footer-newsletter__text footer-newsletter__text--social">
                <FormattedMessage id="TEXT_SOCIAL_LINKS_MESSAGE" />
            </div>

            <div className="footer-newsletter__social-links social-links">
                <ul className="social-links__list">
                    {socialLinks.map((link, index) => (
                        <li key={index} className={`social-links__item social-links__item--${link.type}`}>
                            <AppLink target="_blank">
                                <i className={link.icon} />
                            </AppLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterNewsletter;
