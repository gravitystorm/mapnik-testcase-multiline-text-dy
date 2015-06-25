#!/usr/bin/node

var fs = require('fs');
var tilelive = require('tilelive');
var File = require('tilelive-file');
File.registerProtocols(tilelive);
var Bridge = require('tilelive-bridge');

var z = 14;
var x = 8003;
var y = 5433;

function doit(err) {
  if (err) {
    console.log(err);
    throw err;
  }

  mapnik_layer_source.getTile(z,x,y, function(err, buffer, headers) {
      if (err) {
          throw err;
      }
      console.log('generated');
      file_cache_source.putTile(z,x,y,buffer,function(err) {
          if (err) {
            throw err;
          }
          console.log('saved');
      });
  });
}

var xml_source = fs.readFileSync(__dirname + '/source.xml', 'utf8');
var file_cache_source = new File(__dirname + '/tiles?filetype=vector.pbf', function(err) { if (err) throw err} );
var mapnik_layer_source = new Bridge({xml:xml_source, base:__dirname + '/'}, doit);
