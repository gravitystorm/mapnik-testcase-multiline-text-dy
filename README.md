# mapnik-testcase-multiline-text-dy

A testcase for a mapnik bug involving multilinestrings and text-dy

## Installation

`npm install`

## To see the bug

Run `./test.js`. Notice that foo.png has text labels

![zero](/text-dy-zero.png)

Edit style.xml, and change the TextSymbolizer dy to 1. Run `./test.js` again.
Notice that the labels disappear.

![one](/text-dy-one.png)

## To examine the way multilinestrings are handled

Edit source.xml. Try removing the first of the two linestring fragments (but leave the whole thing as a multilinestring)
Ensure dy="1". Then run `./generate.js` (and ctrl+c when saved). Then run `./test.js` again. Notice it now labels with an offset.

![expected](/text-dy-one-expected.png)

