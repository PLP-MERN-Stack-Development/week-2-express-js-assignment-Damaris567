const crypto = require('crypto');

function generateApiKey() {
    const prefix = 'myapp_prod_';
    const randomBytes = crypto.randomBytes(16);
    const apiKey = prefix + randomBytes.toString('hex');
    console.log('\nGenerated API Key:', apiKey);
    console.log('\nAdd this to your .env file as:');
    console.log('apiKey=' + apiKey + '\n');
}

generateApiKey(); 