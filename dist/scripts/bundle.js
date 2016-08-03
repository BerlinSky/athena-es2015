(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// var, let and const

var siteName = "artist.site";

function siteInfo() {
	var pages = 99;
	console.log("pages", pages);
}

console.log('siteName', siteName);

siteInfo();

if (siteName !== 'artist.site') {
	var oldPages = 88;
	var _newPages = 5;
	var _pageSize = 10;
}

oldPages = 77;
console.log('oldPages', oldPages);

newPages == 4;
console.log('newPages', newPages);

console.log('pageSize', pageSize);

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
