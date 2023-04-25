import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  timestamp: Date
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const timestamp = new Date()
  res.status(300).json({ name: 'Luan Kisaki', timestamp })
}
