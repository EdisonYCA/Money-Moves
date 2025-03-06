import { client } from "@/library/plaid";

export default async function handler(req, res) {
  const access_token = req.body.access_token;

  try {
    const response = await client.accountsGet({
      access_token: access_token,
    });

    const accountsData = response.data.accounts.map(account => ({
        name: account.name,                   
        balance: account.balances.current,    
        subtype: account.subtype             
    }));

    res.status(200).json({
      accounts: accountsData
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
