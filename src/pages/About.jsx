import { Card, CardContent, Avatar } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { CodeRounded, DvrRounded } from "@mui/icons-material"
import { Helmet } from "react-helmet-async"

import avatar from "../assets/msm.webp"
import {DevWorkCount, DevInfo, Skills} from "../components/pages/About"
import {CustomDivider, CustomSlide} from "../components/common"

const About = ({helmetTitle}) => {

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            
            <Card sx={{ bgcolor: "whitesmoke" }}>
                <CardContent>
                    <Grid container sx={{ mx: 3 }}>
                        <Grid xs={0} md={4}>
                            <Avatar
                                src={avatar}
                                variant="rounded"
                                sx={{
                                    width: 250,
                                    height: 250,
                                    m: "0 auto",
                                    objectPosition: "0 -1.5rem",
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    }
                                }}
                            >MSM</Avatar>
                        </Grid>
                        <Grid xs={12} md={8}>
                            <CustomSlide >
                                <CustomDivider position="left" color="primary" icon={<CodeRounded />} text="توسعه دهنده فول استک وبسایت و اپلیکیشن" />
                            </CustomSlide>

                            <Grid container sx={{justifyContent: "space-between"}}>

                                <Grid xs={12} sm={8} >
                                    <DevInfo />
                                </Grid>

                                <Grid xs={0} sm={4} sx={{display: {xs: "none", sm: "block"}, mt: 2}} >
                                    <DevWorkCount />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mx: 3, mt: 3 }}>
                        <Grid xs="12" sx={{ width: 1 }}>
                            <CustomSlide direction="right">
                                <CustomDivider position="center" color="success" icon={<DvrRounded />} text="مهارت های من" />
                            </CustomSlide>

                            <Skills />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default About