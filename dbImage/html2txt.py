#!/bin/python3

import json 
import pprint 
import sys 
from bs4 import BeautifulSoup

def html2txt(htmlString):

	soup = BeautifulSoup(htmlString, "html.parser");
	textString = soup.get_text();

	return textString;


f = open('products.json', 'r')
products = json.loads(f.read())
f.close()


for p in products:
	p['description'] = html2txt(p['description'])

f = open('test-products.json', 'w')
f.write(json.dumps(products, ensure_ascii=False, indent=4))
f.close()


