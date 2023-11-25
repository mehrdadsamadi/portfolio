import { HomeOutlined, PersonOutlineOutlined, TerminalOutlined, InsertCommentOutlined, ConnectWithoutContactOutlined, ReceiptLongOutlined } from '@mui/icons-material';

const TABS_NAME = Object.freeze({
    MAIN: "صفحه اصلی",
    ABOUT: "درباره من",
    RESUME: "رزومه من",
    EXAMPLES: "نمونه کار ها",
    COMMENTS: "نظرات مشتریان",
    CONTACT: "ارتباط با من"
})

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`
    }
}

export const tabsData = () => {
    const tabs = [
        {label: TABS_NAME.MAIN, icon: <HomeOutlined />, ...tabProps(0)},
        {label: TABS_NAME.ABOUT, icon: <PersonOutlineOutlined />, ...tabProps(1)},
        {label: TABS_NAME.RESUME, icon: <ReceiptLongOutlined />, ...tabProps(2)},
        {label: TABS_NAME.EXAMPLES, icon: <TerminalOutlined />, ...tabProps(3)},
        {label: TABS_NAME.COMMENTS, icon: <InsertCommentOutlined />, ...tabProps(4)},
        {label: TABS_NAME.CONTACT, icon: <ConnectWithoutContactOutlined />, ...tabProps(5)},
    ]

    return tabs
}