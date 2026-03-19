export default function GameDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Juego {params.id}</h1>
      <p>info del juego</p>
    </main>
  );
}