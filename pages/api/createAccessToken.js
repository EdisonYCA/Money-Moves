import { client } from '@/library/plaid';
import { addDataToFirestore } from '@/backend/Database';

export default async function handler(req, res){
    const PUBLIC_TOKEN = req.body.public_token

    try{
        const response = await client.itemPublicTokenExchange({
            public_token: PUBLIC_TOKEN
        })
        
        const ACCESS_TOKEN = response.data.access_token;
        const ITEM_ID = response.data.item_id;

        // addDataToFirestore({
        //     "access_tokens": [[ACCESS_TOKEN, ITEM_ID]]
        // })

        await addDataToFirestore ({
            "Test": ["Hello"]
        })

        res.status(200)
    } catch(err){
        res.status(500)
    }
}
