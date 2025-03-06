import { client } from "@/library/plaid";

export default async function handler(req, res) {
  const { access_token, cursor } = req.body;

  try {
    const response = await client.transactionsSync({
      access_token: access_token,
      cursor: cursor || null,
    });

    const { added, modified, removed } = response.data;

    res.status(200).json({
      added,
      modified,
      removed,
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }
}
