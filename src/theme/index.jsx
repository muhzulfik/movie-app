import { extendTheme } from "@chakra-ui/react";

import fonts from "./foundation/fonts";
import textStyles from "./foundation/typography";

const theme = extendTheme({
	fonts,
	textStyles,
});

export default theme;
