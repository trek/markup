describe 'littleBuilder'
  describe '.build()'
    it 'returns a new builder context'
      littleBuilder.build().should.be_an_instance_of(littleBuilder.Context)
    end
    
    it 'can be chained'
      littleBuilder.build().div().end().toString().should.equal('<div></div>')
    end
    
    it 'can be used unchained'
      built = littleBuilder.build()
      built.div()
      built.end()
      built.toString().should.equal('<div></div>')
    end
    
    describe 'tags'
      before_each
        builder = littleBuilder.build()
      end
      
      it 'writes text nodes'
        built = builder.div().div().text('hello world').end().end()
        built.toString().should.eql('<div><div>hello world</div></div>')
      end
    end
  end
  
  describe 'setting attributes'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'works with ({id: "foo", "class":"a cool awesome"})'
       builder.div({id: "foo", "class":"a cool awesome"}).end().toString().should.eql('<div id="foo"  class="a cool awesome"></div>')
     end
   end
   
   describe 'setting text immediately'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'works with ({}, "some text")'
       builder.div({}, 'some text').end().toString().should.equal('<div>some text</div>')
     end
   end
   
   describe 'tags'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'builds a <a> tag'
       builder.a().end().toString().should.equal('<a></a>')
     end
   
     it 'builds a <abbr> tag'
       builder.abbr().end().toString().should.equal('<abbr></abbr>')
     end
   
     it 'builds a <address> tag'
       builder.address().end().toString().should.equal('<address></address>')
     end
   
     it 'builds a <article> tag'
       builder.article().end().toString().should.equal('<article></article>')
     end
   
     it 'builds a <aside> tag'
       builder.aside().end().toString().should.equal('<aside></aside>')
     end
   
     it 'builds a <audio> tag'
       builder.audio().end().toString().should.equal('<audio></audio>')
     end
   
     it 'builds a <b> tag'
       builder.b().end().toString().should.equal('<b></b>')
     end
   
     it 'builds a <bdo> tag'
       builder.bdo().end().toString().should.equal('<bdo></bdo>')
     end
   
     it 'builds a <blockquote> tag'
       builder.blockquote().end().toString().should.equal('<blockquote></blockquote>')
     end
   
     it 'builds a <body> tag'
       builder.body().end().toString().should.equal('<body></body>')
     end
   
     it 'builds a <button> tag'
       builder.button().end().toString().should.equal('<button></button>')
     end
   
     it 'builds a <canvas> tag'
       builder.canvas().end().toString().should.equal('<canvas></canvas>')
     end
   
     it 'builds a <caption> tag'
       builder.caption().end().toString().should.equal('<caption></caption>')
     end
   
     it 'builds a <cite> tag'
       builder.cite().end().toString().should.equal('<cite></cite>')
     end
   
     it 'builds a <code> tag'
       builder.code().end().toString().should.equal('<code></code>')
     end
   
     it 'builds a <colgroup> tag'
       builder.colgroup().end().toString().should.equal('<colgroup></colgroup>')
     end
   
     it 'builds a <command> tag'
       builder.command().end().toString().should.equal('<command></command>')
     end
   
     it 'builds a <datalist> tag'
       builder.datalist().end().toString().should.equal('<datalist></datalist>')
     end
   
     it 'builds a <dd> tag'
       builder.dd().end().toString().should.equal('<dd></dd>')
     end
   
     it 'builds a <del> tag'
       builder.del().end().toString().should.equal('<del></del>')
     end
   
     it 'builds a <details> tag'
       builder.details().end().toString().should.equal('<details></details>')
     end
   
     it 'builds a <dfn> tag'
       builder.dfn().end().toString().should.equal('<dfn></dfn>')
     end
   
     it 'builds a <div> tag'
       builder.div().end().toString().should.equal('<div></div>')
     end
   
     it 'builds a <dl> tag'
       builder.dl().end().toString().should.equal('<dl></dl>')
     end
   
     it 'builds a <dt> tag'
       builder.dt().end().toString().should.equal('<dt></dt>')
     end
   
     it 'builds a <em> tag'
       builder.em().end().toString().should.equal('<em></em>')
     end
   
     it 'builds a <fieldset> tag'
       builder.fieldset().end().toString().should.equal('<fieldset></fieldset>')
     end
   
     it 'builds a <figcaption> tag'
       builder.figcaption().end().toString().should.equal('<figcaption></figcaption>')
     end
   
     it 'builds a <figure> tag'
       builder.figure().end().toString().should.equal('<figure></figure>')
     end
   
     it 'builds a <footer> tag'
       builder.footer().end().toString().should.equal('<footer></footer>')
     end
   
     it 'builds a <form> tag'
       builder.form().end().toString().should.equal('<form></form>')
     end
   
     it 'builds a <h1> tag'
       builder.h1().end().toString().should.equal('<h1></h1>')
     end
   
     it 'builds a <h2> tag'
       builder.h2().end().toString().should.equal('<h2></h2>')
     end
   
     it 'builds a <h3> tag'
       builder.h3().end().toString().should.equal('<h3></h3>')
     end
   
     it 'builds a <h4> tag'
       builder.h4().end().toString().should.equal('<h4></h4>')
     end
   
     it 'builds a <h5> tag'
       builder.h5().end().toString().should.equal('<h5></h5>')
     end
   
     it 'builds a <h6> tag'
       builder.h6().end().toString().should.equal('<h6></h6>')
     end
   
     it 'builds a <head> tag'
       builder.head().end().toString().should.equal('<head></head>')
     end
   
     it 'builds a <header> tag'
       builder.header().end().toString().should.equal('<header></header>')
     end
   
     it 'builds a <hgroup> tag'
       builder.hgroup().end().toString().should.equal('<hgroup></hgroup>')
     end
   
     it 'builds a <html> tag'
       builder.html().end().toString().should.equal('<html></html>')
     end
   
     it 'builds a <i> tag'
       builder.i().end().toString().should.equal('<i></i>')
     end
   
     it 'builds a <iframe> tag'
       builder.iframe().end().toString().should.equal('<iframe></iframe>')
     end
   
     it 'builds a <ins> tag'
     console.log('<ins>')
       builder.ins().end().toString().should.equal('<ins></ins>')
     end
   
     // it 'builds a <keygen> tag'
     //   builder.keygen().toString().should.equal('<keygen>')
     // end
   
     it 'builds a <kbd> tag'
       builder.kbd().end().toString().should.equal('<kbd></kbd>')
     end
   
     it 'builds a <label> tag'
       builder.label().end().toString().should.equal('<label></label>')
     end
   
     it 'builds a <legend> tag'
       builder.legend().end().toString().should.equal('<legend></legend>')
     end
   
     it 'builds a <li> tag'
       builder.li().end().toString().should.equal('<li></li>')
     end
   
     it 'builds a <map> tag'
       builder.map().end().toString().should.equal('<map></map>')
     end
   
     it 'builds a <mark> tag'
       builder.mark().end().toString().should.equal('<mark></mark>')
     end
   
     it 'builds a <menu> tag'
       builder.menu().end().toString().should.equal('<menu></menu>')
     end
   
     it 'builds a <meter> tag'
       builder.meter().end().toString().should.equal('<meter></meter>')
     end
   
     it 'builds a <nav> tag'
       builder.nav().end().toString().should.equal('<nav></nav>')
     end
   
     it 'builds a <noscript> tag'
       builder.noscript().end().toString().should.equal('<noscript></noscript>')
     end
   
     it 'builds a <object> tag'
       builder.object().end().toString().should.equal('<object></object>')
     end
   
     it 'builds a <ol> tag'
       builder.ol().end().toString().should.equal('<ol></ol>')
     end
   
     it 'builds a <optgroup> tag'
       builder.optgroup().end().toString().should.equal('<optgroup></optgroup>')
     end
   
     it 'builds a <option> tag'
       builder.option().end().toString().should.equal('<option></option>')
     end
   
     it 'builds a <output> tag'
       builder.output().end().toString().should.equal('<output></output>')
     end
   
     it 'builds a <p> tag'
       builder.p().end().toString().should.equal('<p></p>')
     end
   
     it 'builds a <pre> tag'
       builder.pre().end().toString().should.equal('<pre></pre>')
     end
   
     it 'builds a <progress> tag'
       builder.progress().end().toString().should.equal('<progress></progress>')
     end
   
     it 'builds a <q> tag'
       builder.q().end().toString().should.equal('<q></q>')
     end
   
     it 'builds a <rp> tag'
       builder.rp().end().toString().should.equal('<rp></rp>')
     end
   
     it 'builds a <rt> tag'
       builder.rt().end().toString().should.equal('<rt></rt>')
     end
   
     it 'builds a <ruby> tag'
       builder.ruby().end().toString().should.equal('<ruby></ruby>')
     end
   
     it 'builds a <samp> tag'
       builder.samp().end().toString().should.equal('<samp></samp>')
     end
   
     it 'builds a <script> tag'
       builder.script().end().toString().should.equal('<script></script>')
     end
   
     it 'builds a <section> tag'
       builder.section().end().toString().should.equal('<section></section>')
     end
   
     it 'builds a <select> tag'
       builder.select().end().toString().should.equal('<select></select>')
     end
   
     it 'builds a <small> tag'
       builder.small().end().toString().should.equal('<small></small>')
     end
   
     it 'builds a <span> tag'
       builder.span().end().toString().should.equal('<span></span>')
     end
   
     it 'builds a <strike> tag'
       builder.strike().end().toString().should.equal('<strike></strike>')
     end
   
     it 'builds a <strong> tag'
       builder.strong().end().toString().should.equal('<strong></strong>')
     end
   
     it 'builds a <style> tag'
       builder.style().end().toString().should.equal('<style></style>')
     end
   
     it 'builds a <sub> tag'
       builder.sub().end().toString().should.equal('<sub></sub>')
     end
   
     it 'builds a <summary> tag'
       builder.summary().end().toString().should.equal('<summary></summary>')
     end
   
     it 'builds a <sup> tag'
       builder.sup().end().toString().should.equal('<sup></sup>')
     end
   
     it 'builds a <table> tag'
       builder.table().end().toString().should.equal('<table></table>')
     end
   
     it 'builds a <tbody> tag'
       builder.tbody().end().toString().should.equal('<tbody></tbody>')
     end
   
     it 'builds a <td> tag'
       builder.td().end().toString().should.equal('<td></td>')
     end
   
     it 'builds a <textarea> tag'
       builder.textarea().end().toString().should.equal('<textarea></textarea>')
     end
   
     it 'builds a <tfoot> tag'
       builder.tfoot().end().toString().should.equal('<tfoot></tfoot>')
     end
   
     it 'builds a <th> tag'
       builder.th().end().toString().should.equal('<th></th>')
     end
   
     it 'builds a <thead> tag'
       builder.thead().end().toString().should.equal('<thead></thead>')
     end
   
     it 'builds a <time> tag'
       builder.time().end().toString().should.equal('<time></time>')
     end
   
     it 'builds a <title> tag'
       builder.title().end().toString().should.equal('<title></title>')
     end
   
     it 'builds a <tr> tag'
       builder.tr().end().toString().should.equal('<tr></tr>')
     end
   
     it 'builds a <ul> tag'
       builder.ul().end().toString().should.equal('<ul></ul>')
     end
   
     it 'builds a <var> tag'
       builder['var']().end().toString().should.equal('<var></var>')
     end
   
     it 'builds a <video> tag'
       builder.video().end().toString().should.equal('<video></video>')
     end
   end
   
   describe 'closing tags'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'closes tags with end'      
       builder.div().end().toString().should.equal('<div></div>')
     end
     
   end
   
   describe 'nesting tags'
     it 'correctly display'
       littleBuilder.build().p().a().end().span().end().end().div().end().toString().should.equal('<p><a></a><span></span></p><div></div>')
     end
   end
   describe 'self terminating tags'
     
     before_each
       builder = littleBuilder.build()
     end
     
     it 'builds a <area/> tag'
       builder.area().toString().should.equal('<area>')
     end
   
     it 'builds a <br/> tag'
       builder.br().toString().should.equal('<br>')
     end
     
     it 'builds a <col> tag'
       builder.col().toString().should.equal('<col>')
     end
     
     it 'builds a <embed> tag'
       builder.embed().toString().should.equal('<embed>')
     end
   
     it 'builds a <hr/> tag'
       builder.hr().toString().should.equal('<hr>')
     end
   
     it 'builds a <input/> tag'
       builder.input().toString().should.equal('<input>')
     end
   
     it 'builds a <img/> tag'
       builder.img().toString().should.equal('<img>')
     end
   
     it 'builds a <link/> tag'
       builder.link().toString().should.equal('<link>')
     end
   
     it 'builds a <meta/> tag'
       builder.meta().toString().should.equal('<meta>')
     end
   
     it 'builds a <param/> tag'
       builder.param().toString().should.equal('<param>')
     end
     
     it 'builds a <source> tag'
       builder.source().toString().should.equal('<source>')
     end
   end
end