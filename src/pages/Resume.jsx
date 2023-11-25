import { Card, CardContent} from "@mui/material"
import { Helmet } from "react-helmet-async"
import { SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2"

import {CustomDivider,CustomSlide} from "../components/common"
import {DevEduTimeline, DevExpTimeline} from "../components/pages/Resume"

const Resume = ({ helmetTitle }) => {

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <Card sx={{ bgcolor: "whitesmoke", boxShadow: "none" }}>
                <CardContent>
                    <CustomSlide >
                        <CustomDivider position="center" color="error" icon={<SettingsEthernetRounded />} text="رزومه من" />
                    </CustomSlide>

                    <Grid container sx={{ mt: 3 }}>
                        <Grid xs={6}>
                            <CustomSlide transitionDelay="200">
                                <CustomDivider position="center" color="primary" icon={<SchoolRounded />} text="تحصیلات" />
                            </CustomSlide>

                            <DevEduTimeline />
                        </Grid>
                        <Grid xs={6}>
                            <CustomSlide transitionDelay="200">
                                <CustomDivider position="center" color="warning" icon={<HomeRepairServiceRounded />} text="تجربیات" />
                            </CustomSlide>

                            <DevExpTimeline />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Resume