---
date: 2014-09-10
layout: post
title: Music Events
categories:
- Django
- JavaScript
---

[![Music Events]({{ "/images/music-events.png" | prepend: site.baseurl | prepend: site.url }})](http://music-events.herokuapp.com)

This [Music Events](http://music-events.herokuapp.com) application is built in Django and makes use of the [last.fm](http://last.fm) api and the Google geocode api. Users need to register for an account and log in. They can then either have their browser get their location or enter a location. When a use (location) button is clicked, a Google map appears with the ten most recent upcoming music events marked.

Below the map is a table showing more event details. Artist and venue detailed info is linked from the table and map info boxes. When a visitor comes back the site, all previously selected locations are available for checking music events.