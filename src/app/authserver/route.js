import { NextResponse } from "next/server";
import SpotifyWebApi from "spotify-web-api-node";
console.log(process.env.CLIENT_ID);
export async function POST(req, res) {
  const body = await req.json();
  const code = body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
  console.log(req.method);
  const data = await spotifyApi.authorizationCodeGrant(code);

  return NextResponse.json(
    {
      access_token: data.body.access_token,
      refresh_token: data.body.refresh_token,
      expires_in: data.body.expires_in,
    },
    { status: 200 }
  );

  //   return NextResponse.json({ error: code }, { status: 200 });
}
