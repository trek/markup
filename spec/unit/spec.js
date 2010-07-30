describe 'littleBuilder'
  describe '.build()'
    it 'returns a new builder context'
      littleBuilder.build().should.be_an_instance_of(littleBuilder.Context)
    end
    
    it 'can be chained'
      built = littleBuilder.build().div().end().toString().should.equal('<div></div>')
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
      builder.div({id: "foo", "class":"a cool awesome"}).end().toString().should.eql("<div id='foo'  class='a cool awesome' ></div>")
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
      builder.a().toString().should.equal('<a>')
    end

    it 'builds a <abbr> tag'
      builder.abbr().toString().should.equal('<abbr>')
    end

    it 'builds a <address> tag'
      builder.address().toString().should.equal('<address>')
    end

    it 'builds a <article> tag'
      builder.article().toString().should.equal('<article>')
    end

    it 'builds a <aside> tag'
      builder.aside().toString().should.equal('<aside>')
    end

    it 'builds a <audio> tag'
      builder.audio().toString().should.equal('<audio>')
    end

    it 'builds a <b> tag'
      builder.b().toString().should.equal('<b>')
    end

    it 'builds a <bdo> tag'
      builder.bdo().toString().should.equal('<bdo>')
    end

    it 'builds a <blockquote> tag'
      builder.blockquote().toString().should.equal('<blockquote>')
    end

    it 'builds a <body> tag'
      builder.body().toString().should.equal('<body>')
    end

    it 'builds a <button> tag'
      builder.button().toString().should.equal('<button>')
    end

    it 'builds a <canvas> tag'
      builder.canvas().toString().should.equal('<canvas>')
    end

    it 'builds a <caption> tag'
      builder.caption().toString().should.equal('<caption>')
    end

    it 'builds a <cite> tag'
      builder.cite().toString().should.equal('<cite>')
    end

    it 'builds a <code> tag'
      builder.code().toString().should.equal('<code>')
    end

    it 'builds a <col> tag'
      builder.col().toString().should.equal('<col>')
    end

    it 'builds a <colgroup> tag'
      builder.colgroup().toString().should.equal('<colgroup>')
    end

    it 'builds a <command> tag'
      builder.command().toString().should.equal('<command>')
    end

    it 'builds a <datalist> tag'
      builder.datalist().toString().should.equal('<datalist>')
    end

    it 'builds a <dd> tag'
      builder.dd().toString().should.equal('<dd>')
    end

    it 'builds a <del> tag'
      builder.del().toString().should.equal('<del>')
    end

    it 'builds a <details> tag'
      builder.details().toString().should.equal('<details>')
    end

    it 'builds a <dfn> tag'
      builder.dfn().toString().should.equal('<dfn>')
    end

    it 'builds a <div> tag'
      builder.div().toString().should.equal('<div>')
    end

    it 'builds a <dl> tag'
      builder.dl().toString().should.equal('<dl>')
    end

    it 'builds a <dt> tag'
      builder.dt().toString().should.equal('<dt>')
    end

    it 'builds a <em> tag'
      builder.em().toString().should.equal('<em>')
    end

    it 'builds a <embed> tag'
      builder.embed().toString().should.equal('<embed>')
    end

    it 'builds a <fieldset> tag'
      builder.fieldset().toString().should.equal('<fieldset>')
    end

    it 'builds a <figcaption> tag'
      builder.figcaption().toString().should.equal('<figcaption>')
    end

    it 'builds a <figure> tag'
      builder.figure().toString().should.equal('<figure>')
    end

    it 'builds a <footer> tag'
      builder.footer().toString().should.equal('<footer>')
    end

    it 'builds a <form> tag'
      builder.form().toString().should.equal('<form>')
    end

    it 'builds a <h1> tag'
      builder.h1().toString().should.equal('<h1>')
    end

    it 'builds a <h2> tag'
      builder.h2().toString().should.equal('<h2>')
    end

    it 'builds a <h3> tag'
      builder.h3().toString().should.equal('<h3>')
    end

    it 'builds a <h4> tag'
      builder.h4().toString().should.equal('<h4>')
    end

    it 'builds a <h5> tag'
      builder.h5().toString().should.equal('<h5>')
    end

    it 'builds a <h6> tag'
      builder.h6().toString().should.equal('<h6>')
    end

    it 'builds a <head> tag'
      builder.head().toString().should.equal('<head>')
    end

    it 'builds a <header> tag'
      builder.header().toString().should.equal('<header>')
    end

    it 'builds a <hgroup> tag'
      builder.hgroup().toString().should.equal('<hgroup>')
    end

    it 'builds a <html> tag'
      builder.html().toString().should.equal('<html>')
    end

    it 'builds a <i> tag'
      builder.i().toString().should.equal('<i>')
    end

    it 'builds a <iframe> tag'
      builder.iframe().toString().should.equal('<iframe>')
    end

    it 'builds a <ins> tag'
      builder.ins().toString().should.equal('<ins>')
    end

    it 'builds a <keygen> tag'
      builder.keygen().toString().should.equal('<keygen>')
    end

    it 'builds a <kbd> tag'
      builder.kbd().toString().should.equal('<kbd>')
    end

    it 'builds a <label> tag'
      builder.label().toString().should.equal('<label>')
    end

    it 'builds a <legend> tag'
      builder.legend().toString().should.equal('<legend>')
    end

    it 'builds a <li> tag'
      builder.li().toString().should.equal('<li>')
    end

    it 'builds a <map> tag'
      builder.map().toString().should.equal('<map>')
    end

    it 'builds a <mark> tag'
      builder.mark().toString().should.equal('<mark>')
    end

    it 'builds a <menu> tag'
      builder.menu().toString().should.equal('<menu>')
    end

    it 'builds a <meter> tag'
      builder.meter().toString().should.equal('<meter>')
    end

    it 'builds a <nav> tag'
      builder.nav().toString().should.equal('<nav>')
    end

    it 'builds a <noscript> tag'
      builder.noscript().toString().should.equal('<noscript>')
    end

    it 'builds a <object> tag'
      builder.object().toString().should.equal('<object>')
    end

    it 'builds a <ol> tag'
      builder.ol().toString().should.equal('<ol>')
    end

    it 'builds a <optgroup> tag'
      builder.optgroup().toString().should.equal('<optgroup>')
    end

    it 'builds a <option> tag'
      builder.option().toString().should.equal('<option>')
    end

    it 'builds a <output> tag'
      builder.output().toString().should.equal('<output>')
    end

    it 'builds a <p> tag'
      builder.p().toString().should.equal('<p>')
    end

    it 'builds a <pre> tag'
      builder.pre().toString().should.equal('<pre>')
    end

    it 'builds a <progress> tag'
      builder.progress().toString().should.equal('<progress>')
    end

    it 'builds a <q> tag'
      builder.q().toString().should.equal('<q>')
    end

    it 'builds a <rp> tag'
      builder.rp().toString().should.equal('<rp>')
    end

    it 'builds a <rt> tag'
      builder.rt().toString().should.equal('<rt>')
    end

    it 'builds a <ruby> tag'
      builder.ruby().toString().should.equal('<ruby>')
    end

    it 'builds a <samp> tag'
      builder.samp().toString().should.equal('<samp>')
    end

    it 'builds a <script> tag'
      builder.script().toString().should.equal('<script>')
    end

    it 'builds a <section> tag'
      builder.section().toString().should.equal('<section>')
    end

    it 'builds a <select> tag'
      builder.select().toString().should.equal('<select>')
    end

    it 'builds a <small> tag'
      builder.small().toString().should.equal('<small>')
    end

    it 'builds a <source> tag'
      builder.source().toString().should.equal('<source>')
    end

    it 'builds a <span> tag'
      builder.span().toString().should.equal('<span>')
    end

    it 'builds a <strike> tag'
      builder.strike().toString().should.equal('<strike>')
    end

    it 'builds a <strong> tag'
      builder.strong().toString().should.equal('<strong>')
    end

    it 'builds a <style> tag'
      builder.style().toString().should.equal('<style>')
    end

    it 'builds a <sub> tag'
      builder.sub().toString().should.equal('<sub>')
    end

    it 'builds a <summary> tag'
      builder.summary().toString().should.equal('<summary>')
    end

    it 'builds a <sup> tag'
      builder.sup().toString().should.equal('<sup>')
    end

    it 'builds a <table> tag'
      builder.table().toString().should.equal('<table>')
    end

    it 'builds a <tbody> tag'
      builder.tbody().toString().should.equal('<tbody>')
    end

    it 'builds a <td> tag'
      builder.td().toString().should.equal('<td>')
    end

    it 'builds a <textarea> tag'
      builder.textarea().toString().should.equal('<textarea>')
    end

    it 'builds a <tfoot> tag'
      builder.tfoot().toString().should.equal('<tfoot>')
    end

    it 'builds a <th> tag'
      builder.th().toString().should.equal('<th>')
    end

    it 'builds a <thead> tag'
      builder.thead().toString().should.equal('<thead>')
    end

    it 'builds a <time> tag'
      builder.time().toString().should.equal('<time>')
    end

    it 'builds a <title> tag'
      builder.title().toString().should.equal('<title>')
    end

    it 'builds a <tr> tag'
      builder.tr().toString().should.equal('<tr>')
    end

    it 'builds a <ul> tag'
      builder.ul().toString().should.equal('<ul>')
    end

    // it 'builds a <var> tag'
    //   builder.var().toString().should.equal('<var>')
    // end

    it 'builds a <video> tag'
      builder.video().toString().should.equal('<video>')
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
      builder.area().toString().should.equal('<area/>')
    end

    it 'builds a <br/> tag'
      builder.br().toString().should.equal('<br/>')
    end

    it 'builds a <hr/> tag'
      builder.hr().toString().should.equal('<hr/>')
    end

    it 'builds a <input/> tag'
      builder.input().toString().should.equal('<input/>')
    end

    it 'builds a <img/> tag'
      builder.img().toString().should.equal('<img/>')
    end

    it 'builds a <link/> tag'
      builder.link().toString().should.equal('<link/>')
    end

    it 'builds a <meta/> tag'
      builder.meta().toString().should.equal('<meta/>')
    end

    it 'builds a <param/> tag'
      builder.param().toString().should.equal('<param/>')
    end
  end
end