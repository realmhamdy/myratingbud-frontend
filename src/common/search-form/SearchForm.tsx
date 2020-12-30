import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

import GreenButton from "../green-button"

type INPUT_TYPE = "light" | "dark"

const useStyles = function(type: INPUT_TYPE = "light") {
    let styles: any
    if (type == "light") {
        styles = {
            minWidth: 400,
            background: "white",
            "& fieldset": {
                borderRadius: 0,
                borderRight: "none",
                borderWidth: 1
            },
        }
    } else {
        styles = {
            minWidth: 400,
            background: "#19181A",
            "& fieldset": {
                borderRadius: 0,
                borderRight: "none",
                borderWidth: 1
            },
            "& label": {
                color: "white"
            }
        }
    }
    return makeStyles(() => ({
        productSearchInput: styles
    }))()
}

export interface SearchFormProps {
    inputProps?: any,
    btnProps?: any
}

export default function SearchForm(props: SearchFormProps) {
    const classes = useStyles(props.inputProps ? props.inputProps.type : "light")
    const [productURL, setProductURL] = React.useState("")
    function handleURLChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setProductURL(event.target.value)
    }
    function handleRateButtonClicked() {
        props.btnProps.onClick(productURL)
    }
    return (
        <React.Fragment>
            <TextField
                label="Insert Url to the product to be rated"
                variant="outlined"
                color="primary"
                className={classes.productSearchInput}
                value={productURL}
                onChange={handleURLChanged}
                inputProps={{"data-testid": "product-url-input"}}
                {...props.inputProps}
            />
            <GreenButton {...props.btnProps} onClick={handleRateButtonClicked}/>
        </React.Fragment>
    )
}