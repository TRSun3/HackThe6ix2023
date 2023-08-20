from flask import Flask
from get_cohere_data import get_raw_materials, get_manufacturers, sort_goods, sort_materials
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all origins, you can customize this as needed


@app.route('/', methods=['GET'])
def index():
    return 'Hello, World!'


@app.route('/api/<product>', methods=['GET'])
def returnData(product):
    product = product.replace("%20", " ")
    print(product)
    raw_materials = get_raw_materials(product)
    manufacturers = get_manufacturers(product)
    sorted_materials_data = sort_materials(raw_materials)
    sorted_manufacturers_data = sort_goods(manufacturers)

    return {
        'raw_materials': sorted_materials_data,
        'manufacturers': sorted_manufacturers_data
    }





if __name__ == '__main__':
    app.run(debug=True)
