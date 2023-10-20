# Hunting Log

An exercise in UI design/CSS, DOM manipulation and API data fetching using React components.

Retrieves data about the enemies from the video game Monster Hunter World, then manipulates said data and displays it in a presentable way using CSS.

Main page displays the retrieved monsters' names along with matching representative icons, all responsive to mouse hover. Clicking an icon or searching for a monster by name will display a short profile card for the retrieved monster.

## Tech

- React
- JavaScript
- HTML
- CSS
- External Monster Hunter API

## Basic functionality

### Key:

- [x] Done
- [ ] In Progress
- Planned, not started

---

- [x] Search functionality
- [x] Comprehensive list of large monsters
- [x] Trigger search by clicking list icons
- [x] Monster card scrolls into view upon render
- [x] Gives details on elemental weaknesses, with supp. icons
- [ ] Multi-page emulation (w/ React Router)

### Extra features

- Small monsters page
- Endemic life page

## Demo

The main page displaying the full monster list: <br>
<img src="site/demo/main_page.png" width=500 />

The monster profile card: <br>
<img src="site/demo/monster_card.png?raw=true" width=400 />

A short demo showcasing the responsiveness of the icons and auto-scroll behaviour: <br>
![Page Movement Demo GIF](site/demo/8316m8.gif?raw=true "Movement Demo")

## Run Locally

Clone the project

```bash
  git clone https://github.com/muxappo-projects/hunting-log
```

Go to the project directory

```bash
  cd hunting-log
```

Install dependencies

```bash
  npm install
```

Host locally

```bash
  cd site
  npm run dev
```

## Acknowledgements

- The [Monster Hunter World API](https://docs.mhw-db.com/) where the monster data is being retrieved from
- CrimsonNynja's [Monster Hunter Database](https://github.com/CrimsonNynja/monster-hunter-DB), containing the icons used
