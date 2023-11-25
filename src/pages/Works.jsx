import { useEffect, useState } from "react"
import { Box, Card, CardContent, Slide } from "@mui/material"
import { Helmet } from "react-helmet-async"
import { LayersRounded } from "@mui/icons-material"

import {CustomDivider} from "../components/common"

const Works = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <Card sx={{ bgcolor: "whitesmoke", boxShadow: "none" }}>
                <CardContent>
                    <Slide direction="down" in={loading} style={{ transitionDelay: loading ? "100ms" : "0ms" }} >
                        <Box component="div">
                            <CustomDivider position="center" color="info" icon={<LayersRounded />} text="نمونه کار ها" />
                        </Box>
                    </Slide>
                </CardContent>
            </Card>
        </>
    )
}

export default Works