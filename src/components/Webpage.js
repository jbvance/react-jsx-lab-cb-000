import React { Component } from 'react';
import FillerText from './FillerText';

class Webpage extends Compnonent {
  render () {
    return (
      <title>{"The world's coolest webpage"}</title>
      <FillerText/>
      <FillerText/>
    );
  }
}

export default Webpage;
