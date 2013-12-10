/*
  combine close result (within slot distance)
*/
define(['underscore','backbone','text!./template.tmpl',
  'text!../config.json'], 
  function(_,Backbone,template,config) {
  return {
    type: 'Backbone.nested',
    events: {

    },
    commands:{
      "querydone":"querydone",
      "needmore":"needmore",
      "gotosource":"gotosource",
      "setrange":"setrange"
    },
    setrange:function(start,end) {
      this.sendParent("setrange",start,end);
    },     
    gotosource:function(opts) {
      var tags=[this.config.readunit,this.config.pagebreak];
      var o={db:opts.db,slot:opts.slot,tag:tags};
      var ruprefix=this.config.readunit;
      ruprefix=ruprefix.substring(0,ruprefix.length-1);
      var pbprefix=this.config.pagebreak;
      pbprefix=pbprefix.substring(0,pbprefix.length-1);


      this.$yase("closestTag",o).done(function(data){
        data=data[0];
        var start=data[0].value;
        var scrollto=pbprefix+'="'+data[1].value+'"]';
        var opts3={db:opts.db,start:ruprefix+'='+start+']'
    ,scrollto:scrollto,name:start,query:opts.query,textcomponent:this.config.textcomponent,
    reader:this.config.readercomponent}
        this.sandbox.emit("newreader",opts3);
      })

    }, 
    needmore:function(start) {
      this.sendParent("needmore",start);
    },
    querydone:function(R) {
      if (R.opts.start==0) {
        this.sendChildren('newresult',R);
      }
      else this.sendChildren('moreresult',R);
    },
    model:new Backbone.Model(),
    render:function() {
      this.html( _.template(template));
    },
    initialize: function() {
      this.render();
      this.config=JSON.parse(config);
    }
  };
});
