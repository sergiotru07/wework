Meteor.startup(function() {

    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update({ service: "facebook" }, {
        $set: {
            appId: "197446303955431",
            secret: "d5f0199d928fd293d4e54db950321a49"
        }
    }, { upsert: true });

    // Add Google configuration entry
    ServiceConfiguration.configurations.update({ service: "google" }, {
        $set: {
            clientId: "217721552072-t6f5hreld8r9vl7qm8aer38in8e2im4u.apps.googleusercontent.com",
            secret: "t1P3KvPv0ICYJW0JvgXNRa9G"
        }
    }, { upsert: true });

    // Add Twitter configuration entry
    ServiceConfiguration.configurations.update({ service: "twitter" }, {
        $set: {
            consumerKey: "CThfyrqC4DCQXecL8UtQ7fXpf",
            secret: "j01NCuA4rvIrhS3jDQm8lMMTzXY2Vflh0dSHybpsHQuJjUMo3P"
        }
    }, { upsert: true });

    // Add Github configuration entry
    ServiceConfiguration.configurations.update({ service: "github" }, {
        $set: {
            clientId: "edd652ee694d3205c320",
            secret: "9a8f5886438e04e682b7b61a9f7ca6dcbadc2066"
        }
    }, { upsert: true });
});
