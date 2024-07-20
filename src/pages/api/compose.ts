// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComposerActionFormResponse>,
) {
  const data = req.body;
  console.log(data);

  res.status(200).json({ 
    type: 'form',
    title: 'dTech.vision',
    url: 'http://localhost:3000', // make sure this is your public URL e.g. http://localhost:3000 for local testing
   });
}
