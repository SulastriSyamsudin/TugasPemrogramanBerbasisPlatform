function bagi(a, b) {
    if (b === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan!";
    }
    return a / b;
}
module.exports = bagi;