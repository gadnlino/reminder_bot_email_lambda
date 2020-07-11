const sgMail = require('@sendgrid/mail');
const config = require("../config.js");

sgMail.setApiKey(config.sendgridApiKey);

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