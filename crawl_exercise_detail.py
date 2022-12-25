from collections import defaultdict

import scrapy
import json

class FitnessSpider(scrapy.Spider):
    name = "fitness_detail"
    start_urls = []

    def __init__(self, name=None, **kwargs):
        super().__init__(name, **kwargs)
        self._data = self._load_fitness_data()
        self._data_mapping = {}

    def _load_fitness_data(self):
        with open("fitness2.json", "r") as f:
            items = json.load(f)
        return items

    def start_requests(self):
        for key in self._data:
            if key == "chest":
                continue

            for i, item in enumerate(self._data[key]):
                self._data_mapping[item["detail_link"]] = [key, i]
                yield scrapy.Request(item["detail_link"], self.parse)

    def parse(self, response):
        key, index = self._data_mapping[response._url]
        content = response.css(".post_content")
        img_links = [item.attrib["src"] for item in content.css("img")]
        big_gif = img_links[0]
        impacted_muscle_img = img_links[1] if len(img_links) == 2 else ""

        lists = content.css("ul")
        how_steps = []
        benefits = []

        if len(lists) == 1:
            benefits = self._get_list_content(lists[0].css("li").getall())
        elif len(lists) == 2:
            how_steps = self._get_list_content(lists[0].css("li").getall())
            benefits = self._get_list_content(lists[1].css("li").getall())

        self._data[key][index]["big_gif"] = big_gif
        self._data[key][index]["impacted_muscle_img"] = impacted_muscle_img
        self._data[key][index]["how_steps"] = how_steps
        self._data[key][index]["benefits"] = benefits
        
        print("===" * 10)
        print("big_gif", big_gif)
        print("impacted_muscle_img", impacted_muscle_img)
        print("how_steps", how_steps)
        print("benefits", benefits)
        print("===" * 10)
        
    def _get_list_content(self, list_items):
        return [item.replace("<li>", "").replace("</li>", "") for item in list_items]

    def closed(self, reason):
        print("Reason", reason)

        with open("fitness2.json", "w") as f:
            json.dump(self._data, f, indent=2)
