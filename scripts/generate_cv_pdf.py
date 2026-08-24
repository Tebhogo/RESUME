"""Generate liynadah_hela_cv.pdf from portfolio content."""

import json
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "src" / "assets" / "cv" / "liynadah_hela_cv.pdf"
REFERENCES_FILE = ROOT / "src" / "assets" / "data" / "references.json"


class CV(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, f"Page {self.page_no()}", align="C")

    def section_title(self, title: str):
        self.ln(2)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(234, 88, 12)
        self.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(234, 88, 12)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def body_text(self, text: str):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(40, 40, 40)
        self.multi_cell(190, 5, text)

    def bullet(self, text: str):
        self.set_x(12)
        self.set_font("Helvetica", "", 10)
        self.set_text_color(40, 40, 40)
        self.multi_cell(186, 5, f"- {text}")


def build_cv() -> None:
    pdf = CV()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 10, "Liyandah Tebhogo Hela", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 12)
    pdf.set_text_color(234, 88, 12)
    pdf.cell(0, 7, "Full Stack Software Engineer & Data Engineer", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 5, "Harare, Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(
        0,
        5,
        "Email: liyandahhella12@gmail.com | Phone: +263 774 914 287 / +263 786 272 730",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.cell(
        0,
        5,
        "LinkedIn: linkedin.com/in/liyandah-hela-b48481166 | GitHub: github.com/Tebhogo",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.cell(0, 5, "Portfolio: tebhogo.github.io/RESUME/", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)

    pdf.section_title("Professional Summary")
    pdf.body_text(
        "Full stack software engineer and data engineer with 7+ years of experience across retail IT, "
        "enterprise development, and fintech. Currently at ANGWA PAY, building secure payment gateway systems "
        "with integrations for EcoCash, Omari, InnBucks, and ZimSwitch. Previously at OK Zimbabwe as Programming "
        "Analyst, developing the Stock Take app, 30+ operational reports, Power BI Reporting Server, and MSSQL "
        "databases. Skilled in Java Spring, Python, SQL, Power BI, Angular, and Flutter."
    )

    pdf.section_title("Work Experience")

    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 6, "Software Engineer | ANGWA PAY", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, "May 2026 - Present | Harare, Zimbabwe (Hybrid)", new_x="LMARGIN", new_y="NEXT")
    for item in [
        "Develop secure, scalable frontend and backend systems for the AngwaPay payment gateway platform.",
        "Build REST APIs and payment integrations for EcoCash, Omari, InnBucks, and ZimSwitch.",
        "Implement merchant wallets, transaction processing, and automated status updates.",
        "Design and maintain SQL databases for payment collection, deposits, withdrawals, and reporting.",
    ]:
        pdf.bullet(item)
    pdf.ln(2)

    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 6, "Programming Analyst | OK Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, "Aug 2022 - Apr 2026 | Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    for item in [
        "Designed and developed the Stock Take application using Java Spring and Flutter with 30+ data-driven reports.",
        "Built and maintained Power BI dashboards for sales, order fill rates, and KPI monitoring.",
        "Configured Power BI Reporting Server and designed MSSQL databases for enterprise reporting.",
        "Created 30+ custom operational and analytical reports across multiple departments.",
        "Developed and optimized SQL queries; collaborated with stakeholders on process improvements.",
    ]:
        pdf.bullet(item)
    pdf.ln(2)

    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 6, "IT Support Specialist | OK Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, "Feb 2020 - Jul 2022 | Harare, Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    for item in [
        "Monitored and maintained retail IT systems for inventory, sales, and customer transactions.",
        "Installed and configured hardware, software, networks, printers, and user accounts.",
        "Provided support, system updates, backups, and staff training.",
    ]:
        pdf.bullet(item)
    pdf.ln(2)

    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 6, "IT Support Specialist | Gain Cash and Carry Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, "Jan 2019 - Feb 2020 | Harare, Zimbabwe", new_x="LMARGIN", new_y="NEXT")
    for item in [
        "Managed help desk tickets and resolved hardware and software issues.",
        "Conducted OS installations, network troubleshooting, and security audits.",
    ]:
        pdf.bullet(item)

    pdf.section_title("Key Projects")
    projects = [
        ("AngwaPay Payment Gateway", "Secure fintech platform with EcoCash, Omari, InnBucks, and ZimSwitch integrations."),
        ("CCTN Point of Sale System", "Retail POS with inventory, sales, receipts, and performance dashboards."),
        ("Stock Take App", "Enterprise inventory app with Java Spring backend and Flutter mobile frontend."),
        ("Report Builder", "30+ custom operational and analytical reports across OK Zimbabwe departments."),
        ("Power BI Reporting Server", "Enterprise reporting infrastructure configuration and deployment."),
    ]
    for title, desc in projects:
        pdf.set_font("Helvetica", "B", 10)
        pdf.set_text_color(20, 20, 20)
        pdf.cell(0, 5, title, new_x="LMARGIN", new_y="NEXT")
        pdf.body_text(desc)
        pdf.ln(1)

    pdf.section_title("Technical Skills")
    pdf.body_text(
        "Java Spring Boot, Python, SQL, MSSQL Server, Power BI, Power BI Reporting Server, Angular, Flutter, "
        "REST APIs, Payment Gateway Integration, ETL & Data Pipelines, Microsoft Azure, Dynamics 365, "
        "Database Design, Excel, HTML/CSS/JavaScript, Machine Learning (in progress)."
    )

    pdf.section_title("Education & Certifications")
    entries = [
        ("Explore Core Data Concepts", "Microsoft Learn", "2026"),
        ("Introduction to Data Engineering on Azure", "Microsoft Learn", "2025"),
        ("CompTIA Cloud Basic", "Alison Online", "2025"),
        ("Databricks Fundamentals", "Databricks Academy", "2025"),
        ("CompTIA A+ Certification", "Alison Online", "2023"),
        ("Diploma in Computer Engineering", "Speciss College Zimbabwe, ABMA Education UK", "2017-2018"),
        ("Certificate in Computer Engineering", "Speciss College Zimbabwe, ABMA Education UK", "2016-2017"),
    ]
    for title, org, year in entries:
        pdf.set_font("Helvetica", "B", 10)
        pdf.set_text_color(20, 20, 20)
        pdf.cell(0, 5, title, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(80, 80, 80)
        pdf.cell(0, 5, f"{org} | {year}", new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)

    pdf.section_title("Languages")
    pdf.body_text("English (Fluent), Shona (Native)")

    pdf.section_title("Licences")
    pdf.body_text("Class 4 Driver's Licence (Zimbabwe)")

    pdf.section_title("References")
    if REFERENCES_FILE.exists():
        data = json.loads(REFERENCES_FILE.read_text(encoding="utf-8"))
        references = data.get("references", [])
        available_on_request = data.get("availableOnRequest", True)
        if available_on_request or not references:
            pdf.body_text("Professional references available upon request.")
        else:
            for reference in references:
                pdf.set_font("Helvetica", "B", 10)
                pdf.set_text_color(20, 20, 20)
                pdf.cell(0, 5, reference.get("name", ""), new_x="LMARGIN", new_y="NEXT")
                pdf.set_font("Helvetica", "", 9)
                pdf.set_text_color(80, 80, 80)
                pdf.cell(
                    0,
                    5,
                    f"{reference.get('title', '')} | {reference.get('company', '')}",
                    new_x="LMARGIN",
                    new_y="NEXT",
                )
                if reference.get("relationship"):
                    pdf.cell(0, 5, reference["relationship"], new_x="LMARGIN", new_y="NEXT")
                if reference.get("phone"):
                    pdf.cell(0, 5, f"Phone: {reference['phone']}", new_x="LMARGIN", new_y="NEXT")
                if reference.get("email"):
                    pdf.cell(0, 5, f"Email: {reference['email']}", new_x="LMARGIN", new_y="NEXT")
                pdf.ln(2)
    else:
        pdf.body_text("Professional references available upon request.")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUTPUT))
    print(f"Created: {OUTPUT}")


if __name__ == "__main__":
    build_cv()
