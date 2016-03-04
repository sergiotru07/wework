Template.jobs.onCreated(function() {
    // Session.set("categories", JOB_CATEGORIES.map(category => category.category));
    Session.set("categories", null);
    Session.set("cityFilter", null);
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
            category: { $in: Session.get("categories") ? Session.get("categories") : JOB_CATEGORIES.map(category => category.category) },
            city: { $in: Session.get("cityFilter") ? [Session.get("cityFilter")] : _.chain(Jobs.find().fetch()).map(job => job.city).uniq().value()},
            tags: { $in: Session.get("tags") ? Session.get("tags") : CloudspiderTags.find().fetch().map(tag => tag.name) }
        }, {
            sort: {
                featuredThrough: -1,
                createdAt: -1
            }
        });
    }
})