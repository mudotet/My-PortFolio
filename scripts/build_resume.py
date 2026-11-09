"""Build the one-page portfolio resume and its exact PNG preview.

Requires reportlab and pymupdf. Run from any directory with Python 3.
Set RESUME_FONT_DIR to a folder containing the four Times New Roman TTFs
when building outside macOS. Content is intentionally maintained here.
"""

import os
from pathlib import Path
import shutil

import fitz
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
NAME = "PHAN_THANH_TU_CV_SOFTWARE_ENGINEER_GENERAL"
OUT = ROOT / "output/pdf" / f"{NAME}.pdf"
ASSETS = ROOT / "src/assets/resume"
FONT_DIR = Path(os.environ.get("RESUME_FONT_DIR", "/System/Library/Fonts/Supplemental"))
for name, suffix in [("Resume", ""), ("ResumeBold", " Bold"), ("ResumeItalic", " Italic"), ("ResumeBoldItalic", " Bold Italic")]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / f"Times New Roman{suffix}.ttf")))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold", italic="ResumeItalic", boldItalic="ResumeBoldItalic")

OUT.parent.mkdir(parents=True, exist_ok=True)
pdf = canvas.Canvas(str(OUT), pagesize=letter)
pdf.setTitle("Phan Thanh Tu - Software Engineer Resume")
pdf.setAuthor("Phan Thanh Tu")
WIDTH, HEIGHT = letter
LEFT, RIGHT = 30, WIDTH - 30
y = HEIGHT - 29
body = ParagraphStyle("body", fontName="Resume", fontSize=10.3, leading=12.2)


def paragraph(text, *, indent=0, gap=2, size=None, align=0):
    global y
    style = ParagraphStyle("line", parent=body, alignment=align)
    if size:
        style.fontSize = size
        style.leading = size + 2
    block = Paragraph(text, style)
    _, height = block.wrap(RIGHT - LEFT - indent, HEIGHT)
    block.drawOn(pdf, LEFT + indent, y - height)
    y -= height + gap


def row(left, right="", *, bold=False, italic=False, size=10.5, gap=2):
    global y
    font = "ResumeBold" if bold else "ResumeItalic" if italic else "Resume"
    assert pdfmetrics.stringWidth(left, font, size) + pdfmetrics.stringWidth(right, font, size) + 10 < RIGHT - LEFT
    pdf.setFont(font, size)
    pdf.drawString(LEFT, y - size, left)
    pdf.drawRightString(RIGHT, y - size, right)
    y -= size + gap


def section(title):
    global y
    y -= 6
    row(title, bold=True, size=12, gap=3)
    pdf.setStrokeColor(colors.HexColor("#777777"))
    pdf.setLineWidth(0.45)
    pdf.line(LEFT, y, RIGHT, y)
    y -= 4


def experience(company, dates, role, location, bullets):
    global y
    row(company, dates, bold=True, size=10.8)
    row(role, location, italic=True, size=10.2)
    for text in bullets:
        paragraph(f"- {text}", indent=9)
    y -= 3


paragraph("PHAN THANH TÚ", size=18, align=1, gap=4)
paragraph('0865812730 &nbsp; <link href="mailto:mudotet@gmail.com">mudotet@gmail.com</link> &nbsp; '
          '<link href="https://github.com/mudotet">github.com/mudotet</link> &nbsp; '
          '<link href="https://www.linkedin.com/in/t%C3%BA-phan-203970327/">LinkedIn</link> &nbsp; '
          '<link href="https://tus-portfolio.vercel.app/">Portfolio</link>', size=9.2, align=1, gap=3)

section("Work Experience")
experience("GearGames", "August 2026 - November 2026", "Server Engineer Intern", "", [
    "Studied the company's <b>Java/Akka</b> server codebase and worked on resource initialization and login flows.",
    "Developed <b>static and daily shop</b> purchase flows using in-game <b>gems</b>.",
    "Implemented <b>Battle Pass</b> mission progression toward milestones with <b>Free and Premium</b> reward tracks.",
    "Worked with <b>Protocol Buffers, DynamoDB, and Redisson</b> in the game-server stack.",
])
experience("AI Innovation Challenge", "July 2026", "Team Lead (3-person team)", "Smart Government Track", [
    "Led a team of <b>3 developers</b> to build <b>Civic Path</b>, an AI assistant for birth registration procedures",
    'Built the web app with <b>FastAPI</b> and <b>Next.js</b>; shipped a <link href="https://ai-guided-public-service-procedures.vercel.app/">live demo</link> and <link href="https://github.com/mudotet/AI-guided-public-service-procedures-Lonely-Stone-">source code</link>',
])
experience("Codex Community Hackathon", "June 2026", "Team Lead (3rd Place)", "Hanoi, Vietnam", [
    "Led a team of <b>3 developers</b> to build <b>GuideLens AI</b>, earning <b>3rd Place</b> in the Codex Community Hackathon",
    "Built <b>FastAPI</b> endpoints and connected <b>OpenAI Vision</b> with <b>Pillow</b> for screenshot-based UI guidance",
])
experience("PathTech JSC", "January 2026 - April 2026", "Full Stack Developer Intern", "Hanoi, Vietnam", [
    "Developed backend services using <b>NestJS, PostgreSQL, and Redis</b> to support apartment reservations and real-time bidding workflows",
    "Implemented <b>JWT authentication</b> and <b>role-based authorization</b> to secure protected <b>REST APIs</b>",
    "Implemented <b>Stripe Payment Intents</b> and <b>webhook handlers</b> to automate secure online payment processing",
])
experience("FreeCode School", "July 2024 - December 2024", "Software Engineer Intern", "Hanoi, Vietnam", [
    "Built <b>CRUD RESTful APIs</b> with <b>Spring Boot, Spring MVC, and Spring Data JPA</b>",
    "Added <b>Bean Validation</b>, <b>global exception handling</b>, and standardized <b>JSON responses</b>",
])

section("Projects")
paragraph('<b>HUMG Regulation Search</b> | <link href="https://humg-ai-server-beryl.vercel.app/"><i>Live Demo</i></link>'
          ' &nbsp; <b>Java | Spring Boot | PostgreSQL | Next.js | Docker</b>')
paragraph("- Built and deployed a Java/Spring Boot regulation search platform serving <b>40+ initial users</b>", indent=9)
paragraph("- Implemented <b>REST APIs</b>, JWT, Google OAuth2, an admin dashboard, and Docker deployment", indent=9, gap=5)
paragraph('<b>Identity Services</b> | <link href="https://github.com/mudotet/identity_services"><i>Source Code</i></link>'
          ' &nbsp; <b>Java | Spring Boot | MySQL | Spring Security | JWT</b>')
paragraph("- Developed a secure authentication service with JWT, refresh tokens, logout, and role-based authorization", indent=9)
paragraph("- Applied Spring Security, Spring Data JPA, BCrypt, Bean Validation, MapStruct, and global exception handling", indent=9)

section("Technical Skills")
paragraph("<b>Languages:</b> Java, SQL, Golang, Python, JavaScript", indent=9, gap=0)
paragraph("<b>Backend:</b> Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, REST APIs, Akka", indent=9, gap=0)
paragraph("<b>Databases:</b> MySQL, PostgreSQL, MongoDB, Redis, DynamoDB", indent=9, gap=0)
paragraph("<b>Tools:</b> Git, GitHub, Maven, Docker, Postman, Swagger, Protocol Buffers, Redisson", indent=9, gap=0)

section("Certificates")
paragraph('<link href="https://certificates.cs50.io/c24e4e3b-87d1-49b7-afb1-79a9426b6054.pdf?size=letter"><b>CS50 Certificate</b></link> | '
          '<link href="https://www.hackerrank.com/certificates/b9c4f0a06f82"><b>SQL (Advanced) Certificate</b></link> | '
          '<link href="https://www.hackerrank.com/certificates/2b71304a7528"><b>Java (Basic) Certificate</b></link>', indent=9)

section("Education")
row("Hanoi University of Mining and Geology", "Expected Graduation: January 2027", bold=True)
row("Bachelor of Information Technology Engineering", "Hanoi, Vietnam", italic=True)
paragraph("- <b>Merit-based Academic Scholarship</b> (1 semester) - Semester GPA: <b>3.67/4.0</b>", indent=9)

assert y >= 24, f"Resume overflows its bottom margin: {y:.1f}pt"
pdf.save()

# Render the actual PDF, so the website preview cannot drift from the download.
doc = fitz.open(OUT)
assert len(doc) == 1
page = doc[0]
text = page.get_text()
for phrase in ("GearGames", "Server Engineer Intern", "August 2026 - November 2026", "Akka", "Protocol Buffers", "DynamoDB", "Redisson"):
    assert phrase in text, f"Missing resume content: {phrase}"
for word in page.get_text("words"):
    assert 24 <= word[0] <= word[2] <= WIDTH - 24
    assert 20 <= word[1] <= word[3] <= HEIGHT - 20
ASSETS.mkdir(parents=True, exist_ok=True)
page.get_pixmap(matrix=fitz.Matrix(2, 2)).save(ASSETS / f"{NAME}-preview.png")
shutil.copyfile(OUT, ASSETS / OUT.name)
# Preserve the existing public URL while keeping its download current.
shutil.copyfile(OUT, ROOT / "public/CV_PhanThanhTu_Sofware_Engineer_Intern.pdf")
print(f"Built 1-page resume; bottom margin {y:.1f}pt; {len(page.get_links())} links. PDF and preview synchronized.")
