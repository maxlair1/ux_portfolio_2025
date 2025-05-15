---
title: Grokadoc
description: Centralized Documentation Software with Project Management Tools
coverImage: /grok_thumbnail2.png
sticker: /grok_sticker.svg
date: 2024-03-01
---
## Overview
---


>**grok** (_/ɡräk/_) - "to understand or comprehend something fully and deeply"

Most people are familiar with project management tools such as Jira, that hand-hold and "gently guide" teams. The teams I have been on have hated this norm, declaring that "there must be a better way." On larger teams, truths can be written, rewritten, and defined anew without a second thought, damaging the integrity of the overall road map. Grokadoc, the centralized documentation block-based editor, aims to solve these issues by placing action items in-line with documentation. This approach eliminates redundancy, functions in real-time in order to keep shareholders in sync, and streamlines communication between ALL working groups.

While working at Neuraldev AI, I was tasked with ideating on the flow and usability of this software, designing the interfaces using custom design systems and methodologies, and executing those changes hands-on in the code. Working on a team of 3, I was leading the UX movement.

## Challenges
---
The main challenges of this particular application on the UX-end were-REWORD
- Determine how to treat tasks and how they are to be presented to the user - Are they indestructible, open to instantiation, can they be duplicated more than once?
- Hierarchy in the tree structure - We've seen it done well in apps like Obsidian, but how would that effect task and project management?
- Accessibility features and tailoring to specific users - Showing people what they want to see and hiding what they don't.

## Research


---
### Findings
Research reveals that fragmented project management systems create significant inefficiencies, with teams wasting 19% of their work week searching for information across multiple disconnected tools. This fragmentation leads to data inconsistency, miscommunication, and employee frustration. Overall, costing businesses an estimated $600 billion annually. The core problem stems from teams using separate systems for documentation and task management, creating multiple sources of truth that become increasingly out of sync. Grokadoc's approach could address these pain points by eliminating redundancy and providing role-specific views of the same underlying data.
Key Statistics:

- 19% of the average work week is wasted searching for information
- 80% of workers feel stressed due to ineffective company communication
- 10-30% of enterprise data is duplicated across systems
- 55% of people are dissatisfied with effectiveness of current PM tools
- Poor data quality costs U.S. businesses $600 billion annually

Primary User Needs:

- A single source of truth for all project information
- Different views of the same data optimized for various roles
- Seamless connection between documentation and tasks
- Reduced context switching and administrative overhead
- AI assistance to identify tasks and risks from documentation

### Comp. Analysis
 - Obsidian - Indirect
 - Jira - Indirect
 - Miro + Jira plugin - direct
 - Mem - direct
 - Anytype - Indirect
 No current solution truly unifies documentation and task management without requiring context switching or manual linking

![grok diagram](/grok_system_diagram.png)
## Execution
---
### Design System

The software was intended to grow as it went on. However, the content could be structured entirely how the user preferred. Everything needed to be accounted for, which is where a design system comes into play. If all components have context and documentation, allowing the user to "mess around" with those components would be a whole lot easier.

As with most design system projects of mine, I used
- Brad Frost's Atomic Design Methodology
- Major Second Type scale
- 12 Column desktop and 6 Col mobile grids

![grok colors](/grok_colors.png)
![grok design system](/grok_design_system.png)

Grokadoc's design system is minimal. The dev side used a themed MUI for most non-custom components such as buttons, but a couple components that needed to be designed with attention were:
- Kanban
- Task Card (inline)
- Code Snippet
- Document Tree
- Comment Cards

### Interface
The Grokadoc interface uses the standard sidebar model with dividable vertical columns. This layout is seen in applications such as VSCode, and Gitbook. Hierarchy deems this layout the most appropriate for our aim. I split the different project management tools and editors up into "views" which allowed users to filter data from the same document, and display it in 3 difference contexts: Kanban, Task, and Doc view. This was an effort made because of the amount of different team members using the same docs, they might want to see data in a different context— developers want to see documentation, while POs want to see tasks and their statuses.

The most important part of this interface design, is communicating the location data and wayfinding. Highlights and eye-catching visuals would work as a mental breadcrumbs.

![Interface Sketches](/grok_layout_sketch.png)
![Interface Concept](/grok_interface_concept.png)

### Tasks
The most challenging design to work with was of course the inline-task card. This component was supposed to demonstrate to the user that a task was created inline, typically in relation to its documentation, so it needed to check a few boxes:
1. It cannot interrupt readable flow. There needs to be a way to collapse the task while also seeing necessary details 
2. Users need to be able to create tasks quickly and edit later
3. For keyboard navigation, there needs to be an easy way to jump out of a task and continue writing normally
4. Sub-tasks and links must be clear, directing readers to it's context (i.e. if the task's origin is in another document.)

![Grok Task Component](/grok_task_component.png)

## Testing and Prototype
---
We then developed a POC on the road to an MVP. As an effort to improve "real" issues quickly, we began using the software full-time to document. Of course, we ran into a laundry list of bugs, however, the overall concept started to work as intended. It was such an "ah-ha!" moment. It was exciting to be able to get into a "flow" state and write tasks as they came to mind, worrying about the placement of those later. And the AI features helped to keep a lot of those items organized.
It is currently still being tested as funding is received. Unfortunately, the product has been dead-in-the water without funding for a while now. However, a small team of designers and developers are working on their own time to make this product great. 

![Grok Workspace & Projects](/grok_workspace_projects.png)
![Grok Login: Email](/grok_login_email.png)

## What I Learned
---

- Because I was building off of branding I had done several years prior, the colors could have contrasted better. In hindsight, I should have used Adobe Leonardo to construct my color system.
- I faced discouragement due to visual differences of the alpha version and the design. Because of this, I let my design  be a little more lenient to allow development a little more wiggle room. REWORD As an alternative, I could enforce a front-end repository (or something similar) like Storybook to close those gaps and avoid slowing down development.
