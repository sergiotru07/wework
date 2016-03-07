Meteor.startup(function() {
    let jobTags = [{
        legend: 'Web'
    }, {
        legend: 'Frontend'
    }, {
        legend: 'Backend'
    }, {
        legend: 'Fullstack'
    }, {
        legend: 'Diseño'
    }, {
        legend: 'HTML'
    }, {
        legend: 'CSS'
    }, {
        legend: 'XML'
    }, {
        legend: 'GIT'
    }, {
        legend: 'Linux'
    }, {
        legend: 'Devops'
    }, {
        legend: 'Movil'
    }, {
        legend: 'iOS'
    }, {
        legend: 'Android'
    }, {
        legend: 'Angular'
    }, {
        legend: 'React'
    }, {
        legend: 'RoR'
    }, {
        legend: 'Django'
    }, {
        legend: 'Javascript'
    }, {
        legend: 'Ruby'
    }, {
        legend: 'Python'
    }, {
        legend: 'Node'
    }, {
        legend: 'DB'
    }, {
        legend: 'SQL'
    }, {
        legend: 'NoSQL'
    }, {
        legend: 'Mongo'
    }, {
        legend: 'Express'
    }, {
        legend: 'Ember'
    }, {
        legend: 'Backbone'
    }, {
        legend: 'jQuery'
    }, {
        legend: 'MySQL'
    }, {
        legend: 'Postgres'
    }, {
        legend: 'ORACLE'
    }, {
        legend: '.NET'
    }, {
        legend: 'Java'
    }, {
        legend: 'C#'
    }, {
        legend: 'Meteor'
    }, {
        legend: 'Photoshop'
    }, {
        legend: 'Illustrator'
    }, {
        legend: 'Sketch'
    }, {
        legend: 'Bootstrap'
    }, {
        legend: 'CMS'
    }, {
        legend: 'Foundation'
    }, {
        legend: 'Drupal'
    }, {
        legend: 'Joomla'
    }, {
        legend: 'Wordpress'
    }, {
        legend: 'PHP'
    }, {
        legend: 'Laravel'
    }, {
        legend: 'Flask'
    }, {
        legend: 'Sinatra'
    }, {
        legend: 'Sailjs'
    }, {
        legend: 'Drupal'
    }];

    if (CloudspiderTags.find().count() === 0) {
        _
            .chain(jobTags)
            .sortBy("legend")
            .uniq((tag) => tag.legend)
            .forEach((tag) => {
                const tagTitle = tag.legend.split(" ").join("-").toLowerCase();
                CloudspiderTags.insert({
                    name: tagTitle,
                    title: tagTitle,
                    visitCount: 0
                })
            });
    }
});
