import React from "react"
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import { Link as RouterLink} from "react-router-dom"

import { Palette } from "../../values"

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    navbarTitle: {
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"
    },
    navbarContents: {
        padding: "0px 24px",
        maxHeight: 56
    },
    branding: {
        color: Palette.CTAPurple,

    },
}))

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<unknown>, newValue: number) => void;
}

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > span": {
          width: "100%",
          backgroundColor: Palette.CTAPurple,
        },
      },
})((props: StyledTabsProps) => <Tabs {...props} centered TabIndicatorProps={{ children: <span /> }} />)

interface StyledTabProps {
    label: string;
    component: any;
    to: string;
}

const StyledTab = withStyles(() =>
  createStyles({
    root: {
      minWidth: 60
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />)

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}

function ProductRatings() {
    return (
        <React.Fragment>
            <img src="/icons/Fire.svg"/>
            <Typography>256 products rated today</Typography>
        </React.Fragment>
    )
}

export default function NavBar() {
    const classes = useStyles()
    const [tab, setTab] = React.useState(0)
    const handleChange = (event: any, newValue: any) => {
        setTab(newValue)
    }
    const tabs = [
        {label: "Home", url: "/"},
        {label: "How it works", url: "/"},
        {label: "F.A.Q", url: "/"},
        {label: "Investors", url: "/"},
        {label: "About Us", url: "/"},
        {label: "Investor Relationships", url: "/"},
        {label: "Contact Us", url: "/"}
    ]
        .map((tab, index) => <StyledTab label={tab.label} {...a11yProps(index)} key={index} component={RouterLink} to={tab.url} />)
        
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" className={classes.navbarContents}>
                <Toolbar>
                    <div className={classes.branding}>
                        <Link component={RouterLink} to="/" underline="none">
                            <Typography variant="h6" className={classes.navbarTitle}>
                                &#9733;MyRatingBud
                            </Typography>
                        </Link>
                    </div>
                    <Container maxWidth="md">
                        <StyledTabs value={tab} onChange={handleChange} aria-label="simple tabs example">
                            {tabs}
                        </StyledTabs>
                    </Container>
                    <ProductRatings/>
                </Toolbar>
            </AppBar>
        </div>
    )
}