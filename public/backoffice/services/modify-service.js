import { customAlert } from '../customAlert.js'

function show_pet_services_select()
{
	const pet = $('#pet-select > option:checked').attr('value');
	$.getJSON(`/services?pet=${pet}`, 
		function (services)
		{
			const sel = $('#service-select');
			let innerHTML = '<option value="" selected disasble hidden>-- seleziona un servizio --</option>';

			for (let i = 0; i < services.length; i++) {
				innerHTML += `<option value="${services[i]._id}">${services[i].name}</option>`;
			}

			sel.html(innerHTML);
		});
}

function updateService()
{
	const f = $('#modify-form');
	const pet = $('#pet-select > option:selected').val();
	const service = $('#service-select > option:selected').val();
	const location = $('#location-select > option:selected').val();
	const price = $('#modify-price').val();
	const reservation_left = $('#modify-reservation-left').val();
	const pet_size = $('#pet-size-select > option:selected').val();

	const date = $('#modify-date').val(); /* parsed by the browser in UTC format */
	const time = $('#modify-time').val(); /* 24-hour format hh:mm */
	let utcDate;

	try {
		utcDate = new Date(date + 'T' + time).toISOString();
	}
	catch (err) {
		customAlert(
			'Servizi prenotabli',
			'Aggiornamento <span class="text-danger">fallito</span>, data o ora mancante',
			'backoffice/services/'
		);
		return;
	}

	const serviceData = {
		'pet': pet,
		'service': service,
		'location': location,
		'price': price,
		'reservation_left': reservation_left,
		'pet_size': pet_size,
		'day': utcDate
	};

	$.post(`/${f.attr('action')}`, serviceData)
	.then((res) => {
		customAlert(
			'Servizi prenotabili',
			'Aggionamento avvenuto con <span class="text-success">successo</span>',
			'backoffice/services/'
		);
	})
	.catch((err) => {
		customAlert(
			'Servizi prenotabili',
			'Aggiornamento servizio <span class="text-danger">fallito</span>',
			'backoffice/services/'
		);
	});

}

$(document).ready(() => {
	$('#pet-select').change(show_pet_services_select);
	$('#modify-form').submit((event) => {
		updateService();
		return false;
	});

	/* convert time from UTC to localTime */
	const d = $('#modify-date');
	const t = $('#modify-time');

	let ld = new Date(`${d.val()}T${t.val()}:00Z`);
	let strTime = `${ld.getHours()}:${ld.getMinutes()}`;
	if (strTime.length < 5) strTime = '0' + strTime;
	t.val(strTime);


});
	
