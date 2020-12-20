import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import SearchForm from "../../common/search-form"

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 620,
        background: "url(/images/plead-guy.png), linear-gradient(131deg, rgba(38,236,129,1) 0%, rgba(21,201,130,1) 67%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "85% 100%, 0 0",
        color: "white"
    }
}))

export default function BottomPlead() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom  style={{marginTop: "30%"}}>Impress your clients and start with MyRatingBud today</Typography>
                        <Typography variant="body1" gutterBottom>MyRatingBud uses historical market data and all the information available in the product page.</Typography>
                        <Box mt={2}>
                            <SearchForm btnProps={{style: {backgroundColor: "black", color: "white"}}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}