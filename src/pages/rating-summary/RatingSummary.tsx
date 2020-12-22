import React from "react"

import { makeStyles, Theme, useTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Collapse from "@material-ui/core/Collapse"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Link from "@material-ui/core/Link"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Switch from "@material-ui/core/Switch"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"

import AddIcon from "@material-ui/icons/Add"
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircleOutlined"
import LinkIcon from "@material-ui/icons/Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import FlagIcon from "@material-ui/icons/Flag"

import { useHistory } from "react-router-dom"

import classnames from "classnames"

import { Palette } from "../../values"
import TextField from "../../common/textfield"
import { default as CustomButton } from "../../common/button"
import CompareButtonContainer from "../../common/compare-button-container"

const useStyles = makeStyles((theme: Theme) => ({
    root: {

    },
    iconLink: {
        display: "inline-block",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    gridListContainer: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: "nowrap",
        flexGrow: 9,
        marginRight: theme.spacing(1)
    },
    ratingContainer: {
        background: `url(/images/rating-bg.png), ${Palette.CTAPurple}`,
        backgroundRepeat: "repeat-x",
        color: Palette.White,
        padding: theme.spacing(2),
        "& h6": {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center"
        },
        "& button": {
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: 1
        }
    },
    properyBox: {
        border: `1px solid ${Palette.OutlineGrey}`,
        borderRadius: 1,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:nth-child(1)": {
            marginTop: 0
        },
        "&:nth-child(2)": {
            marginBottom: 0
        },
        "& img": {
            flexBasis: "auto"
        },
        "& div": {
            marginLeft: theme.spacing(1)
        }
    },
    collapsed: {
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
    },
    expanded: {
        maskImage: "none"
    },
    collapsedIcon: {
        position: "absolute",
        bottom: 10,
        left: "47%"
    },
    expandedIcon: {
        position: "absolute",
        bottom: 0,
        left: "47%",
        transform: "rotate(180deg)"
    },
    singleImageLayoutContainer: {
        "& > div" : {
            flexGrow: 2
        }
    }
}))

interface PropertyBoxProps {
    image: string,
    title: string,
    data: any
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface ChallengeRatingModalProps {
    opened: boolean;
    onSuccess: (urls: Array<string>) => void;
    onCancel: () => void;
}

function ChallengeRatingModal(props: ChallengeRatingModalProps) {
    const { opened, onSuccess, onCancel } = props
    const [urls, setUrls] = React.useState<Array<string>>(new Array(4).fill(""))
    function handleUrlChanged(value: string, index: number) {
        const newUrls = urls.splice(0, urls.length)
        newUrls[index] = value
        setUrls(newUrls)
    }
    const urlInputs = urls.map((url, index) => (
        <ListItem key={index} style={{minWidth: 400}}><TextField onChange={(e) => handleUrlChanged(e.target.value, index)}/></ListItem>
    ))
    return (
        <Dialog open={opened}>
            <DialogTitle>Challenge My Rating Bud</DialogTitle>
            <DialogContent>
                <List>
                    {urlInputs}
                </List>
            </DialogContent>
            <DialogActions>
                <CustomButton type="success" text="Rate Now" onClick={() => onSuccess(urls)}/>
                <CustomButton type="neutral" text="Cancel" onClick={() => onCancel()}/>
            </DialogActions>
        </Dialog>
    )
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props
    const [collapsed, setCollapsed] = React.useState(false)
    const classes = useStyles()
    const collapseClasses: any = {}
    collapseClasses[classes.collapsed] = !collapsed
    collapseClasses[classes.expanded] = collapsed
    const collapsedClassName = classnames(collapseClasses)
    const collapseIconClasses: any = {}
    collapseIconClasses[classes.collapsedIcon] = !collapsed
    collapseIconClasses[classes.expandedIcon] = collapsed
    const collapseIconClassName = classnames(collapseIconClasses)
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}>
            {value === index && (
                <Collapse in={collapsed} collapsedHeight={200} className={collapsedClassName} style={{position: "relative"}}>
                    <Box p={3}>
                        <Grid container justify="center" spacing={4}>
                            <Grid item xs={6}>
                                <Typography variant="h5" gutterBottom>What is your guarantees of objective assessment</Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5" gutterBottom>What is your guarantees of objective assessment</Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <IconButton onClick={() => {setCollapsed(!collapsed)}} className={collapseIconClassName}>
                        <ArrowDropDownCircleIcon/>
                    </IconButton>
                </Collapse>
            )}
        </div>
    )
}


function FAQTabs() {
    const [tab, setTab] = React.useState(0)
    const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setTab(newValue)
    }
    return (
        <div>
            <Typography color="primary" variant="h4" align="center" gutterBottom>Have any questions?</Typography>
            <Tabs value={tab} onChange={handleTabChange} centered indicatorColor="primary">
                <Tab label="GENERAL"/>
                <Tab label="POSTER"/>
                <Tab label="PAYMENTS"/>
                <Tab label="SHIPPING"/>
                <Tab label="RETURNS"/>
                <Tab label="REFUNDS"/>
            </Tabs>
            <TabPanel value={tab} index={0}/>
            <TabPanel value={tab} index={1}/>
            <TabPanel value={tab} index={2}/>
            <TabPanel value={tab} index={3}/>
            <TabPanel value={tab} index={4}/>
            <TabPanel value={tab} index={5}/>
        </div>
    )
}

function PropertyBox(props: PropertyBoxProps) {
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.properyBox}>
            <img src={props.image}/>
            <div>
                <Typography variant="subtitle1">{props.title}</Typography>
                <Typography variant="h6">{props.data}</Typography>
            </div>
        </Grid>
    )
}

interface PropertyBoxColumnProps {
    productData: ProductData;
}

function LeftPropertyBoxColumn(props: PropertyBoxColumnProps) {
    const { productData } = props
    return (
        <React.Fragment>
            <PropertyBox image="/images/condition.png" title="Condition" data={productData.condition}/>
            <PropertyBox image="/images/coin.png" title="Price without discount" data={`${productData.priceNoDiscount} $`}/>
        </React.Fragment>
    )
}

function RightPropertyBoxColumn(props: PropertyBoxColumnProps) {
    const { productData } = props
    return (
        <React.Fragment>
            <PropertyBox image="/images/calendar.png" title="Time left" data={productData.timeLeft}/>
            <PropertyBox image="/images/dollar.png" title="Total Price" data={`${productData.totalPrice} $`}/>
        </React.Fragment>
    )
}

interface RatingBudReviewBoxProps {
    productData: ProductData;
}

function RatingBudReviewBox(props: RatingBudReviewBoxProps) {
    const classes = useStyles()
    const { productData } = props
    const [ratingTooltipOpen, setRatingTooltipOpen] = React.useState(false)
    const [challengeRatingDialogOpen, setChallengeRatingDialogOpen] = React.useState(false)
    const openRatingTooltip = function() {
        setRatingTooltipOpen(true)
    }
    const handleRatingTooltipClosed = function() {
        setRatingTooltipOpen(false)
    }
    return (
        <div className={classes.ratingContainer}>
            <Typography variant="h5" gutterBottom>My Rating Bud Review
                <ClickAwayListener onClickAway={handleRatingTooltipClosed}>
                    <Tooltip
                        PopperProps={{disablePortal: true}}
                        onClose={handleRatingTooltipClosed}
                        open={ratingTooltipOpen}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        placement="right"
                        title="MyRatingBud makes it easy to compare used products. Our powerful machine learning algorithms consider all the information available in the product page like images,description of the item and the reliability of seller to provide one number. Neutral. Not biased towards the seller or the buyer. Using this MyRatingBud.com you can make better informed decisions, save time and money.">
                            <IconButton color="inherit" size="small" style={{margin: 0}} onClick={openRatingTooltip}><HelpOutlineIcon/></IconButton>
                    </Tooltip>
                </ClickAwayListener>
            </Typography>
            <Typography variant="h4" gutterBottom>{productData.rating}/100</Typography>
            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</Typography>
            <Button variant="contained" onClick={() => setChallengeRatingDialogOpen(true)}><FlagIcon style={{color: Palette.CTAGreen}}/>&nbsp;Challenge Rating</Button>
            <ChallengeRatingModal opened={challengeRatingDialogOpen} onSuccess={(urls) => setChallengeRatingDialogOpen(false)} onCancel={() => setChallengeRatingDialogOpen(false)}/>
        </div>
    )
}

interface TopLayoutProps {
    productData: ProductData;
}

function TopLayout(props: TopLayoutProps) {
    const { productData } = props
    const classes = useStyles()
    const theme = useTheme()
    if (productData.images.length == 1) {
        return (
            <div>
            <Grid container>
                <Grid item xs={6}>
                    <img style={{width: "auto", height: "auto"}} src={productData.images[0]}/>
                </Grid>
                <Grid container item xs={6} className={classes.singleImageLayoutContainer}>
                    <Grid item xs={12}><RatingBudReviewBox productData={productData}/></Grid>
                    <Grid container item xs={6}><LeftPropertyBoxColumn productData={productData}/></Grid>
                    <Grid container item xs={6}><RightPropertyBoxColumn productData={productData}/></Grid>
                </Grid>
            </Grid>
            </div>
        )
    } else {
        return (
            <div>
                <div className={classes.gridListContainer}>
                    <GridList cellHeight="auto" spacing={4} className={classes.gridList}>
                        {productData.images.map((img, index) => (
                            <GridListTile key={index} style={{width: "auto"}}>
                                <img src={img} alt={productData.name}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <Grid container style={{marginTop: theme.spacing(4)}}>
                    <Grid item xs={6}><RatingBudReviewBox productData={productData}/></Grid>
                    <Grid container item xs={3}>
                        <LeftPropertyBoxColumn productData={productData}/>
                    </Grid>
                    <Grid container item xs={3}>
                       <RightPropertyBoxColumn productData={productData}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

interface ProductData {
    type: string,
    name: string,
    images: Array<string>,
    rating: number,
    ratingDescription: string,
    condition: string,
    timeLeft: string,
    priceNoDiscount: number,
    totalPrice: number
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

export default function RatingSummary() {
    const [productData, setProductData] = React.useState<ProductData>(PRODUCT_DATA)
    const classes = useStyles()
    const theme = useTheme()
    const [layout, setLayout] = React.useState(false)
    function toggleProductImages() {
        if (layout) {
            setProductData({...productData, images: manySmallImages})
        } else {
            setProductData({...productData, images: oneLargeImage})
        }
        setLayout(!layout)
    }
    return (
        <Container maxWidth="xl">
            <Box m={4}>
                <Typography variant="h6" gutterBottom style={{color: Palette.TextSecondary}}>{productData.type} <Switch checked={layout} onChange={toggleProductImages}/></Typography>
                <Typography variant="h4" gutterBottom style={{float: "left"}}>{productData.name}</Typography>
                <div style={{float: "right"}}>
                    <Link href="#" className={classes.iconLink}><LinkIcon/></Link>
                    <Link href="#" className={classes.iconLink}><LinkedInIcon/></Link>
                    <Link href="#" className={classes.iconLink}><InstagramIcon/></Link>
                    <Link href="#" className={classes.iconLink}><FacebookIcon/></Link>
                    <Link href="#" className={classes.iconLink}><TwitterIcon/></Link>
                </div>
                <div style={{clear: "both"}}></div>
                <CompareButtonContainer>
                    <TopLayout productData={productData}/>
                </CompareButtonContainer>
                <Divider style={{marginTop: theme.spacing(4)}}/>
                <Container maxWidth="xl" style={{marginTop: theme.spacing(4)}}>
                    <FAQTabs/>
                </Container>
            </Box>
        </Container>
    )
}
