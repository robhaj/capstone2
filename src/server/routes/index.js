/*jshint -W083*/

//dependencies
var express = require('express');
var router = express.Router();
// var acorn = require('acorn');
// var esprima = require('esprima');
// var escomplex = require('escomplex-js');
var request = require('request');
var shell = require('shelljs');
var util = require('../utility.js');
var fs = require('fs');

//auth
var token = '3630f7dcefbdae30c254502da157e0c80ab2f537';

//headers
var headers = {
  'User-Agent':' benhassara',
  'Authorization':' token '+token
};

//globals
var treeObj = {};
var objArr = [];

//test route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//analyze route
router.post('/test', function(req, res) {
  var repo = req.body.body;
  var url = 'https://api.github.com/repos/'+repo+'/git/trees/master?recursive=1';
  request(
    {
      url: url,
      headers: headers
    }, function(error, data){
      if (!error){
      var parsed = JSON.parse(data.body);
      var tree = parsed.tree;
      for (var i = 0; i < tree.length; i++) {
        if((tree[i].path).match(/\.js+$/i)){
          treeObj.name = tree[i].path;
          treeObj.path = tree[i].url;
          request({
            url: tree[i].url,
            headers: headers
          }, function(error, data){
            if(!error){
            var tempContent = JSON.parse(data.body);
            treeObj.content = util.decodeHashed(tempContent.content);
            objArr.push(treeObj);
          }
        });
      }
    }
    res.render('index', {content:treeObj});
  }
});
});


//api call to github issues
// router.get('/analyze', function(req, res ,next) {
//   //most recent GH issue where lang:js,is:open
//   request({url:issuesUrl+'language:javascript&is:open&type:issue', headers:{'User-Agent':'robhaj', 'Authorization':'token '+token}}, function(error, data) {
//     if(!error) {
//       var responsesParsed = JSON.parse(data.body);
//       var firstResponse = responsesParsed.items[0].html_url;
//       var path = firstResponse.replace(/(pull|pulls|issue|issues)\/[0-9]*/, '');
//       path = path.slice(18);
//
//       request({url:contentUrl+path+'contents', headers:{'User-Agent':'robhaj', 'Authorization':'token '+token}}, function(error, data){
//         if(!error) {
//           var contents = JSON.parse(data.body);
//           for (var i=0;i<contents.length;i++){
//             if ((contents[i].name).match(/js+$/i)){
//               filePaths.push(contents[i].url);
//             }
//           }
//           for (var l=0;l<=filePaths.length;l++){
//             request({url: filePaths[l], headers:{'User-Agent':'robhaj', 'Authorization':'token '+token}},function (error, data) {
//               if(!error){
//                 var coded = JSON.parse(data.body);
//                 var fileName = coded.name;
//                 var decoded = util.decodeHashed(coded.content);
//                 fs.writeFile('./'+fileName, decoded, function (err) {
//                   if (err) {
//                     return console.log(err);
//                   } else {
//                     console.log('wrote file:'+fileName);
//                     var report = shell.exec('cr '+fileName);
//                   }
//                 });
//               }
//             });
//           }
//         }
//       });
//     }
//   });
// });


//exports
module.exports = router;
