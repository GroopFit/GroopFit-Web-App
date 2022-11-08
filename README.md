# GroopFit Web App

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![RCOS Contributors][contributors-shield]][contributors-url]
[![Other Contributors][other-contributors-shield]][contributors-url]
[![Apache License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<!--
<br />
<div align="center">
  <a href="">
    <img src="" alt="Logo" width="80" height="80">
  </a>

</div>
-->


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

GroopFit is a free, open source application that allows you to track your workouts individually or as a Groop. Every workout is a growth opportunity, and what better way to grow than with your friends or coworkers. 

Enjoy all of these exercise features:
* Personal dashboard with goals and progress towards those goals
* Logging of 5+ exercises
* Formation of Groops to participate in challenges against other Groops


### Built With
GroopFit relies on the following:

| Frameworks | Technologies |
| ---:      |    :----   |
| [![PostgreSQL]][PostgreSQL-url]   | [![JavaScript]][JavaScript-url]     |
| [![Express.js]][Express-url]      | ![CSS]        |
| [![React.js]][React-url]  | ![HTML]|
| [![Node.js]][Node-url]| [![Redux]][Redux-url]|
| [![Heroku]][Heroku-url] | [![JQuery]][JQuery-url]|
[![Bootstrap]][Bootstrap-url]

<!-- GETTING STARTED -->
## Getting Started
To get a local copy of GroopFit running on your personal machine, follow these simple steps.

### Prerequisites

To avoid issues with cloning and testing the repository, ensure the following technologies are up to date:
1. npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

_The following steps allow a new developer to install the main repository and begin testing locally._

1. Clone the repo
   ```sh
   git clone https://github.com/GroopFit/GroopFit-Web-App.git
   ```
2. Install NPM packages in the main directory
   ```sh
   npm install
   ```
3. Install NPM packages in the client directory
   ```sh
   cd client
   npm install
   cd ..
   ```
4. Install NPM packages in the server directory
   ```sh
   cd server
   npm install
   cd ..
   ```
5. run the localhost in the client directory
    ```sh
    cd client
   npm run start:development
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
GroopFit development follows the Agile ideology using Scrum. The list of sprints, tasks completed, and backlog tasks to be done are on our Jira page, accessible only to developers. 


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. To better maintain the main branch, please create an individual branch for your contributions and create pull requests to merge into the main branch.

1. Branch the Project
3. Commit your Changes (`git commit -a -m 'Your Feature's commit message'`)
4. Push to YOUR Branch (`git push origin branch_you_commit_to`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under Apache License 2.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Resources -->
## Resources

Useful Resources:
* [Choose an Open Source License](https://choosealicense.com)
* [React JS Full Course for Beginners](https://www.youtube.com/watch?v=RVFAyFWO4go&t=39s&ab_channel=DaveGray)
* [Node.js Full Course for Beginners](https://www.youtube.com/watch?v=f2EqECiTBL8&start=11729&ab_channel=DaveGray)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [150 Badges for Github](https://dev.to/envoy_/150-badges-for-github-pnk)
* [Img Shields](https://shields.io)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/badge/all_contributors-9-red.svg?style=flat-square
[other-contributors-shield]: https://img.shields.io/badge/contributors-0-red.svg?style=flat-square
[contributors-url]: https://github.com/GroopFit/GroopFit-Web-App/graphs/contributors
[license-shield]: https://img.shields.io/badge/License-Apache_2.0-blue.svg
[license-url]: https://github.com/GroopFit/GroopFit-Web-App/blob/main/LICENSE

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Heroku]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://dashboard.heroku.com/login

[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[HTML]: https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white
[CSS]: https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
