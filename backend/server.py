from flask import Flask
from get_cohere_data import get_raw_materials, get_manufacturers


app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'Hello, World!'


@app.route('/api/<product>', methods=['GET'])
def returnData(product):
    raw_materials = get_raw_materials(product)
    manufacturers = get_manufacturers(product)
    return {
        'raw_materials': raw_materials,
        'manufacturers': manufacturers
    }


if __name__ == '__main__':
    app.run(debug=True)
