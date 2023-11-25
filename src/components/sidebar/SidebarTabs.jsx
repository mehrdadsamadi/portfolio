import { useContext } from "react"
import { Tab, Tabs } from "@mui/material"
import { grey } from "@mui/material/colors"
import {useTheme} from "@mui/material/styles"

import MainContext from "../../context"
import {tabsData} from "../../helpers/tabs.data"

const SidebarTabs = () => {
    const { pageNumber, setDrawerOpen, handlePageNumber } = useContext(MainContext)

    const tabs = tabsData()

    const theme = useTheme()

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
                "& .Mui-selected": {
                    color: "#01FFFF"
                },
                "& .MuiTabs-indicator": {
                    bgcolor: "#01FFFF"
                },
            }}
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {
                tabs.map((tab, index) => (
                    <Tab 
                        key={index}
                        label={tab.label} 
                        icon={tab.icon} 
                        iconPosition="start" 
                        color="text.primary"
                        {...tab} 
                        onClick={() => setDrawerOpen(false)} 
                        sx={{
                            "&.MuiTab-root": {
                                minHeight: 50
                            },
                            "&.Mui-selected": {
                                borderRadius: "6px 0 0 6px",
                                bgcolor: theme.palette.mode === "dark" ? grey[700] : grey[300],
                            },
                            bgcolor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                            borderRadius: "6px",
                            my: .5
                        }}
                    />
                ))
            }
        </Tabs>
    )
}

export default SidebarTabs