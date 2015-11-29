//decodes base 64
function decodeHashed(string){
  var b = new Buffer(string, 'base64');
  var s = b.toString('utf8');
  return s;
}

module.exports = {
  decodeHashed:decodeHashed
};
