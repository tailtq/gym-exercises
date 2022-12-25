from collections import defaultdict

import scrapy
import json

class FitnessSpider(scrapy.Spider):
    name = 'fitness'
    start_urls = [
        "https://fitnessprogramer.com/exercise-primary-muscle/neck/",
        "https://fitnessprogramer.com/exercise-primary-muscle/trapezius/",
        "https://fitnessprogramer.com/exercise-primary-muscle/shoulders/",
        "https://fitnessprogramer.com/exercise-primary-muscle/chest/",
        "https://fitnessprogramer.com/exercise-primary-muscle/back/",
        "https://fitnessprogramer.com/exercise-primary-muscle/biceps/",
        "https://fitnessprogramer.com/exercise-primary-muscle/triceps/",
        "https://fitnessprogramer.com/exercise-primary-muscle/forearm/",
        "https://fitnessprogramer.com/exercise-primary-muscle/abs/",
        "https://fitnessprogramer.com/exercise-primary-muscle/leg/",
        "https://fitnessprogramer.com/exercise-primary-muscle/calf/",
        "https://fitnessprogramer.com/exercise-primary-muscle/hip/",
        "https://fitnessprogramer.com/exercise-primary-muscle/cardio/",
        "https://fitnessprogramer.com/exercise-primary-muscle/erector-spinae/",
        "https://fitnessprogramer.com/exercise-primary-muscle/full-body/",
    ]

    def __init__(self, name=None, **kwargs):
        super().__init__(name, **kwargs)
        self._results = defaultdict(list)

    def parse(self, response):
        part = response._url.split("/")[4]

        for item in response.css(".wpt_exercise_archive article.entry"):
            self._results[part].append({
                "title": item.css(".title a::text").get().strip(),
                "primary_muscles": item.css(".primary_muscles::text").getall()[-1].strip().split(", "),
                "small_gif": item.css(".thumbnails img").attrib["src"].strip(),
                "detail_link": item.css(".title a").attrib["href"].strip(),
            })

        for next_page in response.css(".page-numbers.next"):
            yield response.follow(next_page, self.parse)

    def closed(self, reason):
        print("Reason", reason)

        with open("fitness.json", "w") as f:
            json.dump(self._results, f, indent=2)
