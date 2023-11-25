import { Avatar, Box, Card, CardContent, Typography } from "@mui/material"
import { Helmet } from "react-helmet-async"
import { ForumRounded } from "@mui/icons-material"
import Slider from "react-slick"

import {CustomDivider,CustomSlide} from "../components/common"

import { userComments } from "../helpers/details"

const Comments = ({ helmetTitle }) => {

    const SliderOptions = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        infinite: true,
    }

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>

            <Card sx={{ bgcolor: "whitesmoke", boxShadow: "none" }}>
                <CardContent>
                    <CustomSlide>
                        <CustomDivider position="center" color="warning" icon={<ForumRounded />} text="نظرات مشتریان" />
                    </CustomSlide>

                    <Box component="div" sx={{ mt: 10 }}>
                        <Slider {...SliderOptions}>
                            {
                                userComments.map((comment, index) => (
                                    <Box component="div" key={index}>
                                        <Avatar src={comment.avatar} alt={comment.fullname} sx={{ height: 100, width: 100, m: "0 auto" }}>UN</Avatar>
                                        <Typography variant="body1" color="black" textAlign="center">{comment.fullname}</Typography>
                                        <Typography variant="body2" color="gray" textAlign="center" sx={{ mb: 2 }}>{comment.jobTitle}</Typography>
                                        <Card sx={{
                                            bgcolor: "lightsalmon",
                                            m: "0 auto",
                                            width: 1 / 2,
                                            borderRadius: 5
                                        }}>
                                            <CardContent>
                                                <Typography variant="body2" textAlign="center">{comment.comment}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))
                            }
                        </Slider>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default Comments