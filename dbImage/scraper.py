#!/bin/python3

import requests
import json 
import pprint 
import sys 
import random
from bs4 import BeautifulSoup


def parse_single_category(html_page, pet_name, section_name):
	
	f = open(html_page, 'r')
	soup = BeautifulSoup(f.read(), 'html.parser')
	f.close()

	products = []

	attributes = { 'class': 'product-card-link' }
	for tag in soup.find_all('a', attributes):
		products.append(
			parse_single_page(tag['href'], pet_name, section_name)
		)

	return products

def parse_single_page(URL, pet_name, section_name):

	html_page = requests.get(URL)

	soup = BeautifulSoup(html_page.text, 'html.parser')

	for tag in soup.find_all('script',  { 'type': 'application/ld+json', 'data-rh': 'true' }):
		
		tag_object  = json.loads(tag.text)
		if 'name' in tag_object and 'image' in tag_object and len(tag_object['image']) > 0 and 'description' in tag_object and 'offers' in tag_object and 'price' in tag_object['offers']:
			return {
				'pet': pet_name,
				'section': section_name,
				'title': tag_object['name'],
				'image': tag_object['image'][0],
				'description': tag_object['description'],
				'price': tag_object['offers']['price'],
				'alt': "",
				'pieces_left': random.randint(0, 100)
			}

			

f = open('test-products.json', 'r')
products = json.loads(f.read())
f.close()
output = products + parse_single_category(sys.argv[1], sys.argv[2], sys.argv[3])

f = open('test-products.json', 'w')
f.write(json.dumps(output, ensure_ascii=False, indent=4))
f.close()


