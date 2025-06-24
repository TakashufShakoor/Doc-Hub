import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "70126984@student.uol.edu.pk",
    pass: "rqqk ukck xhkh pxpb", // Use Gmail App Password
  },
});

export default transporter