import React from "react"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import StarIcon from "@material-ui/icons/Star"

import { Palette } from "../../values"

interface RatingBoxProps {
    className?: string
}

export default function RatingBox(props: RatingBoxProps) {

    const stars = new Array(5).fill(0).map((item, index) => (<StarIcon key={index} />))

    return (
        <Paper variant="outlined" {...props} style={{width: 220, height: 40, padding: "24px 0px 24px 24px"}}>
            <Grid container >
                <Grid item xs={3}>
                    <Typography variant="h4" style={{paddingTop: 4}}>100</Typography>
                </Grid>
                <Grid item xs={8}>
                    <div style={{textAlign: "center", color: Palette.Orange}}>
                        {stars}
                    </div>
                    <Typography variant="body2" align="center" style={{color: Palette.TextSecondary}}>120000 rated</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}