import CountUp from "react-countup"
import { Box, Chip, Typography, Tooltip } from "@mui/material"

import { devWorkInfo } from "../../../helpers/details"

const DevWorkCount = () => {
    return (
        <>
            {
                devWorkInfo.map((item, index) => (
                    <Box key={index} component="div" sx={{width: 1, mb: 1}}>
                        <Tooltip title={item.tooltipTitle} arrow placement="right">
                            <Chip icon={item.icon} label={
                                <Typography variant="body1" color="whitesmoke" >
                                    <CountUp start={0} end={item.total} duration={3}/>
                                </Typography>
                            } sx={{
                                bgcolor: item.color,
                                p: 2,
                                width: 1
                            }}/>
                        </Tooltip>
                    </Box>
                ))
            }
        </>
    )
}

export default DevWorkCount