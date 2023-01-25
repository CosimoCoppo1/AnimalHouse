import { customAlert } from '../customAlert.js'

function getAndShowPetSections(petId, defaultSectionId)
{
	$.getJSON(`/sections?pet=${petId}`, 
		function (sections)
		{
			const sel = $('#section-select');
			let innerHTML = '';
			if (defaultSectionId === undefined) {
				innerHTML += `<option value="" selected disable hidden>-- Seleziona una sezione --</option>`;
			}

			for (let i = 0; i < sections.length; i++) {
				if (sections[i]._id === defaultSectionId) {
					innerHTML += `<option value="${sections[i]._id}" selected>${sections[i].name}</option>`;
				}
				else {
					innerHTML += `<option value="${sections[i]._id}">${sections[i].name}</option>`;
				}
			}

			sel.html(innerHTML);
		});
}

function getAndShowPetSelect(defaultPetId)
{
	$.getJSON('/pets', 
		function (pets)
		{
			const sel = $('#pet-select');
			let innerHTML = '';

			for (let i = 0; i < pets.length; i++) {
				if (pets[i]._id === defaultPetId) {
					innerHTML += `<option value="${pets[i]._id}" selected>${pets[i].name}</option>`;
				}
				else {
					innerHTML += `<option value="${pets[i]._id}">${pets[i].name}</option>`;
				}
			}

			sel.html(innerHTML);

		});

}

function initForm(product)
{
	$('#title').val(product.title);
	$('#price').val(product.price);
	$('#pieces-left').val(product.pieces_left);
	$('#img').val(product.image);
	$('#alt').val(product.alt);
	$('#description').val(product.description);
}

function modifyProduct(productId)
{
	const pet = $('#pet-select > option:selected').val();
	const section = $('#section-select > option:selected').val();
	const title = $('#title').val();
	const price = $('#price').val();
	const pieces_left = $('#pieces-left').val();

	let image = $('#product-image')[0]
	if (image.files.length > 0) { 
		image = image.files[0];
	 }

	const alt = $('#alt').val();
	const description = $('#description').val();

	let productData = new FormData();
	productData.append('pet', pet);
	productData.append('section', section);
	productData.append('title', title);
	productData.append('price', price);
	productData.append('pieces_left', pieces_left);
	productData.append('product-image', image); 
	productData.append('alt', alt);
	productData.append('description', description);

	$.ajax({
		url: `/products/${productId}/modify`,
		data: productData,
		cache: false,
		contentType: false,
		processData: false,
		method: 'POST',
		type: 'POST', // For jQuery < 1.9
	})
	.then((res) => {
		customAlert(
			'Ecommerce',
			'Prodotto modificato con <span class="text-success">successo</span>',
			'backoffice/ecommerce/'
		);
	})
	.catch((err) => {
		customAlert(
			'Ecommerce',
			'Modifica prodotto <span class="text-danger">fallita</span>',
			'backoffice/ecommerce/'
		);
	});

}

let productId = getUrlParameter('id');
$(document).ready(() => {
	$.getJSON(`/products?id=${productId}`,
		function (product) {
			initForm(product[0]);
			getAndShowPetSelect(product[0].pet._id);
			getAndShowPetSections(product[0].pet._id, product[0].section._id);
		});
	
	$('#pet-select').change(
		function () {
			const pet = $('#pet-select > option:selected').attr('value');
			getAndShowPetSections(pet, undefined);
		});

	$('#product-form').submit((event) => {
		modifyProduct(productId);
		return false;
	});

});
	
function getUrlParameter(sParam)
{
	let sPageURL = window.location.search.substring(1);
	let sURLVariables = sPageURL.split('&');

	for (let i = 0; i < sURLVariables.length; i++) {
		let sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1];
		}
	}
}
