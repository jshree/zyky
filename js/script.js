$(window).load(function(){
//a (table) view to render the list of songs
var song_list_view = Backbone.View.extend({
    el: $('.song-temp'),
	events: {
        'click .song': 'insideMenuHandler',
		'click .songHide': 'outsideMenuHandler',
       
    },
    initialize: function() {
        this.collection.bind("add","insideMenuHandler","outsideMenuHandler", this.render, this);
    },

    render: function() {
        _.each(this.collection.models, function(data) {
            this.$el.append(new song_view({
                model: data
            }).render().el);
        }, this);
        return this;
    },
	insideMenuHandler: function(e) {
		$(e.currentTarget).children('.songHover').show();
		return false;
		
	},
	outsideMenuHandler: function(e) {
		 $('.songHover').hide();
		return false;
		
	}
});

//a (row) view to render each songs
var song_view = Backbone.View.extend({
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


});//]]>  

/////////////////////////////////////////////////////////////////////////////////////////

//free list json
function freeList(){
//a (table) view to render the list of songs
var song_list_view = Backbone.View.extend({
    el: $('.free-temp'),
	events: {
        'click .song': 'insideMenuHandler',
		'click .songHide': 'outsideMenuHandler',
       
    },
    initialize: function() {
        this.collection.bind("add","insideMenuHandler","outsideMenuHandler", this.render, this);
    },

    render: function() {
		this.$el.empty();
        _.each(this.collection.models, function(data) {
            this.$el.append(new song_view({
                model: data
            }).render().el);
        }, this);
        return this;
    },
	insideMenuHandler: function(e) {
		$(e.currentTarget).children('.songHover').show();
		return false;
		
	},
	outsideMenuHandler: function(e) {
		 $('.songHover').hide();
		return false;
		
	}
});

//a (row) view to render each songs
var song_view = Backbone.View.extend({
    //tagName: "tr",
    template: _.template($("#free-template").html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var List = Backbone.Model.extend({
});


var SongCollection = Backbone.Collection.extend({
	
	
    model: List,
    url: "http://wiredelta.com:12001/tracks/free.json",
	
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


}

/////////////////////////////////////////////////////////////////////////////////////////

//download list json
function myDownload(){
//a (table) view to render the list of songs
var song_list_view = Backbone.View.extend({
    el: $('.mydownload'),
	
    initialize: function() {
        this.collection.bind("add", this.render, this);
    },

    render: function() {
		this.$el.empty();
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
    template: _.template($("#download-template").html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var List = Backbone.Model.extend({
});

var token=$('#tokenId').val();
var SongCollection = Backbone.Collection.extend({
	
	
    model: List,
    url: "http://wiredelta.com:12001/tracks/mine.json?user_token="+token,
	
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


}

////////////////////////////////////////////////////////////////////////////////////////////////

//hit list json
function hitList(){
//a (table) view to render the list of songs
var song_list_view = Backbone.View.extend({
    el: $('.hit-temp'),
	events: {
        'click .song': 'insideMenuHandler',
		'click .songHide': 'outsideMenuHandler',
       
    },
    initialize: function() {
        this.collection.bind("add","insideMenuHandler","outsideMenuHandler", this.render, this);
    },

    render: function() {
		this.$el.empty();
        _.each(this.collection.models, function(data) {
            this.$el.append(new song_view({
                model: data
            }).render().el);
        }, this);
        return this;
    },
	insideMenuHandler: function(e) {
		$(e.currentTarget).children('.songHover').show();
		return false;
		
	},
	outsideMenuHandler: function(e) {
		 $('.songHover').hide();
		return false;
		
	}
});

//a (row) view to render each songs
var song_view = Backbone.View.extend({
    //tagName: "tr",
    template: _.template($("#hit-template").html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var List = Backbone.Model.extend({
});


var SongCollection = Backbone.Collection.extend({
	
	
    model: List,
    url: "http://wiredelta.com:12001/tracks/hit.json",
	
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



}

//////////////////////////////////////////////////////////////////////////////////////////

/*signin*/

function signIn(){
	
	var email=$('#email').val();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var password=$('#pwd').val();
	
	if(email==""){
		$('#signRes').html('Enter your Mail ID');
		$('#email').focus();
		}
	else if(reg.test(email) == false)
      {
            $("#signRes").html('Enter a valid Mail ID.');
            $("#email").focus();
      }
	else if(password==""){
		$('#signRes').html('Enter your Password');
		$('#pwd').focus();
		}
		else{
			
			var dataString='email='+ email + '&password=' +  password;
    		
            $.ajax({
            url  : 'http://wiredelta.com:12001/tokens.json',
            data: dataString,
            type : "POST",
            dataType: 'json',
			error: function(error) 
			{
			var jsonResponse = JSON.parse(error.responseText);
			$('#signRes').html(jsonResponse.message);
			},
            success : function(res){
				localStorage.user_token=res.token;
				$('#tokenId').attr("value",localStorage.user_token);
				//navigator.notification.alert(res.token, null, 'Token', 'OK');
				location.href='#songsLibrary';		
            }
			
			
        });
		
			}
	}
	
//////////////////////////////////////////////////////////////////////////////////////////	

//search songs using keyword

function mySearch(){
	
//a (table) view to render the list of songs
var song_list_view = Backbone.View.extend({
    el: $('.search-song'),
	events: {
        'click .song': 'insideMenuHandler',
		'click .songHide': 'outsideMenuHandler',
       
    },
    initialize: function() {
		
       
		this.collection.bind("add","insideMenuHandler","outsideMenuHandler", this.render, this);
		
    },

    render: function() {
		this.$el.empty();//empty previous results
        _.each(this.collection.models, function(data) {
			
            this.$el.append(new song_view({
				
                model: data
            }).render().el);
        }, this);
        return this;
    },
	
	insideMenuHandler: function(e) {
		$(e.currentTarget).children('.songHover').show();
		return false;
		
	},
	outsideMenuHandler: function(e) {
		 $('.songHover').hide();
		return false;
		
	}
});

//a (row) view to render each songs
var song_view = Backbone.View.extend({
   // tagName: "tr",
    template: _.template($("#track-template").html()),

    render: function() {
		
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var List = Backbone.Model.extend({
	
});

//search keyword
var query=$('#keyWord').val();
var token=$('#tokenId').val();
var SongCollection = Backbone.Collection.extend({
	
	
    model: List,
	
    url: "http://wiredelta.com:12001/tracks/search.json?search="+query+"&user_token="+token,
	
    parse: function(res) {
	
        console.log('response inside parse' + res);
		console.log("http://wiredelta.com:12001/tracks/search.json?search="+query+"&user_token="+token);
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


}


//////////////////////////////////////////////////////////////////////////////////////////

/*signup*/

function signUp(){
	var name=$('#name').val();
	var email=$('#mail').val();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var password=$('#password').val();
	var confirm_password=$('#confirm-password').val();
	var phone=$('#phone').val();
	var state=$('#state').val();
	var country=$('#country').val();
	
	if(name==""){
		$('#regStatus').html('Enter your Name');
		$('#name').focus();
		}
	else if(email==""){
		$('#regStatus').html('Enter your Mail ID');
		$('#mail').focus();
		}
	else if(reg.test(email) == false)
      {
            $("#regStatus").html('Enter a valid Mail ID.');
            $("#mail").focus();
      }
	else if(password==""){
		$('#regStatus').html('Enter your Password');
		$('#password').focus();
		}
	else if(confirm_password==""){
		$('#regStatus').html('Enter your Confirm Password');
		$('#password').focus();
		}
	else if(phone==""){
		$('#regStatus').html('Enter your Phone number');
		$('#phone').focus();
		}
	else if(state==""){
		$('#regStatus').html('Enter your State');
		$('#state').focus();
		}
	else if(country==""){
		$('#regStatus').html('Enter your Country');
		$('#country').focus();
		}
		else{
			
			var dataString='name='+ name +'&email='+ email + '&password=' +  password + '&password_confirmation=' +  confirm_password+ '&phone=' +  phone + '&state=' +  state + '&country=' +  country;
    		
            $.ajax({
            url  : 'http://wiredelta.com:12001/user/register',
            data: dataString,
            type : "POST",
            dataType: 'json',
			error: function(err) 
			{
			var jsonResponse = JSON.parse(err.responseText);
			$('#regStatus').html(jsonResponse.error);
			},
            success : function(res){
				navigator.notification.alert('Register compelted. please login.!', null, 'Success', 'OK');
				location.href='#login';		
            }
			
			
        });
		
			}
	}
	
