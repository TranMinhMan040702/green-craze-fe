export const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some((field) => fieldsError[field].errors.length > 0);
}