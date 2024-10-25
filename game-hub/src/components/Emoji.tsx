import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh emoji" },
    4: { src: thumbsUp, alt: "Thumbs up emoji" },
    5: { src: bullsEye, alt: "Bulls eye emoji" },
  };

  return <Image {...emojiMap[rating]} boxSize={6} marginY={2} />;
};

export default Emoji;
