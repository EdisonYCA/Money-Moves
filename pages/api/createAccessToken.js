import { client } from '@/library/plaid';
import { addDataToFirestore, addDataToFirestore2 } from '@/backend/Database';

export default async function handler(req, res){
    const {public_token, userid} = req.body

    try{
        const response = await client.itemPublicTokenExchange({
            public_token: public_token
        })
        
        const access_token = response.data.access_token;
        const ITEM_ID = response.data.item_id;

        addDataToFirestore2({
            "access_tokens": [access_token]
        })

        // todo send a better respons
        res.status(200).json({message: "success"})
    } catch(err){
        res.status(500).json({error: err.message})
    }
}
