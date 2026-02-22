---
title: Deploy to firebase functions
date: '2019-11-02'
spoiler: Deploy your first express app to a firebase cloud function, with a snap of fingers.
tags: javascript, nodejs, firebase, functions
published: true
---

<p align="center">
	<img src="https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/deploy-firebase-functions%2F1_vgy9tD1ixcaztpirUw0QCw.png?alt=media&token=2ad76553-3ae3-443a-98a2-05645b2b272f" width="400px" />
</p>

Today we'll learn how to deploy you node app to firebase functions. You can also use [nodevader](https://github.com/stanleygomes/nodevader) boilerplate to do this tutorial.

First, install the Firebase CLI if you don't have it.	

```bash	
npm install -g firebase-tools	
```	

Then, run, login to your firebase account and init a project, right after choose option `functions` and connect it to your project	

```bash
firebase login	
firebase init	
```	

Now, you have a folder called functions. 	

Yes, delete it.	

```bash
rm -rf functions	
```	

Go to the `firebase.json` file and add the `source` property to functions, pointing to current directory:	

```json	
{	
  "functions": {	
    "source": ".",	
    ...	
  }
}
```	

Now install dependencies for firebase	

```bash
npm install --save firebase-admin	
npm install --save firebase-functions	
npm install --save-dev firebase-functions-test	
```	

and, add the required engine property to your `package.json` file	

```json	
  {	
    ...	
    "engines": {	
      "node": "8"	
    }	
  }	
```	

We're almost there. Go to your `src/index.js` file, remove app.listen(...)	

```javascript	
// app.listen(...)	
```	

And the last step. Add functions dependency and export the function.	

```javascript	
const functions = require('firebase-functions')	
// your code here ...	
const api = functions.https.onRequest(app)	
module.exports = {	
  api	
}	
```	

Now you can deploy your function to firebase	

```bash
firebase deploy	
```	

If you want to get the firebase CLI key for CI/CD. Run	

```bash
firebase login:ci	
```	

Thanks and Good luck.

<!-- I’d love to hear from you on Twitter! Thanks for reading. -->
