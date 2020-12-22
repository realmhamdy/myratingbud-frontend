import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { default as MUIButton } from "@material-ui/core/Button"

import { Palette } from "../../values"

interface ButtonProps {
    type: "success" | "neutral";
    text: string;
    onClick?: () => void;
}

const useStyles = makeStyles(() => ({
    root: (props: ButtonProps) => ({
        background: props.type == "success" ? Palette.CTAGreen : Palette.White,
        color: props.type == "success" ? Palette.White : "#000000",
        borderRadius: 1
    })
}))

export default function Button(props: ButtonProps) {
    const classes = useStyles(props)
    return (
        <MUIButton variant="contained" className={classes.root} onClick={props.onClick}>{props.text}</MUIButton>
    )
}
