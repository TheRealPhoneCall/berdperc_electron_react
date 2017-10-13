import jsonfile from 'jsonfile'
import path from 'path'

const PyShell = {
    arduino_std: function(com, baud_rate, json_file) {
        // Python script called from the app
        // example: python main.py -t arduino_std -cp COM6 -br 31250 -pc basic.json
        var script = 'main.py';

        console.log("runPython_ArduinoSTD")

        var options = {
            mode: 'text',
            pythonPath: 'C:/Python27',
            pythonOptions: ['-u'],
            scriptPath: path.join(__dirname, 'main.py'),
            args: ['-t', 'arduino_std', '-cp', com, '-br', baud_rate, '-pc', json_file]
        };

        PythonShell.run(script, options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            console.log('results: %j', results);
        });
    }
}

export { PyShell }