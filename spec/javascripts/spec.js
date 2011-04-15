describe('markup', function(){
  var built, builder;
  
  describe('.build()', function(){
    it('can be chained', function(){
      expect(markup().div().end().toString()).toMatch(/<div><\/div>/i)
    });
    
    it('can be used unchained', function(){
      built = markup()
      built.div()
      built.end()
      expect(built.toString()).toMatch(/<div><\/div>/i);
    });
    
    describe('tags', function(){
      beforeEach(function() {
        builder = markup()
      });
      
      it('writes text nodes', function(){
        built = builder.div().div().text('hello world').end().end()
        expect(built.toString()).toMatch(/<div><div>hello world<\/div><\/div>/i);
      });
    });
  });
  
  describe('setting attributes', function(){
     beforeEach(function() {
       builder = markup()
     });
     
     it('works with ({id: "foo", "class":"a cool awesome"})', function(){
       var html = builder.div({id: "foo", "class":"a cool awesome"}).end().toString()
       var tagMatcher = /^<div.*><\/div>$/i
       var idMatcher  = /^<div.*id="foo".*><\/div>$/i
       var classMatcher = /^<div.*class="a cool awesome".*><\/div>$/i
       
       // some browsers stringify attributes in different orders
       expect(html).toMatch(tagMatcher);
       expect(html).toMatch(idMatcher);
       expect(html).toMatch(classMatcher);
     });
   });
   
   describe('setting text immediately', function(){
     beforeEach(function() {
       builder = markup()
     });
     
     it('works with ({}, "some text")', function(){
       expect(builder.div({}, 'some text').end().toString()).toMatch(/<div>some text<\/div>/i)
     });
   });
   
   describe('tags', function(){
     beforeEach(function() {
       builder = markup()
     });
     
     it('builds a <a> tag', function(){
       expect(builder.a().end().toString()).toMatch(/<a><\/a>/i)
     });
   
     it('builds a <abbr> tag', function(){
       expect(builder.abbr().end().toString()).toMatch(/<abbr><\/abbr>/i)
     });
   
     it('builds a <address> tag', function(){
       expect(builder.address().end().toString()).toMatch(/<address><\/address>/i)
     });
   
     it('builds a <article> tag', function(){
       expect(builder.article().end().toString()).toMatch(/<article><\/article>/i)
     });
   
     it('builds a <aside> tag', function(){
       expect(builder.aside().end().toString()).toMatch(/<aside><\/aside>/i)
     });
   
     it('builds a <audio> tag', function(){
       expect(builder.audio().end().toString()).toMatch(/<audio><\/audio>/i)
     });
   
     it('builds a <b> tag', function(){
       expect(builder.b().end().toString()).toMatch(/<b><\/b>/i)
     });
   
     it('builds a <bdo> tag', function(){
       expect(builder.bdo().end().toString()).toMatch(/<bdo><\/bdo>/i)
     });
   
     it('builds a <blockquote> tag', function(){
       expect(builder.blockquote().end().toString()).toMatch(/<blockquote><\/blockquote>/i)
     });
   
     it('builds a <body> tag', function(){
       expect(builder.body().end().toString()).toMatch(/<body><\/body>/i)
     });
   
     it('builds a <button> tag', function(){
       expect(builder.button().end().toString()).toMatch(/<button( type="submit")?><\/button>/i)
     });
   
     it('builds a <canvas> tag', function(){
       expect(builder.canvas().end().toString()).toMatch(/<canvas><\/canvas>/i)
     });
   
     it('builds a <caption> tag', function(){
       expect(builder.caption().end().toString()).toMatch(/<caption><\/caption>/i)
     });
   
     it('builds a <cite> tag', function(){
       expect(builder.cite().end().toString()).toMatch(/<cite><\/cite>/i)
     });
   
     it('builds a <code> tag', function(){
       expect(builder.code().end().toString()).toMatch(/<code><\/code>/i)
     });
   
     it('builds a <colgroup> tag', function(){
       expect(builder.colgroup().end().toString()).toMatch(/<colgroup><\/colgroup>/i)
     });
   
     it('builds a <command> tag', function(){
       expect(builder.command().end().toString()).toMatch(/<command><\/command>/i)
     });
   
     it('builds a <datalist> tag', function(){
       expect(builder.datalist().end().toString()).toMatch(/<datalist><\/datalist>/i)
     });
   
     it('builds a <dd> tag', function(){
       expect(builder.dd().end().toString()).toMatch(/<dd><\/dd>/i)
     });
   
     it('builds a <del> tag', function(){
       expect(builder.del().end().toString()).toMatch(/<del><\/del>/i)
     });
   
     it('builds a <details> tag', function(){
       expect(builder.details().end().toString()).toMatch(/<details><\/details>/i)
     });
   
     it('builds a <dfn> tag', function(){
       expect(builder.dfn().end().toString()).toMatch(/<dfn><\/dfn>/i)
     });
   
     it('builds a <div> tag', function(){
       expect(builder.div().end().toString()).toMatch(/<div><\/div>/i)
     });
   
     it('builds a <dl> tag', function(){
       expect(builder.dl().end().toString()).toMatch(/<dl><\/dl>/i)
     });
   
     it('builds a <dt> tag', function(){
       expect(builder.dt().end().toString()).toMatch(/<dt><\/dt>/i)
     });
   
     it('builds a <em> tag', function(){
       expect(builder.em().end().toString()).toMatch(/<em><\/em>/i)
     });
   
     it('builds a <fieldset> tag', function(){
       expect(builder.fieldset().end().toString()).toMatch(/<fieldset><\/fieldset>/i)
     });
   
     it('builds a <figcaption> tag', function(){
       expect(builder.figcaption().end().toString()).toMatch(/<figcaption><\/figcaption>/i)
     });
   
     it('builds a <figure> tag', function(){
       expect(builder.figure().end().toString()).toMatch(/<figure><\/figure>/i)
     });
   
     it('builds a <footer> tag', function(){
       expect(builder.footer().end().toString()).toMatch(/<footer><\/footer>/i)
     });
   
     it('builds a <form> tag', function(){
       expect(builder.form().end().toString()).toMatch(/<form><\/form>/i)
     });
   
     it('builds a <h1> tag', function(){
       expect(builder.h1().end().toString()).toMatch(/<h1><\/h1>/i)
     });
   
     it('builds a <h2> tag', function(){
       expect(builder.h2().end().toString()).toMatch(/<h2><\/h2>/i)
     });
   
     it('builds a <h3> tag', function(){
       expect(builder.h3().end().toString()).toMatch(/<h3><\/h3>/i)
     });
   
     it('builds a <h4> tag', function(){
       expect(builder.h4().end().toString()).toMatch(/<h4><\/h4>/i)
     });
   
     it('builds a <h5> tag', function(){
       expect(builder.h5().end().toString()).toMatch(/<h5><\/h5>/i)
     });
   
     it('builds a <h6> tag', function(){
       expect(builder.h6().end().toString()).toMatch(/<h6><\/h6>/i)
     });
   
     it('builds a <head> tag', function(){
       expect(builder.head().end().toString()).toMatch(/<head><\/head>/i)
     });
   
     it('builds a <header> tag', function(){
       expect(builder.header().end().toString()).toMatch(/<header><\/header>/i)
     });
   
     it('builds a <hgroup> tag', function(){
       expect(builder.hgroup().end().toString()).toMatch(/<hgroup><\/hgroup>/i)
     });
   
     it('builds a <html> tag', function(){
       expect(builder.html().end().toString()).toMatch(/<html><\/html>/i)
     });
   
     it('builds a <i> tag', function(){
       expect(builder.i().end().toString()).toMatch(/<i><\/i>/i)
     });
   
     it('builds a <iframe> tag', function(){
       expect(builder.iframe().end().toString()).toMatch(/<iframe><\/iframe>/i)
     });
   
     it('builds a <ins> tag', function(){
       expect(builder.ins().end().toString()).toMatch(/<ins><\/ins>/i)
     });
   
     it('builds a <kbd> tag', function(){
       expect(builder.kbd().end().toString()).toMatch(/<kbd><\/kbd>/i)
     });
   
     it('builds a <label> tag', function(){
       expect(builder.label().end().toString()).toMatch(/<label><\/label>/i)
     });
   
     it('builds a <legend> tag', function(){
       expect(builder.legend().end().toString()).toMatch(/<legend><\/legend>/i)
     });
   
     it('builds a <li> tag', function(){
       expect(builder.li().end().toString()).toMatch(/<li><\/li>/i)
     });
   
     it('builds a <map> tag', function(){
       expect(builder.map().end().toString()).toMatch(/<map><\/map>/i)
     });
   
     it('builds a <mark> tag', function(){
       expect(builder.mark().end().toString()).toMatch(/<mark><\/mark>/i)
     });
   
     it('builds a <menu> tag', function(){
       expect(builder.menu().end().toString()).toMatch(/<menu><\/menu>/i)
     });
   
     it('builds a <meter> tag', function(){
       expect(builder.meter().end().toString()).toMatch(/<meter><\/meter>/i)
     });
   
     it('builds a <nav> tag', function(){
       expect(builder.nav().end().toString()).toMatch(/<nav><\/nav>/i)
     });
   
     it('builds a <noscript> tag', function(){
       expect(builder.noscript().end().toString()).toMatch(/<noscript><\/noscript>/i)
     });
   
     it('builds a <object> tag', function(){
       expect(builder.object().end().toString()).toMatch(/<object><\/object>/i)
     });
   
     it('builds a <ol> tag', function(){
       expect(builder.ol().end().toString()).toMatch(/<ol><\/ol>/i)
     });
   
     it('builds a <optgroup> tag', function(){
       expect(builder.optgroup().end().toString()).toMatch(/<optgroup><\/optgroup>/i)
     });
   
     it('builds a <option> tag', function(){
       expect(builder.option().end().toString()).toMatch(/<option><\/option>/i)
     });
   
     it('builds a <output> tag', function(){
       expect(builder.output().end().toString()).toMatch(/<output><\/output>/i)
     });
   
     it('builds a <p> tag', function(){
       expect(builder.p().end().toString()).toMatch(/<p><\/p>/i)
     });
   
     it('builds a <pre> tag', function(){
       expect(builder.pre().end().toString()).toMatch(/<pre><\/pre>/i)
     });
   
     it('builds a <progress> tag', function(){
       expect(builder.progress().end().toString()).toMatch(/<progress><\/progress>/i)
     });
   
     it('builds a <q> tag', function(){
       expect(builder.q().end().toString()).toMatch(/<q><\/q>/i)
     });
   
     it('builds a <rp> tag', function(){
       expect(builder.rp().end().toString()).toMatch(/<rp><\/rp>/i)
     });
   
     it('builds a <rt> tag', function(){
       expect(builder.rt().end().toString()).toMatch(/<rt><\/rt>/i)
     });
   
     it('builds a <ruby> tag', function(){
       expect(builder.ruby().end().toString()).toMatch(/<ruby><\/ruby>/i)
     });
   
     it('builds a <samp> tag', function(){
       expect(builder.samp().end().toString()).toMatch(/<samp><\/samp>/i)
     });
   
     it('builds a <script> tag', function(){
       expect(builder.script().end().toString()).toMatch(/<script><\/script>/i)
     });
   
     it('builds a <section> tag', function(){
       expect(builder.section().end().toString()).toMatch(/<section><\/section>/i)
     });
   
     it('builds a <select> tag', function(){
       expect(builder.select().end().toString()).toMatch(/<select><\/select>/i)
     });
   
     it('builds a <small> tag', function(){
       expect(builder.small().end().toString()).toMatch(/<small><\/small>/i)
     });
   
     it('builds a <span> tag', function(){
       expect(builder.span().end().toString()).toMatch(/<span><\/span>/i)
     });
   
     it('builds a <strike> tag', function(){
       expect(builder.strike().end().toString()).toMatch(/<strike><\/strike>/i)
     });
   
     it('builds a <strong> tag', function(){
       expect(builder.strong().end().toString()).toMatch(/<strong><\/strong>/i)
     });
   
     it('builds a <style> tag', function(){
       expect(builder.style().end().toString()).toMatch(/<style><\/style>/i)
     });
   
     it('builds a <sub> tag', function(){
       expect(builder.sub().end().toString()).toMatch(/<sub><\/sub>/i)
     });
   
     it('builds a <summary> tag', function(){
       expect(builder.summary().end().toString()).toMatch(/<summary><\/summary>/i)
     });
   
     it('builds a <sup> tag', function(){
       expect(builder.sup().end().toString()).toMatch(/<sup><\/sup>/i)
     });
   
     it('builds a <table> tag', function(){
       expect(builder.table().end().toString()).toMatch(/<table><\/table>/i)
     });
   
     it('builds a <tbody> tag', function(){
       expect(builder.tbody().end().toString()).toMatch(/<tbody><\/tbody>/i)
     });
   
     it('builds a <td> tag', function(){
       expect(builder.td().end().toString()).toMatch(/<td><\/td>/i)
     });
   
     it('builds a <textarea> tag', function(){
       expect(builder.textarea().end().toString()).toMatch(/<textarea><\/textarea>/i)
     });
   
     it('builds a <tfoot> tag', function(){
       expect(builder.tfoot().end().toString()).toMatch(/<tfoot><\/tfoot>/i)
     });
   
     it('builds a <th> tag', function(){
       expect(builder.th().end().toString()).toMatch(/<th><\/th>/i)
     });
   
     it('builds a <thead> tag', function(){
       expect(builder.thead().end().toString()).toMatch(/<thead><\/thead>/i)
     });
   
     it('builds a <time> tag', function(){
       expect(builder.time().end().toString()).toMatch(/<time><\/time>/i)
     });
   
     it('builds a <title> tag', function(){
       expect(builder.title().end().toString()).toMatch(/<title><\/title>/i)
     });
   
     it('builds a <tr> tag', function(){
       expect(builder.tr().end().toString()).toMatch(/<tr><\/tr>/i)
     });
   
     it('builds a <ul> tag', function(){
       expect(builder.ul().end().toString()).toMatch(/<ul><\/ul>/i)
     });
   
     it('builds a <var> tag', function(){
       expect(builder['var']().end().toString()).toMatch(/<var><\/var>/i)
     });
   
     it('builds a <video> tag', function(){
       expect(builder.video().end().toString()).toMatch(/<video><\/video>/i)
     });
   });
   
   describe('closing tags', function(){
     beforeEach(function() {
       builder = markup()
     });
     
     it('closes tags with end', function(){      
       expect(builder.div().end().toString()).toMatch(/<div><\/div>/i)
     });
     
   });
   
   describe('nesting tags', function(){
     it('correctly display', function(){
       expect(markup().p().a().end().span().end().end().div().end().toString()).toMatch(/<p><a><\/a><span><\/span><\/p><div><\/div>/i)
     });
   });
   
   describe('self terminating tags', function(){
     
     beforeEach(function() {
       builder = markup()
     });
     
     it('builds a <area/> tag', function(){
       expect(builder.area().toString()).toMatch(/<area>/i)
     });
   
     it('builds a <br/> tag', function(){
       expect(builder.br().toString()).toMatch(/<br>/i)
     });
     
     it('builds a <col> tag', function(){
       expect(builder.col().toString()).toMatch(/<col>/i)
     });
     
     it('builds a <embed> tag', function(){
       expect(builder.embed().toString()).toMatch(/<embed>/i)
     });
   
     it('builds a <hr/> tag', function(){
       expect(builder.hr().toString()).toMatch(/<hr>/i)
     });
   
     it('builds a <input/> tag', function(){
       expect(builder.input().toString()).toMatch(/<input>/i)
     });
   
     it('builds a <img/> tag', function(){
       expect(builder.img().toString()).toMatch(/<img>/i)
     });
   
     it('builds a <link/> tag', function(){
       expect(builder.link().toString()).toMatch(/<link>/i)
     });
   
     it('builds a <meta/> tag', function(){
       expect(builder.meta().toString()).toMatch(/<meta>/i)
     });
   
     it('builds a <param/> tag', function(){
       expect(builder.param().toString()).toMatch(/<param>/i)
     });
     
     it('builds a <source> tag', function(){
       expect(builder.source().toString()).toMatch(/<source>/i)
     });
   });
})