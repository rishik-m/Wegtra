// application
import { IMainMenuLink } from '~/interfaces/main-menu-link';

const dataHeaderMainMenu: IMainMenuLink[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: {
            type: 'menu',
            links: [
                {
                    title: 'Service 1',
                    url: '/services/1',
                },
                {
                    title: 'Service 2',
                    url: '/',
                },
                {
                    title: 'Service 3',
                    url: '/',
                },
                {
                    title: 'Service 4',
                    url: '/',
                },
                {
                    title: 'Service 5',
                    url: '/',
                },
                {
                    title: 'Service 6',
                    url: '/',
                },
                {
                    title: 'Service 7',
                    url: '/',
                },
                {
                    title: 'Service 8',
                    url: '/',
                },
                {
                    title: 'Service 9',
                    url: '/',
                },
            ],
        },
        customFields: {
            ignoreIn: ['spaceship'],
        },
    },
    {
        title: 'Shop',
        url: '/demo/shop/shop-grid-4-sidebar',
        submenu: {
            type: 'megamenu',
            size: 'nl',
            columns: [
                {
                    size: 6,
                    links: [
                        {
                            title: 'Headlights & Lighting',
                            url: '/catalog/products',
                            links: [
                                { title: 'Headlights', url: '/catalog/products' },
                                { title: 'Tail Lights', url: '/catalog/products' },
                                { title: 'Fog Lights', url: '/catalog/products' },
                                { title: 'Turn Signals', url: '/catalog/products' },
                                { title: 'Switches & Relays', url: '/catalog/products' },
                                { title: 'Corner Lights', url: '/catalog/products' },
                            ],
                        },
                        {
                            title: 'Brakes & Suspension',
                            url: '/catalog/products',
                            links: [
                                { title: 'Brake Discs', url: '/catalog/products' },
                                { title: 'Wheel Hubs', url: '/catalog/products' },
                                { title: 'Air Suspension', url: '/catalog/products' },
                                { title: 'Ball Joints', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
                {
                    size: 6,
                    links: [
                        {
                            title: 'Interior Parts',
                            url: '/catalog/products',
                            links: [
                                { title: 'Floor Mats', url: '/catalog/products' },
                                { title: 'Gauges', url: '/catalog/products' },
                                { title: 'Consoles & Organizers', url: '/catalog/products' },
                                { title: 'Mobile Electronics', url: '/catalog/products' },
                            ],
                        },
                        {
                            title: 'Engine & Drivetrain',
                            url: '/catalog/products',
                            links: [
                                { title: 'Air Filters', url: '/catalog/products' },
                                { title: 'Oxygen Sensors', url: '/catalog/products' },
                                { title: 'Heating', url: '/catalog/products' },
                                { title: 'Exhaust', url: '/catalog/products' },
                                { title: 'Cranks & Pistons', url: '/catalog/products' },
                                { title: 'Cargo Accessories', url: '/catalog/products' },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        title: 'About Us',
        url: '/about-us',
        submenu: {
            type: 'menu',
            links: [
                {
                    title: 'About Team',
                    url: '/',
                },
                {
                    title: 'Career',
                    url: '/',
                },
            ],
        },
    },
    {
        title: 'Blogs',
        url: '/blogs',
    },
    {
        title: 'Contact Us',
        url: '/contact-us',
    },
];

export default dataHeaderMainMenu;
