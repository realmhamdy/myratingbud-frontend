import React from "react"

import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import { Palette } from "../../values"
import GreenButton from "../../common/green-button"
import RatingBox from "../../common/rating-box"

const useStyles = makeStyles(() => ({
    video: {
        width: "100%",
        minHeight: 600
    },
    belowVideo: {
        backgroundColor: Palette.CTAPurple,
        backgroundImage: "url(/images/mask-group.png), url(/images/manwithphone.png)",
        backgroundPosition: "0 0, 90% 120%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: 630,
        marginTop: -100
    },
    textBlock: {
        marginTop: "10%",
        color: Palette.White
    },
    ratingBox: {
        position: "absolute",
        bottom: 150,
        right: 350
    }
}))

export default function HomePart2() {
    const classes = useStyles()

    return (
        <div style={{position: "relative"}}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper variant="elevation" elevation={3} style={{zIndex: 2}}>
                        <iframe width="100%" height="600" src="https://www.youtube.com/embed/_IUh5l_viAI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.belowVideo}>
                    <Grid container>
                        <Grid item xs={1}/>
                        <Grid item xs={6} className={classes.textBlock}>
                            <Typography variant="h3" gutterBottom>Evaluate rate & condition of the product with our Advanced AI Algoritm</Typography>
                            <Typography variant="body1" style={{marginBottom: 12}}>MyRatingBud uses historical market data and all the information available in the product page. Reliable and easy to use. Be one of the first to try it!</Typography>
                            <GreenButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <RatingBox className={classes.ratingBox}/>
        </div>
    )
}