document.addEventListener('DOMContentLoaded', function () {
    const commandInput = document.getElementById('command-input');
    const outputDiv = document.getElementById('output');

    commandInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleCommand(commandInput.value);
            commandInput.value = '';
        }
    });

    function handleCommand(command) {
        const output = document.createElement('p');
        output.textContent = '> ' + command;
        outputDiv.appendChild(output);

        switch (command.toLowerCase()) {
            case 'help':
                printOutput('Available commands: about, projects, contact');
                break;
            case 'about':
                printOutput('This is a terminal-style portfolio. Add your about details here.');
                break;
            case 'projects':
                printOutput('List your projects and provide details.');
                break;
            case 'contact':
                printOutput('Provide your contact information.');
                break;
            default:
                printOutput('Command not recognized. Type "help" for a list of commands.');
        }
    }

    function printOutput(message) {
        const output = document.createElement('p');
        output.textContent = message;
        outputDiv.appendChild(output);
    }
});
