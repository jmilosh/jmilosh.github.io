---
date: 2014-07-20
layout: post
title: AngularJS Task Application
categories:
- AngularJS
- Firebase
---

[![Task Application]({{ "/images/task-app.png" | prepend: site.baseurl | prepend: site.url }})](http://taskme.us)

This task application structure was based on methods from the book *Getting Things Done* by David Allen. [Firebase](https://www.firebase.com/) (AngularFire) was used for data storage.

When tasks are added they are automatically put into the inbox. The user can create lists and tasks can be added to multiple lists. Descriptions can be added to tasks after they are created.

The app makes use of the Firebase email login and password reset features.