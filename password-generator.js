// Importer le package generate-password
const generatePassword = require('generate-password');

// Créer une fonction pour générer un mot de passe
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,  // Longueur du mot de passe
        numbers: true,  // Inclure des chiffres
        symbols: true,  // Inclure des symboles
        uppercase: true,  // Inclure des majuscules
        lowercase: true,  // Inclure des minuscules
        excludeSimilarCharacters: true  // Exclure des caractères similaires (ex: 'i' et 'l')
    });

    // Afficher le mot de passe généré dans la console
    console.log(`Generated Password: ${password}`);
}

// Appeler la fonction pour générer et afficher le mot de passe
generateRandomPassword();
