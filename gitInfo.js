/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.
    You'll provide the command as well as what it does.
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefinition = 'Git is the most commonly used version control system'

console.log(gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = 'GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code'
console.log(gitHubDefinition);
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/
let init = {
    gitinit: "Create empty Git repo in specified directory. Run with no arguments to initialize the current directory as a git repository.",
}

console.log(init.gitinit)
//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    gitclone: 'Clone repo located at <repo> onto local machine. Original repo can be located on the local filesystem or on a remote machine via HTTP or SSH.',
}
console.log(clone.gitclone)
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    gitstatus: 'List which files are staged, unstaged, and untracked',
}
console.log(status.gitstatus)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    gitadd: 'Stage all changes in <directory> for the next commit. Replace<directory> with a < file > to change a specific file.',
}
console.log(add.gitadd)
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    gitcommitm: 'Commit the staged snapshot, but instead of launching a text editor, use<message> as the commit message.',
}
console.log(commit.gitcommitm)
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    gitpush: 'Push the branch to <remote>, along with necessary commits and objects.Creates named branch in the remote repo if it doesn’t exist.',
}
console.log(push.gitpush)
