// sendgrid.js 
// <!-- (index.js is server.js) (contact.html) (sent.html) (sendgrid.js is sendEmail.js)-->
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
"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"
);

// const msg = {
//     to: "adlerhund@gmail.com",
//     from: "cnotice.in@gmail.com",
//     subject: "testing cnotice email server",
//     text: "This is awesome email sent from node app"
// };

// sgMail.send(msg,function(err,info){
//     if(err){
//         console.log("email not sent");
//     }else{
//         console.log("Email sent successfully");
//     }
// });

const sendEmail = (to,from,subject,text)=>{
    const msg = {
        to,
        from,
        subject,
        html : text
    }

    sgMail.send(msg, function(err,result){
        if(err){
            console.log("Email not sent error occured");
        }else{
            console.log("email was sent");
        }
    });
};

module.exports = sendEmail;