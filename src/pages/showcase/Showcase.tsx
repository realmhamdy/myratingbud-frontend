import React from "react"

import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

import { Palette } from "../../values"
import GreenButton from "../../common/green-button"

interface ShowcaseItem {
    image: string,
    text: string
}

interface ShowcaseColumnProps {
    item: ShowcaseItem
}

const ShowcaseColumn = function(props: ShowcaseColumnProps) {
    return (
        <Grid item xs={4}>
            <img src={`/images/${props.item.image}`}/>
            <Typography variant="body2" gutterBottom style={{maxWidth: "80%"}}>{props.item.text}</Typography>
            <Link href="#" underline="none" style={{display: "flex", alignItems: "center", flexWrap: "wrap", color: "black", textTransform: "uppercase"}}><strong>Learn more</strong> <ChevronRightIcon style={{color: Palette.CTAGreen}}/></Link>
        </Grid>
    )
}

export default function Showcase() {
    const showcaseData: Array<ShowcaseItem> = [
        {image: "showcase-1.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna all."},
        {image: "showcase-2.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna all."},
        {image: "showcase-3.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna all."}
    ]
    const showcaseColumns = showcaseData.map((item, index) => <ShowcaseColumn item={item} key={index}/>)
    return (
        <div>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>Evaluate rate & condition of the product with our Advanced AI Algoritm</Typography>
                <Typography variant="body2" align="center" gutterBottom>MyRatingBud uses historical market data and all the information available in the product page.</Typography>
            </Container>
            <Box m={2} mt={4} ml={5}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        {showcaseColumns}
                    </Grid>
                </Container>
            </Box>
            <Box mt={4}>
                <Container style={{textAlign: "center"}}>
                    <GreenButton text={"SEE MORE"}/>
                </Container>
            </Box>
        </div>
    )
}