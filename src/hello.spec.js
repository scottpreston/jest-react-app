import React from 'react';
import { shallow } from 'enzyme';
import Hello from './hello';

describe("hello spec", function () {
  it("contains hello world", function () {
    expect(shallow(<Hello />).contains("Hello World!")).toBe(true);
  });
});