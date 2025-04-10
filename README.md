# Harvestify
# 🌾 Harvestify - Empowering Farmers with Technology

Harvestify is a full-stack web application that bridges the gap between farmers and technology. It allows farmers to sell crops, rent agricultural tools, and detect plant diseases using AI — all in one platform.

---

## 🚀 Features

### 🌱 Crop Selling Portal
- Farmers can list crops with images, prices, and quantities.
- Buyers can browse available crops and contact the seller directly.

### 🛠 Tool Lending Marketplace
- Farmers can rent out their unused tools.
- Others can browse and rent tools as needed for farming tasks.

### 🧠 Plant Disease Detection using AI
- Upload an image of a plant leaf.
- Get instant results about disease type using a trained ResNet9 model.
- Suggested remedies are also displayed.

### 📸 Image Uploads
- Users can upload crop and tool images for better presentation and reliability.

---

## 🧑‍💻 Tech Stack

- **Frontend:** HTML, Tailwind CSS
- **Backend:** Flask (Python)
- **Database:** SQLite (for local development)
- **AI Model:** PyTorch (ResNet9)
- **Other:** Flask-Uploads, Pillow, OpenCV

---

## 🛠 How to Run Locally

### 1️⃣ Clone the Repository
git clone https://github.com/amgaikwad4588/Harvestify.git
cd Harvestify

### 2️⃣ Create a Virtual Environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3️⃣ Install the Requirements
pip install -r requirements.txt

4️⃣ Run the Flask Application
python app.py

Now open your browser and visit:
http://127.0.0.1:5000


Let me know if you want me to add deployment steps for platforms like **Render**, **Railway**, or **Heroku** too.
