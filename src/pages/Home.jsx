import { useEffect, useRef, useCallback, useState } from "react"
import { Box, Typography } from "@mui/material"

import Typed from "typed.js"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import TextTransition, { presets } from "react-text-transition"

import bg from "../assets/bg-1.webp"
import { links } from "../helpers/prticles.data"
import { Helmet } from "react-helmet-async"

const Home = ({helmetTitle}) => {

    const [index, setIndex] = useState(0)

    const nameEl = useRef(null)
    // const infoEl = useRef(null)

    const strings = [
        "توسعه دهنده فول استک",
        "برنامه نویس اپلیکیشن های موبایلی"
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["مهرداد صمدی مقدم"],
            typeSpeed: 100,
            backSpeed: 20,
            showCursor: false
        })

        const intervalTransition = setInterval(() => {
            setIndex(index => index + 1)
        }, 2500)

        // const typedInfo = new Typed(infoEl.current, {
        //     strings,
        //     startDelay: 2000,
        //     typeSpeed: 40,
        //     backSpeed: 50,
        //     backDelay: 100,
        //     loop: true,
        //     showCursor: false
        // })

        return () => {
            typedName.destroy()
            // typedInfo.destroy()
            clearInterval(intervalTransition)
        }
    }, [])

    const praticlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, [])
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Box sx={{
                height: 1,
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <Particles id="tsparticles" init={praticlesInit} loaded={particlesLoaded} options={links} />

                <Box component="div" sx={{ display: "flex", zIndex: "1" }}>
                    <Typography variant="h3" sx={{ color: "#01FFFF", mr: 1 }} >{"{{"}</Typography>
                    <Typography variant="h3" sx={{ color: "#01FFFF" }} ref={nameEl} ></Typography>
                    <Typography variant="h3" sx={{ color: "#01FFFF", ml: 1 }} >{"}}"}</Typography>
                </Box>

                <Box component="div" sx={{ display: "flex", mt: 3, zIndex: "1" }}>
                    <Typography variant="h4" sx={{ color: "#fff", mr: 1 }} >من یک</Typography>

                    <TextTransition springConfig={presets.wobbly}>
                        <Typography variant="h4" sx={{ color: "#fff" }} >
                            {strings[index % strings.length]}
                        </Typography>
                    </TextTransition>

                    <Typography variant="h4" sx={{ color: "#fff", ml: 1 }} >هستم</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Home