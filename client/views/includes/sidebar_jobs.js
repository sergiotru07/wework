Template.sidebarJobs.events({
    "click .category": function(e, t) {
        let $category = $(`li[name='${this.category}']`),
            categories = Session.get("categories");

        if ($category.hasClass("active")) {
            categories = _.without(categories, this.category);
            Session.set("categories", categories);
            $category.removeClass("active");
            if ($(".category.active").length < 1)
                Session.set("categories", null)
        } else {
            if (categories) {
                categories.push(this.category);
                Session.set("categories", categories);
            } else {
                Session.set("categories", [this.category])
            }
            $category.addClass("active");
        }
    },

    "change select.filter-city": function(e, t) {
        let city = t.$("select.filter-city").val();

        if (city === "todas") {
            Session.set("cityFilter", null);
        } else {
            Session.set("cityFilter", city);
        }
    },

    "keyup .form-control-tags": function(e, t) {
        if (e.keyCode === 13) {
            let $tagField = t.$(".form-control-tags"),
                tagValue = $tagField.val(),
                tags = Session.get("tags");

            if (tags) {
                tags.push(tagValue);
                Session.set("tags", tags);
            } else {
                Session.set("tags", [tagValue]);
            }

            $tagField.val("");
        }
    },

    "click .-autocomplete-item": function(e, t) {
        console.log(e);
        let $tagField = t.$(".form-control-tags"),
            tagValue = $tagField.val(),
            tags = Session.get("tags");

        if (tags) {
            tags.push(tagValue);
            Session.set("tags", tags);
        } else {
            Session.set("tags", [tagValue]);
        }

        $tagField.val("");
    },

    "click .tag-pill": function(e, t) {
        let selectedTags = Session.get("tags"),
            tagsLength = selectedTags.length,
            $tagPill = $(e.target),
            tagValue = $tagPill.html();

        if (tagsLength === 1) {
            Session.set("tags", null);
        } else {
            selectedTags = _.without(selectedTags, tagValue);
            Session.set("tags", selectedTags);
        }
    }
});

const Categories = [
    { title: "Desarrollo Web", category: "Desarrollo Web", icon: "desktop" },
    { title: "Desarrollo Móvil", category: "Desarrollo Móvil", icon: "android" },
    { title: "Mercadeo y SEO", category: "Marketing", icon: "sellsy" },
    { title: "Diseño UI/UX", category: "Diseño", icon: "paint-brush" },
    { title: "Administración", category: "Administración", icon: "user-plus" }
]

Template.sidebarJobs.helpers({
    categories: function() {
        return Categories;
    },
    cities: function() {
        return _.chain(Jobs.find().fetch())
            .map(job => job.city)
            .uniq()
            .map(city => {
                return { filterCity: city }
            })
            .value();
    },
    selectedCity: function() {
        return Session.get("selectedCity");
    },

    settings: function() {
        return {
            position: "top",
            limit: 5,
            rules: [{
                // token: '',
                collection: CloudspiderTags,
                field: 'name',
                matchAll: true,
                template: Template.jobTags
            }]
        };
    },

    selectedTags: function() {
        return Session.get("tags");
    }
});

Template.sidebarJobs.onCreated(function() {
    Session.set("tags", null);
});
