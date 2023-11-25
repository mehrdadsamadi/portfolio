import { Typography } from "@mui/material"
import { SchoolRounded } from "@mui/icons-material"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab"

import { devEdu } from "../../../helpers/details"
import { CustomSlide } from "../../common"

const DevEduTimeline = () => {
    return (
        <Timeline position="alternate">
            {
                devEdu.map((item, index) => (
                    <CustomSlide key={index} direction="up" transitionDelay={`${index + 2}99`}>
                            <TimelineItem >
                                <TimelineOppositeContent sx={{ m: 'auto 0' }} dir="ltr">
                                    <Typography variant="caption" color="gray">{item.year}</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary">
                                        <SchoolRounded color="primary" />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="body1" color="black">{item.cert}</Typography>
                                    <Typography variant="body2" color="black">{item.major}</Typography>
                                    <Typography variant="body2" color="gray">{item.place}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                    </CustomSlide>
                ))
            }
        </Timeline>
    )
}

export default DevEduTimeline