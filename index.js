function licenseKeyFormating(StringToFormat, GroupLength) {
    if (typeof StringToFormat !== 'string' || typeof GroupLength !== 'number' || GroupLength <= 0) {
        throw new Error('Invalid input. Please provide a valid string (S) and a positive integer (K).');
    }

    StringToFormat = StringToFormat.replace(/-/g, '');
    const firstGroupLength = StringToFormat.length % GroupLength;
    let reformattedString = StringToFormat.slice(0, firstGroupLength).toUpperCase();

    for (
        let index = firstGroupLength; 
        index < StringToFormat.length; 
        index += GroupLength
    ) {
        reformattedString += (reformattedString.length > 0 ? '-' : '') + StringToFormat.slice(index, index + GroupLength).toUpperCase();
    }

    return reformattedString;
}

console.log('S = “5F3Z-2e-9-w”, K = 4 | Result: ', licenseKeyFormating("5F3Z-2e-9-w", 4));
console.log('S = “2-5g-3-J”, K = 2 | Result: ', licenseKeyFormating("2-5g-3-J", 2));

module.exports = licenseKeyFormating;