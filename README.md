# 🌐 Personal Portfolio - Tú Phan

Welcome to my personal software engineering portfolio!  
This project showcases my skills, experience, and side projects in a clean and responsive layout.

🔗 **Live Site:** [tus-portfolio.vercel.app](https://tus-portfolio.vercel.app/)

## 📌 About Me

I'm Tú Phan, a Software Engineer with a passion for building modern, efficient, and user-friendly applications. I specialize in [insert your focus, e.g., full-stack development, Java backend, or frontend engineering], and I enjoy solving real-world problems through code.

## 🚀 Features

- Responsive design for all devices
- Animated and interactive UI
- Project showcase with live links and GitHub repos
- Contact form integration
- About me and skills sections

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Hosting:** [Vercel](https://vercel.com/)

## Updating the resume

The editable content lives in `scripts/build_resume.py`. Build with Python 3.9+:

```sh
python3 -m venv /tmp/portfolio-resume-venv
/tmp/portfolio-resume-venv/bin/pip install -r scripts/requirements-resume.txt
/tmp/portfolio-resume-venv/bin/python scripts/build_resume.py
```

The script creates a one-page PDF under `output/pdf/`, updates the website PDF
and its exact PNG preview in `src/assets/resume/`, and refreshes the legacy
public download URL. It checks page count, required GearGames content, and text
bounds. Visually inspect the generated preview before shipping.

It uses macOS's Times New Roman fonts. On another system, set `RESUME_FONT_DIR`
to a directory containing the regular, bold, italic, and bold italic TTF files
named as in the script.

## 📬 Contact

Feel free to reach out via the contact form on the website or connect with me on [LinkedIn](https://www.linkedin.com/) (update with your link).

---

⭐ If you like this portfolio, feel free to fork it, star it, or use it as a reference!

