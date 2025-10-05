# 🌌 T-Boys Space Biology Knowledge Engine

**Built for the NASA Space Apps Challenge 2025**

The **Space Biology Knowledge Engine** is a web-based platform designed to make **NASA’s space biology research** more accessible, searchable, and interactive for students, scientists, and enthusiasts. It features a curated research library, AI-powered chat assistant, and intuitive UI designed for discovery and learning.

---

## 🚀 Project Overview

This project was developed as part of the **NASA Space Apps Challenge 2025** under the theme **“Build a Space Biology Knowledge Engine.”**

The goal:  
> To create a digital platform that aggregates, organizes, and explains NASA’s space biology data through AI and modern web technologies.

### 🌱 Why Space Biology?

Space biology explores how living organisms adapt to environments beyond Earth. Understanding these processes enables sustainable human exploration of Mars and beyond — influencing medicine, agriculture, and life sciences on Earth.

---

## 🧩 Features

| Feature | Description |
|----------|-------------|
| 📚 **Research Library** | Curated collection of 39 NASA space-biology papers on microgravity, genetics, bone density, and astronaut health. |
| 🧠 **AI Chat Assistant** | Concept of using A strong Retrieval Augmented Generation (RAG) based model to help users query space biology concepts conversationally. |
| 🏷️ **Smart Metadata** | Articles tagged with topics, categories, and keywords for easy filtering. |
| 🔍 **Advanced Search** | Filter research by publication date, topic, and relevance. |
| 🌓 **Adaptive Design** | Fully responsive layout with **light/dark mode** toggle for accessibility. |
| 💡 **Suggestions Box** | Users can suggest new ideas or papers to improve the knowledge base (the current version shows a front-end demo of how the suggestions box will look like); for production we would use a form linked to an email via a backend server or third-party services such as formspree.io. |

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **AI Engine** | Mistral 7B (this was used for the demo); for production we would use a stronger RAG based model which would cite the library's contents. |
| **Hosting** | GitHub (code) + Netlify (deployment) |
| **Data Source** | [NASA Open Data Portal](https://science.nasa.gov/biological-physical/data/) |

---

## 👨‍🚀 Team T-Boys

| Member | Role | Contribution |
|---------|------|--------------|
| **Anay Dhawan** | Development Lead | Built the frontend architecture, AI integration, and hosting pipeline. |
| **Shiven Sood** | Content Curator | Managed NASA research curation and visual design. |
| **Shaurya Jani** | Project Manager | Coordinated timelines, documentation, and submission logistics. |

---

## 🧭 Project Structure

```
T-Boys-Knowledge-Engine/
│
├── index.html          # Landing page
├── about.html          # About & project info
├── library.html        # NASA research library
├── ai.html             # AI chat interface
├── suggestions.html    # Feedback form
│
├── style.css           # Main styling
├── library.css         # Library-specific styles
├── ai.css              # AI chat interface styles
│
├── script.js           # Theme toggle, UI scripts
├── library.js          # Library-specific scripts
├── ai.js               # AI chat interface scripts
├── document.js         # Document display scripts
│
└── assets/             # Images, icons, resources
```

---

## ⚙️ View Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnayDhawan/TB-Space-Bio-Engine.git
   cd TB-Space-Bio-Engine
   ```

2. **Open `index.html` in your browser**
   ```bash
   open index.html
   ```

## ⚙️ Online Address
   https://space-biology-knowledge-engine.vercel.app/

---

## 🌐 Deployment

- **Frontend Hosting:** [Vercel](https://www.vercel.com/)  
- **Code Repository:** [GitHub](https://github.com/AnayDhawan)

To deploy manually:
```bash
vercel deploy
```

---

## 🧪 Future Improvements

- Integrate **full RAG pipeline** for context-aware AI responses.  
- Add **citation tracking** for each article.  
- Expand to **multi-dataset integration** (e.g., space medicine, astrobotany).  
- Introduce **user profiles and dashboards** for personalized research.
- Add **suggestions linked to email** for feedback.  

---

## 🛰️ Mission Statement

> Built with passion, dedication, and a commitment to advancing **space science education** through open data and AI innovation.

---

**T-Boys 2025 — NASA Space Apps Challenge Submission**  
*Advancing Space Biology Research for the Next Era of Exploration.*
