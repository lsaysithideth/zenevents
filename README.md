# Welcome to the ZenEvents repository!
**ZenEvents Webpage: [https://zenevents.herokuapp.com/](https://zenevents.herokuapp.com/).** 

Website Project Deliverable for OPIM-668 Spring 2021 Internet Business Technologies.  Code by Austin Kaye, Sam Pandey, Linda Saysithideth and Ran Zuo.

- [Intro](#intro)
- [Run locally](#run-locally)
- [Page Features](#page-features)
    - [Home/Index](#home-or-index)
    - [All Events](#all-events)
    - [Zen Quiz](#zen-quiz)
    - [Contact & FAQ](#contact-and-faq)
- [Code Sources](#code-sources)

## Intro
The Zenevents webpage shows various zen-related event happenings in the DC-Metro area.  Users will be able to interact with the site in multiple ways, such as linking to the EventBrite pages from the map and also the All Events page, searching through events, taking a personalized quiz that will show related events, and sending in questions through a contact form.  The app is also responsive in mobile with all components resizing, including the navigation bar converting to hamburger style for easier access.

**NOTE:** Our team initally developed the code first through the Github **main** branch, with contributions from each team member, that was being hosted on Github pages.  In order to increase security with API map keys we later on decided to copy everything to a new local app that is being pushed to Heroku.  

The API key is now stored in the **Heroku Config Vars** settings and also the **.env** file to enable the home page Bing map to be run locally.  

To view the earlier history of code changes, navigate to the **main** branch like shown below, to view the original code:

![Alt text](/public/images/mainBranch.png?raw=true "Optional Title")

## Run locally
**Pre-requisites:**
+ Have [Node JS](https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/node.md) installed.

**Instructions to run locally:**
1. Download the code zip file to your Desktop.
![Alt text](/public/images/downloadZip.png?raw=true "Optional Title")

2. Unzip the zip file so you have the folder name **"zenevents-master"** on your Desktop.

3. In Terminal app (mac) or Command Line (windows) navigate to the zenevents-master folder:
```` sh
cd Desktop/zenevents-master
````

4. Start the app locally by entering in the following line:
```` sh
DEBUG=my_app npm start 
````

Your terminal should look similar to the following.  If you are having errors, stop here and check steps above again.

![Alt text](/public/images/startApp.png?raw=true "Optional Title")

5. Type in [localhost:3000](http://localhost:3000/) into your browser to navigate to the app.  It should be running now like shown below:
![Alt text](/public/images/runningApp.png?raw=true "Optional Title")

6. To close the app go back to your terminal and press **CTRL + c** keys to close out of the local server.

## Page Features
### Home or Index
### All Events
### Zen Quiz
### Contact and FAQ
### Code Sources
Map and pushpin sources:
+ https://www.bing.com/api/maps/sdk/mapcontrol/isdk/setmapviewoptions#HTML
+ https://www.bing.com/api/maps/sdk/mapcontrol/isdk/pushpinlabels#HTML
+ https://www.bing.com/api/maps/sdk/mapcontrol/isdk/pushpindragevents#HTML
