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

import { useLocation } from "react-router-dom"
import axios from "axios"

import { makeURL } from "../../utils"
import { Palette } from "../../values"
import CompareButtonContainer from "../../common/compare-button-container"
import { ProductData } from "../rating-summary"

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
    product: ProductData
}


function ProductBox(props: ProductBoxProps) {
    const classes = useStyles()
    const theme = useTheme()
    const { onClose, product } = props
    const productTiles = product.images.map((image, index) => (
        <GridListTile key={index} style={{width: theme.spacing(10)}}>
            <img src={image} alt={product.name}/>
        </GridListTile>
    ))
    return (
        <Box my={2}>
            <Paper className={classes.productContainer}>
                <Typography variant="h5" gutterBottom className={classes.productHeader}>{product.name} <IconButton onClick={onClose}><CloseIcon/></IconButton></Typography>
                <GridList cellHeight={theme.spacing(10)} spacing={4} className={classes.gridList}>
                    {productTiles}
                </GridList>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Condition</TableCell>
                            <TableCell><Typography variant="subtitle2">{product.condition}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Time Left</TableCell>
                            <TableCell><Typography variant="subtitle2">{product.timeLeft}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Price Without Discount</TableCell>
                            <TableCell><Typography variant="subtitle2">$ {product.priceNoDiscount}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Price</TableCell>
                            <TableCell><Typography variant="subtitle2">$ {product.totalPrice}</Typography></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className={classes.ratingContainer}>
                    <Typography variant="h6">My Rating Bud review</Typography>
                    <Typography variant="h5">{product.rating} / 100</Typography>
                </div>
            </Paper>
        </Box>
    )
}

export default function CompareProducts() {
    const [products, setProducts] = React.useState<Array<ProductData>>([])
    const location = useLocation()
    function handleProductBoxClosed(index: number) {
        const newProducts = products.slice()
        newProducts.splice(index, 1)
        setProducts(newProducts)
    }
    React.useEffect(() => {
        const productURLs = location.search
        axios.get(makeURL(`/products/api/compare/${productURLs}`))
            .then((response) => setProducts(response.data))
    }, [location.search])
    const productsCompared = products.map((productData, index) => (
        <Grid item xs={4} key={index}>
            <ProductBox product={productData} onClose={() => handleProductBoxClosed(index)}/>
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