export const isEmpty = (formField) => {
    return formField === null || formField.trim() === "" ? true : false 
}