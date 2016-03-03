Meteor.startup(function() {
    smtp = {
        username: 'andresa.garciah621',
        password: 'Laura0127',
        server: 'smtp.gmail.com',
        port: 465
    }

    process.env.MAIL_URL = `smtp://${encodeURIComponent(smtp.username)}:${encodeURIComponent(smtp.password)}@${encodeURIComponent(smtp.server)}:${smtp.port}`;
    
    Accounts.emailTemplates.from = 'Andrés García';
    Accounts.emailTemplates.siteName = 'Meteor Login Test';
    Accounts.emailTemplates.verifyEmail.subject = (user) => {
        return 'Confirm Your Email Address for Meteor Login Test';
    };
    Accounts.emailTemplates.verifyEmail.html = (user, url) => {
        return `Please click on the following link to verify your email address: 
        ${url}`;
    };
});

// Email.send({
//   from: "meteor.email.2014@gmail.com",
//   to: "sergio@loopa.io",
//   subject: "Meteor Can Send Emails via Gmail",
//   text: "Its pretty easy to send emails via gmail."
// });
