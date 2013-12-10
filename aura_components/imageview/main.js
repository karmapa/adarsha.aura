define(['underscore','backbone','text!./template.tmpl'], 
  function(_,Backbone,template) {
  return {
    type: 'Backbone.nested',
    events: {

    },
    commands:{
      "loadimage":"loadimage"
    }, 
    loadimage:function(fn) {
      this.$("#image").attr("src",fn);
    },
    render:function() {
      this.html(_.template(template));
    },
    model:new Backbone.Model(),
    initialize: function() {
      this.render();
    }
  };
});
