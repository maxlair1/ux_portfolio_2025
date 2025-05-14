---
title: Dedoro
description: Reward Yourself for Productivity
coverImage: /doro_cover.png
---
## Context
---
We all struggle with productivity once in a while, and some of us struggle with it more frequently. Personally, I have always had trouble with focus, and one way that I always helped that, was practicing the pomodoro method. However, one day I wondered if it could be improved. An app I was using, called FocusPomo, gave you a brief moment of accomplishment when it gave you a little tomato that bounces around the screen. I thought "what if users would choose how to reward themselves for focus?" and Dedoro was born.

## Problem
---
The main problems were:
1. How can I iterate on an app concept that has been done a million times, while not entirely "reinventing the wheel?"
2. How can I make the reward system not be too freeform that it loses the rewarding aspect of it?
3. How will this app be monetized.

## Research
---
User research and personas were the next thing on my mind. I created a couple personas and extracted the following helpful notes:
%% FIX %%
- Persona: *type of person* = What I learned

Subsequently, I conducted a light competitive analysis that might give me some insight into how to make this app perfect for its users.
- ***WaterLlama*** (Indirect) - A "purchase once" monetization model that encourage word-of-mouth bragging rights, and lets users self-challenge at their **own pace**.
- ***FocusPomo*** (direct) - Features a minimal reward system, while also keeping the features light and digestible.
- ***Duolingo*** (indirect) - Self-reward process, while capturing streaks and recording performance.
- ***Toggl Track*** (indirect) -Has good task management and integrations that could be helpful.
	- Prior to this, I had not considered integrations--It could be a major leg-up against competitors. Apps like WaterLlama would be improved greatly by integrating with other productivity flows.
- ***Forest*** (direct) - Uses gamification to encourage users to hold focus.

Some of my questions had been answered by this research, and a couple conclusions were drawn before wireframes:
- Monetization model of purchase-once, and require no real feature gain except cosmetics and little bits of joy.
- Task completion would be linked to the reward system, not the time itself. Allows users to set goals at their own speed
	- Yes--it would be possible to abuse the system, but the app is meant to be a *tool not a test.*
- The timer would be minimal, and the overall design of the app aggressively minimal...Not to trade off character though. I would include a system that focuses on fun and making users smile.

## Low-Fidelity 
---
I started with sketches to get the overall flow and user journey nailed-down. 

![Dedoro Sketches](/doro_docs.png)

I had decided that, like WaterLlama, I wanted cosmetics to be the main form of app-side reward, and I would do that by adding a pig mascot that you can customize. The easiest way to do this practically would be to have preset designs of hats and place them atop the pig on select, once that hat is unlocked.

Another form of user engagement that was simply meant to bring joy would be a little coin shaker. Like FocusPomo had its falling tomatoes that responded to screen orientation, I wanted to add an element similar to that. I ended up adding a section where you can "inspect" your pig from the home screen, and while there you could shake your device to "hear" how many coins were inside of the piggy bank. This can be implemented practically by utilizing the iPhones gyro.

When you finished pomodoro (in Dedoro they were called *Doros*) you would receive "Dorocoins", that you could then use to purchase user-set items in the shop.

![Dedoro Wireframes](/doro_wireframes.png)

Once I had the overall user flow, I started the wireframing process. I used mid-fidelity designs in this sense, but the goal was to get an idea of how the finished app would look and behave before putting in the leg-work.

## User Testing & Feedback
---
With the wireframes and initial Figma prototype built, I got it into the hands of about 5 different users, but the three documented users were:

User 1 - **Olivia**
	Gender: Female
	Age: 21
	Proficiency: Proficient with smartphones and apps
	Pomo familiarity: Unfamiliar with pomodoro apps.
	Experience: *Moved quickly through the platform completing all tasks, yet struggled to open the settings page. Requested it be more clear.*

User 2 - **Gabe**
	Gender: Male
	Age: 26
	Proficiency: Proficient with smartphones and apps
	Pomo familiarity: Unfamiliar with pomodoro apps.
	Experience: *Moved quickly through the platform completing all tasks, only struggle was related to prototype limitation.*

User 3 - **Bob**
	Gender: Male
	Age: 48
	Proficiency: Somewhat Proficient with smartphones and apps
	Pomo familiarity: Familiar with pomodoro apps.
	Experience: *Moved quickly through the platform completing all tasks. Suggested features be added but understood current layout and navigation*.

All users were asked to complete a couple tasks:
1. Complete a Doro (Pomodoro)
2. Change the Piggy’s hat
3. Go to settings
4. Add a task and shop item
5. Change the Doro length (duration)

I documented the results as:

> *"Overall I learned that the navigation and direction of the app is very explanatory even to people somewhat familiar with mobile apps. The main hiccup is **when direction swiping is not labeled** (like the settings page). My goal is to improve the fluidity and navigation of the app. I will also condense some screens to help with general user comprehension."*

## High-Fidelity
---
After user testing, with a lot of improvements yet to be made, I started with the visual style, art direction and illustrations. I waned to have a charming, isometric and minimal style that felt silly at the same time. I ended up creating all sorts of illustrations that turned out really well. I even created a handful of app icons the user could switch if they had the full version.

![Dedoro Screens](/doro_screens.png)
![Dedoro Icons and Illustrations](/doro_icons_illustrations.png)
![Dedoro Screens More](/doro_screens_alt.png)

After that, I applied my type and color choices, and made high-fidelity designs out of the wireframes. I then created a prototype of the final version and made sure the interactions were acceptable and checked the boxes of my testers.

I concepted some animations and sound design, but that would come in to play with the real app.

I have plans to either a) create a React Native app based around this design, OR b) develop it in iOS Switft and SwiftUI 

## Prototype
<iframe style="border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.1); margin-bottom: 2rem; min-height: 650px; width: 100%;" width="800" height="450" src="https://embed.figma.com/proto/X64UjzyuJtB3lesw3iHMZY/Dedoro---Main-App--Copy-?page-id=156%3A568&node-id=156-682&p=f&viewport=428%2C12%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=163%3A5782&embed-host=share" allowfullscreen></iframe>


## Conclusion
---
The result was an exciting execution of a super simple concept. Pomodoro apps are nothing new, but this one could potentially offer a new edge for people to start using this incredible focus method.