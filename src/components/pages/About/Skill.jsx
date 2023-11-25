import { Box, Chip, LinearProgress, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"

const Skill = ({color, name, value, icon}) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 3, bgcolor: grey[200], borderRadius: 2 }}>
            <Chip label={name} variant="outlined" color={color} icon={
                <Box component="img" src={icon} sx={{height: 25}}></Box>
            } />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: 1 }}>
                <LinearProgress value={value} variant="determinate" color={color} sx={{height: 7, borderRadius: 2, width: 1}}/>
                <Typography variant="body2" sx={{color: `${color}.main`}}>{Math.round(value)}%</Typography>
            </Box>
        </Box>
    )
}

export default Skill