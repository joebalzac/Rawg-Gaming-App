import { Badge, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  score: number;
}

const scoreToColor = (score: number) => {
  if (score >= 90) return "green";
  if (score >= 70) return "yellow";
  return "red";
};

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={2}
      colorScheme={scoreToColor(score)}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
