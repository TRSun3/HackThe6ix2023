import os
from langchain.llms import Cohere
from langchain import PromptTemplate, LLMChain
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
COHERE_API_KEY = os.environ.get("COHERE_API_KEY")

# template = """Question: {question}

# Answer: In a list, with the country first followed by a colon and then the type of raw material, comma separated. Do not include a number for the list.
# """
template = "{question}"

prompt = PromptTemplate(template=template, input_variables=["question"])

llm = Cohere(cohere_api_key=COHERE_API_KEY, model="command-nightly")
llm_chain = LLMChain(prompt=prompt, llm=llm)


question = '''
The iPhone is manufactured in a number of countries, with each country responsible for a different raw material. 
Here is a list of the main 5 countries and the raw material they are responsible for within character limit:
'''


answer = llm_chain.run(question)
print("Answer: ", answer)