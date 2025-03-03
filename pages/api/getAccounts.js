import { client } from '@/library/plaid';

export default async function handler(req, res){

    try{
        const response = await client.accountsGet(req)
        console.log(response)        
        res.status(200).json(response)
    } catch(err){
        res.status(500).json({"error": err})
    }
}
