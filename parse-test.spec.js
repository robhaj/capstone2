var csvParse = function(string){
  return JSON.parse('[' + string + ']')
  }

describe('CSV Parse', function() {
  it('should parse a string of integers correctly', function() {
    var input = '3,7,9,1,25';
    var output = [ 3, 7, 9, 1, 25 ];
    expect(csvParse(input)).toEqual(output);
  });
  it('should parse a string of strings correctly', function() {
    var input = '"3","7","9","1","25"';
    var output = ["3", "7", "9", "1", "25"];
    expect(csvParse(input)).toEqual(output);
  });
  it('should parse a string of integers and strings correctly', function() {
    var input = '1, "one", 2, "two", 3, "three"';
    var output = [1, "one", 2, "two", 3, "three"];
    expect(csvParse(input)).toEqual(output);
  });
});
