
const {EXCLUDED_FILES, META_XML, FOLDER_SEPARATOR, NOT_REMOTE_BRANCH_SPECIFIED, REMOTE_BRANCH_NOT_CORRECT_FORMAT, FILE_DELETED_VERIFY_DEST_CHANGED, WILDCARD_FOLDERS} = require('../util/Constants');
const fse = require('fs-extra');


/****************************************************************************************************
 author : Silvan Sholla
 date : 25/06/22
 @param {String} key - contains the key of the map
 @param {List<String>} value - contains the value of the map
 @param {Map<String, List<String>>} folderFileName - contains the map values
 description : method used to create a map with key as folder name
 and value a list of metadata files of that folder
 ****************************************************************************************************/

const addValueToKey = (key, value, folderFileName) => {
    folderFileName[key] ??= [];
    if(!folderFileName[key].includes(value)){
        folderFileName[key].push(value);
    }
};


/****************************************************************************************************
 author : Silvan Sholla
 date : 25/06/22
 @param {Object[]} jsonObject - contains a json object
 description : converts jsonobject to a map
 ****************************************************************************************************/

const jsonToMap = (jsonObject) => {
    let folderObjectMap = new Map();
    for(let attributename in jsonObject){
        folderObjectMap.set(jsonObject[attributename].directoryName,jsonObject[attributename]);
    }
    return folderObjectMap;
};

/****************************************************************************************************
 author : Silvan Sholla
 date : 26/06/22
 @param {String} commandParam - checks the param validity
 description : return true in case there was an error and the program stops
 ****************************************************************************************************/

const isArgumentValid = (commandParam) => {
    if(commandParam == null){
        console.log(NOT_REMOTE_BRANCH_SPECIFIED);
        return true;
    }
    else if(commandParam.split('/').length != 2) {
        console.log(REMOTE_BRANCH_NOT_CORRECT_FORMAT);
        return true;
    }else{
        return false;
    }
};

/****************************************************************************************************
 author : Silvan Sholla
 date : 25/06/22
 @param {List<String>} files - contains list of the paths of the files that got modified
 @param {String} sourceDirectory - contains the source folder path
 @param {String} destinationDirectory - contains the destination folder path
 description : coppies the modified/created files from the source folder
 to the destination folder
 ****************************************************************************************************/

const filesCopyFromSourceToDestinationFolder = (files,sourceDirectory,destinationDirectory) => {

    let folderFilesMap = new Map();

    files.forEach(function (file) {

        if(file.includes(sourceDirectory)) {

            /*
                Also deleted files are considered a change so there is a possiblity the file doesnt excist anymore
                so a check is needed
            */

            if(fse.existsSync(file)){
                fse.copySync(file,file.replace(sourceDirectory, destinationDirectory));
            } else {
                console.log(FILE_DELETED_VERIFY_DEST_CHANGED.replace('${file}', file));
            }

            /*
                in case the metadata file contains extra .meta.xml file copy that also
                its required for a successfull deploy
            */

            if(fse.existsSync(file.concat(META_XML))){
                fse.copySync(file.concat(META_XML),file.replace(sourceDirectory, destinationDirectory).concat(META_XML));
            }

        }

    });
    
    return folderFilesMap;
}

/****************************************************************************************************
 author : Silvan Sholla
 date : 16/11/22
 @param {String} commandParam - checks the param validity
 description : return true in case there was an error and the program stops
 ****************************************************************************************************/

const sfdxCommandGenerator = (options) => {
    let mainCommand = 'sfdx force:source:deploy -p delta_deploy/force-app';
	
	if(options.username){
		mainCommand = mainCommand + ' -u '+options.username;
	}
		
	if(options.testLevel){
		mainCommand = mainCommand + ' -l '+options.testLevel;
	}
	
	if(options.checkOnly){
		mainCommand = mainCommand + ' -c ';
	}

	return mainCommand;
};


exports.addValueToKey = addValueToKey;
exports.jsonToMap = jsonToMap;
exports.filesCopyFromSourceToDestinationFolder = filesCopyFromSourceToDestinationFolder;
exports.isArgumentValid = isArgumentValid
exports.sfdxCommandGenerator = sfdxCommandGenerator