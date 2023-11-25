import { Chip, Divider, Typography } from "@mui/material"

const CustomDivider = ({position, color, icon, text}) => {
    return (
        <Divider
            textAlign={position}
            sx={{
                width: 1,
                "&::before, &::after": {
                    borderColor: `${color}.main`
                }
            }}
        >
            <Chip
                color={color}
                sx={{ p: 3 }}
                icon={icon}
                label={
                    <Typography variant="body1" color="black" sx={{ textAlign: "center" }}>{text}</Typography>
                }
            />
        </Divider>
    )
}

export default CustomDivider