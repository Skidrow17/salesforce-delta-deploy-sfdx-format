#!/usr/bin/env node

/****************************************************************************************************
 author : Silvan Sholla
 date : 25/06/22
 description : excecutable
 example : node delta_deploy.js origin/master
 ****************************************************************************************************/

 const fs = require('fs');
 const yargs = require("yargs");
 const { execSync, exec } = require('child_process');
 
 const {SOURCE_FOLDER, GIT_DIFF_NAME_COMMAND, DESTINATION_FOLDER, GIT_FETCH_ALL_COMMAND, STANDARD_PACKAGE_VERSION} = require('./delta_deploy/util/Constants');
 
 const methods = require('./delta_deploy/util/Methods');
 
 
 const options = yargs
     .usage("Usage: -d <destinationBranch>")
     .option("t", { alias: "targetBranch", describe: "target branch", type: "string", demandOption: true })
     .option("u", { alias: "username", describe: "org/username you want to deploy", type: "string" })
     .option("c", { alias: "checkOnly", describe: "validate package", type: "boolean" })
     .option("l", { alias: "testLevel", describe: "test level of deploy", type: "string" })
     .option("d", { alias: "deploy", describe: "perform deploy", type: "boolean" })
     .argv;
 
 
 let targetBranch = options.targetBranch;
 if (methods.isArgumentValid(targetBranch)){return;}
 
 //run git command to find the differences between current and target branch
 const gitFetchAll = execSync(GIT_FETCH_ALL_COMMAND.replace('{!remoteBranch}',targetBranch.replace('/',' ')), { encoding: 'utf-8' });
 const sourceDestinationBranchesFilesDiff = execSync(GIT_DIFF_NAME_COMMAND.replace('{!branchName}',targetBranch), { encoding: 'utf-8' }).split('\n');
 
 //delete folder
 fs.rmSync(DESTINATION_FOLDER, { recursive: true, force: true });
 fs.mkdirSync(DESTINATION_FOLDER, {recursive: true});
 
 //copy files FromSource to Destinatior
 let filesCoppied = methods.filesCopyFromSourceToDestinationFolder(sourceDestinationBranchesFilesDiff, SOURCE_FOLDER, DESTINATION_FOLDER);
 
 if(options.deploy){
     const excecutionResult = exec(methods.sfdxCommandGenerator(options), { encoding: 'utf-8' });
     excecutionResult.stdout.on('data', function(data) {
         console.log(data); 
     });
 }
