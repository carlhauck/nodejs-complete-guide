const path = require('path');

// process.mainModule.filename is deprecated; use require.main.filename instead
module.exports = path.dirname(require.main.filename);