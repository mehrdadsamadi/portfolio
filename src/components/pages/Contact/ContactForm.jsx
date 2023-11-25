import Grid from "@mui/material/Unstable_Grid2"
import { CardContent, Typography, TextField, InputAdornment, CardActions, Button } from "@mui/material"
import { EmailRounded, Face6Rounded, SubjectRounded } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"
import { useFormik } from "formik"
import ReCAPTCHA from "react-google-recaptcha"

import { contactValidationSchema } from "../../../validations/contact.schema"

const ContactForm = () => {
    const theme = useTheme()

    const initialInputValues = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        recaptcha: ""
    }

    const formik = useFormik({
        initialValues: initialInputValues,
        onSubmit: values => {
            console.log("formik: ", values);
        },
        validationSchema: contactValidationSchema
    })
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <TextField
                            fullWidth
                            size="small"
                            color="secondary"
                            label="نام و نام خانوادگی"
                            name="fullname"
                            variant="outlined"
                            helperText={formik.touched.fullname && formik.errors.fullname}
                            error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                            value={formik.values?.fullname}
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Face6Rounded />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            fullWidth
                            size="small"
                            color="secondary"
                            label="آدرس ایمیل"
                            name="email"
                            variant="outlined"
                            helperText={formik.touched.email && formik.errors.email}
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            value={formik.values?.email}
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EmailRounded />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            size="small"
                            color="secondary"
                            label="عنوان"
                            name="subject"
                            variant="outlined"
                            helperText={formik.touched.subject && formik.errors.subject}
                            error={Boolean(formik.touched.subject && formik.errors.subject)}
                            value={formik.values?.subject}
                            onChange={formik.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SubjectRounded />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={6}
                            size="small"
                            color="secondary"
                            label="متن پیام"
                            name="message"
                            variant="outlined"
                            helperText={formik.touched.message && formik.errors.message}
                            error={Boolean(formik.touched.message && formik.errors.message)}
                            value={formik.values?.message}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
                <Grid xs={12} md={6}>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        theme={theme.palette.mode}
                        hl="fa"
                        onChange={value => { formik.setFieldValue("recaptcha", value) }}
                    />
                    {
                        formik.touched.recaptcha && formik.errors.recaptcha &&
                        <Typography variant="caption" color="error">{formik.errors.recaptcha}</Typography>
                    }
                </Grid>
                <Grid xs={12} md={6}>
                    <Button fullWidth type="submit" color="secondary" variant="contained" >ارسال کن</Button>
                </Grid>
            </CardActions>
        </form>
    )
}

export default ContactForm