module.exports.META_XML = '-meta.xml';
module.exports.SOURCE_FOLDER = 'force-app/main/default';
module.exports.DESTINATION_FOLDER = 'delta_deploy/force-app/main/default';

//Git Commands
module.exports.GIT_DIFF_NAME_COMMAND = 'git diff --name-only {!branchName}';
module.exports.GIT_FETCH_ALL_COMMAND = 'git fetch {!remoteBranch}';

//Error Messages
module.exports.NOT_REMOTE_BRANCH_SPECIFIED = 'You need to specify the target branch. Your command should look like, node delta_deploy.js {remoteName}/{branchName}';
module.exports.REMOTE_BRANCH_NOT_CORRECT_FORMAT = 'Remote Branch format should be like {remoteName}/{branchName}';

//Warrning Messages
module.exports.FILE_DELETED_VERIFY_DEST_CHANGED = '\x1b[33mFile : ${file} : Deleted (Verify that is present in destructive changes) \x1b[0m';
