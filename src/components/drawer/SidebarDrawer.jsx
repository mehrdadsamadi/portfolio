import { useContext } from "react"

import MainContext from "../../context"

import { Drawer } from "@mui/material"
import { SidebarContent } from "../sidebar"

const SidebarDrawer = () => {
    const { drawerOpen, setDrawerOpen} = useContext(MainContext)
    
    return (
        <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                variant="temporary"
                sx={{ display: { xs: "block", md: "none" } }}
            >
                <SidebarContent/>
            </Drawer>
    )
}

export default SidebarDrawer