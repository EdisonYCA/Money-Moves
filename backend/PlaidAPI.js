require('dotenv').config();
const { Configuration, PlaidEnvironments, PlaidApi } = require('plaid');
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV;
const PLAID_PRODUCTS = process.env.PLAID_PRODUCTS.split(',');
const PLAID_COUNTRY_CODES = process.env.PLAID_COUNTRY_CODES.split(',');
const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI;

const configuration = new Configuration({
    basePath: PlaidEnvironments[PLAID_ENV],
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
        'PLAID-SECRET': PLAID_SECRET,
        'Plaid-Version': '2020-09-14',
      },
    },
});

const client = new PlaidApi(configuration);

const createLinkToken = async () => {
    try{
        const response = await client.linkTokenCreate({
            client_name: 'Plaid Test App',
            user: { client_user_id: 'user-123' },
            products: PLAID_PRODUCTS,
            country_codes: PLAID_COUNTRY_CODES,
            language: 'en',
        })

        console.log(response.data)
    } catch (err) { 
        console.error(error)
    }
}