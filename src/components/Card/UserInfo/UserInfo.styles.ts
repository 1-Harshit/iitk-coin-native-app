import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

const fontSize = FONT.SIZE.H3;

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-start",
		backgroundColor: COLORS.LIGHT_GREY,
		borderRadius: 20,
		elevation: 10,
		marginBottom: 20,
		padding: fontSize,
		position: "relative",
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		width: "100%",
	},
	itemContainer: {
		alignItems: "flex-start",
		flex: 1,
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		padding: 2,
	},
	row: {
		flex: 2,
		flexDirection: "row",
		top: -6,
	},
	title: {
		fontSize: fontSize / 1.5,
	},
	value: {
		color: COLORS.CHARCOAL_GREY,
		fontSize: fontSize * 1.07,
		opacity: 1,
		paddingTop: 2,

		textShadowColor: COLORS.BLACK_25_PERCENT,
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 4,
	},
});

export default styles;
