import Grid from "@mui/material/Unstable_Grid2"

const PagesContainer = ({children}) => {
    return (
        <Grid xs={12} md={9} lg={10} sx={{ bgcolor: "whitesmoke" }}>
            {children}
        </Grid>
    )
}

export default PagesContainer