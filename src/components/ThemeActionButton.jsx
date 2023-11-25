import { useContext } from "react"
import {useTheme} from "@mui/material/styles"

import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material"
import { Box, Fab } from "@mui/material"

import MainContext from "../context"

const ThemeActionButton = () => {
    const theme = useTheme()
    const {handleThemeChange} = useContext(MainContext)

    return(
        <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute" }}>
            <Fab size="small" aria-label="theme-changer" variant="extended" onClick={handleThemeChange} color="primary" sx={{ color: "whitesmoke", m: 2 }}>
                {theme.palette.mode === "dark" ?  <WbSunnyOutlined sx={{mr: 1}}/> : <NightlightOutlined sx={{mr: 1}}/>}
                {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
            </Fab>
        </Box>
    )
}

export default ThemeActionButton