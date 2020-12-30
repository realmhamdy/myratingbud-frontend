import React from "react"

import { makeStyles, useTheme, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import Tooltip from "@material-ui/core/Tooltip"

import CloseIcon from "@material-ui/icons/Close"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

import { Palette } from "../../values"
import CompareButtonContainer from "../../common/compare-button-container"

const useStyles = makeStyles((theme: Theme) => ({
    productContainer: {
        padding: theme.spacing(2)
    },
    productHeader: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    gridList: {
        flexWrap: "nowrap",
        flexGrow: 9,
        marginRight: theme.spacing(1)
    },
    ratingContainer: {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        background: `${Palette.CTAPurple} url(/images/mask-group.png)`,
        color: Palette.White
    }
}))

interface ProductBoxProps {
    onClose: () => void;
}

const manySmallImages = ["/images/iphone-1.png", "/images/iphone-2.png", "/images/iphone-3.png", "/images/iphone-4.png", "/images/iphone-3.png", "/images/iphone-4.png"]
const oneLargeImage = ["/images/iphone-large.png"]

export const PRODUCT_DATA = {
    type: "Phone",
    name: "IPhone 11 Pro Max",
    images: manySmallImages,
    rating: 70,
    ratingDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    condition: "Second Hand",
    timeLeft: "3d 13h Friday",
    priceNoDiscount: 1200,
    totalPrice: 1000
}

function ProductBox(props: ProductBoxProps) {
    const classes = useStyles()
    const theme = useTheme()
    const { onClose } = props
    const productTiles = PRODUCT_DATA.images.map((image, index) => (
        <GridListTile key={index} style={{width: theme.spacing(10)}}>
            <img src={image} alt={PRODUCT_DATA.name}/>
        </GridListTile>
    ))
    return (
        <Box my={2}>
            <Paper className={classes.productContainer}>
                <Typography variant="h5" gutterBottom className={classes.productHeader}>{PRODUCT_DATA.name} <IconButton onClick={onClose}><CloseIcon/></IconButton></Typography>
                <GridList cellHeight={theme.spacing(10)} spacing={4} className={classes.gridList}>
                    {productTiles}
                </GridList>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Condition</TableCell>
                            <TableCell><Typography variant="subtitle2">{PRODUCT_DATA.condition}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Time Left</TableCell>
                            <TableCell><Typography variant="subtitle2">{PRODUCT_DATA.timeLeft}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Price Without Discount</TableCell>
                            <TableCell><Typography variant="subtitle2">$ {PRODUCT_DATA.priceNoDiscount}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Price</TableCell>
                            <TableCell><Typography variant="subtitle2">$ {PRODUCT_DATA.totalPrice}</Typography></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className={classes.ratingContainer}>
                    <Typography variant="h6">My Rating Bud review</Typography>
                    <Typography variant="h5">{PRODUCT_DATA.rating} / 100</Typography>
                </div>
            </Paper>
        </Box>
    )
}

export default function CompareProducts() {
    const [products, setProducts] = React.useState(new Array(6).fill(PRODUCT_DATA))
    function handleProductBoxClosed(index: number) {
        const newProducts = products.slice()
        newProducts.splice(index, 1)
        setProducts(newProducts)
    }
    const productsCompared = products.map((productData, index) => (
        <Grid item xs={4} key={index}>
            <ProductBox onClose={() => handleProductBoxClosed(index)}/>
        </Grid>
    ))
    return (
        <Box m={4}>
            <Container maxWidth="xl">
                <CompareButtonContainer>
                    <div>
                        <Typography variant="h4" gutterBottom>Compare Products <Tooltip 
                            title="MyRatingBud makes it easy to compare used products. Our powerful machine learning algorithms consider all the information available in the product page like images,description of the item and the reliability of seller to provide one number. Neutral. Not biased towards the seller or the buyer. Using this MyRatingBud.com you can make better informed decisions, save time and money.">
                                <HelpOutlineIcon/>
                            </Tooltip>
                        </Typography>
                        <Grid container spacing={2}>
                            {productsCompared}
                        </Grid>
                    </div>
                </CompareButtonContainer>
            </Container>
        </Box>
    )
}