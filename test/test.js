// build time tests for example plugin
// see http://mochajs.org/

(function() {
  const example = require('../client/example'),
        expect = require('expect.js');

  describe('frame plugin', () => {
    describe('expand', () => {
      it('can make itallic', () => {
        var result = frame.expand('hello *world*');
        return expect(result).to.be('hello <i>world</i>');
      });
    });
  });

}).call(this);
