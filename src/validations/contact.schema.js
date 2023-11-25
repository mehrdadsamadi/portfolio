import {object, string} from "yup"

export const contactValidationSchema = object({
    fullname: string().required("نام و نام خانوادگی الزامی میباشد"),
    email: string().email("لطفا ایمیل معتبر وارد کنید").required("وارد کردن ایمیل الزامی میباشد"),
    subject: string().required("وارد کردن عنوان پیام الزامی میباشد"),
    message: string().required("وارد کردن متن پیام الزامی میباشد"),
    recaptcha: string().required("کپچا الزامی میباشد"),
})