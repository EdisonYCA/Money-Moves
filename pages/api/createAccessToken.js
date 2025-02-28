import {client, PLAID_COUNTRY_CODES, PLAID_PRODUCTS} from '@/library/plaid';

export default async function handler(req, res){
    const PUBLIC_TOKEN = req.body.public_token

    try{
        const response = await client.itemPublicTokenExchange({
            public_token: PUBLIC_TOKEN
        })
        
        // TODO: put this in firebase
        const ACCESS_TOKEN = response.data.access_token;

        res.status(200).json(response.data)
    } catch(err){
        res.status(500).json({error: 'Failed to create link token'})
    }
}
