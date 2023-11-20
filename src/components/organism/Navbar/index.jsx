"use client";

import {
	Box,
	Flex,
	Button,
	Text,
	HStack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	useDisclosure,
	Image,
	VStack,
} from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import tmdbImgLogin from "../../../assets/tmdb-img-login.svg";

export default function Nav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const auth = Cookies.get("authToken");

	const handleLogout = () => {
		navigate("/");
	};
	return (
		<>
			<Box bg={"#0EA5E9"} px={["60px", null, "122px"]}>
				<Flex
					h={"100px"}
					alignItems={"center"}
					justifyContent={"space-between"}>
					<Box my={"14px"}>
						<Text
							textStyle={"title-big"}
							color={"white"}
							letterSpacing={"24px"}>
							CINEMA
						</Text>
					</Box>

					<Flex alignItems={"center"}>
						<HStack direction={"row"} spacing={7}>
							<Text color={"white"} onClick={onOpen}>
								Favorit
							</Text>
							<Text color={"white"} onClick={onOpen}>
								Watchlist
							</Text>
							{auth && (
								<Button onClick={handleLogout} variant={"ghost"}>
									<BiLogOut size={25} fill="white" />
								</Button>
							)}
						</HStack>
					</Flex>
				</Flex>
			</Box>
			<Modal isCentered size={"xs"} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay backdropFilter="blur(4px)" />
				<ModalContent>
					<ModalBody>
						<VStack my={"20px"}>
							<Image src={tmdbImgLogin} alt={"logo login"} rounded={"6px"} />
							<Text mt={4}>Login with TMDB</Text>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
