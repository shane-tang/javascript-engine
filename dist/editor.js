var gamePath = '../src/game/';
var openFile = 'dummy.js';

var codeEditor = CodeMirror(document.body, {
    theme: 'material-palenight',
    autofocus: true,
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {'Ctrl-/': 'toggleComment'},
    mode: 'javascript'
});

$.ajax({
    url: gamePath + openFile,
    type: 'get',
    contentType: 'text/plain',
    async: false,
    success: function(contents) {
        codeEditor.setValue(contents);

        $('#editor').append(codeEditor);
    }
});

$('#save-button').click(() => {
    saveFile(openFile)
});

function saveFile(filename) {
    $.ajax({
        url: gamePath + filename,
        type: 'post',
        contentType: 'text/plain',
        data: 'this is at est'
        // data: codeEditor.getValue()  
    });
}