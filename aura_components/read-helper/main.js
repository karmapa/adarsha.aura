define(['underscore','backbone','text!./template.tmpl'
  ,'text!./sampledict.tmpl','text!./sampledict2.tmpl'], 
  function(_,Backbone,template,sampledict,sampledict2) {
  return {
    type: 'Backbone.nested',
    events: {

    },
    commands:{
      "selectword":"selectword"
    }, 
    templates:[sampledict,sampledict2],
    selectword:function(w) {
      this.count++;
      var tmpl= this.templates[this.count%this.templates.length];
      this.$("#msg").html(_.template(tmpl));
    },
    render:function() {
      this.html(_.template(template));
    },
    model:new Backbone.Model(),
    initialize: function() {
      this.count=0;
      this.render();
      this.sandbox.on("selectword",this.selectword,this);
    }
  };
});
