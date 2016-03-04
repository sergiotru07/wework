Template.jobs.onCreated(function() {
    this.infiniteScroll({
        perPage: 30,
        subManager: subs,
        collection: Jobs,
        publication: 'jobs'
    });
});

Template.jobs.helpers({
    "jobs": function() {
        return Jobs.find({
            category: { $in: Session.get("categories") ? Session.get("categories") : JOB_CATEGORIES },
            city: { $in: Session.get("city") ? [Session.get("city")] : Jobs.find().fetch().map(job => job.city)},
            tags: { $in: Session.get("tags") ? Session.get("tags") : CloudspiderTags.find().fetch().map(tag => tag.name) }
        }, {
            sort: {
                featuredThrough: -1,
                createdAt: -1
            }
        });
    }
})