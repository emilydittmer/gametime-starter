import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js';

describe('Round', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should default to round one', function() {
    let round = new Round(1);

    expect(round.round).to.equal(1);
    expect(round.allCategoryNames).to.deep.equal([]);
    expect(round.currentCategories).to.deep.equal([]);
    expect(round.currentQuestions).to.deep.equal([]);
  });
});