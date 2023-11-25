import { useContext } from "react"
import { MenuRounded } from "@mui/icons-material"
import { Box, Fab } from "@mui/material"
import { grey } from "@mui/material/colors"

import MainContext from "../../context"

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext)

    return (
        <Box sx={{ display: { xs: "block", md: "none" }, position: "absolute" }}>
            <Fab size="small" aria-label="toggle-sidebar" sx={{ bgcolor: grey[900], m: 2 }} onClick={() => setDrawerOpen(true)}>
                <MenuRounded sx={{ color: "white" }} />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton