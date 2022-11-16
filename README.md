SS-17

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  <h3 align="center"> Salesforce - SFDX (sf-sfdx) </h3>

  <p align="center">
    Are you ready to finish your deploys in no time?!
    <br />
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=n0wU1zf0HIM">View Demo</a>
    ·
    <a href="https://github.com/Skidrow17/salesforce-delta-deploy-source-format/issues">Report Bug</a>
    ·
    <a href="https://github.com/Skidrow17/salesforce-delta-deploy-source-format/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The Source Delta Deploy module is going to make your salesforce deployments a lot faster, as you propably have already noticed on the saleseforce project you are working, the repository is getting bigger and bigger and as a result the time of the deployments is increasing dramaticaly. Despite the time required to make a deployment, there is also a problem that its impossible to avoid easlily, the 'too many files in zip'. So what does sf-sfdx do, is deploying each time the modified files and not the whole repository. in most cases the deploy can finish in seconds.

This module is addressed to salesforce project that use sfdx format repository.

<p align="right">(<a href="#top">back to top</a>)</p>



### Technologies Used

* [Node.js](https://nodejs.org/en/)
* [JSON](https://www.json.org/json-en.html)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In Order to install these feature on your repository follow the steps below!

### Prerequisites

tools required

* npm
  ```sh
  npm install npm@latest -g
  ```
* salesforce cli
  ```sh
  https://developer.salesforce.com/tools/sfdxcli
  ```
* git
  ```sh
  https://git-scm.com/downloads
  ```
  
### Installation

1. install module globally
   ```sh
   npm i sf-sfdx -g
   ```
2. Add on .gitignore file the delta_deploy folder

3. Run the following command  that generates a package just with the modified files from the targetbranch
   ```sh 
    sf-sfdx -d targetbranch
   ```
4. In case you want also to deploy after the creation of the package use the following commands
   ```sh 
    sf-sfdx -d targetbranch -c -u orgToDeploy -l RunLocalTests
   ```  
Where: 
``-l determines the test level``
``-c determines if its check only`` 
``-u determines the org that the package will be deployed``    
   
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Used to increase the speed of the deployments.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

In case you want to contribute to the project and extend its funcationality please be free.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b scpdd/MyContribution`)
3. Commit your Changes (`git commit -m 'Added my small Contribution'`)
4. Push to the Branch (`git push origin scpdd/MyContribution`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Silvan Sholla - (https://www.linkedin.com/in/silvan-sholla-1155bb162/)

Project Link: (https://github.com/Skidrow17/salesforce-delta-deploy-source-format)

<p align="right">(<a href="#top">back to top</a>)</p>
