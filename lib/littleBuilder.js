(function(globalScope, undefined){

  // Context is the constructor for new rednering contexts
  var Context = function(){
    this.string = '';
    this.currentNode = this;
  };
  
  Context.addTag = function(tagName, isSelfClosing){
    if (isSelfClosing) {
      this.prototype[tagName] = function(attributes){
        this.string = this.string + '<' + tagName + '/>';
        return this;
      }
    } else {
      this.prototype[tagName] = function(attributes, text){
        var s = '<' + tagName;
        
        if (attributes) {
          for (attribute in attributes) {
            s = s + ' ' + attribute + "='" + attributes[attribute] + "' ";
          };
        };
        
        s = s + '>'
        
        if (text) {
          s = s + text;
        };
        
        this.string = this.string + s;
        
        var node = {tagName: tagName, parent: this.currentNode};
        this.currentNode = node;
        
        return this;
      }
    };
  };
  
  // javascript object literal that will become the prototype for Context
  var prototype = {
    toString: function(){
      return this.string;
    },
    end: function(){
      this.string = this.string + '</' + this.currentNode.tagName +'>'
      this.currentNode = this.currentNode.parent;
      return this;
    },
    text: function(value){
      this.string = this.string + value;
      return this;
    },
    append: function(value){
      this.text(value.toString);
    }
  };
  
  // a name space for the library
  var lib = {};
  
  // assign object literal to the Context constructor prototype
  Context.prototype = prototype;
  
  var tags = ['a','abbr','address','article','aside','audio','b','bdo','blockquote','body','button','canvas','caption','cite','code','col','colgroup','command','datalist','dd','del','details','dfn','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hgroup','html','i','iframe','ins','keygen','kbd','label','legend','li','map','mark','menu','meter','nav','noscript','object','ol','optgroup','option','output','p','pre','progress','q','rp','rt','ruby','samp','script','section','select','small','source','span','strike','strong','style','sub','summary','sup','table','tbody','td','textarea','tfoot','th','thead','time','title','tr','ul','var','video'];
  var selfClosingTags = ['area','br','hr','input','img','link','meta','param'];
  
  for (var i = tags.length - 1; i >= 0; i--){
    Context.addTag(tags[i], false)
  };
  
  for (var i = selfClosingTags.length - 1; i >= 0; i--){
    Context.addTag(selfClosingTags[i], true)
  };
    
  lib.build = function(){ return new Context(); };
  lib.Context = Context;
  
  globalScope.littleBuilder = lib;
})(window);