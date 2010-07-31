
# littleBuilder

littleBuilder is an HTML building library for javascript intended for use inside utility libraries.

# How it works
Create a building context with the `.build()` function.  This object has one method for every HTML5 tag.
Each method can take 0, 1 or 2 arguments. With no arguments it builds an empty open tag for the HTML element. With one argument you can supply an object literal that will become the attributes of the tag, key for key, value for value. With three arguments, you get an element with attributes and inner content set.
  
    var context = littleBuilder.build() // create an HTML building context
    context.div() // toString() is "<div>"
    
    var context = littleBuilder.build() // create an HTML building context
    context.div({id:'navigation'}) // "<div id='navigation'>"
    
    var context = littleBuilder.build() // create an HTML building context
    context.div({id:'navigation'}, 'here is some text') // "<div id='navigation'>here is some text"
    
  
You can also add content with the `.text()` function. It takes a string and adds content to the tag. This is useful for adding multiple, conditional bits of content or content before and after nested tags
    
    var context = littleBuilder.build() // create an HTML building context
    context.p().text('Is this person awesome:');
    if (person.isAwesome()) context.text('Yes ');
    context.text('and that is the truth');
    
    // if the person is, in fact, awesome, will toString() as
    // <p>Is this person awesome:Yes and that is the trust
    

You can add non-string content that responds to `toString()` to the context with the `append(ojb)` function:

    var person = new Person('Trek', 29)
    person.toString(); // would be 'Trek is 29'
    
    context = littleBuilder.build().div().append(person)
    
    // will result in toString() of
    // "<div>Trek is 29"
    
Close tags with with `.end()` function:

    context = littleBuilder.build().div().p({}, 'hello').end().end()
    // toString() is
    // "<div><p>hello</p></div>"

All together now, with whitespace for style:
    
    var context = littleBuilder.build()
    context
      .div()
        .p()
          .text("You could search for it on ")
          .a({href:'http://google.com'}, 'Google').end()
          .text(', or not. Your call')
        .end()
        .p({}, 'this paragraph has its content set right in the constructor).end()
      .end();
      
    // toString() value is 
    // "<div><p>You could search for it on 
    // <a href='http://google.com'>Google</a>, 
    // or not. Your call</p><p>this paragraph has its content set right in the constructor</p>
    // </div>"
    
Pull out the string value of the context object with `toString()` when you need it.

    context = littleBuilder.build();
    context.div();
    context.end();
    context.toString(); // '<div></div>'
    
## License 

(The MIT License)

Copyright (c) 2009 Trek Glowacki <trek.glowacki@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.