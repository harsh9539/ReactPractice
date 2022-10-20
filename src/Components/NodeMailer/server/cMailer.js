import { createTransport } from "nodemailer";

export const cMail = async (reciverEmail, emailSubject, emailContent) => {
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "goyalh862@gmail.com",
            pass: "axpucmngvzhdjfok", //  This password is generated after 2factor auth and then go to app passwords
        },
    });

    const mailOptions = {
        from: "goyalh862@gmail.com",
        to: reciverEmail,
        subject: emailSubject,
        text: emailContent,
    };

    await transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        }
    });
};
