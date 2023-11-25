import {useTheme} from "@mui/material/styles"
import { Box, Divider } from "@mui/material"
import { grey } from "@mui/material/colors"
import { SidebarFooter, SidebarHeader, SidebarTabs } from ".";

const SidebarContent = () => {
    const theme = useTheme()

    return (
        <Box sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            textAlign: "center",
            p: 2,
            bgcolor: theme.palette.mode === "dark" ? grey[900] : grey[400],
            height: 1
        }}
        >
            <SidebarHeader />

            <Divider variant="fullWidth" sx={{ width: "100%" }} />

            <SidebarTabs />

            <Divider variant="fullWidth" sx={{ width: "100%", mb: 3 }} />

            <SidebarFooter />
        </Box>
    )
}

export default SidebarContent