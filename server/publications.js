Meteor.publish("userData", function() {
    check(arguments, [Match.Any]);
    if (this.userId) {
        return [
            Users.find({
                _id: this.userId
            }),
            Profiles.find({
                userId: this.userId
            })
        ];
    }
    this.ready();
});

Meteor.publish('jobCount', function() {
    Counts.publish(this, 'jobs', Jobs.find({
        createdAt: {
            $gte: daysUntilExpiration()
        },
        status: "active"
    }));
});

Meteor.publish('developerCount', function() {
    Counts.publish(this, 'developers', Profiles.find({
        status: "active"
    }));
});

Meteor.publish("homeJobs", function() {
    check(arguments, [Match.Any]);
    return [
        Jobs.find({
            featuredThrough: {
                $exists:false
            },
            createdAt: {
                $gte: daysUntilExpiration()
            },
            status: "active"
        }, {
            sort: {
                createdAt: -1
            },
            limit: 10,
            fields: {
                title: true,
                category: true,
                company: true,
                location: true,
                createdAt: true,
                updatedAt: true,
                city: true,
                remote: true,
                jobtype: true,
                status: true,
                tags: true,
                featuredThrough: true
            }
        })
    ];
});

Meteor.publish("featuredJobs", function() {
    check(arguments, [Match.Any]);
    return [
        Jobs.find({
            featuredThrough: {
                $gte: new Date()
            },
            status: "active"
        }, {
            sort: {
                featuredThrough: -1
            },
            fields: {
                title: true,
                category: true,
                company: true,
                location: true,
                createdAt: true,
                updatedAt: true,
                city: true,
                remote: true,
                jobtype: true,
                status: true,
                tags: true,
                featuredThrough: true
            }
        })
    ];
});

Meteor.publishComposite('homeDevelopers', {
    find: function() {
        return Profiles.find({
            status: "active"
        }, {
            sort: {
                availableForHire: -1,
                randomSorter: 1
            },
            limit: 8,
            fields: {
                userId: true,
                title: true,
                location: true,
                availableForHire: true,
                randomSorter: true,
                type: true,
                name: true,
                userName: true,
                status: true,
                customImageUrl: true
            }
        });
    },
    children: [{
        find: function(profile) {
            return Users.find({
                _id: profile.userId
            }, {
                fields: {
                    "emailHash": true,
                    "services.facebook.id": true,
                    "services.twitter.profile_image_url": true,
                    "services.facebook.id": true,
                    "services.google.picture": true,
                    "services.github.username": true
                }
            });
        }
    }]
});

Meteor.publish("jobs", function(limit) {
    check(limit, Number);

    return Jobs.find({
        createdAt: {
            $gte: daysUntilExpiration()
        },
        status: { $in: ["active", "pending"] }
    }, {
        fields: {
            title: true,
            category: true,
            company: true,
            location: true,
            createdAt: true,
            updatedAt: true,
            city: true,
            remote: true,
            jobtype: true,
            status: true,
            tags: true,
            featuredThrough: true
        },
        sort: {
            featuredThrough:-1,
            createdAt: -1
        },
        limit: limit
    });
});

Meteor.publish("my_jobs", function() {
    check(arguments, [Match.Any]);
    if (this.userId) {
        return [
            Jobs.find({
                userId: this.userId
            })
        ];
    }
    this.ready();
});

Meteor.publish("job", function(jobId) {
    check(arguments, [Match.Any]);
    return [
        Jobs.find({
            _id: jobId
        })
    ];
});

Meteor.publishComposite('profile', function(profileId) {
    return {
        find: function() {
            return Profiles.find({
                _id: profileId
            })
        },
        children: [{
            find: function(profile) {
                return Users.find({
                    _id: profile.userId
                }, {
                    fields: {
                        "emailHash": true,
                        "services.facebook.id": true,
                        "services.twitter.profile_image_url": true,
                        "services.facebook.id": true,
                        "services.google.picture": true,
                        "services.github.username": true
                    }
                });
            }
        }]
    }
});

Meteor.publish("developerUsers", function() {
    check(arguments, [Match.Any]);
    return [
        Users.find({ //this may publish users for not active status profiles
            isDeveloper: true
        }, {
            fields: {
                "emailHash": true,
                "services.facebook.id": true,
                "services.twitter.profile_image_url": true,
                "services.facebook.id": true,
                "services.google.picture": true,
                "services.github.username": true
            }
        })
    ];
});

Meteor.publish('profiles', function(limit) {
    var selector = {};
    check(limit, Number);

    return Profiles.find(selector, {
        limit: limit,
        sort: {
            randomSorter: 1
        }
    });
});
