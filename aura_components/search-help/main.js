define(['underscore','backbone','text!./template.tmpl'], 
  function(_,Backbone,template) {
  return {
    type: 'Backbone.nested',
    events: {
      "click #btnsample":"dosample"
    },
    commands:{

    }, 
    dosample:function() {
      $("#query").val('བདེན་པ་བཞི་ བག་ལ་ཉལ་  ཁམས')
      this.sendParent('querychange',{query:'བདེན་པ་བཞི་ བག་ལ་ཉལ་  ཁམས'});
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
