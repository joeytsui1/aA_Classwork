/*
For this exercise, you will create complex objects that are meant to be
parsed by specified functions.
*/

//~~~~~~1
// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

var users1 = [{id: 0, username: 'joeytsui'}, {id: 1, username: 'tsuijoey'}];

function printUsers(users) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log(user.id + ": " + user.username);
    }
  }
  
  printUsers(users1); // uncomment when ready to test
  
  
  //~~~~~~2
  // Create the data object that this function is expecting
  //
  // Example
  //
  // printUsersWebsites(users2)
  // ~~UserName1~~
  //   -siteName1
  //   -siteName2
  // ~~UserName2~~
  //   -siteName3
  //   -siteName4
  //   -siteName5
  // ...and so forth, for all the users
  
  var users2 = [
  {
    username: "joeytsui",
    sites : [{url: 'github.com'}, {url: 'appacademy.com'}]
  }, 
  {
    username : "tsuijoey",
    sites : [{url: "youtube.com"}, {url: "facebook.com"}, {url: "google.com"}]
  }

];
  
  function printUsersWebsites (users) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log("~~" + user.username + "~~");
  
      for (var j = 0; j < user.sites.length; j++) {
        var site = user.sites[j];
        console.log("  -" + site.url);
      }
    }
  }
  
  printUsersWebsites(users2); // uncomment when ready to test
  
  
  //~~~~~~3
  // Create the data object that this function is expecting
  //
  // Example
  //
  // printUsersWebsitesInfo(users3)
  // ~~UserName1~~
  //   -siteName1.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  //   -siteName2.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  // ~~UserName2~~
  //   -siteName3.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  //   -siteName4.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  //   -siteName5.com
  //     -load: 21%
  //     -# of users: 210000
  //     -popularity score: 32
  // ...and so forth, for all the users
  
  var users3 = [
    {
      username: "joeytsui",
      sites : [
      {url: 'github.com', load: 21, userCount: 21000, pop: 32}, 
      {url: 'appacademy.com', load: 22, userCount: 22000, pop: 33}
      ]
    }, 
    {
      username : "tsuijoey",
      sites : [
      {url: "youtube.com", load: 23, userCount: 23000, pop: 34}, 
      {url: "facebook.com", load: 24, userCount: 24000, pop: 35}, 
      {url: "google.com", load: 25, userCount: 25000, pop: 36}
      ]
    }
  
  ];;
  
  function printUsersWebsitesInfo (users) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log("~~" + user.username + "~~");
  
      for (var j = 0; j < user.sites.length; j++) {
        var site = user.sites[j];
        console.log("  -" + site.url);
        console.log("    -load: " + site.load + "%");
        console.log("    -# of users: " + site.userCount);
        console.log("    -popularity score: " + site.pop);
      }
    }
  }
  
  printUsersWebsitesInfo(users3); // uncomment when ready to test