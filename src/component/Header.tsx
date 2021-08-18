import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Icon from "@mdi/react";
import { mdiAccountOutline, mdiClose } from "@mdi/js";
import { mdiBellOutline } from "@mdi/js";

import logo from "../assets/image/logo.jpg";
// import { url } from "inspector";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginBottom: 25,
		},
		navbar: {
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
		navbarLogo: {
			backgroundImage: `url(${logo})`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "contain",
			backgroundPosition: "center",
			display: "flex",
			justifyContent: "space-between",
		},
		rightNavbarItem: {
			display: "flex",
			alignItems: "center",
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			// flexGrow: 1,
			textAlign: "right",
			marginRight: 15,
		},
	})
);

const Navbar = (props: any) => {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			{/*<FormGroup>*/}
			{/*    <FormControlLabel*/}
			{/*        control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}*/}
			{/*        label={auth ? 'Logout' : 'Login'}*/}
			{/*    />*/}
			{/*</FormGroup>*/}
			<AppBar position="static" className={classes.navbar}>
				<Toolbar className={classes.navbarLogo}>
					<div className={classes.rightNavbarItem}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							className={classes.title + " gradiantText"}
						>
							کیلین یار
						</Typography>
					</div>

					{auth && (
						<div>
							<IconButton
								aria-label="show 17 new notifications"
								color="inherit"
							>
								<Badge badgeContent={17} color="secondary">
									<Icon
										path={mdiBellOutline}
										title="بستن"
										size={1}
										color="primary"
									/>
								</Badge>
							</IconButton>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								{props.avatar ? (
									<img
										src={props.avatar}
										alt="profile"
										height="35"
										width="35"
										style={{ borderRadius: "50%" }}
									/>
								) : (
									<Icon
										path={mdiAccountOutline}
										title="بستن"
										size={1}
										color="primary"
									/>
								)}
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									پروفایل
								</MenuItem>
								<MenuItem onClick={handleClose}>خروج</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
