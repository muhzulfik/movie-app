import { Container, Stack, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import MovieCard from "../../molecules/MovieCard";

const HomePage = () => {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

	const fetchMovies = async (endpoint) => {
		try {
			const apiKey = ""; // Add your API key
			const response = await axiosInstance.get(
				`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${apiKey}&language=en-US&page=1`
			);
			return response.data.results;
		} catch (error) {
			console.error(`Error fetching ${endpoint} movies:`, error);
			return [];
		}
	};

	useEffect(() => {
		const fetchTopRatedMovies = async () => {
			const topRatedMovies = await fetchMovies("top_rated");
			setTopRatedMovies(topRatedMovies);
			console.log("Top rated movies", topRatedMovies);
		};

		fetchTopRatedMovies();
	}, []);

	useEffect(() => {
		const fetchNowPlayingMovies = async () => {
			const nowPlayingMovies = await fetchMovies("now_playing");
			setNowPlayingMovies(nowPlayingMovies);
			console.log("Now playing movies", nowPlayingMovies);
		};

		fetchNowPlayingMovies();
	}, []);

	return (
		<Container maxW="full" py={"56px"} px={["60px", null, "122px"]}>
			<Stack>
				<Text textStyle={"title-big"} color={"white"} mb={"9px"}>
					Now Playing
				</Text>
				<Flex
					overflowX="auto"
					css={{
						"&::-webkit-scrollbar": {
							width: "100px",
							height: "5px",
						},
						"&::-webkit-scrollbar-thumb": {
							borderRadius: "6px",
							background: "#D9D9D9",
						},
						"&::-webkit-scrollbar-track": {
							background: "transparent",
						},
					}}>
					<Stack direction="row" columns={6} spacing="28px" mb="2">
						{nowPlayingMovies.map((val) => (
							<MovieCard key={val.id} movie={val} />
						))}
					</Stack>
				</Flex>
			</Stack>
			<Stack mt={"60px"}>
				<Text textStyle={"title-big"} color={"white"} mb={"9px"}>
					Top Rated
				</Text>
				<SimpleGrid columns={6} spacing={"28px"}>
					{topRatedMovies.map((val) => (
						<MovieCard key={val.id} movie={val} />
					))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
};

export default HomePage;
