export const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some((field) => fieldsError[field].errors.length > 0);
};
export const objectToFormData = (obj) => {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
};
