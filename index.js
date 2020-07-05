const sgSvc = require("./src/services/sendgrid_service.js");

exports.handler = async (event, context) => {
    return new Promise(()=>{

        event.Records.forEach(record=>{

            const request = JSON.parse(record.body);

            const {type, recipient, parameters} = request;

            if(type === "SEND_REMINDER"){
                
            }
            else if(type === "REGISTER_EMAIL"){

            }
            else if(type === "UNREGISTER_EMAIL"){
                
            };
        });
    });
}