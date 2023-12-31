import os
from langchain.llms import Cohere
from langchain import PromptTemplate, LLMChain
from os.path import join, dirname
from dotenv import load_dotenv
import re

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
COHERE_API_KEY = os.environ.get("COHERE_API_KEY")


def get_cohere_data(question):
    template = "Question: {question}"

    prompt = PromptTemplate(template=template, input_variables=["question"])

    llm = Cohere(cohere_api_key=COHERE_API_KEY, model="command-nightly")
    llm_chain = LLMChain(prompt=prompt, llm=llm)

    answer = llm_chain.run(question)
    return answer


def get_raw_materials(product):
    question = f'Give me a non-numbered list of the 5 main countries that produce raw materials or minerals for the {product} and where they come from. Respond in the format of " " country name followed by a ":" followed by the raw materials or minerals in one line.'
    return get_cohere_data(question)


def get_manufacturers(product):
    question = f'The {product} is manufactured in a number of countries, with each country responsible for a different component or part. Here is a list of the main 5 countries and the parts they are responsible for within character limit. Place the country name first followed by a ":" followed by the componenets in one line.'
    return get_cohere_data(question)


def sort_materials(data):

    raw_materials = {}

    cleaned_data = re.sub(r'^\d+\.\s+', '', data, flags=re.MULTILINE)
    cleaned_data = cleaned_data.replace('-', '')
    lines = cleaned_data.strip().split('\n')

    for line in lines:
        materials = line.split(':', 1)  # Split only once
        if len(materials) == 2:
            country, materials = materials  # Split only once
            country = country.strip()
            materials = materials.strip()
            raw_materials[country] = materials

    else:
        # Handle lines without colon, if needed
        pass

    return raw_materials


def sort_goods(data):
    country_goods = {}

    # Use regular expression to remove numbers and leading whitespace
    cleaned_data = re.sub(r'^\d+\.\s+', '', data, flags=re.MULTILINE)
    cleaned_data = cleaned_data.replace('-', '')
    lines = cleaned_data.strip().split('\n')

    for line in lines:
        parts = line.split(':', 1)  # Split only once
        if len(parts) == 2:
            country, goods = parts
            country = country.strip()
            goods = goods.strip()
            country_goods[country] = goods
        else:
            # Handle lines without colon, if needed
            pass

    return country_goods
