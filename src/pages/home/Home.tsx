import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import RatingBox from "../../common/rating-box"
import SearchForm from "../../common/search-form"

import HomePart2 from "./HomePart2"
import HowItWorks from "./HowItWorks"
import Testimonials from "./Testimonials"
import Showcase from "./Showcase"
import BottomPlead from "./BottomPlead"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: "no-repeat url(/images/homepage-bg.png)",
        backgroundPosition: "top right",
        minHeight: 725,
        width: "100%"
    },
    header: {
        marginBottom: theme.spacing(2)
    },
    textContainer: {
        marginTop: "20%"
    },
    productSearchRow: {
        marginTop: theme.spacing(10)
    },
    scrollToDiscoverContainer: {
        position: "absolute",
        bottom: theme.spacing(5),
        textAlign: "center",
        "& span": {
            display: "block"
        }
    },
    ratingBox: {
        position: "absolute",
        bottom: 130,
        right: 180
    }
}))

export default function Home() {
    const classes = useStyles()
    return (
        <div>
            <Box mx={7.5}>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} className={classes.textContainer}>
                            <Typography variant="h3" className={classes.header}>Make Smarter Choices</Typography>
                            <Typography variant="body1">One number. Easy to compare. Neutral. Free. Not biased towards the seller or the buyer.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.productSearchRow}>
                        <Grid item xs={6}>
                            <SearchForm />
                        </Grid>
                    </Grid>
                    <div className={classes.scrollToDiscoverContainer}>
                        <img src="/images/mouse.png" alt="Mouse image" />
                        <Typography variant="caption">Scroll to discover</Typography>
                    </div>
                    <RatingBox className={classes.ratingBox} />
                </div>
            </Box>
            <Box mt={20}>
                <HomePart2 />
            </Box>
            <Box mt={20}>
                <HowItWorks />
            </Box>
            <Box mt={20}>
                <Testimonials />
            </Box>
            <Box mt={20}>
                <Showcase />
            </Box>
            <Box mt={20}>
                <BottomPlead />
            </Box>
        </div>
    )
}
