import { customAlert } from '../customAlert.js'

function getAndShowPetSections()
{
	const pet = $('#pet-select > option:checked').attr('value');
	$.getJSON(`/sections?pet=${pet}`, 
		function (sections)
		{
			const sel = $('#section-select');
			let innerHTML = '<option value="" selected disable hidden>-- Scegli la sezione --</option>';

			for (let i = 0; i < sections.length; i++) {
				innerHTML += `<option value="${sections[i]._id}">${sections[i].name}</option>`;
			}

			sel.html(innerHTML);
		});
}

function getAndShowPetSelect()
{
	$.getJSON('/pets', 
		function (pets)
		{
			const sel = $('#pet-select');
			let innerHTML = '<option value="" selected disabled hidden>-- Scegli l\'animale --</option>';

			for (let i = 0; i < pets.length; i++) {
				innerHTML += `<option value="${pets[i]._id}">${pets[i].name}</option>`;
			}

			sel.html(innerHTML);
		});

}

function createNewProduct()
{
	const f = $('#product-form');
	const pet = $('#pet-select > option:selected').val();
	const section = $('#section-select > option:selected').val();
	const title = $('#title').val();
	const price = $('#price').val();
	const pieces_left = $('#pieces-left').val();
	const image = $('#product-image')[0].files[0];
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
		url: `/${f.attr('action')}`,
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
			'Prodotto creato con <span class="text-success">successo</span>',
			'backoffice/ecommerce/'
		);
	})
	.catch((err) => {
		customAlert(
			'Ecommerce',
			'Creazione prodotto <span class="text-danger">fallita</span>',
			'backoffice/ecommerce/'
		);
	});

}

$(document).ready(() => {

	getAndShowPetSelect();

	$('#pet-select').change(getAndShowPetSections);

	$('#product-form').submit((event) => {
		createNewProduct();
		return false;
	});

});
	
