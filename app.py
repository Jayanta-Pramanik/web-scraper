from flask import Flask, render_template, request, send_file
from scraper import scrape_products

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    data = []

    if request.method == "POST":
        product = request.form["product"]
        data = scrape_products(product)

    return render_template("index.html", data=data)

@app.route("/download")
def download():
    return send_file("output/products.xlsx", as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)