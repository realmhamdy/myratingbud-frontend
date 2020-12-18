import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import RatingBox from "../../common/rating-box"
import { Palette } from "../../values"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: "no-repeat url(/homepage-bg.png)",
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
    productSearchInput: {
        minWidth: 400,
        "& fieldset": {
            borderRadius: 0,
            borderRight: "none",
            borderWidth: 1
        }
    },
    productSearchButton: {
        height: 56,
        borderRadius: 0,
        backgroundColor: Palette.CTAGreen,
        "&:hover": {
            backgroundColor: Palette.CTAGreenDarker
        }
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
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6} className={classes.textContainer}>
                    <Typography variant="h3" className={classes.header}>Make Smarter Choices</Typography>
                    <Typography variant="body1">One number. Easy to compare. Neutral. Free. Not biased towards the seller or the buyer.</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.productSearchRow}>
                <Grid item xs={6}>
                    <TextField
                        label="Insert Url to the product to be rated"
                        variant="outlined"
                        color="primary"
                        className={classes.productSearchInput}
                    />
                    <Button disableElevation color="primary" variant="contained" className={classes.productSearchButton}>Rate Now</Button>
                </Grid>
            </Grid>
            <div className={classes.scrollToDiscoverContainer}>
                <img src="/mouse.png" alt="Mouse image"/>
                <Typography variant="caption">Scroll to discover</Typography>
            </div>
            <RatingBox className={classes.ratingBox} />
        </div>
    )
}
