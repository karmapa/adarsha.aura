define(['underscore','backbone','text!./template.tmpl'], 
  function(_,Backbone,template) {
  return {
    type: 'Backbone.nested',
    events: {

    },
    commands:{
      "tabinit":"tabinit", 
      "pbclicked":"pbclicked"
    }, 
    pbclicked:function(pb) {
      var vol='00'+pb.id.match(/(.*?)\./)[1];
      vol=vol.substring(vol.length-3);
      var pg='00'+pb.id.match(/\.(.*?)$/)[1];
      pg=pg.substring(vol.length-3);
      if (pb.ed=='dg') {
        var img='img/dege/'+vol+'/'+vol+'-'+pg+'.png';  
      } else {
        var img='img/jiangkangyur/'+vol+'/'+vol+'-'+pg+'.jpg';
      }
      
      this.sendChildren("loadimage",img);
    },
    render:function() {
      this.html(_.template(template));
    },
    tabinit:function(opts) { //first open tab this is called first
      this.opts=opts;
      this.sendChildren("settext",opts); //but first time this is not working as children not ready
    },
    onReady:function() { //after first open tab this is called first
      if (this.opts) this.sendChildren("settext",this.opts);
    },

    model:new Backbone.Model(),
    initialize: function() {
      this.opts=null;
      this.render();
    }
  };
});
