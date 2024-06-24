const removeDiacriticalMarks = (input) => {
    // Normalize to decomposed form
    let normalized = input.normalize('NFD');
    // Remove combining diacritical marks and non-ASCII characters
    let removed = normalized.replace(/[\u0300-\u036f]/g, '').replace(/[^\u0000-\u007E]/g, '');
    return removed;
};

export const generateCode = (obj) => {
    if (obj && obj.trim() !== '') {
        let newInput = removeDiacriticalMarks(obj);

        let newObj = newInput.replace(/\s*\([^)]*\)/g, '');

        let words = newObj.split(/\s+/);

        let acronym = words.reduce((acc, word) => {
            if (word.trim() !== '') {
                return acc + word.charAt(0).toUpperCase();
            }
            return acc;
        }, '');

        let randomNumber = Math.floor(Math.random() * 900) + 100;

        return acronym + randomNumber;
    }
};

export default generateCode;
