import { useEffect, useState } from "react"
import { Box } from "@mui/material"

import { devSkills } from "../../../helpers/skills"

import Skill from "./Skill"

const Skills = () => {
    const { HTML, CSS, JS, NODEJS, REACT, VUE, GIT } = devSkills

    const [htmlSkill, setHtmlSkill] = useState(0)
    const [cssSkill, setCssSkill] = useState(0)
    const [jSSkill, setJSSkill] = useState(0)
    const [nodeJsSkill, setNodeJsSkill] = useState(0)
    const [reactSkill, setReactSkill] = useState(0)
    const [vueSkill, setVueSkill] = useState(0)
    const [gitSkill, setGitSkill] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setHtmlSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, HTML.value)
            })
            setCssSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, CSS.value)
            })
            setJSSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, JS.value)
            })
            setNodeJsSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, NODEJS.value)
            })
            setReactSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, REACT.value)
            })
            setVueSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, VUE.value)
            })
            setGitSkill(oldProgress => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, GIT.value)
            })
        }, 200);

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Skill name={HTML.name} color={HTML.color} value={htmlSkill} icon={HTML.icon} />
            <Skill name={CSS.name} color={CSS.color} value={cssSkill} icon={CSS.icon} />
            <Skill name={JS.name} color={JS.color} value={jSSkill} icon={JS.icon} />
            <Skill name={NODEJS.name} color={NODEJS.color} value={nodeJsSkill} icon={NODEJS.icon} />
            <Skill name={REACT.name} color={REACT.color} value={reactSkill} icon={REACT.icon} />
            <Skill name={VUE.name} color={VUE.color} value={vueSkill} icon={VUE.icon} />
            <Skill name={GIT.name} color={GIT.color} value={gitSkill} icon={GIT.icon} />
        </Box>
    )
}

export default Skills