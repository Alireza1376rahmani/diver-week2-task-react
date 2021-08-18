import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CircularProgress, {
	CircularProgressProps,
} from "@material-ui/core/CircularProgress";

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: "relative",
			margin: "auto",
			width: "40px",
		},
		bottom: {
			color: theme.palette.grey[
				theme.palette.type === "light" ? 200 : 700
			],
		},
		top: {
			color: "#1a90ff",
			animationDuration: "550ms",
			position: "absolute",
			left: 0,
		},
		circle: {
			strokeLinecap: "round",
		},
	})
);

function FacebookCircularProgress(props: CircularProgressProps) {
	const classes = useStylesFacebook();

	return (
		<div className={classes.root}>
			<CircularProgress
				variant="determinate"
				className={classes.bottom}
				size={40}
				thickness={4}
				{...props}
				value={100}
			/>
			<CircularProgress
				variant="indeterminate"
				disableShrink
				className={classes.top}
				classes={{
					circle: classes.circle,
				}}
				size={40}
				thickness={4}
				{...props}
			/>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	paper: {
		position: "absolute",
		top: 0,
		right: 0,
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

const Loading = () => {
	const classes = useStyles();

	return (
		<div className={classes.paper}>
			<FacebookCircularProgress />
			<br />
		</div>
	);
};

export default Loading;
