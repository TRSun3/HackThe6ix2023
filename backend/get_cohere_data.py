import os
from langchain.llms import Cohere
from langchain import PromptTemplate, LLMChain
from os.path import join, dirname
from dotenv import load_dotenv

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
    question = 'Give me a list of the 5 main countries that produce raw materials or minerals for the Iphone and where they come from. Place the country name first followed by a ':' followed by the raw materials or minerals in one line.'
    return get_cohere_data(question)

def get_manufacturers(product):
    question = 'The iPhone is manufactured in a number of countries, with each country responsible for a different component or part. Here is a list of the main 5 countries and the parts they are responsible for within character limit. Place the country name first followed by a ':' followed by the componenets in one line.'
    return get_cohere_data(question)

