from __future__ import annotations

import os
import textwrap
from datetime import date
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps
from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "documentacion"
ASSET_DIR = OUT_DIR / "manual_assets"
DOCX_PATH = OUT_DIR / "Manual_usuario_HELP_Ajustadores_v2.0.11.docx"

FICOHSA_LOGO = ROOT / "src/assets/logos/ficohsa_seguros.png"
FICOHSA_WHITE_LOGO = ROOT / "src/assets/logos/ficohsa_seguros_logo_blanco.png"
HELP_LOGO = ROOT / "src/assets/logos/help.png"
COVER_IMAGE = ROOT / "src/assets/img/tab1/lawyer-for-car-accident.jpg"
def first_download_match(pattern: str) -> Path:
    matches = sorted(Path("/Users/desarrolloporsalud/Downloads").glob(pattern))
    return matches[0] if matches else Path("/nonexistent")


HOME_SCREEN = first_download_match("WhatsApp Image 2026-06-15 at 1.48.46*p.*m..jpeg")
SEND_SCREEN = first_download_match("WhatsApp Image 2026-06-23 at 11.04.12*a.*m..jpeg")

BLUE = RGBColor(0, 91, 203)
DARK = RGBColor(10, 39, 76)
MUTED = RGBColor(100, 122, 150)
LIGHT_BLUE = RGBColor(232, 241, 253)
SOFT = RGBColor(244, 248, 252)
RED = RGBColor(190, 38, 38)
GREEN = RGBColor(10, 130, 92)
GOLD = RGBColor(151, 107, 0)


def ensure_dirs() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        ROOT / ("src/assets/open-sans/OpenSans-ExtraBold.ttf" if bold else "src/assets/open-sans/OpenSans-Regular.ttf"),
        Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
    ]
    for item in candidates:
        if item.exists():
            return ImageFont.truetype(str(item), size=size)
    return ImageFont.load_default()


def rounded(draw: ImageDraw.ImageDraw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def callout(draw: ImageDraw.ImageDraw, xy, number, title, body, color=(0, 91, 203)):
    x, y = xy
    rounded(draw, (x, y, x + 305, y + 94), 18, (255, 255, 255), (211, 225, 242), 2)
    draw.ellipse((x + 14, y + 16, x + 50, y + 52), fill=color)
    draw.text((x + 27, y + 20), str(number), fill=(255, 255, 255), font=font(18, True), anchor="ma")
    draw.text((x + 62, y + 13), title, fill=(10, 39, 76), font=font(15, True))
    draw.multiline_text((x + 62, y + 39), body, fill=(80, 100, 124), font=font(12), spacing=3)


def wrap_copy(text: str, width: int) -> str:
    return "\n".join(textwrap.wrap(text, width=width, break_long_words=False))


def paste_logo(base: Image.Image, path: Path, box, contain=True) -> None:
    if not path.exists():
        return
    img = Image.open(path).convert("RGBA")
    x1, y1, x2, y2 = box
    img.thumbnail((x2 - x1, y2 - y1), Image.LANCZOS)
    x = x1 + ((x2 - x1) - img.width) // 2
    y = y1 + ((y2 - y1) - img.height) // 2
    base.alpha_composite(img, (x, y))


def make_cover_art() -> Path:
    W, H = 1000, 1400
    base = Image.new("RGBA", (W, H), (246, 249, 253, 255))
    draw = ImageDraw.Draw(base)
    draw.rectangle((0, 0, W, H), fill=(245, 249, 253))
    draw.rectangle((0, 0, W, 190), fill=(0, 91, 203))
    draw.rectangle((0, 190, W, 214), fill=(29, 184, 225))

    if COVER_IMAGE.exists():
        hero = Image.open(COVER_IMAGE).convert("RGB")
        hero = ImageOps.fit(hero, (850, 520), Image.LANCZOS)
        mask = Image.new("L", hero.size, 0)
        mdraw = ImageDraw.Draw(mask)
        mdraw.rounded_rectangle((0, 0, hero.width, hero.height), radius=36, fill=255)
        base.paste(hero, (75, 720), mask)

    paste_logo(base, FICOHSA_WHITE_LOGO, (70, 42, 430, 126))
    paste_logo(base, HELP_LOGO, (70, 286, 380, 455))

    draw.text((75, 500), "Manual de usuario", fill=(10, 39, 76), font=font(58, True))
    draw.text((75, 572), "HELP Ajustadores", fill=(0, 91, 203), font=font(54, True))
    draw.text((78, 652), "Versión 2.0.11 | Renovación de interfaz", fill=(82, 106, 135), font=font(25, True))

    chips = [("Inicio guiado", 75, 1270), ("Expediente y mapa", 296, 1270), ("Formularios móviles", 555, 1270), ("Firma y envío", 75, 1340)]
    for text, x, y in chips:
        rounded(draw, (x, y, x + 220, y + 52), 26, (255, 255, 255), (202, 220, 240), 2)
        draw.text((x + 110, y + 15), text, fill=(0, 91, 203), font=font(17, True), anchor="ma")

    out = ASSET_DIR / "cover_art.png"
    base.convert("RGB").save(out, quality=95)
    return out


def make_flow_graphic(name: str, title: str, subtitle: str, blocks: list[tuple[str, str]], accent=(0, 91, 203)) -> Path:
    W, H = 1000, 1400
    base = Image.new("RGBA", (W, H), (246, 249, 253, 255))
    draw = ImageDraw.Draw(base)
    draw.rectangle((0, 0, W, 150), fill=accent)
    draw.text((60, 34), title, fill=(255, 255, 255), font=font(42, True))
    draw.multiline_text((60, 90), wrap_copy(subtitle, 62), fill=(220, 238, 255), font=font(18), spacing=4)

    x = 80
    y = 230
    for i, (head, body) in enumerate(blocks, 1):
        rounded(draw, (x, y, x + 840, y + 210), 28, (255, 255, 255), (210, 224, 241), 3)
        draw.ellipse((x + 34, y + 34, x + 104, y + 104), fill=accent)
        draw.text((x + 69, y + 52), str(i), fill=(255, 255, 255), font=font(28, True), anchor="ma")
        draw.text((x + 132, y + 38), head, fill=(10, 39, 76), font=font(26, True))
        draw.multiline_text((x + 132, y + 86), wrap_copy(body, 62), fill=(78, 99, 125), font=font(19), spacing=6)
        if i < len(blocks):
            draw.line((x + 420, y + 218, x + 420, y + 262), fill=accent, width=5)
            draw.polygon([(x + 420, y + 262), (x + 406, y + 242), (x + 434, y + 242)], fill=accent)
        y += 280

    out = ASSET_DIR / f"{name}.png"
    base.convert("RGB").save(out, quality=95)
    return out


def make_phone_map() -> Path:
    W, H = 1000, 1400
    base = Image.new("RGBA", (W, H), (245, 249, 253, 255))
    draw = ImageDraw.Draw(base)
    phone = (305, 80, 695, 890)
    rounded(draw, phone, 36, (255, 255, 255), (178, 197, 220), 4)
    draw.rectangle((425, 70, 775, 170), fill=(0, 91, 203))
    paste_logo(base, HELP_LOGO, (445, 88, 575, 146))
    rounded(draw, (678, 96, 748, 146), 24, (255, 255, 255), None)
    draw.text((713, 109), "Menu", fill=(0, 91, 203), font=font(15, True), anchor="ma")

    rounded(draw, (435, 205, 765, 390), 16, (255, 255, 255), (218, 229, 240), 2)
    draw.text((460, 228), "Mis atenciones", fill=(10, 39, 76), font=font(24, True))
    rounded(draw, (612, 220, 740, 265), 22, (232, 241, 253), None)
    draw.text((676, 232), "2", fill=(0, 91, 203), font=font(21, True), anchor="ma")
    for y in [285, 340]:
        rounded(draw, (460, y, 740, y + 42), 12, (248, 251, 255), (219, 230, 242), 1)

    rounded(draw, (435, 420, 765, 640), 16, (255, 255, 255), (218, 229, 240), 2)
    draw.text((460, 444), "Atención seleccionada", fill=(100, 122, 150), font=font(13, True))
    draw.text((460, 474), "Atención #281490", fill=(10, 39, 76), font=font(22, True))
    rounded(draw, (610, 446, 742, 492), 24, (0, 91, 203), None)
    draw.text((676, 458), "▣ Exp", fill=(255, 255, 255), font=font(16, True), anchor="ma")
    rounded(draw, (458, 520, 742, 607), 12, (247, 249, 253), (219, 230, 242), 1)
    draw.text((480, 545), "Firma del cliente", fill=(95, 118, 145), font=font(15, True))
    rounded(draw, (615, 545, 730, 580), 18, (224, 247, 238), None)
    draw.text((672, 553), "Guardada", fill=(10, 130, 92), font=font(14, True), anchor="ma")

    rounded(draw, (435, 670, 765, 752), 20, (255, 245, 235), (230, 202, 173), 2)
    draw.text((462, 690), "4 intentos", fill=(142, 83, 18), font=font(18, True))
    draw.text((462, 716), "Último error + Reenviar", fill=(142, 83, 18), font=font(15, True))
    draw.rectangle((425, 777, 775, 835), fill=(34, 184, 225))
    draw.text((500, 794), "Inicio", fill=(255, 255, 255), font=font(16, True))
    draw.text((602, 794), "Buscar", fill=(255, 255, 255), font=font(16, True))
    draw.text((702, 794), "Perfil", fill=(255, 255, 255), font=font(16, True))

    callout(draw, (70, 955), 1, "Menú superior", "Abre cierre de sesión y\nopciones generales.")
    callout(draw, (565, 955), 2, "Botón Exp", "Acceso directo al expediente\nde la atención seleccionada.")
    callout(draw, (70, 1115), 3, "Reenviar", "Lleva al nuevo intento sin\nbuscar el formulario a mano.", (190, 100, 20))
    callout(draw, (565, 1115), 4, "Estado de firma", "Muestra si la firma del\ncliente ya fue guardada.", (10, 130, 92))
    out = ASSET_DIR / "guia_inicio.png"
    base.convert("RGB").save(out, quality=95)
    return out


def make_exp_graphic() -> Path:
    blocks = [
        ("Mapa Leaflet", "Muestra siniestro, agente y ruta en una vista más fluida."),
        ("Acciones", "El botón central abre opciones: info, ruta, fotos, finiquito y formularios."),
        ("Ruta", "Se traza automáticamente y puede recalcularse si el agente cambia ubicación."),
        ("Marcadores", "Iconos personalizados con halo para distinguir cliente y ajustador."),
    ]
    return make_flow_graphic("guia_expediente", "Expediente y mapa", "Nueva botonera central y navegación enfocada en campo.", blocks)


def make_forms_graphic() -> Path:
    blocks = [
        ("Menú de segmentos", "Cada bloque entra a su pantalla: coordenadas, asegurado, vehículo, conductor y más."),
        ("Formulario amplio", "En celular se elimina el split-pane y se usa todo el ancho útil."),
        ("Regresar arriba/abajo", "El agente puede volver al menú sin recorrer todo el formulario."),
        ("Validación visible", "Campos faltantes, teléfonos inválidos y alertas se muestran sin perder contexto."),
    ]
    return make_flow_graphic("guia_formularios", "Formularios móviles", "ClienteHN y AjustadorHN quedan listos para celular y tablet vertical.", blocks, (15, 122, 190))


def make_send_graphic() -> Path:
    blocks = [
        ("Enviar", "Texto claro en solicitudes con y sin póliza."),
        ("Mensajes traducidos", "Errores técnicos se convierten en instrucciones comprensibles."),
        ("Alerta roja", "El fallo se distingue visualmente y no se confunde con confirmaciones."),
        ("Reintento", "El resumen en Inicio permite volver directo al flujo correcto."),
    ]
    return make_flow_graphic("guia_envio", "Envío y reintentos", "La app acompaña mejor al agente cuando el servidor rechaza una solicitud.", blocks, (190, 38, 38))


def crop_phone(path: Path, out_name: str) -> Path | None:
    if not path.exists():
        return None
    img = Image.open(path).convert("RGB")
    if out_name.startswith("captura_inicio"):
        draw_original = ImageDraw.Draw(img)
        draw_original.rounded_rectangle((52, 753, 535, 828), radius=16, fill=(255, 255, 255), outline=(255, 255, 255), width=1)
        draw_original.text((98, 782), "HELP Ajustadores, Version 2.0.11", fill=(0, 91, 203), font=font(25))
    # Keep full screenshot, but add a calm border so it reads well in Word.
    max_w, max_h = 620, 1100
    img.thumbnail((max_w, max_h), Image.LANCZOS)
    canvas = Image.new("RGB", (img.width + 42, img.height + 42), (239, 245, 252))
    draw = ImageDraw.Draw(canvas)
    rounded(draw, (10, 10, canvas.width - 10, canvas.height - 10), 18, (255, 255, 255), (205, 220, 238), 2)
    canvas.paste(img, (21, 21))
    out = ASSET_DIR / out_name
    canvas.save(out, quality=95)
    return out


def set_run(run, size=11, color=None, bold=None, italic=None):
    run.font.name = "Calibri"
    run._element.rPr.rFonts.set(qn("w:ascii"), "Calibri")
    run._element.rPr.rFonts.set(qn("w:hAnsi"), "Calibri")
    run.font.size = Pt(size)
    if color:
        run.font.color.rgb = color
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic


def shade_cell(cell, fill: str):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    tc_pr.append(shd)


def set_cell_text(cell, text, bold=False, color=DARK, size=10):
    cell.text = ""
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(0)
    r = p.add_run(text)
    set_run(r, size=size, color=color, bold=bold)
    cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER


def add_heading(doc: Document, text: str, level: int):
    p = doc.add_paragraph()
    style_name = f"Heading {level}"
    p.style = style_name
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    r = p.add_run(text)
    if level == 1:
        set_run(r, size=16, color=BLUE, bold=True)
    elif level == 2:
        set_run(r, size=13, color=BLUE, bold=True)
    else:
        set_run(r, size=12, color=DARK, bold=True)
    return p


def add_body(doc: Document, text: str):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.line_spacing = 1.25
    r = p.add_run(text)
    set_run(r, size=11, color=DARK)
    return p


def add_bullets(doc: Document, items: list[str]):
    for item in items:
        p = doc.add_paragraph(style="List Bullet")
        p.paragraph_format.left_indent = Inches(0.375)
        p.paragraph_format.first_line_indent = Inches(-0.188)
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.line_spacing = 1.25
        r = p.add_run(item)
        set_run(r, size=10.7, color=DARK)


def add_callout(doc: Document, title: str, text: str, fill="E8F1FD", color=BLUE):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    table.columns[0].width = Inches(6.5)
    cell = table.cell(0, 0)
    shade_cell(cell, fill)
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run(title)
    set_run(r, size=10.5, color=color, bold=True)
    p2 = cell.add_paragraph()
    p2.paragraph_format.space_after = Pt(0)
    r2 = p2.add_run(text)
    set_run(r2, size=10, color=DARK)
    doc.add_paragraph().paragraph_format.space_after = Pt(2)


def add_image(doc: Document, path: Path, width_in=6.2, caption: str | None = None):
    if not path or not path.exists():
        return
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_after = Pt(4)
    p.add_run().add_picture(str(path), width=Inches(width_in))
    if caption:
        cp = doc.add_paragraph()
        cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cp.paragraph_format.space_after = Pt(7)
        r = cp.add_run(caption)
        set_run(r, size=9, color=MUTED, italic=True)


def add_matrix(doc: Document, rows: list[tuple[str, str, str]]):
    table = doc.add_table(rows=1, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    widths = [1.65, 2.35, 2.5]
    headers = ["Elemento", "Uso operativo", "Mejora para el agente"]
    for idx, header in enumerate(headers):
        cell = table.cell(0, idx)
        cell.width = Inches(widths[idx])
        shade_cell(cell, "E8EEF5")
        set_cell_text(cell, header, True, DARK, 9.5)
    for a, b, c in rows:
        cells = table.add_row().cells
        for idx, value in enumerate([a, b, c]):
            cells[idx].width = Inches(widths[idx])
            set_cell_text(cells[idx], value, idx == 0, DARK, 9.2)
    doc.add_paragraph().paragraph_format.space_after = Pt(4)


def style_doc(doc: Document):
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)
    section.top_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.right_margin = Inches(1)
    section.header_distance = Inches(0.492)
    section.footer_distance = Inches(0.492)

    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)
    normal._element.rPr.rFonts.set(qn("w:ascii"), "Calibri")
    normal._element.rPr.rFonts.set(qn("w:hAnsi"), "Calibri")
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.line_spacing = 1.25

    for level, size, color, before, after in [
        (1, 16, BLUE, 18, 10),
        (2, 13, BLUE, 14, 7),
        (3, 12, DARK, 10, 5),
    ]:
        style = doc.styles[f"Heading {level}"]
        style.font.name = "Calibri"
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = color
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.line_spacing = 1.25

    footer = section.footer.paragraphs[0]
    footer.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r = footer.add_run("HELP Ajustadores 2.0.11 - Manual de usuario")
    set_run(r, size=9, color=MUTED)


def add_cover(doc: Document, cover: Path):
    meta = doc.add_paragraph()
    meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
    meta.paragraph_format.space_after = Pt(4)
    r3 = meta.add_run(f"Guía operativa para socialización de la nueva interfaz | {date.today().strftime('%d/%m/%Y')}")
    set_run(r3, size=10.5, color=MUTED)
    add_image(doc, cover, width_in=6.25)
    doc.add_page_break()


def add_index(doc: Document):
    add_heading(doc, "Índice", 1)
    rows = [
        ("1", "Objetivo de la versión 2.0.11"),
        ("2", "Inicio: selección de atención y reintentos"),
        ("3", "Expediente: mapa, ruta y action-sheet"),
        ("4", "Formularios ClienteHN"),
        ("5", "Formulario AjustadorHN"),
        ("6", "Solicitud sin póliza y reenvíos"),
        ("7", "Firmas, evidencias y expedientes"),
        ("8", "Perfil, reportes y buenas prácticas"),
        ("9", "Referencia rápida para soporte"),
    ]
    table = doc.add_table(rows=1, cols=2)
    table.autofit = False
    table.columns[0].width = Inches(0.7)
    table.columns[1].width = Inches(5.8)
    for idx, text in enumerate(["#", "Sección"]):
        shade_cell(table.cell(0, idx), "E8EEF5")
        set_cell_text(table.cell(0, idx), text, True, DARK, 10)
    for n, text in rows:
        cells = table.add_row().cells
        set_cell_text(cells[0], n, True, BLUE, 10)
        set_cell_text(cells[1], text, False, DARK, 10)
    doc.add_page_break()


def build_manual():
    ensure_dirs()
    cover = make_cover_art()
    home_graph = make_phone_map()
    exp_graph = make_exp_graphic()
    forms_graph = make_forms_graphic()
    send_graph = make_send_graphic()
    home_real = crop_phone(HOME_SCREEN, "captura_inicio_real.jpg")
    send_real = crop_phone(SEND_SCREEN, "captura_envio_real.jpg")

    doc = Document()
    style_doc(doc)
    add_cover(doc, cover)
    add_index(doc)

    add_heading(doc, "1. Objetivo de la versión 2.0.11", 1)
    add_body(doc, "Esta versión moderniza el trabajo diario del ajustador con una interfaz más clara, compacta y usable en celular, tablet vertical y tablet horizontal. La prioridad es reducir pasos, mostrar las acciones importantes en el lugar correcto y evitar que el agente pierda contexto durante la atención.")
    add_callout(doc, "Idea central", "La app deja de sentirse como un formulario largo y pasa a guiar al agente por tareas: seleccionar atención, revisar expediente, capturar información, firmar, enviar y reenviar cuando corresponda.")
    add_bullets(doc, [
        "La navegación principal conserva Inicio, Mis Atenciones y Perfil.",
        "El expediente concentra mapa, ruta, evidencias, formularios y documentos.",
        "Los formularios se adaptan mejor a celular eliminando paneles partidos que ocultaban contenido.",
        "Los errores de envío ahora se muestran con lenguaje operativo y opción clara de reintento.",
    ])

    add_heading(doc, "2. Inicio: selección de atención y reintentos", 1)
    add_image(doc, home_graph, 6.4, "Guía visual de los puntos principales en Inicio.")
    if home_real:
        add_image(doc, home_real, 3.25, "Captura de referencia: Inicio en celular con atención seleccionada.")
    add_matrix(doc, [
        ("Bandeja", "Lista las atenciones disponibles del agente.", "Permite ubicar rápido el caso activo sin navegar por menús internos."),
        ("Botón Exp", "Entra directamente al expediente de la atención seleccionada.", "Hace visible el acceso al expediente en celular, donde la botonera inferior puede quedar menos evidente."),
        ("Firma del cliente", "Muestra si la firma está pendiente o guardada.", "Evita avanzar sin un dato clave para el proceso."),
        ("Reenviar", "Abre el intento pendiente desde Inicio.", "Reduce pasos cuando el servidor rechazó una solicitud previa."),
    ])
    add_callout(doc, "Buenas prácticas", "Antes de entrar al expediente, confirme que la atención seleccionada sea la correcta. Si aparece una etiqueta de reintento, revise el último error y use Reenviar para continuar el flujo correcto.")

    add_heading(doc, "3. Expediente: mapa, ruta y action-sheet", 1)
    add_image(doc, exp_graph, 6.4, "El expediente reúne mapa, ruta automática y acciones principales.")
    add_body(doc, "El expediente usa mapa Leaflet y marcadores personalizados. El marcador del siniestro identifica la ubicación del cliente; el marcador del ajustador identifica la posición del agente y su recorrido. La ruta inicial se traza automáticamente y puede recalcularse cuando el agente ajusta la ubicación.")
    add_matrix(doc, [
        ("Botón central", "Abre la hoja de acciones del expediente.", "Concentra opciones importantes sin saturar la pantalla."),
        ("Trazar ruta", "Recalcula ruta desde la posición actual hacia el siniestro.", "Ayuda cuando se corrige manualmente la ubicación del siniestro."),
        ("Fotos", "Abre carga de evidencias en cargar-archivos.", "Evita rutas antiguas y mantiene un solo flujo de evidencias."),
        ("Finiquito", "Abre el flujo de beneficiario/finiquito cuando aplica.", "Hace visible una acción legal-documental crítica."),
    ])

    add_heading(doc, "4. Formularios ClienteHN", 1)
    add_image(doc, forms_graph, 6.4, "ClienteHN ahora funciona como menú de segmentos y pantallas amplias por sección.")
    add_body(doc, "El formulario de cliente se reorganizó para celular y tablet vertical. En vez de depender de un split-pane, el agente entra a un segmento, usa una vista más amplia y puede regresar al menú desde la parte superior o inferior.")
    add_bullets(doc, [
        "Coordenadas muestra latitud, longitud y ubicación en chips más legibles.",
        "Datos Asegurado, Vehículo y Conductor usan inputs, selectores y calendarios con estética uniforme.",
        "Acompañantes, Testigos, Propiedad Daños y Lesión Persona validan nombre y teléfono antes de agregar registros.",
        "Los teléfonos locales de Honduras deben tener al menos 8 dígitos cuando no se incluye código de país.",
    ])
    add_callout(doc, "Mejora clave", "El agente ya no pelea con columnas estrechas: cada segmento usa el ancho disponible, y los botones de Fotos/Firma quedan fijos como acciones de apoyo.")

    add_heading(doc, "5. Formulario AjustadorHN", 1)
    add_body(doc, "AjustadorHN se mantiene como el formulario de cierre técnico para envío de reclamo. La validación debe revisar datos completados, datos incompletos, información de cacheCliente y daños asociados antes de enviar.")
    add_matrix(doc, [
        ("Validar Datos", "Abre la revisión de información antes del envío.", "Da una pausa de control para revisar faltantes."),
        ("Fecha inspección", "Inicia con fecha actual y permite postfechar sin usar fechas anteriores al día actual.", "Reduce captura manual y evita fechas inválidas."),
        ("Firmas", "Permite revisar firmas de cliente y ajustador.", "Ayuda a confirmar requisitos antes de enviar."),
        ("Daños", "Presenta daños del afiliado y terceros cuando existen.", "Facilita lectura del reclamo completo antes de transmitir."),
    ])

    add_heading(doc, "6. Solicitud sin póliza y reenvíos", 1)
    add_image(doc, send_graph, 6.4, "Flujo de error y reintento para solicitudes con y sin póliza.")
    if send_real:
        add_image(doc, send_real, 3.25, "Captura de referencia: solicitud sin póliza con respuesta del servidor.")
    add_body(doc, "Cuando una atención se envía sin póliza, la app conserva ese contexto para regresar al mismo flujo y no redirigir erróneamente hacia AjustadorHN. Esto permite reenviar o revisar una solicitud sin póliza sin obligar al agente a completar información que no aplica.")
    add_matrix(doc, [
        ("Enviar", "Reemplaza textos ambiguos como Continuar.", "El agente entiende que ejecutará una transmisión."),
        ("Alerta roja", "Muestra fallos de servidor con prioridad visual.", "Diferencia claramente error de advertencia o confirmación."),
        ("Diccionario de errores", "Traduce respuestas técnicas del servidor.", "Convierte mensajes crudos en recomendaciones operativas."),
        ("Mensaje genérico", "Cubre errores no reconocidos.", "Siempre entrega una salida elegante y comprensible."),
    ])
    add_callout(doc, "Mensajes esperados", "Si el servidor responde sobre póliza en renovación, certificado no válido o causa incorrecta, la app orienta al agente para revisar póliza, chasis o cobertura, o bien finalizar el proceso manualmente.")

    add_heading(doc, "7. Firmas, evidencias y documentos", 1)
    add_body(doc, "Las firmas y evidencias se separan para dar más espacio al gesto de firma y evitar paneles con scroll incómodo. El agente puede editar firma, capturar fotografías, revisar documentos y volver al expediente manteniendo el contexto de la atención.")
    add_bullets(doc, [
        "La firma del cliente se gestiona desde su pantalla dedicada y vuelve al flujo anterior.",
        "Finiquito y adeuda usan lectura previa, firma y confirmación antes del envío.",
        "Cargar-archivos centraliza selección de tipo de fotografía y envío de evidencias.",
        "Los reportes de impresión recibieron una presentación más limpia para lectura y revisión.",
    ])

    add_heading(doc, "8. Perfil, reportes y buenas prácticas", 1)
    add_body(doc, "El perfil del ajustador se compactó para mostrar fotografía, datos relevantes y área de firma sin mover elementos importantes. Los reportes mantienen títulos claros y eliminan encabezados innecesarios para lectura más profesional.")
    add_matrix(doc, [
        ("Sesión", "Permanece abierta hasta cierre manual.", "Evita inicios de sesión repetidos durante trabajo de campo."),
        ("Orientación", "Celular se prioriza en portrait; tablet permite más libertad.", "La app responde mejor al tipo de dispositivo."),
        ("Perfil", "Avatar en color y controles compactos.", "Más espacio para firma y datos importantes."),
        ("Reportes", "Encabezados por título real del documento.", "Lectura más clara al revisar o imprimir."),
    ])

    add_heading(doc, "9. Referencia rápida para soporte", 1)
    add_matrix(doc, [
        ("No aparece ruta", "Use Trazar ruta desde expediente.", "Recalcula con ubicación actual y destino vigente."),
        ("Solicitud rechazada", "Lea la alerta roja y use Reenviar desde Inicio.", "Retoma el flujo correcto sin buscar pantallas."),
        ("Formulario no permite avanzar", "Revise bordes rojos y campos requeridos.", "Los faltantes se marcan en pantalla."),
        ("Teléfono inválido", "Ingrese al menos 8 dígitos para Honduras.", "Evita registros incompletos."),
        ("Atención sin póliza", "Debe volver a Solicitud sin póliza.", "La app conserva ese enrutamiento por atención."),
    ])
    add_callout(doc, "Cierre operativo", "La versión 2.0.11 no solo cambia estética: reduce fricción, evita rutas antiguas, mejora el reintento de envíos y hace que el trabajo en celular sea viable para campo.")

    doc.save(DOCX_PATH)
    print(DOCX_PATH)


if __name__ == "__main__":
    build_manual()
