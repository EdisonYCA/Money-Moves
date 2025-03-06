import {client, PLAID_COUNTRY_CODES, PLAID_PRODUCTS} from '@/library/plaid';

export default async function handler(req, res){
    try{
        const response = await client.linkTokenCreate({
            client_name: 'Plaid Test App',
            user: { client_user_id: 'user-123' },
            products: PLAID_PRODUCTS,
            country_codes: PLAID_COUNTRY_CODES,
            language: 'en',
        })
        res.status(200).json(response.data)
    } catch(err){
        res.status(500).json({error: 'Failed to create link token'})
    }
}
