const ValidationError = require("./validation-error");

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(exceededBy = null) {
    super(`Maximum length exceeded${exceededBy ? ` by ${exceededBy}` : ""}`);
    this.name = "MaximumLengthExceededError";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
