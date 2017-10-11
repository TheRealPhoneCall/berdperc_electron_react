import jsonfile from 'jsonfile'

function getJsonObject (jsonFilePath) {
    jsonfile.readFile(jsonFilePath, function(err, obj) {
        return obj
    })
}