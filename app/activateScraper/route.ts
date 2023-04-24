import { NextApiRequest } from "next";

type Body = {
  search: string;
}

export async function POST(req: Request) {
  console.log("Submitting...", req.body);

}