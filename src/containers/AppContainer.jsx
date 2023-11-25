import { useEffect, useState } from "react";
import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/material/styles"

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar"
import PagesContainer from "./PagesContainer"
import SidebarContainer from "./SidebarContainer";

import MainContext from "../context"
import { DrawerActionButton } from "../components/drawer";

import Page from "../components/pages/Page";
import { About, Comments, Contact, Home, Resume, Works } from "../pages";

function AppContainer() {

  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mode, setMode] = useState("")

  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
  const preferDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  useEffect(() => {
    setMode(preferDarkMode ? "dark" : "light")
  }, [])

  useEffect(() => {
    if(isMdUp) setDrawerOpen(false)
  }, [isMdUp])


  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage)
  }

  const handleThemeChange = () => {
    setMode(prevMod => prevMod === "light" ? "dark" : "light")
  }

  return (
    <MainContext.Provider value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen, handleThemeChange }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PagesContainer>
          <DrawerActionButton />
          <Page value={pageNumber} index={0}>
            <Home helmetTitle="مهرداد صمدی مقدم | خانه"/>            
          </Page>
          <Page value={pageNumber} index={1}>
            <About helmetTitle="مهرداد صمدی مقدم | درباره من"/>            
          </Page>
          <Page value={pageNumber} index={2}>
            <Resume helmetTitle="مهرداد صمدی مقدم | رزومه من"/>            
          </Page>
          <Page value={pageNumber} index={3}>
            <Works helmetTitle="مهرداد صمدی مقدم | نمونه کار ها"/>            
          </Page>
          <Page value={pageNumber} index={4}>
            <Comments helmetTitle="مهرداد صمدی مقدم | نظرات مشتریان"/>            
          </Page>
          <Page value={pageNumber} index={5}>
            <Contact helmetTitle="مهرداد صمدی مقدم | ارتباط با من"/>            
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
