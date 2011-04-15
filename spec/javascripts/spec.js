describe('littleBuilder', function(){
  describe('.build()', function(){
    it('returns a new builder context', function(){
      // littleBuilder.build().should.be_an_instance_of(littleBuilder.Context)
    });
    
    it('can be chained', function(){
      expect(littleBuilder.build().div().end().toString()).toEqual('<div></div>')
    });
    
    it('can be used unchained', function(){
      built = littleBuilder.build()
      built.div()
      built.end()
      expect(built.toString()).toEqual('<div></div>');
    });
    
    describe('tags', function(){
      beforeEach(function() {
        builder = littleBuilder.build()
      });
      
      it('writes text nodes', function(){
        built = builder.div().div().text('hello world').end().end()
        expect(built.toString()).toEqual('<div><div>hello world</div></div>');
      });
    });
  });
  
  describe('setting attributes', function(){
     beforeEach(function() {
       builder = littleBuilder.build()
     });
     
     it('works with ({id: "foo", "class":"a cool awesome"})', function(){
       expect(builder.div({id: "foo", "class":"a cool awesome"}).end().toString()).toEqual('<div id="foo" class="a cool awesome"></div>')
     });
   });
   
   describe('setting text immediately', function(){
     beforeEach(function() {
       builder = littleBuilder.build()
     });
     
     it('works with ({}, "some text")', function(){
       expect(builder.div({}, 'some text').end().toString()).toEqual('<div>some text</div>')
     });
   });
   
   describe('tags', function(){
     beforeEach(function() {
       builder = littleBuilder.build()
     });
     
     it('builds a <a> tag', function(){
       expect(builder.a().end().toString()).toEqual('<a></a>')
     });
   
     it('builds a <abbr> tag', function(){
       expect(builder.abbr().end().toString()).toEqual('<abbr></abbr>')
     });
   
     it('builds a <address> tag', function(){
       expect(builder.address().end().toString()).toEqual('<address></address>')
     });
   
     it('builds a <article> tag', function(){
       expect(builder.article().end().toString()).toEqual('<article></article>')
     });
   
     it('builds a <aside> tag', function(){
       expect(builder.aside().end().toString()).toEqual('<aside></aside>')
     });
   
     it('builds a <audio> tag', function(){
       expect(builder.audio().end().toString()).toEqual('<audio></audio>')
     });
   
     it('builds a <b> tag', function(){
       expect(builder.b().end().toString()).toEqual('<b></b>')
     });
   
     it('builds a <bdo> tag', function(){
       expect(builder.bdo().end().toString()).toEqual('<bdo></bdo>')
     });
   
     it('builds a <blockquote> tag', function(){
       expect(builder.blockquote().end().toString()).toEqual('<blockquote></blockquote>')
     });
   
     it('builds a <body> tag', function(){
       expect(builder.body().end().toString()).toEqual('<body></body>')
     });
   
     it('builds a <button> tag', function(){
       expect(builder.button().end().toString()).toEqual('<button></button>')
     });
   
     it('builds a <canvas> tag', function(){
       expect(builder.canvas().end().toString()).toEqual('<canvas></canvas>')
     });
   
     it('builds a <caption> tag', function(){
       expect(builder.caption().end().toString()).toEqual('<caption></caption>')
     });
   
     it('builds a <cite> tag', function(){
       expect(builder.cite().end().toString()).toEqual('<cite></cite>')
     });
   
     it('builds a <code> tag', function(){
       expect(builder.code().end().toString()).toEqual('<code></code>')
     });
   
     it('builds a <colgroup> tag', function(){
       expect(builder.colgroup().end().toString()).toEqual('<colgroup></colgroup>')
     });
   
     it('builds a <command> tag', function(){
       expect(builder.command().end().toString()).toEqual('<command></command>')
     });
   
     it('builds a <datalist> tag', function(){
       expect(builder.datalist().end().toString()).toEqual('<datalist></datalist>')
     });
   
     it('builds a <dd> tag', function(){
       expect(builder.dd().end().toString()).toEqual('<dd></dd>')
     });
   
     it('builds a <del> tag', function(){
       expect(builder.del().end().toString()).toEqual('<del></del>')
     });
   
     it('builds a <details> tag', function(){
       expect(builder.details().end().toString()).toEqual('<details></details>')
     });
   
     it('builds a <dfn> tag', function(){
       expect(builder.dfn().end().toString()).toEqual('<dfn></dfn>')
     });
   
     it('builds a <div> tag', function(){
       expect(builder.div().end().toString()).toEqual('<div></div>')
     });
   
     it('builds a <dl> tag', function(){
       expect(builder.dl().end().toString()).toEqual('<dl></dl>')
     });
   
     it('builds a <dt> tag', function(){
       expect(builder.dt().end().toString()).toEqual('<dt></dt>')
     });
   
     it('builds a <em> tag', function(){
       expect(builder.em().end().toString()).toEqual('<em></em>')
     });
   
     it('builds a <fieldset> tag', function(){
       expect(builder.fieldset().end().toString()).toEqual('<fieldset></fieldset>')
     });
   
     it('builds a <figcaption> tag', function(){
       expect(builder.figcaption().end().toString()).toEqual('<figcaption></figcaption>')
     });
   
     it('builds a <figure> tag', function(){
       expect(builder.figure().end().toString()).toEqual('<figure></figure>')
     });
   
     it('builds a <footer> tag', function(){
       expect(builder.footer().end().toString()).toEqual('<footer></footer>')
     });
   
     it('builds a <form> tag', function(){
       expect(builder.form().end().toString()).toEqual('<form></form>')
     });
   
     it('builds a <h1> tag', function(){
       expect(builder.h1().end().toString()).toEqual('<h1></h1>')
     });
   
     it('builds a <h2> tag', function(){
       expect(builder.h2().end().toString()).toEqual('<h2></h2>')
     });
   
     it('builds a <h3> tag', function(){
       expect(builder.h3().end().toString()).toEqual('<h3></h3>')
     });
   
     it('builds a <h4> tag', function(){
       expect(builder.h4().end().toString()).toEqual('<h4></h4>')
     });
   
     it('builds a <h5> tag', function(){
       expect(builder.h5().end().toString()).toEqual('<h5></h5>')
     });
   
     it('builds a <h6> tag', function(){
       expect(builder.h6().end().toString()).toEqual('<h6></h6>')
     });
   
     it('builds a <head> tag', function(){
       expect(builder.head().end().toString()).toEqual('<head></head>')
     });
   
     it('builds a <header> tag', function(){
       expect(builder.header().end().toString()).toEqual('<header></header>')
     });
   
     it('builds a <hgroup> tag', function(){
       expect(builder.hgroup().end().toString()).toEqual('<hgroup></hgroup>')
     });
   
     it('builds a <html> tag', function(){
       expect(builder.html().end().toString()).toEqual('<html></html>')
     });
   
     it('builds a <i> tag', function(){
       expect(builder.i().end().toString()).toEqual('<i></i>')
     });
   
     it('builds a <iframe> tag', function(){
       expect(builder.iframe().end().toString()).toEqual('<iframe></iframe>')
     });
   
     it('builds a <ins> tag', function(){
     console.log('<ins>')
       expect(builder.ins().end().toString()).toEqual('<ins></ins>')
     });
   
     it('builds a <kbd> tag', function(){
       expect(builder.kbd().end().toString()).toEqual('<kbd></kbd>')
     });
   
     it('builds a <label> tag', function(){
       expect(builder.label().end().toString()).toEqual('<label></label>')
     });
   
     it('builds a <legend> tag', function(){
       expect(builder.legend().end().toString()).toEqual('<legend></legend>')
     });
   
     it('builds a <li> tag', function(){
       expect(builder.li().end().toString()).toEqual('<li></li>')
     });
   
     it('builds a <map> tag', function(){
       expect(builder.map().end().toString()).toEqual('<map></map>')
     });
   
     it('builds a <mark> tag', function(){
       expect(builder.mark().end().toString()).toEqual('<mark></mark>')
     });
   
     it('builds a <menu> tag', function(){
       expect(builder.menu().end().toString()).toEqual('<menu></menu>')
     });
   
     it('builds a <meter> tag', function(){
       expect(builder.meter().end().toString()).toEqual('<meter></meter>')
     });
   
     it('builds a <nav> tag', function(){
       expect(builder.nav().end().toString()).toEqual('<nav></nav>')
     });
   
     it('builds a <noscript> tag', function(){
       expect(builder.noscript().end().toString()).toEqual('<noscript></noscript>')
     });
   
     it('builds a <object> tag', function(){
       expect(builder.object().end().toString()).toEqual('<object></object>')
     });
   
     it('builds a <ol> tag', function(){
       expect(builder.ol().end().toString()).toEqual('<ol></ol>')
     });
   
     it('builds a <optgroup> tag', function(){
       expect(builder.optgroup().end().toString()).toEqual('<optgroup></optgroup>')
     });
   
     it('builds a <option> tag', function(){
       expect(builder.option().end().toString()).toEqual('<option></option>')
     });
   
     it('builds a <output> tag', function(){
       expect(builder.output().end().toString()).toEqual('<output></output>')
     });
   
     it('builds a <p> tag', function(){
       expect(builder.p().end().toString()).toEqual('<p></p>')
     });
   
     it('builds a <pre> tag', function(){
       expect(builder.pre().end().toString()).toEqual('<pre></pre>')
     });
   
     it('builds a <progress> tag', function(){
       expect(builder.progress().end().toString()).toEqual('<progress></progress>')
     });
   
     it('builds a <q> tag', function(){
       expect(builder.q().end().toString()).toEqual('<q></q>')
     });
   
     it('builds a <rp> tag', function(){
       expect(builder.rp().end().toString()).toEqual('<rp></rp>')
     });
   
     it('builds a <rt> tag', function(){
       expect(builder.rt().end().toString()).toEqual('<rt></rt>')
     });
   
     it('builds a <ruby> tag', function(){
       expect(builder.ruby().end().toString()).toEqual('<ruby></ruby>')
     });
   
     it('builds a <samp> tag', function(){
       expect(builder.samp().end().toString()).toEqual('<samp></samp>')
     });
   
     it('builds a <script> tag', function(){
       expect(builder.script().end().toString()).toEqual('<script></script>')
     });
   
     it('builds a <section> tag', function(){
       expect(builder.section().end().toString()).toEqual('<section></section>')
     });
   
     it('builds a <select> tag', function(){
       expect(builder.select().end().toString()).toEqual('<select></select>')
     });
   
     it('builds a <small> tag', function(){
       expect(builder.small().end().toString()).toEqual('<small></small>')
     });
   
     it('builds a <span> tag', function(){
       expect(builder.span().end().toString()).toEqual('<span></span>')
     });
   
     it('builds a <strike> tag', function(){
       expect(builder.strike().end().toString()).toEqual('<strike></strike>')
     });
   
     it('builds a <strong> tag', function(){
       expect(builder.strong().end().toString()).toEqual('<strong></strong>')
     });
   
     it('builds a <style> tag', function(){
       expect(builder.style().end().toString()).toEqual('<style></style>')
     });
   
     it('builds a <sub> tag', function(){
       expect(builder.sub().end().toString()).toEqual('<sub></sub>')
     });
   
     it('builds a <summary> tag', function(){
       expect(builder.summary().end().toString()).toEqual('<summary></summary>')
     });
   
     it('builds a <sup> tag', function(){
       expect(builder.sup().end().toString()).toEqual('<sup></sup>')
     });
   
     it('builds a <table> tag', function(){
       expect(builder.table().end().toString()).toEqual('<table></table>')
     });
   
     it('builds a <tbody> tag', function(){
       expect(builder.tbody().end().toString()).toEqual('<tbody></tbody>')
     });
   
     it('builds a <td> tag', function(){
       expect(builder.td().end().toString()).toEqual('<td></td>')
     });
   
     it('builds a <textarea> tag', function(){
       expect(builder.textarea().end().toString()).toEqual('<textarea></textarea>')
     });
   
     it('builds a <tfoot> tag', function(){
       expect(builder.tfoot().end().toString()).toEqual('<tfoot></tfoot>')
     });
   
     it('builds a <th> tag', function(){
       expect(builder.th().end().toString()).toEqual('<th></th>')
     });
   
     it('builds a <thead> tag', function(){
       expect(builder.thead().end().toString()).toEqual('<thead></thead>')
     });
   
     it('builds a <time> tag', function(){
       expect(builder.time().end().toString()).toEqual('<time></time>')
     });
   
     it('builds a <title> tag', function(){
       expect(builder.title().end().toString()).toEqual('<title></title>')
     });
   
     it('builds a <tr> tag', function(){
       expect(builder.tr().end().toString()).toEqual('<tr></tr>')
     });
   
     it('builds a <ul> tag', function(){
       expect(builder.ul().end().toString()).toEqual('<ul></ul>')
     });
   
     it('builds a <var> tag', function(){
       expect(builder['var']().end().toString()).toEqual('<var></var>')
     });
   
     it('builds a <video> tag', function(){
       expect(builder.video().end().toString()).toEqual('<video></video>')
     });
   });
   
   describe('closing tags', function(){
     beforeEach(function() {
       builder = littleBuilder.build()
     });
     
     it('closes tags with end', function(){      
       expect(builder.div().end().toString()).toEqual('<div></div>')
     });
     
   });
   
   describe('nesting tags', function(){
     it('correctly display', function(){
       expect(littleBuilder.build().p().a().end().span().end().end().div().end().toString()).toEqual('<p><a></a><span></span></p><div></div>')
     });
   });
   
   describe('self terminating tags', function(){
     
     beforeEach(function() {
       builder = littleBuilder.build()
     });
     
     it('builds a <area/> tag', function(){
       expect(builder.area().toString()).toEqual('<area>')
     });
   
     it('builds a <br/> tag', function(){
       expect(builder.br().toString()).toEqual('<br>')
     });
     
     it('builds a <col> tag', function(){
       expect(builder.col().toString()).toEqual('<col>')
     });
     
     it('builds a <embed> tag', function(){
       expect(builder.embed().toString()).toEqual('<embed>')
     });
   
     it('builds a <hr/> tag', function(){
       expect(builder.hr().toString()).toEqual('<hr>')
     });
   
     it('builds a <input/> tag', function(){
       expect(builder.input().toString()).toEqual('<input>')
     });
   
     it('builds a <img/> tag', function(){
       expect(builder.img().toString()).toEqual('<img>')
     });
   
     it('builds a <link/> tag', function(){
       expect(builder.link().toString()).toEqual('<link>')
     });
   
     it('builds a <meta/> tag', function(){
       expect(builder.meta().toString()).toEqual('<meta>')
     });
   
     it('builds a <param/> tag', function(){
       expect(builder.param().toString()).toEqual('<param>')
     });
     
     it('builds a <source> tag', function(){
       expect(builder.source().toString()).toEqual('<source>')
     });
   });
})