import React from "react"

import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"


interface Step {
    icon: string,
    text: string
}

interface StepProps {
    step: Step,
    index: number
}

const Step = function(props: StepProps) {
    return (
        <div>
            <Box mx="auto" mb={1} style={{textAlign: "center"}}><img src={`/images/${props.step.icon}`}/></Box>
            <Typography variant="h5" align="center" gutterBottom>Step {props.index}</Typography>
            <Typography variant="body1" align="center">{props.step.text}</Typography>
        </div>
    )
}

export default function HowItWorks() {
    const stepData: Array<Step> = [
        {icon: "font-file-2.png", text: "Copy URL of the product"},
        {icon: "font-file-1.png", text: "Insert the URL in the rate product page"},
        {icon: "monitor.png", text: "Review rating and add comparison with another product"},
        {icon: "compare.png", text: "Compare the product rated and make a buying decision"}
    ]
    const steps = stepData.map((step, index) => {
            return (
                <Grid item xs={3} key={index}>
                    <Step step={step} index={index + 1}/>
                </Grid>
            )
    })
    return (
        <div>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>Evaluate rate & condition of the product with our Advanced AI Algoritm</Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>MyRatingBud uses historical market data and all the information available in the product page.</Typography>
            </Container>
            <Grid container style={{marginTop: 64}}>
                <Grid item xs={1}/>
                <Grid container item xs={10}>
                    {steps}
                </Grid>
            </Grid>
        </div>
    )
}
