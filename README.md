# Bookmark_Cleaner
Google Chrome extension that allows one to automatically delete any empty folders in their bookmarks by clicking the extension icon

  Table of Contents
   -----------------

   1. Project Description

   2. Installation

   3. Purpose

   4. What I Learned


1.) Project Description
   --------------------------------
This Google Chrome extension allows one to delete empty folders in their bookmarks by clicking on the extension icon.


2.) Installation
   -------------------

   2.1 Installation Steps

Navigate to chrome://extensions/ on your Chrome browser.     
 
In the top right corner of your screen, click the button titled “Developer mode” to enable developer mode

In the top left corner of your screen, click the button titled “Load unpacked”

Navigate to the path where you have saved the folder for this Chrome extension and select that folder
     
   2.2 Usage

To use the chrome extension, simply click the extension icon in your Chrome browser. All of your empty folders should be deleted after this click.

3.) Purpose
   ------------

The goal of this project is to improve organization and user readability of their bookmarks. I noticed that over time, many users will accumulate numerous bookmarks, and after 
rearranging and shuffling around their bookmarks within different folders, the resulting bookmark layout can be a mess. By having such a clutter, it can be difficult to find the 
correct bookmark which effectively negates the purpose of making bookmarks. I wanted to take a step in resolving this issue by helping users automatically delete empty folders which 
will ideally help “clean up” their bookmark space.

4.) What I Learned
   ------------

During this project I learned and experienced the differences regarding back-end and front-end development. While my Chrome extension was very simple, I still learned that passing 
information between these two items proved to be very challenging. In the back-end, I would use JavaScript to code the commands of what would occur when the extension was clicked. 
I actually did not know any JavaScript before this project, and I was happy to pick-up some introductory experience with the language. In this case, it would be the deletion of empty folders. 
Ideally, I wanted to have this set-up so that after the extension was clicked, a small box would popup saying that the operation was done using some basic HTML. It occurred that when I 
incorporated the HTML, my back-end JavaScript code stopped working, and I deduced that it had something to occur with the listeners in my code, but I was unable to resolve the issue. 
Thus, I learned that communication between the back- and front-ends can be very challenging, and this is a skill I would definitely want to pick-up in the future.

Additionally, I also learned about the power of API’s. In this project, I used the chrome.bookmarks API, and the pre-built libraries and other functions were extremely helpful in simplifying 
my project. While there was major upside with using the API, there was downside as well. I was completely unfamiliar with the different objects, types, and methods that this API included, and as 
a result, it was very challenging to pick up without doing a full investigation of what the API had to offer. While my final project does not have many lines of code, it took a long time to 
figure out what lines to write because I was unfamiliar with the API and how I could leverage some of its features.

------------------------------------------------------------------------
Created by Nicholas P. Dean on 1/5/20.
Copyright © 2020 Nicholas P. Dean. All rights reserved. 
------------------------------------------------------------------------
