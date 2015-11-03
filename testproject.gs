
// When Form Gets submitted
function onFormSubmit() {

//Get information from form and set as variables
  var option = "6";
  var nom = "nom";
  var email = "floxorus@gmail.com";

//Initialize variables
  var groupID ="floxotestdev@googlegroups.com";

/////////// Add member to a group
//    var headers = {
//      "Authorization" : "https://www.googleapis.com/auth/admin.directory.group"
//    };
  
//  var response = UrlFetchApp.fetch("https://www.googleapis.com/admin/directory/v1/groups/"+groupID+"/members", {
//        "method":"GET",
//        "headers":headers,
//        "email": email,
//        "role": "MEMBER"
//    });
  
  var group = GroupsApp.getGroupByEmail(groupID);
  var users = group.getUsers();
  
/////////// Send an information email to employee
  var subject = "[TEST] Ajout dans le groupe de test pour " + nom;
  
  var body = "Bonjour "+nom+",\n\n\n\n"+
    "Option choisie :"+option+
      "\n\nAurevoir.\n\n";
  
  var bodyhtml = "Bonjour "+nom+",\n\n\n\n"+
    "Option choisie :"+option+
      "\n\nAurevoir.\n\n";
  
  var advancedArgs = {name:"Test Project", htmlBody: bodyhtml};
  
  MailApp.sendEmail(email, subject, body, advancedArgs);
}
