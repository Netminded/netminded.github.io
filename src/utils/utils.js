export const isEmpty = (formField) => {
    return formField === null || formField.trim() === "" ? true : false 
}

export const charactersOnly = (formField) => {
    return /^[a-zA-Z\s-'.]+$/.test(formField)
}

export const validEmailFormat = (formField) => {
    // Just test the email has the correct structure so as not to exclude obscure email address use cases
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formField)
}

export const ValidDomainFormat = (domain) => {
    return /^(?:(?:https?):\/\/)?(?:www\.)?([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+(?:[a-zA-Z]{2,})$/.test(domain)
}