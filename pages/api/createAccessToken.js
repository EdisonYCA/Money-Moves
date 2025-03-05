import { client } from '@/library/plaid';
import { updateAccounts } from '@/backend/Database';

export default async function handler(req, res){
    const public_token = req.body.public_token

    try{
        const response = await client.itemPublicTokenExchange({
            public_token: public_token
        })
        
        const access_token = response.data.access_token;
        const item_id = response.data.item_id;
        const accountUpdated = await updateAccounts(access_token, item_id, "y8qq7tKB3ib3HWkw7U80XmGAeml2");

        if (accountUpdated) {
            res.status(200).json({ message: 'Account linked successfully' })
        } else {
            res.status(500).json({ error: 'Failed to update account information in the database' })
        }

    } catch(err){
        res.status(500).json({ error: 'Error occurred while exchanging public token' })
    }
}
