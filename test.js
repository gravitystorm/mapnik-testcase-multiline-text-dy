#!/usr/bin/node

var fs = require('fs');
var tilelive = require('tilelive');
var File = require('tilelive-file').registerProtocols(tilelive);
var Vector = require('tilelive-vector');

var z = 16;
var x = 32014;
var y = 21734;

function doit(err) {
  if (err) {
    console.log(err);
    throw err;
  }

  vector_renderer_from_cache.getTile(z,x,y, function(err, image_buffer, image_headers) {
    if (err) {
      console.log(err);
    }
    console.log(image_buffer.length);
    fs.writeFileSync('foo.png', image_buffer);
  });
}

var xml_styles = fs.readFileSync(__dirname + '/style.xml', 'utf8');
var file_cache_source_uri = 'file://'+ __dirname + '/tiles?filetype=vector.pbf';
var vector_renderer_from_cache = new Vector({xml: xml_styles, source:file_cache_source_uri, base: __dirname + '/'}, doit );
