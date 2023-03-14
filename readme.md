Steps
Go to the Firebase console and select your project.
Click on the gear icon on the left side of the screen to access the Project Settings.
Click on the Service Accounts tab.
Click on the "Generate new Private Key" button to download the JSON file containing the private key.
Save the downloaded JSON file to a secure location on your server.
Copy the path to the saved JSON file.
Replace the path in the code below with the path to your service account's private key JSON file:
php
Copy code
// Path to your service account's private key JSON file
const serviceAccount = require('/path/to/serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

Conclusion
By following these steps, you should now have successfully setup the Firebase service account private key for use in your project.
