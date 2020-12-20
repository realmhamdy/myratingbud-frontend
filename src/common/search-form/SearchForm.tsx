import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

import GreenButton from "../green-button"

const useStyles = makeStyles(() => ({
    productSearchInput: {
        minWidth: 400,
        background: "white",
        "& fieldset": {
            borderRadius: 0,
            borderRight: "none",
            borderWidth: 1
        }
    }
}))

interface SearchFormProps {
    inputProps?: any,
    btnProps?: any
}

export default function SearchForm(props: SearchFormProps) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <TextField
                label="Insert Url to the product to be rated"
                variant="outlined"
                color="primary"
                className={classes.productSearchInput}
                {...props.inputProps}
            />
            <GreenButton {...props.btnProps}/>
        </React.Fragment>
    )
}