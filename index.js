var admin = require("firebase-admin");


var serviceAccount = require("/path/to/service/accounts/private/key/json/file"); // /path/to/service/accounts/private/key/json/file


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

function deleteUser(uid) {
    admin.auth().deleteUser(uid)
        .then(function() {
            console.log('Successfully deleted user', uid);
        })
        .catch(function(error) {
            console.log('Error deleting user:', error);
        });
}

function getAllUsers(nextPageToken) {
    admin.auth().listUsers(100, nextPageToken)
        .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
                uid = userRecord.toJSON().uid;
                deleteUser(uid);
            });
            if (listUsersResult.pageToken) {
                getAllUsers(listUsersResult.pageToken);
            }
        })
        .catch(function(error) {
            console.log('Error listing users:', error);
        });
}

getAllUsers();
