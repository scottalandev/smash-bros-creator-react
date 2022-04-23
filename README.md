# Super Smash Bros. Ultimate Character Creator

## Introduction

This project, in early development (as of 3/15/2022) is front end code for a web-based single page app for the creation of complete movesets of new/proposed/imagined characters for the Nintendo Switch Fighting Game ***Super Smash Bros. Ultimate*** (SSBU). My 8-year-old son loves to imagine new characters he'd include in the game, and so I began developing this app to help him with his creativity process, and as self-exercise in integrating TypeScript into React.

## Project Info

This project was bootstrapped with  [Create React App](https://github.com/facebook/create-react-app), with the option `--template typescript`.

## To Run

Clone this git repository, run `npm install` to install dependencies, and `npm start` to open the default Create React App local development server at [http://localhost:3000](http://localhost:3000).

There are other scripts available by default courtesy of Create React App. Check out the **package.json** file and the CRA docs for more info.

## Development Plans

This app will allow users to create and save their imagined SSBU characters. Creating a character entails defining some core characteristics and a complete list of possible moves, most of which get a name and description, and some of which have additional properties to define.

### List of Character Properties

Following is a list of controls and character properties in SSBU.

- **General Props**
    - Name
    - Character Catchphrase
    - Number of Jumps (2-6)
    - Weight
    - Special Perks/Abilities
    - WallJump (boolean)
- **Attacks**
    - Tilt Attacks (3)
    - Smash Attacks (4)
    - Special Attacks (4)
    - Aerial Attacks (4)
    - Grab/Throw Attacks (5)
- **Other**
    - Taunts (3)
    - Final Smash

### User Interface

Architecturally, this will be a fairly small app, at least in its early iterations. Projected pages/views include:

- Home/Introductory landing page
- Character Creation Form/Interface
- Character View
- User home/dashboard
- User registration/authentication functionality

Styling concerns have not been considered yet.

### Future Functionality

Some ideas for future development include:

- Sharing/gallery/browsing of 'published' characters created by other users
- Templating for users to create offline docs (such as a pdf) with which to keep, view, display, share their creations outside the app
- Inclusion of richer content options i.e. images, sounds, animations, for characters.

## Contact

This app is under solo development by full stack developer Scott Alan. Please reach out to him at scottalandev@gmail.com with questions/comments.