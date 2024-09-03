// Importer le module nodemailer
const nodemailer = require('nodemailer');

// Configurer le transporteur avec le service de messagerie, ici Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'envioie@gmail.com',  // Remplacez par votre adresse Gmail
        pass: 'mot de passe',      // Remplacez par votre mot de passe Gmail
    }
});

// Définir les options de l'e-mail
const mailOptions = {
    from: 'envoieg@gmail.com',       // L'adresse de l'expéditeur (votre email)
    to: 'edouniang20@gmail.com',   // L'adresse du destinataire
    subject: 'Test d\'envoi d\'e-mail avec Nodemailer',  // Sujet de l'e-mail
    text: 'Bonjour, ceci est un test d\'envoi d\'e-mail en utilisant Nodemailer!'  // Contenu de l'e-mail
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
    } else {
        console.log('E-mail envoyé avec succès : ' + info.response);
    }
});
