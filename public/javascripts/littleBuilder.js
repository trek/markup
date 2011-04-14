(function(globalScope, undefined){

  // Context is the constructor for new rednering contexts
  var Context = function(){
    this.currentNode = this;
    this.element = document.createDocumentFragment();
  };
  
  Context.addTag = function(tagName, isSelfClosing){
    if (isSelfClosing) {
      this.prototype[tagName] = function(attributes){
        var element = document.createElement(tagName);
        if (attributes) {
          for (attribute in attributes) {
            if (attributes.hasOwnProperty(attribute)) { 
              element.setAttribute(attribute, attributes[attribute])
            }
          };
        };
        this.currentNode.element.appendChild(element)
        return this;
      }
    } else {
      this.prototype[tagName] = function(attributes, text){
        var element = document.createElement(tagName);
        
        if (attributes) {
          for (attribute in attributes) {
            if (attributes.hasOwnProperty(attribute)) { 
              element.setAttribute(attribute, attributes[attribute])
            }
          };
        };
        
        if (text) {
          var textNode = document.createTextNode(text);
          element.appendChild(textNode);
        };
                
        var node = {parent: this.currentNode, element: element};
        this.currentNode = node;
        
        return this;
      }
    };
  };
  
  // javascript object literal that will become the prototype for Context
  var prototype = {
    toString: function(){
      var element = this.element;
      var c = document.createElement('div')
      c.appendChild(this.element)
      
      return c.innerHTML
    },
    toDOM: function(){
      return this.element;
    },
    end: function(){      
      this.currentNode.parent.element.appendChild(this.currentNode.element)
      this.currentNode = this.currentNode.parent;
      
      return this;
    },
    text: function(value){
      this.currentNode.element.appendChild(document.createTextNode(value))
      
      return this;
    },
    append: function(objectLiteral){
      this.currentNode.parent.element.appendChild(document.createTextNode(objectLiteral.toString()))
    }
  };
  
  // a name space for the library
  var lib = {};
  
  // assign object literal to the Context constructor prototype
  Context.prototype = prototype;
  
  var tags = ['a','abbr','address','article','aside','audio','b','bdo','blockquote','body','button','canvas','caption','cite','code','colgroup','command','datalist','dd','del','details','dfn','div','dl','dt','em','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hgroup','html','i','iframe','ins','keygen','kbd','label','legend','li','map','mark','menu','meter','nav','noscript','object','ol','optgroup','option','output','p','pre','progress','q','rp','rt','ruby','samp','script','section','select','small','span','strike','strong','style','sub','summary','sup','table','tbody','td','textarea','tfoot','th','thead','time','title','tr','ul','var','video'];
  var selfClosingTags = ['area','br','col','embed','hr','input','img','link','meta','param', 'source'];
  
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