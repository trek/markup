describe 'littleBuilder'
  describe '.build()'
    it 'returns a new builder context'
      littleBuilder.build().should.be_an_instance_of(littleBuilder.Context)
    end
    
    it 'can be chained'
      littleBuilder.build().div().end().toString().should.equal(domFragmentFrom('<div></div>'))
    end
    
    it 'can be used unchained'
      built = littleBuilder.build()
      built.div()
      built.end()
      built.toString().should.equal(domFragmentFrom('<div></div>'))
    end
    
    describe 'tags'
      before_each
        builder = littleBuilder.build()
      end
      
      it 'writes text nodes'
        built = builder.div().div().text('hello world').end().end()
        built.toString().should.eql(domFragmentFrom('<div><div>hello world</div></div>'))
      end
    end
  end
  
  describe 'setting attributes'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'works with ({id: "foo", "class":"a cool awesome"})'
       builder.div({id: "foo", "class":"a cool awesome"}).end().toString().should.eql(domFragmentFrom("<div id='foo'  class='a cool awesome' ></div>"))
     end
   end
   
   describe 'setting text immediately'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'works with ({}, "some text")'
       builder.div({}, 'some text').end().toString().should.equal(domFragmentFrom('<div>some text</div>'))
     end
   end
   
   describe 'tags'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'builds a <a> tag'
       builder.a().toString().should.equal(domFragmentFrom('<a>'))
     end
   
     it 'builds a <abbr> tag'
       builder.abbr().toString().should.equal(domFragmentFrom('<abbr>'))
     end
   
     it 'builds a <address> tag'
       builder.address().toString().should.equal(domFragmentFrom('<address>'))
     end
   
     it 'builds a <article> tag'
       builder.article().toString().should.equal(domFragmentFrom('<article>'))
     end
   
     it 'builds a <aside> tag'
       builder.aside().toString().should.equal(domFragmentFrom('<aside>'))
     end
   
     it 'builds a <audio> tag'
       builder.audio().toString().should.equal(domFragmentFrom('<audio>'))
     end
   
     it 'builds a <b> tag'
       builder.b().toString().should.equal(domFragmentFrom('<b>'))
     end
   
     it 'builds a <bdo> tag'
       builder.bdo().toString().should.equal(domFragmentFrom('<bdo>'))
     end
   
     it 'builds a <blockquote> tag'
       builder.blockquote().toString().should.equal(domFragmentFrom('<blockquote>'))
     end
   
     it 'builds a <body> tag'
       builder.body().toString().should.equal(domFragmentFrom('<body>'))
     end
   
     it 'builds a <button> tag'
       builder.button().toString().should.equal(domFragmentFrom('<button>'))
     end
   
     it 'builds a <canvas> tag'
       builder.canvas().toString().should.equal(domFragmentFrom('<canvas>'))
     end
   
     it 'builds a <caption> tag'
       builder.caption().toString().should.equal(domFragmentFrom('<caption>'))
     end
   
     it 'builds a <cite> tag'
       builder.cite().toString().should.equal(domFragmentFrom('<cite>'))
     end
   
     it 'builds a <code> tag'
       builder.code().toString().should.equal(domFragmentFrom('<code>'))
     end
   
     it 'builds a <col> tag'
       builder.col().toString().should.equal(domFragmentFrom('<col>'))
     end
   
     it 'builds a <colgroup> tag'
       builder.colgroup().toString().should.equal(domFragmentFrom('<colgroup>'))
     end
   
     it 'builds a <command> tag'
       builder.command().toString().should.equal(domFragmentFrom('<command>'))
     end
   
     it 'builds a <datalist> tag'
       builder.datalist().toString().should.equal(domFragmentFrom('<datalist>'))
     end
   
     it 'builds a <dd> tag'
       builder.dd().toString().should.equal(domFragmentFrom('<dd>'))
     end
   
     it 'builds a <del> tag'
       builder.del().toString().should.equal(domFragmentFrom('<del>'))
     end
   
     it 'builds a <details> tag'
       builder.details().toString().should.equal(domFragmentFrom('<details>'))
     end
   
     it 'builds a <dfn> tag'
       builder.dfn().toString().should.equal(domFragmentFrom('<dfn>'))
     end
   
     it 'builds a <div> tag'
       builder.div().toString().should.equal(domFragmentFrom('<div>'))
     end
   
     it 'builds a <dl> tag'
       builder.dl().toString().should.equal(domFragmentFrom('<dl>'))
     end
   
     it 'builds a <dt> tag'
       builder.dt().toString().should.equal(domFragmentFrom('<dt>'))
     end
   
     it 'builds a <em> tag'
       builder.em().toString().should.equal(domFragmentFrom('<em>'))
     end
   
     it 'builds a <embed> tag'
       builder.embed().toString().should.equal(domFragmentFrom('<embed>'))
     end
   
     it 'builds a <fieldset> tag'
       builder.fieldset().toString().should.equal(domFragmentFrom('<fieldset>'))
     end
   
     it 'builds a <figcaption> tag'
       builder.figcaption().toString().should.equal(domFragmentFrom('<figcaption>'))
     end
   
     it 'builds a <figure> tag'
       builder.figure().toString().should.equal(domFragmentFrom('<figure>'))
     end
   
     it 'builds a <footer> tag'
       builder.footer().toString().should.equal(domFragmentFrom('<footer>'))
     end
   
     it 'builds a <form> tag'
       builder.form().toString().should.equal(domFragmentFrom('<form>'))
     end
   
     it 'builds a <h1> tag'
       builder.h1().toString().should.equal(domFragmentFrom('<h1>'))
     end
   
     it 'builds a <h2> tag'
       builder.h2().toString().should.equal(domFragmentFrom('<h2>'))
     end
   
     it 'builds a <h3> tag'
       builder.h3().toString().should.equal(domFragmentFrom('<h3>'))
     end
   
     it 'builds a <h4> tag'
       builder.h4().toString().should.equal(domFragmentFrom('<h4>'))
     end
   
     it 'builds a <h5> tag'
       builder.h5().toString().should.equal(domFragmentFrom('<h5>'))
     end
   
     it 'builds a <h6> tag'
       builder.h6().toString().should.equal(domFragmentFrom('<h6>'))
     end
   
     it 'builds a <head> tag'
       builder.head().toString().should.equal(domFragmentFrom('<head>'))
     end
   
     it 'builds a <header> tag'
       builder.header().toString().should.equal(domFragmentFrom('<header>'))
     end
   
     it 'builds a <hgroup> tag'
       builder.hgroup().toString().should.equal(domFragmentFrom('<hgroup>'))
     end
   
     it 'builds a <html> tag'
       builder.html().toString().should.equal(domFragmentFrom('<html>'))
     end
   
     it 'builds a <i> tag'
       builder.i().toString().should.equal(domFragmentFrom('<i>'))
     end
   
     it 'builds a <iframe> tag'
       builder.iframe().toString().should.equal(domFragmentFrom('<iframe>'))
     end
   
     it 'builds a <ins> tag'
       builder.ins().toString().should.equal(domFragmentFrom('<ins>'))
     end
   
     it 'builds a <keygen> tag'
       builder.keygen().toString().should.equal(domFragmentFrom('<keygen>'))
     end
   
     it 'builds a <kbd> tag'
       builder.kbd().toString().should.equal(domFragmentFrom('<kbd>'))
     end
   
     it 'builds a <label> tag'
       builder.label().toString().should.equal(domFragmentFrom('<label>'))
     end
   
     it 'builds a <legend> tag'
       builder.legend().toString().should.equal(domFragmentFrom('<legend>'))
     end
   
     it 'builds a <li> tag'
       builder.li().toString().should.equal(domFragmentFrom('<li>'))
     end
   
     it 'builds a <map> tag'
       builder.map().toString().should.equal(domFragmentFrom('<map>'))
     end
   
     it 'builds a <mark> tag'
       builder.mark().toString().should.equal(domFragmentFrom('<mark>'))
     end
   
     it 'builds a <menu> tag'
       builder.menu().toString().should.equal(domFragmentFrom('<menu>'))
     end
   
     it 'builds a <meter> tag'
       builder.meter().toString().should.equal(domFragmentFrom('<meter>'))
     end
   
     it 'builds a <nav> tag'
       builder.nav().toString().should.equal(domFragmentFrom('<nav>'))
     end
   
     it 'builds a <noscript> tag'
       builder.noscript().toString().should.equal(domFragmentFrom('<noscript>'))
     end
   
     it 'builds a <object> tag'
       builder.object().toString().should.equal(domFragmentFrom('<object>'))
     end
   
     it 'builds a <ol> tag'
       builder.ol().toString().should.equal(domFragmentFrom('<ol>'))
     end
   
     it 'builds a <optgroup> tag'
       builder.optgroup().toString().should.equal(domFragmentFrom('<optgroup>'))
     end
   
     it 'builds a <option> tag'
       builder.option().toString().should.equal(domFragmentFrom('<option>'))
     end
   
     it 'builds a <output> tag'
       builder.output().toString().should.equal(domFragmentFrom('<output>'))
     end
   
     it 'builds a <p> tag'
       builder.p().toString().should.equal(domFragmentFrom('<p>'))
     end
   
     it 'builds a <pre> tag'
       builder.pre().toString().should.equal(domFragmentFrom('<pre>'))
     end
   
     it 'builds a <progress> tag'
       builder.progress().toString().should.equal(domFragmentFrom('<progress>'))
     end
   
     it 'builds a <q> tag'
       builder.q().toString().should.equal(domFragmentFrom('<q>'))
     end
   
     it 'builds a <rp> tag'
       builder.rp().toString().should.equal(domFragmentFrom('<rp>'))
     end
   
     it 'builds a <rt> tag'
       builder.rt().toString().should.equal(domFragmentFrom('<rt>'))
     end
   
     it 'builds a <ruby> tag'
       builder.ruby().toString().should.equal(domFragmentFrom('<ruby>'))
     end
   
     it 'builds a <samp> tag'
       builder.samp().toString().should.equal(domFragmentFrom('<samp>'))
     end
   
     it 'builds a <script> tag'
       builder.script().toString().should.equal(domFragmentFrom('<script>'))
     end
   
     it 'builds a <section> tag'
       builder.section().toString().should.equal(domFragmentFrom('<section>'))
     end
   
     it 'builds a <select> tag'
       builder.select().toString().should.equal(domFragmentFrom('<select>'))
     end
   
     it 'builds a <small> tag'
       builder.small().toString().should.equal(domFragmentFrom('<small>'))
     end
   
     it 'builds a <source> tag'
       builder.source().toString().should.equal(domFragmentFrom('<source>'))
     end
   
     it 'builds a <span> tag'
       builder.span().toString().should.equal(domFragmentFrom('<span>'))
     end
   
     it 'builds a <strike> tag'
       builder.strike().toString().should.equal(domFragmentFrom('<strike>'))
     end
   
     it 'builds a <strong> tag'
       builder.strong().toString().should.equal(domFragmentFrom('<strong>'))
     end
   
     it 'builds a <style> tag'
       builder.style().toString().should.equal(domFragmentFrom('<style>'))
     end
   
     it 'builds a <sub> tag'
       builder.sub().toString().should.equal(domFragmentFrom('<sub>'))
     end
   
     it 'builds a <summary> tag'
       builder.summary().toString().should.equal(domFragmentFrom('<summary>'))
     end
   
     it 'builds a <sup> tag'
       builder.sup().toString().should.equal(domFragmentFrom('<sup>'))
     end
   
     it 'builds a <table> tag'
       builder.table().toString().should.equal(domFragmentFrom('<table>'))
     end
   
     it 'builds a <tbody> tag'
       builder.tbody().toString().should.equal(domFragmentFrom('<tbody>'))
     end
   
     it 'builds a <td> tag'
       builder.td().toString().should.equal(domFragmentFrom('<td>'))
     end
   
     it 'builds a <textarea> tag'
       builder.textarea().toString().should.equal(domFragmentFrom('<textarea>'))
     end
   
     it 'builds a <tfoot> tag'
       builder.tfoot().toString().should.equal(domFragmentFrom('<tfoot>'))
     end
   
     it 'builds a <th> tag'
       builder.th().toString().should.equal(domFragmentFrom('<th>'))
     end
   
     it 'builds a <thead> tag'
       builder.thead().toString().should.equal(domFragmentFrom('<thead>'))
     end
   
     it 'builds a <time> tag'
       builder.time().toString().should.equal(domFragmentFrom('<time>'))
     end
   
     it 'builds a <title> tag'
       builder.title().toString().should.equal(domFragmentFrom('<title>'))
     end
   
     it 'builds a <tr> tag'
       builder.tr().toString().should.equal(domFragmentFrom('<tr>'))
     end
   
     it 'builds a <ul> tag'
       builder.ul().toString().should.equal(domFragmentFrom('<ul>'))
     end
   
     // it 'builds a <var> tag'
     //   builder.var().toString().should.equal(domFragmentFrom('<var>'))
     // end
   
     it 'builds a <video> tag'
       builder.video().toString().should.equal(domFragmentFrom('<video>'))
     end
   end
   
   describe 'closing tags'
     before_each
       builder = littleBuilder.build()
     end
     
     it 'closes tags with end'      
       builder.div().end().toString().should.equal(domFragmentFrom('<div></div>'))
     end
     
   end
   
   describe 'nesting tags'
     it 'correctly display'
       littleBuilder.build().p().a().end().span().end().end().div().end().toString().should.equal(domFragmentFrom('<p><a></a><span></span></p><div></div>'))
     end
   end
   describe 'self terminating tags'
     
     before_each
       builder = littleBuilder.build()
     end
     
     it 'builds a <area/> tag'
       builder.area().toString().should.equal(domFragmentFrom('<area/>'))
     end
   
     it 'builds a <br/> tag'
       builder.br().toString().should.equal(domFragmentFrom('<br/>'))
     end
   
     it 'builds a <hr/> tag'
       builder.hr().toString().should.equal(domFragmentFrom('<hr/>'))
     end
   
     it 'builds a <input/> tag'
       builder.input().toString().should.equal(domFragmentFrom('<input/>'))
     end
   
     it 'builds a <img/> tag'
       builder.img().toString().should.equal(domFragmentFrom('<img/>'))
     end
   
     it 'builds a <link/> tag'
       builder.link().toString().should.equal(domFragmentFrom('<link/>'))
     end
   
     it 'builds a <meta/> tag'
       builder.meta().toString().should.equal(domFragmentFrom('<meta/>'))
     end
   
     it 'builds a <param/> tag'
       builder.param().toString().should.equal(domFragmentFrom('<param/>'))
     end
   end
end