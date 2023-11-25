import { Box, Slide } from "@mui/material"
import { useEffect, useState } from "react"

const CustomSlide = ({children, direction = "down", transitionDelay = "100"}) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

    return (
        <Slide direction={direction} in={loading} style={{ transitionDelay: loading ? `${transitionDelay}ms` : "0ms" }} >
            <Box component="div">
                {children}
            </Box>
        </Slide>
    )
}

export default CustomSlide