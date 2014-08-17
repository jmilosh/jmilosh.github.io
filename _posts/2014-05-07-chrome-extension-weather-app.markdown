---
date: 2014-05-07
layout: post
title: Chrome Extension (Time/Weather)
categories:
- AngularJS
---

[![Weather Chrome Extension App.]({{ "/images/presently.png" | prepend: site.baseurl | prepend: site.url }})](http://janmilosh.com/poker)

This AngularJS application is a Chrome extension based on a [ng-newsletter tutorial](http://www.ng-newsletter.com/posts/chrome-apps-on-angular.html).

It makes use of the Weather Underground API to bring in both the 10-day and hourly forecasts as well as their autocomplete API for city details.

Clicking on the plus icon opens the hourly forecast and the gear icon opens a dialog for selecting a location (autocomplete). The time displayed on the home page is based on the timezone of the selected city.