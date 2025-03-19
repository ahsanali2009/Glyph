# Emoji Sentiment Analyzer

## 📌 Project Overview

Emoji Sentiment Analyzer is a simple yet effective web application that allows users to input an emoji and retrieve sentiment analysis data based on a dataset. The application fetches occurrences, positive, neutral, and negative sentiment values for the given emoji and visualizes them using a line graph.

## 🚀 Features

- **User Input for Emoji**: Users can enter any emoji to analyze its sentiment.
- **Sentiment Data Retrieval**: Fetches sentiment data (Occurrences, Positive, Neutral, Negative) from a Kaggle dataset.
- **Graph Visualization**: Displays a three-line graph comparing Positive, Neutral, and Negative sentiment trends.
- **Flask Backend**: Handles user input and processes the sentiment data.
- **JavaScript (Google Charts) Frontend**: Dynamically updates and displays the sentiment trend graph.

## 📂 Dataset

- The sentiment dataset used is sourced from Kaggle.
- It contains information about various emojis, including:
  - **Occurrences**: Total number of times the emoji appeared in analyzed data.
  - **Positive**: Number of positive mentions.
  - **Neutral**: Number of neutral mentions.
  - **Negative**: Number of negative mentions.

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   https://github.com/ahsanali2009/Glyph.git
   ```

2. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server**

   ```bash
   flask run
   ```

4. **Access the application**
   Open `http://127.0.0.1:5000` in your web browser.

## 🖼️ Visualization Example

When a user inputs an emoji, the system retrieves its sentiment data and generates a line graph with three distinct lines:

- 🟢 **Positive Sentiment**
- 🟡 **Neutral Sentiment**
- 🔴 **Negative Sentiment**

## 🛠️ Technologies Used

- **Python (Flask)** – Backend for processing user input.
- **Google Charts – For graphical representation of sentiment data.**
- **HTML, CSS, JavaScript** – Frontend for user interaction.
