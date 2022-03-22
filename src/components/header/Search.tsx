/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-vars */
// react
import React, { useRef, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
// application
import TextField from '@mui/material/TextField';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import RadioButton from '~/components/shared/RadioButton';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import VehicleForm from '~/components/shared/VehicleForm';
import { Car20Svg, Search20Svg } from '~/svg';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { IVehicle } from '~/interfaces/vehicle';
import { shopApi } from '~/api';
import { useGlobalMousedown } from '~/services/hooks';
import {
    useGarageAddItem,
    useGarageCurrent,
    useGarageRemoveItem,
    useGarageSetCurrent,
    useUserVehicles,
} from '~/store/garage/garageHooks';

export function Search() {
    const intl = useIntl();
    const [query, setQuery] = useState('');
    const [suggestionsIsOpen, setSuggestionsIsOpen] = useState(false);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<IShopCategory[]>([]);
    const [vehiclePickerIsOpen, setVehiclePickerIsOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState('list');
    const [addVehicle, setAddVehicle] = useState<IVehicle | null>(null);
    const vehicles = useUserVehicles();
    const garageAddItem = useGarageAddItem();
    const garageRemoveItem = useGarageRemoveItem();
    const hasVehicles = vehicles.length > 0;
    const selectVehicleButtonRef = useRef<HTMLButtonElement>(null);
    const vehiclePickerDropdownRef = useRef<HTMLDivElement>(null);

    const currentVehicle = useGarageCurrent();
    const garageSetCurrent = useGarageSetCurrent();

    const searchCancelFnRef = useRef(() => {});
    const rootRef = useRef<HTMLDivElement>(null);

    const search = (value: string) => {
        searchCancelFnRef.current();

        let canceled = false;

        searchCancelFnRef.current = () => {
            canceled = true;
        };

        shopApi.getSearchSuggestions(value, {
            limitProducts: 3,
            limitCategories: 4,
        }).then((result) => {
            if (canceled) {
                return;
            }

            if (result.products.length === 0 && result.categories.length === 0) {
                setHasSuggestions(false);
                return;
            }

            setHasSuggestions(true);
            setProducts(result.products);
            setCategories(result.categories);
        });

        setQuery(value);
    };

    const toggleSuggestions = (force?: boolean) => {
        setSuggestionsIsOpen((prevState) => {
            const newState = force !== undefined ? force : !prevState;

            if (newState) {
                setVehiclePickerIsOpen(false);
            }

            return newState;
        });
    };

    const toggleVehiclePicker = (force?: boolean): void => {
        setVehiclePickerIsOpen((prevState) => {
            const newState = force !== undefined ? force : !prevState;

            if (newState) {
                setSuggestionsIsOpen(false);
            }

            return newState;
        });
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        toggleSuggestions(true);
        search(input.value);
    };

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget;

        search(input.value);
    };

    const handleButtonClick = () => {
        toggleVehiclePicker();
    };

    const handleChangeCurrentVehicle = (event: React.FormEvent<HTMLInputElement>) => {
        const vehicleId = event.currentTarget.value === '' ? null : parseFloat(event.currentTarget.value);

        garageSetCurrent(vehicleId);
    };

    const handleVehicleChange = (vehicle: IVehicle | null) => {
        setAddVehicle(vehicle);
    };

    const handleRootBlur = () => {
        setTimeout(() => {
            if (document.activeElement === document.body) {
                return;
            }

            // Close suggestions if the focus received an external element.
            if (document.activeElement && document.activeElement.closest('.search') !== rootRef.current) {
                toggleSuggestions(false);
            }
        }, 10);
    };

    useGlobalMousedown((event) => {
        const outsideButton = (
            selectVehicleButtonRef.current
            && !selectVehicleButtonRef.current.contains(event.target as HTMLElement)
        );
        const outsideDropdown = (
            vehiclePickerDropdownRef.current
            && !vehiclePickerDropdownRef.current.contains(event.target as HTMLElement)
        );

        if (outsideButton && outsideDropdown) {
            setVehiclePickerIsOpen(false);
        }
    }, [setVehiclePickerIsOpen, selectVehicleButtonRef]);

    useGlobalMousedown((event) => {
        const outside = (
            rootRef.current
            && !rootRef.current.contains(event.target as HTMLElement)
        );

        if (outside && suggestionsIsOpen) {
            setHasSuggestions(false);
        }
    }, [rootRef, suggestionsIsOpen, setHasSuggestions]);

    const searchPlaceholder = currentVehicle
        ? intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER_VEHICLE' }, { ...currentVehicle })
        : intl.formatMessage({ id: 'INPUT_SEARCH_PLACEHOLDER' });

    return (
        <div className="search" ref={rootRef} onBlur={handleRootBlur}>
            <form className="search__body">
                <div className="search__shadow" />

                <label className="sr-only" htmlFor="site-search">
                    <FormattedMessage id="INPUT_SEARCH_LABEL" />
                </label>

                <input
                    type="text"
                    className="search__input"
                    id="site-search"
                    autoCapitalize="off"
                    autoComplete="off"
                    spellCheck="false"
                    name="search"
                    value={query}
                    placeholder={searchPlaceholder}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                />

                <button
                    type="button"
                    className={classNames('search__button search__button--start', {
                        'search__button--hover': vehiclePickerIsOpen,
                    })}
                    onClick={handleButtonClick}
                    ref={selectVehicleButtonRef}
                >
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50.000000pt"
                        height="20.000000pt"
                        viewBox="0 0 880.000000 363.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >

                        <g
                            transform="translate(0.000000,363.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none"
                        >
                            <path d="M4087 3202 c-15 -17 -17 -63 -17 -450 l0 -431 -181 -3 c-176 -3 -181
-4 -200 -27 -18 -22 -19 -43 -19 -345 l0 -321 -317 -79 c-175 -43 -326 -86
-335 -94 -17 -14 -18 -50 -18 -479 l0 -463 -84 0 c-47 0 -96 -4 -110 -10 -34
-12 -44 -54 -21 -80 18 -20 42 -20 1620 -20 1578 0 1602 0 1620 20 23 26 13
68 -21 80 -14 6 -50 10 -80 10 l-54 0 0 316 c0 198 -4 322 -10 335 -8 14 -21
19 -55 19 l-45 0 0 65 c0 141 -32 165 -215 165 l-125 0 0 348 c0 271 -3 352
-13 366 -8 11 -31 20 -61 23 -41 5 -49 10 -60 37 -17 38 -81 101 -118 115
l-28 11 0 172 c0 186 -8 220 -49 226 -12 2 -31 -4 -42 -14 -17 -16 -19 -32
-19 -200 l0 -184 -32 -13 c-50 -21 -92 -61 -113 -106 -10 -23 -22 -41 -27 -41
-4 0 -8 108 -8 240 l0 240 -52 33 c-29 19 -180 107 -335 197 l-281 164 -4 84
c-2 69 -6 86 -22 98 -27 19 -50 18 -69 -4z m433 -498 l225 -131 3 -1032 2
-1031 -60 0 -60 0 0 993 c0 882 -2 995 -16 1015 -18 26 -50 28 -76 5 -17 -15
-18 -60 -18 -1015 l0 -998 -60 0 -60 0 0 889 c0 814 -1 890 -17 902 -10 9 -50
15 -110 17 l-93 4 0 290 0 289 58 -32 c31 -18 158 -93 282 -165z m-222 -556
l3 -58 -261 0 -260 0 0 60 0 60 258 -2 257 -3 3 -57z m863 26 c16 -15 32 -43
35 -63 9 -51 30 -71 76 -71 l38 0 0 -60 0 -60 -230 0 -230 0 0 60 0 60 44 0
c47 0 76 24 76 63 0 30 28 76 58 92 39 22 98 13 133 -21z m-866 -254 l0 -55
-257 -3 -258 -2 0 60 0 60 258 -2 257 -3 0 -55z m1015 -318 c0 -275 22 -253
-251 -250 l-204 3 -3 228 -2 227 230 0 230 0 0 -208z m-1012 96 l3 -58 -261 0
-260 0 0 60 0 60 258 -2 257 -3 3 -57z m-3 -228 l0 -55 -257 -3 -258 -2 0 60
0 60 258 -2 257 -3 0 -55z m-625 -460 l0 -500 -60 0 -60 0 0 380 0 380 -25 16
c-23 15 -27 15 -50 0 l-25 -16 0 -380 0 -380 -60 0 -60 0 0 343 c0 372 -2 387
-55 387 -53 0 -55 -15 -55 -387 l0 -343 -60 0 -60 0 2 432 3 432 265 67 c146
37 273 68 283 68 16 1 17 -29 17 -499z m630 242 c0 -26 -5 -53 -12 -60 -9 -9
-80 -12 -260 -12 l-248 0 0 60 0 60 260 0 260 0 0 -48z m1350 -12 l0 -61 -142
3 -143 3 -3 58 -3 57 146 0 145 0 0 -60z m-395 -25 c0 -28 -3 -30 -42 -33 -69
-5 -73 -18 -73 -219 l0 -173 -145 0 -145 0 0 223 c0 123 3 227 7 231 4 3 95 5
202 4 l196 -3 0 -30z m-957 -197 l3 -58 -261 0 -260 0 0 60 0 60 258 -2 257
-3 3 -57z m1462 2 l0 -60 -255 0 -255 0 0 60 0 60 255 0 255 0 0 -60z m-1462
-227 l-3 -58 -257 -3 -258 -2 0 60 0 60 260 0 261 0 -3 -57z m1462 -3 l0 -60
-255 0 -255 0 0 60 0 60 255 0 255 0 0 -60z m-620 -195 l0 -85 -145 0 -145 0
0 85 0 85 145 0 145 0 0 -85z m-842 -27 l3 -58 -261 0 -260 0 0 60 0 60 258
-2 257 -3 3 -57z m1462 2 l0 -60 -255 0 -255 0 0 60 0 60 255 0 255 0 0 -60z"
                            />
                        </g>
                    </svg>
                    <span className="search__button-title">
                        <FormattedMessage id="BUTTON_SEARCH_SELECT_VEHICLE_DESKTOP" />
                    </span>
                </button>

                <button className="search__button search__button--end" type="submit">
                    <span className="search__button-icon">
                        <Search20Svg />
                    </span>
                </button>

                <div className="search__box" />
                <div className="search__decor">
                    <div className="search__decor-start" />
                    <div className="search__decor-end" />
                </div>

                <div
                    className={classNames('search__dropdown', 'search__dropdown--suggestions', 'suggestions', {
                        'search__dropdown--open': suggestionsIsOpen && hasSuggestions,
                    })}
                >
                    {products.length > 0 && (
                        <div className="suggestions__group">
                            <div className="suggestions__group-title">
                                <FormattedMessage id="TEXT_PRODUCTS" />
                            </div>
                            <div className="suggestions__group-content">
                                {products.map((product) => (
                                    <AppLink
                                        key={product.id}
                                        href={url.product(product)}
                                        className="suggestions__item suggestions__product"
                                        onClick={() => toggleSuggestions(false)}
                                    >
                                        <div className="suggestions__product-image">
                                            <AppImage src={product.images && product.images[0]} />
                                        </div>
                                        <div className="suggestions__product-info">
                                            <div className="suggestions__product-name">
                                                {product.name}
                                            </div>
                                            <div className="suggestions__product-rating">
                                                <div className="suggestions__product-rating-stars">
                                                    <Rating value={product.rating || 0} />
                                                </div>
                                                <div className="suggestions__product-rating-label">
                                                    <FormattedMessage
                                                        id="TEXT_RATING_LABEL"
                                                        values={{
                                                            rating: product.rating,
                                                            reviews: product.reviews,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" suggestions__product-price">
                                            <CurrencyFormat value={product.price} />
                                        </div>

                                    </AppLink>
                                ))}
                            </div>
                        </div>
                    )}
                    {categories.length > 0 && (
                        <div className="suggestions__group">
                            <div className="suggestions__group-title">
                                <FormattedMessage id="TEXT_CATEGORIES" />
                            </div>
                            <div className="suggestions__group-content">
                                {categories.map((category) => (
                                    <AppLink
                                        key={category.id}
                                        href={url.category(category)}
                                        className="suggestions__item suggestions__category"
                                        onClick={() => toggleSuggestions(false)}
                                    >
                                        {category.name}
                                    </AppLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={classNames('search__dropdown', 'search__dropdown--vehicle-picker', 'vehicle-picker', {
                        'search__dropdown--open': vehiclePickerIsOpen,
                    })}
                    ref={vehiclePickerDropdownRef}
                >
                    <div className="search__dropdown-arrow" />

                    <div
                        className={classNames('vehicle-picker__panel', {
                            'vehicle-picker__panel--active': vehiclePanel === 'list' && hasVehicles,
                        })}
                    >
                        <div className="vehicle-picker__panel-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="vehicle-picker__text" style={{ marginTop: '20px' }}>
                                        <FormattedMessage id="TEXT_SELECT_VEHICLE_TO_FIND_EXACT_FIT_PARTS" />
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <TextField fullWidth id="filled-basic" label="Search for a city" variant="filled" />
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <h3 style={{
                                fontSize: '12px', color: '#888', paddingLeft: '6px', textTransform: 'uppercase',
                            }}
                            >
                                {' '}
                                Popular Cities
                            </h3>
                        </div>

                        <div className="page_wrapper" style={{ maxWidth: '900px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Bangalore </span>
                                    </div>
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Chennai </span>
                                    </div>
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Pune </span>
                                    </div>
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Noida </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page_wrapper" style={{ maxWidth: '900px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Hyderabad </span>
                                    </div>
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Lucknow </span>
                                    </div>
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Jaipur </span>
                                    </div>
                                    <div className="col-md-3">
                                        <svg
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30.000000pt"
                                            height="40.000000pt"
                                            viewBox="0 0 225.000000 225.000000"
                                            preserveAspectRatio="xMidYMid meet"
                                        >

                                            <g
                                                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                                                fill="#000000"
                                                stroke="none"
                                            >
                                                <path d="M998 1521 c-31 -10 -72 -28 -91 -40 -61 -37 -143 -135 -168 -198 -49
-128 -28 -334 34 -341 l27 -3 0 108 c0 108 0 110 30 138 l30 29 30 -29 c28
-26 30 -34 30 -97 0 -61 -2 -68 -20 -68 -17 0 -20 -7 -20 -40 0 -36 3 -40 25
-40 22 0 25 4 25 35 0 31 3 35 25 35 l25 0 0 123 0 123 70 69 70 69 0 -80 c0
-78 -1 -81 -35 -114 l-35 -34 0 -118 0 -118 40 0 40 0 0 149 c0 122 3 151 15
161 14 11 23 7 60 -30 l45 -44 0 -73 0 -73 -30 0 c-29 0 -30 -2 -30 -45 0 -45
0 -45 35 -45 34 0 35 1 35 40 0 39 1 40 35 40 l35 0 0 100 0 100 65 0 65 0 0
-134 c0 -74 2 -141 6 -149 8 -22 -88 -120 -154 -155 -77 -41 -178 -58 -252
-43 -74 15 -150 52 -198 95 -51 46 -66 47 -22 1 77 -80 189 -120 309 -113 108
7 179 38 254 108 71 67 108 120 83 120 -14 0 -16 20 -16 140 l0 140 -80 0 -80
0 0 -100 0 -100 -25 0 c-25 0 -25 1 -25 78 l0 78 -48 47 c-35 35 -53 46 -66
41 -16 -6 -17 0 -14 75 2 44 1 81 -2 81 -3 0 -40 -35 -82 -77 l-77 -78 -3
-120 c-3 -99 -6 -120 -18 -120 -12 0 -16 16 -18 71 -3 66 -5 73 -37 104 l-35
34 -40 -39 -40 -39 0 -103 c0 -57 -4 -103 -9 -103 -11 0 -37 77 -46 136 -8 54
8 143 39 210 71 155 259 255 422 225 212 -39 361 -233 339 -441 -5 -44 -4 -51
6 -36 17 28 6 170 -19 236 -76 197 -310 306 -514 241z m122 -446 l0 -135 -25
0 c-24 0 -24 1 -27 108 -3 101 -2 108 21 135 14 15 26 27 28 27 2 0 3 -61 3
-135z m-200 -95 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30
10 0 15 -10 15 -30z m330 -5 c0 -28 -4 -35 -20 -35 -16 0 -20 7 -20 35 0 28 4
35 20 35 16 0 20 -7 20 -35z"
                                                />
                                            </g>
                                        </svg>
                                        <span> Kochi </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}

                        <div className="vehicle-picker__actions">
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                style={{
                                    marginRight: '9px',
                                    marginBottom: '17px',
                                }}
                            >
                                <FormattedMessage id="BUTTON_ADD_VEHICLE" />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={classNames('vehicle-picker__panel', {
                        'vehicle-picker__panel--active': vehiclePanel === 'form' || !hasVehicles,
                    })}
                >
                    <div className="vehicle-picker__panel-body">
                        <VehicleForm location="search" onVehicleChange={handleVehicleChange} />
                        <div className="vehicle-picker__actions">
                            {hasVehicles && (
                                <div className="search__car-selector-link">
                                    {/* eslint-disable-next-line */}
                                        <AppLink
                                        anchor
                                        onClick={(event) => {
                                            event.preventDefault();

                                            setVehiclePanel('list');
                                        }}
                                        >
                                            <FormattedMessage id="BUTTON_BACK_TO_LIST" />
                                        </AppLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
