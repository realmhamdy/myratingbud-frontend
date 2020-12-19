import React from "react"

import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Carousel from "react-material-ui-carousel"

import { Palette } from "../../values"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundImage: "url(/images/left-quote.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        minHeight: 400
    },
    avatarSM: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    avatarMD: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    avatarLG: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
    avatarXL: {
        width: theme.spacing(10),
        height: theme.spacing(10)     
    }
}))

interface Testimonial {
    name: string,
    avatar: string,
    text: string
}

interface TestimonialItemProps {
    item: Testimonial
}

const TestimonialItem = function(props: TestimonialItemProps) {
    const classes = useStyles()

    return (
        <div>
            <Box mx="auto" style={{textAlign: "center"}}>
                <Avatar src={`/images/${props.item.avatar}`} style={{display: "inline-block"}} className={classes.avatarXL}/>
                <Typography variant="h6" align="center">{props.item.name}</Typography>
                <Typography variant="body1" align="center">{props.item.text}</Typography>
            </Box>
        </div>
    )
}

export default function Testimonials() {
    const classes = useStyles()
    const testimonailsData = new Array(6).fill({
        name: "Samantha Jersey, Boston",
        avatar: "avatar-6.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed erat posuere, ullamcorper odio sed, vulputate elit. Mauris ornare laoreet lacus at elementum."})
    const testimonialItems = testimonailsData.map((testimonial, index) => <TestimonialItem key={index} item={testimonial}/>)
    return (
        <div style={{position: "relative"}}>
            <Grid container className={classes.root}>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <Carousel activeIndicatorProps={{className: "", style: {color: Palette.CTAGreen}}}>{testimonialItems}</Carousel>
                </Grid>
            </Grid>
            <Avatar style={{position: "absolute", top: "15%", left: "0"}} className={classes.avatarSM} src="/images/avatar-1.png"/>
            <Avatar style={{position: "absolute", top: "60%", left: "10%"}} className={classes.avatarLG} src="/images/avatar-2.png"/>
            <Avatar style={{position: "absolute", top: "20%", left: "20%"}} className={classes.avatarMD} src="/images/avatar-3.png"/>
            <Avatar style={{position: "absolute", top: "0%", left: "23%"}} className={classes.avatarSM} src="/images/avatar-4.png"/>
            <Avatar style={{position: "absolute", top: "75%", left: "27%"}} className={classes.avatarLG} src="/images/avatar-5.png"/>
            <Avatar style={{position: "absolute", top: "75%", left: "75%"}} className={classes.avatarLG} src="/images/avatar-7.png"/>
            <Avatar style={{position: "absolute", top: "15%", left: "80%"}} className={classes.avatarSM} src="/images/avatar-8.png"/>
            <Avatar style={{position: "absolute", top: "50%", left: "90%"}} className={classes.avatarMD} src="/images/avatar-9.png"/>
            <Avatar style={{position: "absolute", top: "0%", left: "95%"}} className={classes.avatarLG} src="/images/avatar-10.png"/>
        </div>
    )
}
