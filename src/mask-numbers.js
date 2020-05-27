function maskNumber(population = '0'){
    return parseInt(population).toLocaleString();
}

export { maskNumber as default }