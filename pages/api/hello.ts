import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  ok: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Does', ok: false })
}
