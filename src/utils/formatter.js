export const numberFormatter = (
    value,
    locale = 'en-US',
    options = { style: 'currency', currency: 'VND' },
) => {
    return new Intl.NumberFormat(locale, options).format(value);
};


