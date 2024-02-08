function generatePassword(obj) {
    if (!obj || typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }
    if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }

    else {
        const firstLatterSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
        return `${firstLatterSiteName}#${obj.name}@${obj.birthYear}`;
    }
}

console.log(generatePassword({ name: "nayeem", birthYear: 1200}));