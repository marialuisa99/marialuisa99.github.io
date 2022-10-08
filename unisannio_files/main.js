const pickers = {
	surname: document.getElementById('surname'),
};
function sendData () {
    var data=""
    if(pickers.surname.value){
        data = pickers.surname.value
    }
	Telegram.WebApp.sendData(data)
}

function init () {
	Telegram.WebApp.ready()
	Telegram.WebApp.MainButton
		.setText('Cerca Docente')
		.onClick(sendData)
		.enable()
		.show()
}
document.addEventListener('DOMContentLoaded', init)
