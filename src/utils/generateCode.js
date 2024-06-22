export const generateCode = (obj) => {
    if (obj) {
        const words = obj.split(' ');
        let acronym = '';
        words.forEach((word) => {
            acronym += word.charAt(0);
        });
        const randomNumber = Math.floor(Math.random() * 900) + 100;

        return acronym.toUpperCase() + randomNumber;
    }
};

export default generateCode;
