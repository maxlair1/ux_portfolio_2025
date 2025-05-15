const e=`---
title: Local Bean
description: The Coffee Compendium in Your Pocket
tags:
  - Application
  - Design
  - Multi-Device
coverImage: /bean_cover.png
date: 2023-06-12
---
## Overview
---
My Wife and I love coffee-- it would be safe to say that it's "our thing." Sometimes we travel to different states purely to visit coffee shops. Something about them are just the embodiment of creativity, community, and artisanal beverages. We are snobs to a critical degree, but my Wife does something unique: Every coffee shop we go to, she adds to a list, which now contains over 200 entries, and she places it in order. The criteria for her ranking is concerned with the atmosphere, baristas, location, smells, food, and, of course, the coffee. The issue is that she keeps all of these sought after items....on an iPhone note. Additionally, the distribution to others is quite difficult.

One day, she asked the question, "would there be a way for an app to help me with this process?" She wanted an app to encourage ranking and share this experience with other like-minded java-drinkers. That off-hand remark became the spark for Local Bean, an app where you can discover specialty cafés, check in when you arrive, and build a personal, shareable ranking of your favorite cups. This eventually was pitched at my software company, and it was quickly selected for further exploration.

>"That off-hand remark became the spark for Local Bean: an app where you can discover specialty cafés, check in when you arrive, and build a personal, shareable ranking of your favorite cups."

![LocalBean Screens](/bean_screens_map+checkin.png)

## Challenges
---
As we mapped out the concept, we faced a few immediate challenges:
- Monetization (keep it free to use)
- Incentive for people to use
- Incentive for shops to add themselves OR get people to add shops
- What other problems can we solve along the way (i.e. suggested parking with direct route to it)
These questions shaped every decision we made. The app had to be genuinely helpful, but it also had to be something people _wanted_ to open—especially when they weren’t hunting for coffee.

### Research
---
First, I created some personas of people like me (and not like me) that would find themselves using this app. The findings were super insightful,  which gave this app an edge against all of the others. The main personas that impacted the way that I attempted to solve the above problems were:
- ***The Coffee Curator***: "I want to rank and remember every café I visit, but my Notes app isn’t cutting it." → The core user. They need a structured, intuitive, and shareable way to keep track of their favorite coffee experiences. Local Bean exists because of them.
- ***The Urban Explorer:*** "I found the shop—but where the heck do I park?" → A major usability pain point. Solving this adds real utility and sets Local Bean apart from other café apps.
	- One of the most frustrating parts with finding a small cafe or any hole-in-the-wall is finding parking in big cities. A super simple feature would be smart parking, route to parking, or just a little section for "suggested parking". I based this persona off of my frustration with cities.
- ***The Travel Taster:*** "We pick cities based on coffee. No joke." → A high-engagement user type. They’ll test your discovery features across cities and can help populate the app with new entries—especially in underrepresented areas.

There are apps out there that allow you to get rewards, order, and save drinks (i.e. Starbucks), or guide you on how to brew coffee or pull a shot (i.e. Filtru, Bloom), but only a few that help people find shops.
The main being
- *Roasters*
- *Beanly*
- *COFE*

All of which have the following issues
- Too little entries of shops - Lots of these apps rely solely on shops to enter information, using no algorithms or incentives for users to enter this info. This could be a great application for gamification and reward systems.
- No "Favorite Coffee Shops" lists - at least to a degree where it was sharable and could be shown off.
- Most are limited to Europe or the UK only.
- Clearly promote rewards above most else - indicating a priority in returning sales.
- NONE include anything to do with *parking*, or other complaints users make.


## Discovery
---
Once I have a good grasp on the task at hand, I start sketching out screens and screen flows. The app was originally divided into 3 sections: Map, Social, and Profile.
I also needed to create three types of "sign-ins": User, Cafe, Website. 
Eventually, I added a shop section as a more direct way to solve the monetization problem and additional information about the shops, like fair trade certifications.
Later, I would remove the shop feature but kept alternative areas to highlight the shops fair trade information. 

![Local Bean Flow](/bean_flow.png)

## Execution
---
When I started designing this app, I was switching over from Sketch. While the setup was a little different, I remember how exciting it was to learn this new software! 
I utilized Figma's token and complex states to create a minimal design system.  This gave me some of the reusable components I needed across the whole app.
I took the wireframes I had created earlier and started building the screens. I remember as I was designing, I kept finding holes in the design that needed some additional attention. For example, "What if the user doesn't want the social aspect and only wants to use the other functions?" There would need to be a sign-in screen and an accessible way to bypass the sign-in as well.

![Local Bean Prototype Flow](/bean_prototype_flow.png)
![Local Bean Screen](/bean_phone_cafe.png)

It was an original learning experience for me to design screens for iPad and tablet use, as I had not focused on tablet design for UX previously.  Before this project, I was most familiar with web and mobile sizes.

![Local Bean Ipad](/bean_ipad_shop.png)

I also designed a portal for the cafe side, where they would make all of their changes and manage content. It had a friendly web-front and experimental settings section.

![Local Bean Portal](/bean_cafe_portal.png)
![Local Bean Portal](/bean_cafe_features.png)

## Feedback
---
User feedback after creating the first prototype was well received, although, we needed to fix some accessibility features. The main points of feedback were:
- The Map navigation needed improved-- It would also save time to use a map component like MapBox or MapKit
- The Flow was understandable and memorable
- It was exciting how much you can customize your experience, but it might help to include more accessibility settings.

## Promotional and Advertisements
---
I designed the logo for this app based of the spirit of discovering local charm and "taking that taste with you". To this day it is one of my favorite logos I have designed. I also had to create some advertisements, stickers, and other promotional material that would help this app receive funding and build "hype" around it. 

![Local Bean Logo](/bean_logo.png)

Additionally, I created some simple icons that were unique to coffee. In the icon collection I was using, there were not a lot of icons that fit into the coffee world, so I created a few for this project. Some places I used them were in the navigation bar and on the map.

![Local Bean Icons](/bean_icons.png)

## Future
---
Right now, this app is lacking funding. On my own time, I plan to work on a simplified "map and user only" proof of concept. The goal is to create the design in Play and prototype in Swift for Apple's app store. I'm excited to see how this project grows and morphs as we move through building it.

## What I learned
---
As I reflect, even while writing this, I wanted to list a couple things that I now would have done differently.
- I would have not created a portal right away. Instead, I would allow the cafes to create a shop on the app side without a portal.
- An in-depth design system. It would save time  to have a refined system, rather than making subtle changes to get the app to work in each unique case. 
- Auto-layout was not used as a way to layout the entire app. This  feature was new when we began working on this app, but I should have utilized it more frequently. 

`;export{e as default};
