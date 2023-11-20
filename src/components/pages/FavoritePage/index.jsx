import { Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import MovieCard from "../../molecules/MovieCard";

const FavoritePage = () => {
	const [favoriteMovies, setTopFavoriteMovies] = useState([]);

	return (
		<Container maxW="full" py={"56px"} px={["60px", null, "122px"]}>
			<Stack>
				<Text textStyle={"title-big"} color={"white"} mb={"9px"}>
					Your Favorite Movies
				</Text>
				<SimpleGrid columns={6} spacing={"28px"}>
					{favoriteMovies?.map((val) => (
						<MovieCard key={val.id} movie={val} />
					))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
};

export default FavoritePage;
