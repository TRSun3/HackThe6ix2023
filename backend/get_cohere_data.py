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
    question = 'Who is Justin Bieber?'
    return get_cohere_data(question)

def get_manufacturers(product):
    question = 'Who is Cardi B?'
    return get_cohere_data(question)

