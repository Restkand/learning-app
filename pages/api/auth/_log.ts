// src/pages/api/auth/_log.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { error } = req.body;

      // Log error to a file, external service, or database
      console.error('Received error:', error);

      // Respond with success
      res.status(200).json({ message: 'Error logged successfully' });
    } catch (err) {
      console.error('Error logging failed:', err);
      res.status(500).json({ message: 'Error logging failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
