const chalk = require('chalk');
const yargs = require('yargs');

//customize yargs version 
yargs.version('1.1.0');

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler : function () {
        console.log('Adding a new note...');
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler : function () {
        console.log('Removing the note...');
    }
})

//create read command
yargs.command({
    command : 'read',
    describe : 'Read notes',
    handler : function () {
        console.log('Reading notes...');
    }
})

//create list command
yargs.command({
    command : 'list',
    describe : 'List all notes',
    handler : function () {
        console.log('Listing notes...');
    }
})

//add, remove, read, list

console.log(yargs.argv);