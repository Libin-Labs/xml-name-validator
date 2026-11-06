import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('accepts simple name', () => {
  assert.equal(api.isXmlName('item'), true);
});
test('accepts underscore start', () => {
  assert.equal(api.isXmlName('_private'), true);
});
test('accepts digits after first char', () => {
  assert.equal(api.isXmlName('node2'), true);
});
test('rejects digit start', () => {
  assert.equal(api.isXmlName('2node'), false);
});
test('rejects colon in subset', () => {
  assert.equal(api.isXmlName('ns:node'), false);
});
test('rejects non-string', () => {
  assert.throws(() => api.isXmlName(2), TypeError);
});
