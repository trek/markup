
# markup

markup is an HTML building library for javascript intended for use inside utility libraries.

# How it works
Create a building context with the `markup()` function.  This object has one method for every HTML5 tag.
Each method can take 0, 1 or 2 arguments. With no arguments it builds an empty HTML, attribute-less element. With one argument you can supply an object literal that will become the attributes of the tag, key for key, value for value. With three arguments, you get an element with attributes and inner content set.

    var context = markup() // create an HTML building context
    context.div() // toDOM() is <div></div>

    var context = markup() // create an HTML building context
    context.div({id:'navigation'}) // <div id='navigation'></div>

    var context = markup() // create an HTML building context
    context.div({id:'navigation'}, 'here is some text') // <div id='navigation'>here is some text</div>


You can also add content with the `.text()` function. It takes a string and adds content to the tag. This is useful for adding multiple, conditional bits of content or content before and after nested tags

    var context = markup() // create an HTML building context
    context.p().text('Is this person awesome:');
    if (person.isAwesome()) context.text('Yes ');
    context.text('and that is the truth');

    // if the person is, in fact, awesome, will toDOM() as
    // <p>Is this person awesome:Yes and that is the truth</p>


You can add non-string content that responds to `toString()` to the context with the `append(obj)` function:

    var person = new Person('Trek', 29)
    person.toString(); // would be 'Trek is 29'

    context = markup().div().append(person)

    // will result in toDOM() of
    // "<div>Trek is 29"</div>

Close tags with with `.end()` function:

    context = markup().div().p({}, 'hello').end().end()
    // toDOM() is
    // <div><p>hello</p></div>

All together now, with whitespace for style:

    var context = markup();
    context
      .div()
        .p()
          .text("You could search for it on ")
          .a({href:'http://google.com'}, 'Google').end()
          .text(', or not. Your call')
        .end()
        .p({}, 'this paragraph has its content set right in the constructor).end()
      .end();

    // toDOM() value is
    // <div><p>You could search for it on
    // <a href='http://google.com'>Google</a>,
    // or not. Your call</p><p>this paragraph has its content set right in the constructor</p>
    // </div>

Pull out the string value of the context object with `toString()` when you need it.

    context = markup();
    context.div();
    context.end();
    context.toString(); // "<div></div>"

markup comes with all the HTML5 tags. If I forgot a tag (or you want something extra), add one with `addTag(tagName isSelfClosing)`

  markup.addTag('blink', false); // add <blink>, which is not a self-closing tag
  markup.addTag('fb:name', true) // add the Facebook markup language tag fb:name, which closes itself.

  // Now we can do
  html = markup();
  markup.blink().text('blink blink blink).end()

  fbml = markup()['fb:name']({uid: '12345678', firstnameonly: 'true'})

