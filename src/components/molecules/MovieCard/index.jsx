import { Card, Image, Stack, Text } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
	return (
		<Card maxW="193px" minH="290px" key={movie.id} bg="#050E12">
			<Image
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				roundedTop="6px"
			/>
			<Stack spacing="1" my="13px" mx="15px">
				<Text textStyle="title-medium" isTruncated>
					{movie.title}
				</Text>
				<Text textStyle="title-small">
					{new Date(movie.release_date).getFullYear()}
				</Text>
			</Stack>
		</Card>
	);
};

export default MovieCard;
