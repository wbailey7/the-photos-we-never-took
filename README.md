# 🖼️ The Photos We Never Took

*A generative AI memorial project honoring my younger brother through images that never existed — but should have.*

---

## 📖 About This Project

In May 2018, my younger brother died by suicide. He was 17 — a high school junior with his whole life ahead of him.

This project is a tribute to him.

Using AI, I trained a custom model on real photographs of my brother, then generated new portraits of moments we never captured — him graduating, holding my newborn son, laughing at the lake with me after moving home to Tennessee. These are **The Photos We Never Took**.

The goal is to blend memory, emotion, and technology into a deeply personal experience — and to demonstrate the potential of generative AI when used with purpose.

---

## 🌐 Live Site (coming soon)

> [thephotoswenevertook.com](https://thephotoswenevertook.com)

Visitors will be able to:
- View AI-generated images of imagined moments
- Enter prompts like "My brother on prom night" and see results in real time
- Read the story and technical breakdown behind the project

---

## 🧠 Built With

- **Stable Diffusion 1.5**
- **LoRA fine-tuning** (kohya_ss)
- **Gradio** (interactive interface)
- **React + Tailwind CSS** (frontend site)
- **(Optional)** Flask / FastAPI for custom inference endpoint

---

## 🗂️ Project Structure

```
the-photos-we-never-took/
├── frontend/                    # React/Next.js website
│   ├── app/ or pages/           # Homepage React code
│   ├── public/                  # Static assets (favicon, images)
│   ├── styles/                  # Tailwind/global CSS
│   ├── components/              # Reusable UI components
│   └── package.json             # Frontend config
│
├── ai-model/                    # LoRA training setup
│   ├── images/                  # Scanned/prepped training photos
│   ├── config.json              # kohya_ss training config
│   ├── lora_output/             # Trained LoRA .safetensors file
│   └── logs/                    # Training logs
│
├── backend/                     # Optional: inference API
│   ├── main.py                  # Flask or FastAPI app
│   └── model_loader.py          # Load base + LoRA model
│
├── .gitignore
├── README.md                    # You are here
└── LICENSE                      # Optional for open-source use
```

---

## 🧪 How It Works

1. I curated ~25 scanned images of my brother (ages 14–17)
2. Trained a LoRA module using **kohya_ss** on top of SD 1.5
3. Connected the model to an interactive frontend with Gradio
4. Visitors input prompts — the app returns AI-generated portraits in real time

---

## 💡 Future Plans

- Host on Hugging Face Spaces or Vercel + RunPod
- Add timeline-style generation: "My brother at age 18, 19, 20..."
- Include ControlNet background injection (e.g., him at a campground)
- Allow visitors to submit prompt ideas or contribute their own memories

---

## 🤝 Get In Touch

If you’re hiring for AI/generative projects — or this story resonates with you — I’d love to talk.

- 💼 [LinkedIn](https://linkedin.com/in/yourprofile)
- 📧 wes.bailey10@gmail.com
---

## 🙏 A Note on Loss

If you or someone you know is struggling with mental health, you are not alone.

- 📞 National Suicide Prevention Lifeline: 988
- 💬 Crisis Text Line: Text HOME to 741741

---

## 📜 License

MIT License. LoRA weights and training data are personal and not publicly redistributed.