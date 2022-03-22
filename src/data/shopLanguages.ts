// application
import { ILanguage } from '~/interfaces/language';

const dataShopLanguages: ILanguage[] = [
    {
        locale: 'en',
        code: 'en',
        name: 'English',
        icon: '/images/languages/language-1.png',
        direction: 'ltr',
    },
    {
        locale: 'hi',
        code: 'hi',
        name: 'Hindi',
        icon: '/images/languages/language-2.png',
        direction: 'ltr',
    },
    {
        locale: 'kn',
        code: 'kn',
        name: 'Kannada',
        icon: '/images/languages/language-3.png',
        direction: 'rtl',
    },
    {
        locale: 'ta',
        code: 'ta',
        name: 'Tamil',
        icon: '/images/languages/language-3.png',
        direction: 'rtl',
    },
    {
        locale: 'te',
        code: 'te',
        name: 'Telugu',
        icon: '/images/languages/language-3.png',
        direction: 'rtl',
    },
];

export const dataShopDefaultLocale = 'en';

export default dataShopLanguages;
