import { Box } from "@mui/material"

import { SidebarContent } from ".";
import { SidebarDrawer } from "../drawer";

const Sidebar = () => {

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "block" }, height: 1 }}>
                <SidebarContent />
            </Box>

            <SidebarDrawer />
        </>
    )
}

export default Sidebar