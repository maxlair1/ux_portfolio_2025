---
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

My wife and I have always been coffee fanatics—so much so that she keeps an ever-growing ranked list of every café we visit (over 200 and counting), tucking it into an iPhone note while I wander around hunting for hidden gems. One morning, over our favorite cortados, she laughed and said, “It’d be amazing to see this all on a map—and let others in on my top picks.” That off-hand remark became the spark for Local Bean: an app where you can discover specialty cafés, check in when you arrive, and build a personal, shareable ranking of your favorite cups.

Early on, we tested the idea informally—asking friends, and chatting with baristas— Everyone agreed that while there are plenty of coffee-finding apps, none focus on personal ranking or truly independent shops. We realized there was a real need for a tool that celebrated community-driven discovery rather than big-chain convenience.

>"We realized there was a real need for a tool that celebrated community-driven discovery rather than big-chain convenience."

---
## Challenge

From day one, Local Bean needed to feel generous and personal while remaining sustainable. We knew we had to keep the app free for users, but also explore subtle ways for small cafés to gain visibility. The core questions guiding us became:

- How do we make returning to Local Bean a habit rather than a one-off download?
- What would motivate users to add new shops and share their opinions?
- How can we enrich the coffee-seeking journey with small delights—like suggesting the best nearby parking spot?

Balancing these considerations shaped every design decision, from feature scope to branding tone.

---
## Discovery

To ensure we built something people actually wanted, our team of three designers—of which I was lead—started with user interviews and competitive analysis. We sketched rough flows in Figma and then evolved them into clickable prototypes using Play for iOS, exposing us to mobile-specific quirks we hadn’t anticipated on desktop.

Rather than overwhelming ourselves with every possible feature, we focused on the “minimum delightful experience”: find a shop, check in, drop a quick rating and note, and see your personal leaderboard grow. Along the way, we envisioned an optional web dashboard for shop owners to claim their profile and share specialty menus or events without overloading the main app.

![Local Bean Flow](/bean_flow.png)

---
## Execution

As lead designer, I set the overall user experience direction and crafted the brand identity: a playful logo that merges a coffee cup with a moped seat, symbolizing both journey and flavor. My teammates concentrated on fine-tuning interaction patterns and accessibility, ensuring that every tap felt responsive and every screen felt inviting.

We paid special attention to responsiveness—laying out both iPhone and iPad screens with Figma’s Auto Layout so that everything would adapt elegantly. One of our favorite micro-features was “Suggested Parking,” where users could tag or vote on the best spots to leave your car before entering a tight city café. It was a simple addition, but testers told us it removed a real pain point.

We kept social elements light: you could follow friends’ lists and peek at their most recent check-ins, but we deliberately avoided building a noisy feed. Instead, occasional “Top 5” shareables and end-of-year wrap-ups gave people reasons to revisit without turning Local Bean into another social network.

![Local Bean Prototype](/bean_prototype_flow.png)

---
## Results

Once we had a mid-fidelity prototype, we ran it through several rounds of user testing. The feedback confirmed what we’d guessed: the shop discovery flow and personal ranking mechanic resonated strongly—people described it as “Spotify Wrapped for coffee.” However, our check-in confirmation was too subtle and the interfaces needed to be tweaked. The social features also proved too ambitious, so we simplified them further, making it a matter of following lists rather than posting comments or likes.

With only three designers and limited resources, we ultimately decided to pause full development and focus on a tight MVP. We stripped out in-app routing (linking instead to native map apps) and scaled back commerce ideas to keep the experience pure and speedy.

![Bean Sticker](/bean_door.png)

---
## Reflection and Next Steps

Local Bean taught me the value of starting from a personal itch—something my wife and I both lived—but validating every assumption with real users before committing too deeply. Leading a small team taught me not only how to delegate design tasks but also how to make hard calls on scope to protect our resources.

Today, I’m rebuilding Local Bean solo in SwiftUI, paring it back to its essence: a map, the shop details, and a frictionless check-in plus ranking flow. This lean version keeps the magic and removes the noise, ensuring that every time someone opens Local Bean, it’s to celebrate coffee rather than navigate complexity.

If you’re looking for a designer who combines personal passion, user-centered validation, and disciplined scope management, I’d love to share more about how Local Bean came together—and where it’s headed next.