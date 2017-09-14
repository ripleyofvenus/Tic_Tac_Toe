WIREFRAME---
Initial wireframe of game projections. Tic Tac Toe Wire Frame version 1: https://imgur.com/gallery/OIBWx
Coding Flowchart: https://imgur.com/gallery/mYi39

DATA STRUCTURES---
In the scope of this project I will utlize html, jquery, javascript & ajax, css/sass for styling, and inside those languages will be objects, arrays, strings, IDs, and classes. The challenge of this project is two-fold, but mainly lays in the POST, GET, DELETE, & PATCH api requests, followed up by the game logic functionality. It is more than likely there are also other structures that aren't immediately coming to mind at the moment. :)

GAME BOARD---
My game board is first defined by div elements in my index.html, which is then interacted with through click events which update a gameboard array. This array is present server side as well as in my own files, to make the site not have to bog down in requests to the server every time a box on the gameboard is filled.

APPROACH---
End of Project Update:
My words below were representative of how I perceived my workflow could and would operate during the scope of the project. However, this is my first ever coding project, not just during the General Assembly WDI intensive, but period. I learned a lot during this process, after a great deal of hair pulling and exasperation. The very first day of the project the computer I had been working on up to that point suddenly died--- or to be more specific, the computer itself was fine, but the screen no longer connected with the working parts of the machine. After resetting up a new laptop, I started the project on the second day. For the next two days I went back and forth constantly, trying to approach the game logic as my first hurdle, I felt more certain of my approach for the authorization actions needed for the user profiles. This approach took me in circles. I wrote, undid, redid, and ultimately ran myself around.

Regrouping on the third day, I decided to step back and look at what I knew, not as a developer but as a professional. In my career as the professional punk, the communication between systems and identifying similarities to streamline operations has been practically my mantra.
Instead of staring at all the steps needed, requirements, and grappling with my uncertainty in being very new to this field, I sat down and did two things: I started by mapping out a complete user story, from beginning to end, and setting my order of operations to follow this flow. Secondly, I made a data tree to visualize a separation of the different actions my code would have to follow, in part to better understand the project as a whole, and also to keep my steps separated; in doing so I set a goal to have code that would be easier for me to troubleshoot and more comprehensible to navigate. This structuring was partially inspired by an admiration of SASS separating the different elements of design into separated files, linked together with an index.scss file.
With this new plan in place, the project felt much more approachable, and I quickly gained traction, making up the ground I'd lost in the first frustrating days of the project.
Below find my initial plan, kept here for posterity:

------

My plan is to focus on keeping myself to the schedule outlined with this project. To start out I want to make certain I have my full scope of the project mapped out, with plain-speak commented out as far as I can go, giving myself a framework to build off of going forward, and further enabling me to approach trickier problems as they arise.

USER STORIES---
//rewrite
User 1 - I load the game on my browser, enter username and password credentials into the three fields to make myself a user profile. Re-entering my information into the "log in field" (possibly make auto log in features) I log into my account. Following game prompts, I select new game to start a new game, and take my first move as 'X'. After playing a game I use the sign out button to log out of my account.
User 2 - I follow the first steps as User 1, but input a typo to one of the password fields. I am prompted to try again, and do so, successfully creating a profile. I select the new game button, and play a round, resulting in 'X' winning the match, which is indicated by a message appearing on the screen. I try to select one of the available boxes, and am unable to. A message pops up prompting me to select "new game" to continue. At the end I walk away from my computer without logging out, and the profile automatically logs out.
User 3 - Having already made a profile I log in successfully. My password is out of date, so I take a moment to change my password using the change password fields. After changing my password, I log out, to play a game in the future using my updated credentials.
User 4 - I attempt to log in, but am not able to due to entering the wrong information. I re-enter my password after being prompted to do so. After successfully logging in, I play a few games, with player 'X' and 'O' winning different rounds respectfully, as well as creating a few draws. The game always begins with player 'X'; after playing a number of rounds, I decide to see how many games I've played in total, and select the "Total Games" button. I've played this game a lot.

MODULAR BUILD---
Effective use of well maintained separation of concerns will be my focus to maintain modular code; in addition, this will enable me to work on the many different project pieces.

CREATIVE LICENSE---
End of Project Update:
While this began as my plan, when I regrouped and started the project in earnest once more, my focus was on making my code as comprehensible and clean as possible, with as few redundancies as I could manage. While this is not entirely possible due to this being my first project, I am pleased with the result. In the end, I spent an evening and a half playing with my styling elements, with the rest of my focus devoted to functionality. Initial comments left below for posterity.

------

In laying out the available time for this project I intend to spend some time ensuring the design elements will not be bare and/or stark. In this realm I'll primarily be focusing on an engaging board, fun interactive modal notifications (win, loss, draw, log in success, log in error, etc.), and creative game pieces. Who says a tic tac toe has to be X's and O's? This mainly implements styling however. Using .Hide & .Show to clear and reset the board after each game will add dynamic movement to the game. Going forward, I'm further pondering what other choices I can play with to really put life in this game.

VERSION CONTROL---
Github and keeping a commented record of progress will be immeasurably valuable to me in the process of this project. I've worked for many years keeping my own notes and folders filled with versions of projects; notebooks have been filled with notes, diagrams, and checklists, as well as Trello boards and CRM's integrated into my project management systems; the ease in which github enables me work on separate features, drafting my progress and tracking developments, I am incredibly excited for.

BONUS ROUND---
With projects such as these I start with my ideal, set my baseline of what must be completed, and then regulate based on what the parameters of my resources and the project deadline will allow. Using this method I've found I don't unnecessarily limit a project by deciding and defining at the start a lowered expectation, and will pace myself to accomplish the bonuses as well as exceed my baseline. In the end I didn't add on any bonuses though in the future I plan to return to this project and update it with an increased skillset.
Specifically I'd like to...
- Add in a "forgot password" option to the sign-in features available through adding another curl PATCH request.
- Make the game playable by more than one user, from more than one terminal.
- Let the users choose their own game tokens, from a provided list.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
