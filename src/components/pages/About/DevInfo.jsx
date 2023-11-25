import { KeyboardArrowLeftRounded } from "@mui/icons-material"
import { Typography } from "@mui/material"

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{
                mt: 2
            }}
        >
            <KeyboardArrowLeftRounded sx={{ verticalAlign: "bottom", color: "primary.main" }} />
            {children}
        </Typography>
    )
}

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : مهرداد صمدی مقدم</Info>
            <Info>سن : 23</Info>
            <Info>شهر : مشهد</Info>
            <Info>ایمیل : samadimehrdad49@gmail.com</Info>
        </>
    )
}

export default DevInfo