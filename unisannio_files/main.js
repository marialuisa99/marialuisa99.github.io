const pickers = {
	surname: document.getElementById('surname'),
};

function pickHandler (e) {
	if(pickers.surname.value){
	    if(pickers.surname.value.length>0){
	    	Telegram.WebApp.MainButton.show()
	    }
	}
}

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
}

pickers.surname.addEventListener('change', pickHandler)
document.addEventListener('DOMContentLoaded', init)
