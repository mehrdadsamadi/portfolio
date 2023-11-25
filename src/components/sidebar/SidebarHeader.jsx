import { Box, Typography, Avatar } from "@mui/material"
import { RandomReveal } from 'react-random-reveal'

import avatar from "../../assets/msm.webp"
import { persianAlphabet } from "../../helpers/persianAlphabet"
import ThemeActionButton from "../ThemeActionButton"
import SocialMediaIcons from "../SocialMediaIcons"

const SidebarHeader = () => {
    return (
        <>
            <ThemeActionButton />
            
            <Avatar alt="mehrdad samadi moghadam" src={avatar} sx={{ width: 200, height: 200, mx: "auto" }}>MSM</Avatar>

            <Box color="whitesmoke">
                <Typography variant="h6">
                    <RandomReveal isPlaying duration={3} characters="مهرداد صمدی مقدم" characterSet={persianAlphabet}/>
                </Typography>
                <Typography variant="caption">برنامه نویس فول استک</Typography>
            </Box>

            <SocialMediaIcons />
        </>
    )
}

export default SidebarHeader