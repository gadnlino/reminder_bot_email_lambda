const sgMail = require('@sendgrid/mail');
const dotenv = require("dotenv");

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    sendMail: async (to, from, templateId, templateData) => {

        const msg = {
            to,
            from,
            templateId,
            dynamic_template_data: templateData
        };
                
        return sgMail.send(msg);
    }
};