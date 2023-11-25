import Grid from "@mui/material/Unstable_Grid2"
import { Helmet } from "react-helmet-async"
import { Card, CardContent, Typography } from "@mui/material"
import { ConnectWithoutContactRounded } from "@mui/icons-material"

import {CustomDivider,CustomSlide} from "../components/common"
import {ContactForm} from "../components/pages/Contact"

const Contact = ({ helmetTitle }) => {

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <Card sx={{ bgcolor: "whitesmoke", boxShadow: "none" }}>
                <CardContent>
                    <CustomSlide >
                        <CustomDivider position="center" color="secondary" icon={<ConnectWithoutContactRounded />} text="ارتباط با من" />
                    </CustomSlide>

                    <Grid container sx={{ mt: 5 }} >

                        <Grid xs={0} md={4} sx={{ textAlign: 'center', backgroundRepeat: "no-repeat" }}>
                            <CustomSlide direction="up" transitionDelay="200">
                                <Typography variant="h6" color="black" sx={{ mt: 4, display: { xs: "none", md: "block" } }}>
                                    بیا در مورد همه چیز باهم صحبت کنیم
                                </Typography>
                                <Typography variant="body1" color="black" sx={{ mt: 2, display: { xs: "none", md: "block" } }}>
                                    <a href="mailto:samadimehrdad49@gmail.com" alt="gmail" style={{ color: "tomato" }}>ایمیل</a>
                                    {" "}
                                    بزن به من
                                </Typography>
                            </CustomSlide>
                        </Grid>

                        <Grid xs={12} md={8}>
                            <CustomSlide direction="up" transitionDelay="200">
                                <Card sx={{ justifyContent: "Center", alignItems: "center", borderRadius: 3 }}>
                                    <ContactForm />
                                </Card>
                            </CustomSlide>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Contact