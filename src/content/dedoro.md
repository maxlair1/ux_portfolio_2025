---
title: Dedoro
description: Reward Yourself for Productivity
coverImage: /doro_cover.png
date: 2023-11-18
imageHook: doro
prototype: true
---
## Context
---
We all struggle with productivity once in a while, some of us more than others. Personally, I have always had trouble with long-term focus, and one way that I challenged this was practicing the pomodoro method. Originally I used an app, FocusPomo, which rewarded the user with cartoon tomatoes on completed focus sessions. This gave me a sense of momentary accomplishment and joy. However, I began to think, "What if users could choose how to reward themselves for focus?". Dedoro was born.

## Problem
---
The main problems I set out to solve were:
1. How can I iterate on an app concept that has been done a million times, while not entirely "reinventing the wheel?"
2. How can I make the reward system freeform, but not so much that it loses its satisfaction?
3. How will this app be monetized.

## Research
---
User research and personas were the next step. I created a couple personas and extracted the following helpful notes:
- *The Easily Distracted Student* = Reward systems work best when they feel playful and low-pressure, not punishing. Customization is a strong motivator.
- *The Busy Professional* = Simplicity and clarity are critical. Hidden gestures or unlabeled navigation hurt usability.
- *The Casual App Explorer* = Charm and novelty (like the pig mascot) can be just as engaging as utility, especially in early adoption.

Subsequently, I conducted a light competitive analysis that might give me some insight into how to make this app perfect for pomodoro users.
- ***WaterLlama*** (Indirect) - A "purchase once" monetization model that encourage word-of-mouth bragging rights, and lets users self-challenge at their **own pace**.
- ***FocusPomo*** (direct) - Features a minimal reward system, while also keeping the features light and digestible.
- ***Duolingo*** (indirect) - Self-reward process, while capturing streaks and recording performance.
- ***Toggl Track*** (indirect) - Has good task management and integrations that could be helpful.
	- Prior to this, I had not considered integrations--It could be a major leg-up against competitors. Apps like WaterLlama would be improved greatly by integrating with other productivity flows.
- ***Forest*** (direct) - Uses gamification to encourage users to hold focus.

Some of my questions had been answered by this research. Below are a couple conclusions drawn thus far:
- Monetization model of purchase-once, where the app does not restrict features, but only expands the experience (cosmetics, additional rewards) with premium access.
- Allow users to set goals at their own speed by allowing them to assign the cost of rewards.
	- Yes—it would be possible to abuse the system, but the app is meant to be a *tool not a test.*
- The timer would be minimal, and the overall design of the app aggressively simplistic, without sacrificing style. I would include a system that focuses on fun and making users smile.

## Low-Fidelity 
---
I started with sketches to get the overall flow and user journey nailed-down. 

![Dedoro Sketches](/doro_docs.png)

I had decided that, like WaterLlama, I wanted cosmetics to be the main form of app-side reward, and I would do that by adding a piggy bank mascot that you can customize. The easiest way to do this practically would be to have preset designs of hats and place them atop the pig on select, once that hat is unlocked.

Another form of user engagement that was simply meant to bring joy would be a little coin shaker. Like FocusPomo had its falling tomatoes that responded to screen orientation, I wanted to add an element similar to that. I decided to add a section where you can "inspect" your pig from the home screen, and while there, you could shake your device to "hear" how many coins were inside of the piggy bank. This can be implemented practically by utilizing the iPhones gyro.

When you finished a pomodoro (in Dedoro, they were called *Doros*), you would receive "Dorocoins", that you could use to purchase user-set rewards in the shop.

![Dedoro Wireframes](/doro_wireframes.png)

Once I had the overall user flow, I started the wireframing process. I used mid-fidelity designs to establish how the final product would look, before putting in the leg-work. Additionally, I hooked up a figma prototype for user testing.

## User Testing & Feedback
---
With the wireframes and initial Figma prototype built, I got it into the hands of three documented users:

- User 1 - **Olivia**:
	- Gender: Female
	- Age: 21
	- Proficiency: Proficient with smartphones and apps
	- Pomo familiarity: Unfamiliar with pomodoro apps.
	- Experience: *Moved quickly through the platform completing all tasks, yet struggled to open the settings page. Requested it be more clear.*

- User 2 - **Gabe**:
	- Gender: Male
	- Age: 26
	- Proficiency: Proficient with smartphones and apps
	- Pomo familiarity: Unfamiliar with pomodoro apps.
	- Experience: *Moved quickly through the platform completing all tasks, only struggle was related to prototype limitation.*

- User 3 - **Bob**:
	- Gender: Male
	- Age: 48
	- Proficiency: Somewhat Proficient with smartphones and apps
	- Pomo familiarity: Familiar with pomodoro apps.
	- Experience: *Moved quickly through the platform completing all tasks. Suggested features be added but understood current layout and navigation*.

All users were asked to complete a couple tasks:
1. Complete a Doro (Pomodoro)
2. Change the Piggy’s hat
3. Go to settings
4. Add a task and shop item
5. Change the Doro length (duration)

At the end of the research, I left this quote:
*"Overall I learned that the navigation and direction of the app is very explanatory even to people somewhat familiar with mobile apps. The main hiccup is **when direction swiping is not labeled** (like the settings page). My goal is to improve the fluidity and navigation of the app. I will also condense some screens to help with general user comprehension."*

## High-Fidelity
---
After user testing, with a lot of improvements yet to be made, I started with the visual style, art direction, and illustrations. I wanted to have a charming, isometric, and minimal style that also felt playful. I created various illustrations and a handful of app icons the user could switch out with the premium version.

![Dedoro Icons and Illustrations](/doro_icons_illustrations.png)

After that, I applied my type and color choices and made high-fidelity designs out of the wireframes. Then, I created a prototype of the final version and verified the user accessibility of interactions and resolved the testers complaints.

![Dedoro Screens](/doro_screens.png)
![Dedoro Screens More](/doro_screens_alt.png)

I have plans to either a) create a React Native app based around this design, OR b) develop it in iOS Switft and SwiftUI. 

<div id="prototype"></div>

## Prototype
<iframe style="border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.1); margin-bottom: 2rem; min-height: 650px; width: 100%;" width="800" height="450" src="https://embed.figma.com/proto/X64UjzyuJtB3lesw3iHMZY/Dedoro---Main-App--Copy-?page-id=156%3A568&node-id=156-682&p=f&viewport=428%2C12%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=163%3A5782&embed-host=share" allowfullscreen></iframe>


## Conclusion
---
The result was an exciting execution of a super simple concept. Pomodoro apps are nothing new, but this one could potentially offer an engaging and interactive option for pomodoro users.

I completed this project in 2023, however, upon recent review, I would now consider the following:
- Complex navigations that require specific gestures are not worth the UX hurdle to overcome. When you deviate from the common navigation that users understand, it takes them a long time to become familiar with them. 
- Designing in mid-fidelity can tunnel-vision the design process. It's better to use rough or low-fidelity components so that interactions are the main focus of early layouts, not visual appeal.
- It is important to include testers that are not-familiar with the subject matter. I undestimate the power of going outside of the "bubble" of *potential* users, in order to attract *new* ones.