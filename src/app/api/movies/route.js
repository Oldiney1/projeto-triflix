export async function GET() {
  const apiKey = process.env.TMDB_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
  );

  const data = await res.json();
  return Response.json(data);
}
