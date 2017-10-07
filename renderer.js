// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const {ipcRenderer} = electron;
const PythonShell = require('python-shell');
const fs = require('fs');
const jsonfile = require('jsonfile')

const COM = 'COM5'
const tblbody_rock = document.getElementById('tblbody-rock');

function runPython_ArduinoSTD(com, json_file) {
    // Python script called from the app
    // example: python main.py -t arduino_std -cp COM6 -br 31250 -pc basic.json
    var script = 'main.py';

    console.log("runPython_ArduinoSTD")

    var options = {
        mode: 'text',
        // pythonPath: 'C:/Python27',
        pythonOptions: ['-u'],
        // scriptPath: 'C:/Users/Lenovo/Documents/_BERDWARE/7.0_BerDrums/version_pyduino',
        args: ['-t', 'arduino_std', '-cp', com, '-br', '31250', '-pc', json_file]
    };

    PythonShell.run(script, options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
}

window.addEventListener('load', renderTable);
function renderTable(){
    console.log("Rendering table")
    var padMapPath = 'settings/pad_maps'
    fs.readdir(padMapPath, (err, dir) => {
        // loop through file system
        for(let filePath of dir) {
            console.log(filePath)
            jsonFilePath = `${padMapPath}/${filePath}`
            jsonfile.readFile(jsonFilePath, function(err, obj) {
                console.dir(obj)

                // append row
                const tr = document.createElement('tr');
                tr.id = `map-${obj.id}`            
                tr.innerHTML = `
                    <td id="name-${obj.id}">${obj.name}</td>
                    <td>${obj.plugin}</td>
                    <td>${obj.plugin_map}</td>
                    // <td>${obj.description}</td>
                    <td>${obj.used_for}</td>
                    <td>Rock</td>
                    <td>
                        <a class="btn-floating tiny waves-effect waves-light red run-pad-btn" id="run-${obj.id}"><i class="tiny material-icons left">send</i>Run</a>
                        <a class="btn-floating waves-effect waves-light red edit-pad-btn" id="edit-${obj.id}"><i class="tiny material-icons left">mode_edit</i>Edit</a>
                    </td>
                `
                tblbody_rock.appendChild(tr);

                // attach button event handlers 
                var runBtn = document.querySelector(`#run-${obj.id}`)
                runBtn.addEventListener('click', runPython_RunPad)
                function runPython_RunPad(e){
                    runPython_ArduinoSTD(COM, json_file=`${filePath}`)
                }
            })
            
        }
    });

    
}





