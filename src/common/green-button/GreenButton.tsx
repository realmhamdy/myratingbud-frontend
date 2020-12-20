import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import { Palette } from "../../values"

const useStyles = makeStyles(() => ({
    root: {
        height: 56,
        borderRadius: 0,
        backgroundColor: Palette.CTAGreen,
        "&:hover": {
            backgroundColor: Palette.CTAGreenDarker
        }
    }
}))

export default function GreenButton(props: any) {
    const classes = useStyles()
    return <Button disableElevation variant="contained" className={classes.root} {...props}>{props.text || "Rate Now"}</Button>
}
