import { createTransport } from "nodemailer";

export const cMail = async (reciverEmail, emailSubject, emailContent) => {
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "goyalh862@gmail.com",
            pass: "Harsh9539@",
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
