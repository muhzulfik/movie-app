import { Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MovieCard from "../../molecules/MovieCard";

const WatchListPage = () => {
	const navigate = useNavigate();

	const [watchlistMovies, setTopWatchlistMovies] = useState([]);

	return (
		<Container maxW="full" py={"56px"} px={["60px", null, "122px"]}>
			<Stack>
				<Text textStyle={"title-big"} color={"white"} mb={"9px"}>
					Your Watchlist
				</Text>
				<SimpleGrid columns={6} spacing={"28px"}>
					{watchlistMovies?.map((val) => (
						<MovieCard key={val.id} movie={val} />
					))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
};

export default WatchListPage;
