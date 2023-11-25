import Grid from "@mui/material/Unstable_Grid2"

const SidebarContainer = ({ children }) => {
    return (
        <Grid xs={0} md={3} lg={2} sx={{ height: "100vh", overflowY: "hidden", overflowX: "hidden", zIndex: "1"}}>
            {children}
        </Grid>
    )
}

export default SidebarContainer