const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
    } if (typeof value === null) {
      this.chain.push('( null )');
    }
    if (typeof value !== 'string' ) {
      value = String(value);
      this.chain.push( `( ${value} )`);
    } else {
      this.chain.push( `( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if ( !position || typeof position !== 'number' || position % 1 !== 0 || position < 0 || position > this.getLength()) {
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1 );
    return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
