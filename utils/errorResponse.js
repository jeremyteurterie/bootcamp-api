// Définition de la classe ErrorResponse
class ErrorResponse extends Error {
  constructor(message, statusCode) {
    // Appel du constructeur de la classe parent "Error" avec le message d'erreur
    super(message);

    // Définition d'une propriété "statusCode" spécifique pour cette classe ErrorResponse
    this.statusCode = statusCode;
  }
}

// Exportation de la classe ErrorResponse pour pouvoir l'utiliser ailleurs dans votre code
module.exports = ErrorResponse;
