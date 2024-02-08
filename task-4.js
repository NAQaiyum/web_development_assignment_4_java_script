function generatePassword(obj) {
    // Check if the input is valid
    if (!obj || typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }

    // Check if birthYear is a 4-digit number
    if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }

    // Generate the password
    return `${obj.siteName.charAt(0).toUpperCase()}#${obj.name}@${obj.birthYear}`;
}

// Test cases
console.log(generatePassword({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Output: Google#kolimuddin@1999
console.log(generatePassword({ name: "rahat", birthYear: 2002, siteName: "Facebook" })); // Output: Facebook#rahat@2002
console.log(generatePassword({ name: "toky", birthYear: 200, siteName: "Facebook" })); // Output: invalid
console.log(generatePassword({ name: "maisha", birthYear: 2002 })); // Output: invalid
