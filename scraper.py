from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import pandas as pd
import os
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')



def scrape_products(search):

    query = search.replace(" ", "+")

    # create folders
    if not os.path.exists("data"):
        os.makedirs("data")

    if not os.path.exists("output"):
        os.makedirs("output")

    # headless browser
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")

    driver = webdriver.Chrome(options=options)

    file_no = 0

    # scrape 2 pages
    for i in range(1, 3):
        driver.get(
            f"https://www.amazon.in/s?k={query}&page={i}"
        )

        time.sleep(3)

        elems = driver.find_elements(By.CLASS_NAME, "puisg-row")

        for elem in elems:
            d = elem.get_attribute("outerHTML")

            with open(f"data/{query}_{file_no}.html", "w", encoding="utf-8") as f:
                f.write(d)

            file_no += 1

    driver.quit()

    data = {'title': [], 'price': [], 'rating': []}

    for file in os.listdir("data"):

        try:
            with open(f"data/{file}", encoding="utf-8") as f:
                html_doc = f.read()

            soup = BeautifulSoup(html_doc, 'html.parser')

            t = soup.find("h2")
            p = soup.find("span", class_="a-price-whole")
            r = soup.find("span", class_="a-icon-alt")

            if t and p and r:
                data['title'].append(t.get_text(strip=True))
                data['price'].append(p.get_text(strip=True))
                data['rating'].append(r.get_text(strip=True))

        except:
            pass

        os.remove(f"data/{file}")

    df = pd.DataFrame(data)
    df.to_excel("output/products.xlsx", index=False)

    return df.to_dict(orient="records")
