import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { default as MUITextField } from "@material-ui/core/TextField"

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        background: "white",
        "& fieldset": {
            borderRadius: 0,
            borderWidth: 1
        },
    }
}))

interface TextFieldProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
}

export default function TextField(props: TextFieldProps) {
    const classes = useStyles()
    return (
        <MUITextField
            label="Enter Url to the product to be rated"
            onChange={props.onChange}
            className={classes.root}/>
    )
}