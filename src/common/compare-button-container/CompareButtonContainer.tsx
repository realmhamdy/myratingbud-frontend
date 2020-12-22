import React from "react"

import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import AddIcon from "@material-ui/icons/Add"

import { useHistory } from "react-router-dom"

import CustomButton from "../button"
import TextField from "../textfield"

const useStyles = makeStyles(() => ({
    plusButtonContainer: {
        position: "absolute",
        right: "0",
        "top": "40%"
    },
}))

interface CompareProductsModalProps {
    opened: boolean;
    onSuccess: (urls: Array<string>) => void;
    onCancelled: () => void;
}

function CompareProductsModal(props: CompareProductsModalProps) {
    const { opened, onSuccess, onCancelled } = props
    const [urls, setUrls] = React.useState<Array<string>>([""])

    function handleCancelled() {
        onCancelled()
    }
    function handleUrlChanged(value: string, index: number) {
        const newUrls = urls.splice(0, urls.length)
        newUrls[index] = value
        setUrls(newUrls)
    }
    function handleAddProductInput() {
        setUrls(urls.concat(""))
    }
    const productInputs = urls.map((_, index) => (
        <ListItem key={index}>
            <TextField onChange={(e) => handleUrlChanged(e.target.value, index)}/>
        </ListItem>
    ))
    return (
        <Dialog open={opened} onClose={handleCancelled}>
            <DialogTitle>Compare products</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </DialogContentText>
                <List>
                    {productInputs}
                    <ListItem>
                        <Button onClick={handleAddProductInput}><AddIcon/>Add new rating input</Button>
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <CustomButton type="success" text="Compare Products" onClick={() => onSuccess(urls)}/>
                <CustomButton type="neutral" text="Cancel" onClick={() => handleCancelled()}/>
            </DialogActions>
        </Dialog>
    )
}

interface CompareButtonContainerProps {
    children: React.ReactElement
}

export default function CompareButtonContainer(props: CompareButtonContainerProps) {
    const classes = useStyles()
    const theme = useTheme()
    const history = useHistory()
    const [compareProductsDialogOpen, setCompareProductsDialogOpen] = React.useState(false)
    function handleCompareProductsModalSucceeded(urls: Array<string>) {
        setCompareProductsDialogOpen(false)
        history.push("/compare")
    }
    return (
        <div style={{paddingRight: theme.spacing(6), position: "relative"}}>
            {props.children}
            <div className={classes.plusButtonContainer}>
                <Button variant="contained" style={{minWidth: "inherit", padding: "6px"}} onClick={() => setCompareProductsDialogOpen(true)}><AddIcon/></Button>
                <CompareProductsModal opened={compareProductsDialogOpen} onSuccess={handleCompareProductsModalSucceeded} onCancelled={() => setCompareProductsDialogOpen(false)}/>
            </div>
        </div>
    )
}