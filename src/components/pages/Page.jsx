import { Box } from "@mui/material"

const Page = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

export default Page