import React from "react"
import { useHistory } from "react-router-dom"

import SearchForm, { SearchFormProps } from "../search-form"


export default function RateProductForm(props: SearchFormProps) {
    const history = useHistory()
    function handleRateButtonClicked(url: string) {
        history.push(`/rating-summary/?url=${encodeURIComponent(url)}`)
    }
    return <SearchForm inputProps={props.inputProps} btnProps={{...props.btnProps, onClick: handleRateButtonClicked}}/>
}
