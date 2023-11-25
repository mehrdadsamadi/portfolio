import { FavoriteRounded } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const SidebarFooter = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
            }}
        >
            <Typography variant="subtitle2" color="text.primary">
                طراحی شده با {" "}
                <FavoriteRounded sx={{ verticalAlign: "middle", color: "tomato" }} />
            </Typography>
            <Typography variant="caption" color="text.primary">
                توسط مهرداد صمدی مقدم
            </Typography>
        </Box>
    )
}

export default SidebarFooter