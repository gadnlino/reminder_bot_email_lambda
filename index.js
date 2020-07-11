const sgSvc = require("./services/sendgrid_service.js");
const config = require("./config.js");

exports.handler = (event, context) => {
    event.Records.forEach(async record => {

        const {
            type,
            recipientEmail,
            parameters: templateData
        } = JSON.parse(record.body);

        let templateId;

        switch (type.toUpperCase()) {
            case "SEND_REMINDER":
                templateId = config.sendReminderTemplateId;
                break;
            case "CONFIRM_REGISTRATION":
                templateId = config.confirmRegistrationTemplateId;
                break;
            case "CONFIRM_UNREGISTRATION":
                templateId = config.confirmUnregistrationTemplateId;
                break;
            case "REGISTRATION_COMPLETED":
                templateId = config.registrationCompletedTemplateId;
                break;
            case "UNREGISTRATION_COMPLETED":
                templateId = config.unregistrationCompletedTemplateId;
                break;
        }

        const response = await sgSvc.sendMail(
            recipientEmail,
            config.serviceEmail,
            templateId,
            templateData
        );

        if (response[0].statusCode === 200) {
            console.log("Email sent!")
        }
    });
}