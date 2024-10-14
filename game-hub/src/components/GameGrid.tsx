import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, loading } = useGames();

  return (
    <ul>
      {}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
