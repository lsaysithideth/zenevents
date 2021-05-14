# Welcome to the ZenEvents repository!

**ZenEvents Webpage: [https://zenevents.herokuapp.com/](https://zenevents.herokuapp.com/).**

Website Project Deliverable for OPIM-668 Spring 2021 Internet Business Technologies. Code by Austin Kaye, Sam Pandey, Linda Saysithideth and Ran Zuo.

- [Introduction](#introduction)
- [Run Locally](#run-locally)
- [Page Features](#page-features)
  - [Home/Index](#home-or-index)
  - [All Events](#all-events)
  - [Zen Quiz](#zen-quiz)
  - [Contact & FAQ](#contact-and-faq)
- [Code Sources](#code-sources)

## Introduction

The Zenevents webpage shows various zen-related event happenings in the DC-Metro area. Users will be able to interact with the site in multiple ways, such as linking to the EventBrite pages from the map and also the All Events page, searching through events, taking a personalized quiz that will show related events, and sending in questions through a contact form. The app is also responsive in mobile with all components resizing, including the navigation bar converting to hamburger style for easier access.

**NOTE:** Our team initally developed the code first through the Github **main** branch, with contributions from each team member, that was being hosted on Github pages. In order to increase security with API map keys we later on decided to copy everything to a new local app that is being pushed to Heroku.

The API key is now stored in the **Heroku Config Vars** settings and also the **.env** file to enable the home page Bing map to be run locally.

To view the earlier history of code changes, navigate to the **main** branch like shown below, to view the original code:

![Alt text](/public/images/mainBranch.png?raw=true "Optional Title")

## Run Locally

**Pre-requisites:**

- Have [Node JS](https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/node.md) installed.
- Have [dotenv](https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/packages/dotenv.md) installed.
- Obtain **.env** file containing valid **bing API key**, or obtain a [free bing API key](http://mapsforenterprise.binginternal.com/en-us/maps/create-a-bing-maps-key) and create a **.env** file with the contents below (replace [YOUR API KEY] with your own). Will will use this file in the steps below.

```sh
# my-secure-project/.env

# these are environment variables:
MY_API_KEY="[YOUR API KEY]"
```

**Instructions to run locally:**

1. Download the code zip file (from **master** branch) to your Desktop.
   ![Alt text](/public/images/downloadZip.png?raw=true "Optional Title")

2. Unzip the zip file so you have the folder name **"zenevents-master"** on your Desktop.

3. Copy the **.env** file obtained or created in the pre-requisites into the main **zenevents-master folder**. Your folder should contain the following files (press **SHFT + CMD + .** keys to show hidden files):
   ![Alt text](/public/images/files.png?raw=true "Optional Title")

4. In Terminal app (mac) or Command Line (windows) navigate to the zenevents-master folder:

```sh
cd Desktop/zenevents-master
```

5. Install all required packages by running the below command while in the zenevents-master folder:

```sh
npm install
```

6. Start the app locally by entering in the following line:

```sh
DEBUG=my_app npm start
```

Your terminal should look similar to the following. If you are having errors, stop here and check steps above again.

![Alt text](/public/images/startApp.png?raw=true "Optional Title")

7. Type in [localhost:3000](http://localhost:3000/) into your browser to navigate to the app. It should be running now like shown below:
   ![Alt text](/public/images/runningApp.png?raw=true "Optional Title")

8. To close the app go back to your terminal and press **CTRL + c** keys to close out of the local server.

## Page Features

The ZenEvents app is a standard webpage app with a top navigation bar to go through the pages. There are some additional pages that can only be accessed by completing the Zen Quiz. More details can be found in the [Zen Quiz](#zen-quiz) section of this README.

All of the pages are called within the **"index.js"** file in the **/routes/** folder passing variables, which includes API keys from env files and event data arrays, through the **_res.render()_** function. The pages being called are **.ejs** files in the **/views/** folder.

### Home or Index

The main home page features a bing map utilizing code to show location pins for each event with name labels and interactivity when you click the pins. The pin shows and infobox popup containing the event title with a link to the corresponding EventBrite page, and the location of the event. The map has a lot of other functionality provided by bing, such as zoom, pan, and current location enabling.

Each pin corresponds to an **"events"** data array defined in the **index.js** file located in the **/routes/** folder. The pins dynamically populate based on the contents of the array by iterating over a javascript **_for_** statement in the **"index.ejs"** file in **/views/** folder. This **_for_** statement repeats creation and labeling of the map points and infoboxes.

### All Events

The All Events page features a card list of events that is searchable and can be dynamically expanded with additions to the **"events"** data array. The card list is dynamically populated by a javascript **_forEach_** statement which repeats creation of the HTML formatting, linking, and search keywords for each card. Hidden search keywords have been enabled with the **_"hiddentext"_** div class tag to allow users to search on specific "zen-related" keywords that are not displayed in the cards, (like "gardening").

### Zen Quiz

The Zen Quiz page allows more input functionality from the user in linking to a personalized "zen personality" page after clicking the submit button based on the question answers. The quiz submit will take the user to one of three personality pages: yoga, meditation or gardening. Then each personality page allows the user to link to the All Events page with a prepopulated search to automatically filter the event results based on the specific personality.

### Contact and FAQ

The Contact and FAQ allows more input functionality from the user to submit info that forwards and email to the creators of this site. Once the **_Send_** button is hit there will be a confirmation message that the form has been sent.

## Code Sources

Map pushpin and infobox sources:

- https://www.bing.com/api/maps/sdk/mapcontrol/isdk/setmapviewoptions#HTML
- https://www.bing.com/api/maps/sdk/mapcontrol/isdk/pushpinlabels#HTML
- https://www.bing.com/api/maps/sdk/mapcontrol/isdk/pushpindragevents#HTML
- https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/infoboxes/multiple-pushpins-and-infoboxes

Creating data arrays

- https://www.valentinog.com/blog/html-table/

Navbar

- https://getbootstrap.com/docs/5.0/components/navbar/

Repeat html div containers dynamically based off events data array in index.js file

- https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array
- https://www.w3schools.com/js/js_output.asp

Events Album/Cards

- https://getbootstrap.com/docs/5.0/examples/album/
