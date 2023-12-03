export async function getStaticProps(context) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    function createService(){   client.verify.v2.services
                            .create({friendlyName: 'My First Verify Service'})
                            .then(service => console.log(service.sid));
         }
                            
        function sendOTP(){
                            client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                            .verifications
                            .create({to: '+918922059365', channel: 'sms'})
                            .then(verification => console.log(verification.status));
        }
        
        function verifyOTP(){
        
                            client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .verificationChecks
              .create({to: '+15017122661', code: '123456'})
              .then(verification_check => console.log(verification_check.status));
        
        
        }

    return {
        props: {
            create: createService
        }, // will be passed to the page component as props
    };

}
