import React from "react"

import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import StarIcon from "@material-ui/icons/Star"

import SearchForm from "../search-form"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: "black",
        color: "white",
        minHeight: 320,
        padding: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        "& a": {
            display: "block",
            margin: 25,
            color: "white",
        }
    }
}))

export default function Footer() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Box>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}><StarIcon/> MyRatingBud</Typography>
                            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="#">How It Works</Link>
                            <Link href="#">F.A.Q</Link>
                            <Link href="#">Investors</Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link href="#">About Us</Link>
                            <Link href="#">Investor Relationships</Link>
                            <Link href="#">Contact Us</Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom style={{marginTop: theme.spacing(5)}}>Newsletter</Typography>
                            <SearchForm inputProps={{style: {minWidth: theme.spacing(5)}, color: "secondary", label: "Email", type: "dark"}} btnProps={{text: "Sign Up"}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{backgroundColor: "white", height: 2, marginTop: theme.spacing(10), marginBottom: theme.spacing(2)}}></div>
                            <Typography variant="subtitle1" gutterBottom style={{float: "left"}}>© 2020</Typography>
                            <Typography variant="subtitle1" gutterBottom style={{float: "right"}}>Terms and conditions</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}