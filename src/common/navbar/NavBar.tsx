import React from "react"
import { makeStyles, withStyles, Theme, createStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import { Palette } from "../../values"

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    navbarTitle: {
        marginBottom: 10,
        display: "inline-block"
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
            <img src="icons/Fire.svg"/>
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
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" className={classes.navbarContents}>
                <Toolbar>
                    <div className={classes.branding}>
                        <Link component="button" href="/">
                            <span style={{fontSize: "2em"}}>&#9733;</span>
                            <Typography variant="h6" className={classes.navbarTitle}>
                                MyRatingBud
                            </Typography>
                        </Link>
                    </div>
                    <Container maxWidth="md">
                        <StyledTabs value={tab} onChange={handleChange} aria-label="simple tabs example">
                            <StyledTab label="Home" {...a11yProps(0)} />
                            <StyledTab label="How it works" {...a11yProps(1)} />
                            <StyledTab label="F.A.Q" {...a11yProps(2)} />
                            <StyledTab label="Investors" {...a11yProps(3)} />
                            <StyledTab label="About Us" {...a11yProps(4)} />
                            <StyledTab label="Investor Relationships" {...a11yProps(5)} />
                            <StyledTab label="Contact Us" {...a11yProps(6)} />
                        </StyledTabs>
                    </Container>
                    <ProductRatings/>
                </Toolbar>
            </AppBar>
        </div>
    )
}