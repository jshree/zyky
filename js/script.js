$(window).load(function(){
//a (table) view to render the list of songs
var song_list_view = Backbone.View.extend({
    el: $('.song-temp'),
    initialize: function() {
        this.collection.bind("add", this.render, this);
    },

    render: function() {
        _.each(this.collection.models, function(data) {
            this.$el.append(new song_view({
                model: data
            }).render().el);
        }, this);
        return this;
    }
});

//a (row) view to render each songs
var song_view = Backbone.View.extend({
    //tagName: "tr",
    template: _.template($("#song-template").html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var List = Backbone.Model.extend({
});


var SongCollection = Backbone.Collection.extend({
	
	
    model: List,
    url: "http://www.wiredelta.com:12001/tracks.json",
	
    parse: function(res) {
		
        console.log('response inside parse' + res);
        return res;
    }

});

/*
Use this code to fetch from the server and render the collection
----------------------------------------------------------------
*/
var song = new SongCollection();

song.fetch({
    success: function() {
        console.log(song.toJSON());
        new song_list_view({collection: song}).render();
    },
    error: function() {
        console.log('Failed to fetch!');
    }
});


/*
Test code to make it work 
----------------------------------------------------------------

var e1 = new Person({firstname: 'Peter', lastname: 'Parker'});
var e2 = new Person({firstname: 'Bruce', lastname: 'Wayne'});
var c = new EmployeeCollection([e1, e2]);

var view = new employee_list_view({collection: c}).render();*/
// End of test code
});//]]>  