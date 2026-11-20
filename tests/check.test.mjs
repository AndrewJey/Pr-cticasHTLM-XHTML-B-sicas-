import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

test('all 4 pages exist with responsive viewport and clean markup', () => {
  const pages = [
    'index.html',
    'PracticaBásicaHTML1.1.html',
    'PracticaBásicaHTML5.html',
    'PrácticaBásicaXHTML.html',
  ];
  for (const name of pages) {
    const content = fs.readFileSync(path.join(root, name), 'utf8');
    assert.match(content, /name="viewport"/i, `${name} missing viewport`);
    assert.ok(!/<font\b|<center\b/i.test(content), `${name} has legacy tags`);
  }
});

test('XHTML practice uses strict XML declaration and XHTML namespace', () => {
  const xhtml = fs.readFileSync(path.join(root, 'PrácticaBásicaXHTML.html'), 'utf8');
  assert.match(xhtml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xhtml, /xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/);
  assert.match(xhtml, /Ya programo XHTML/);
});
