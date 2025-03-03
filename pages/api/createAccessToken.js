import { client } from '@/library/plaid';
import { addAccessToken } from '@/backend/Database';

export default async function handler(req, res){
    const {public_token, userID} = req.body

    try{
        const response = await client.itemPublicTokenExchange({
            public_token: public_token
        })
        
        const ACCESS_TOKEN = response.data.access_token;
        
        await addAccessToken(userID, ACCESS_TOKEN)
        res.status(200).json({ success: true, message: "Access token added successfully" });
    } catch(err){
        res.status(500).json({ error: true, message: err });
    }
}
