/*-------------------------search track list---------------------*/
$(window).load(function(){

var App = { Utils: {} };


App.Utils.filterCollection = function(collection, filterValue) {
    if (filterValue == "") return [];
    return collection.filter(function(data) {
        return _.some(_.values(data.toJSON()), function(value) {
           if (_.isNumber(value)) value = value.toString();
           if (_.isString(value)) return value.indexOf(filterValue) != -1;
           return false;
        });
    });
}

Backbone.Collection.prototype.filterValues = function(filterValues) {
    return App.Utils.filterCollection(this, filterValues);
}
    
var coll = new Backbone.Collection();
var url = "http://www.wiredelta.com:12001/tracks.json";
coll.fetch( { url: url});

var View = Backbone.View.extend({
    el: "#searchField",
    events: {
        "keyup #keyWord" : "filter"
    },
    filter: function(e) {
        results.collection = coll.filterValues($(e.target).val());
        results.render();
    },
	
}),
    ResultsView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "render");
        },
        el: $('.search-song'),
        template: _.template($("#track-template").html()),
        render: function() {
            this.$el.html("");
            var self = this;
            _.each(this.collection, function(model) {
                self.$el.append(self.template(model.toJSON()));
            });
			
        }
		
    });


var view = new View();
var results = new ResultsView();

});