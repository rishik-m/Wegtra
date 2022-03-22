// application
import { ICurrency } from '~/interfaces/currency';

const dataShopCurrencies: ICurrency[] = [
    {
        code: 'EUR',
        symbol: '€',
        name: 'Euro',
        rate: 0.92,
    },
    {
        code: 'INR',
        symbol: '₹',
        name: 'Indian National Rupee',
        rate: 0.78,
    },
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 1,
    },
];

const dataShopDefaultCurrencyCode = 'INR';

export const dataShopDefaultCurrency: ICurrency = dataShopCurrencies.find((x) => (
    x.code === dataShopDefaultCurrencyCode
))!;

export default dataShopCurrencies;
