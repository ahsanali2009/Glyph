from flask import request
import csv

def form():
        inputEmoji = request.form.get("emoji-form")
        with open("Emoji_Sentiment_Data_v1.0.csv", mode="r",encoding="utf8") as file:
            csvFile = csv.reader(file)
            for line in csvFile:
                if line[0] == inputEmoji:
                    class EmojiProperties:
                         def __init__(self,emoji,Occurrences,Negative,Positive,Neutral):
                            self.emoji = emoji
                            self.Occurrences = Occurrences
                            self.Negative = Negative
                            self.Positive = Positive
                            self.Neutral = Neutral
                    
                    return EmojiProperties(line[0], line[2], line[4], line[6], line[5])