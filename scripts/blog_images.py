"""Génère les visuels du blog et des services (charte Acquiz : crème / charcoal).

Usage : python3 scripts/blog_images.py
Les fonctions de base (cover, canvas, rr, text, arrow...) peuvent être réutilisées
pour de nouveaux visuels. Les fichiers sont écrits dans public/blog.
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = f"{ROOT}/public/blog"
S = 2  # suréchantillonnage pour un rendu net
CREAM = (0xFB, 0xF9, 0xF1); CHAR = (0x33, 0x2D, 0x2D); CARD = (0xF3, 0xEF, 0xE2)
def mix(a, b, t): return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))
SOFT = mix(CREAM, CHAR, 0.62); LINE = mix(CREAM, CHAR, 0.14)
FONT = "/System/Library/Fonts/HelveticaNeue.ttc"

def f(size, bold=False): return ImageFont.truetype(FONT, int(size * S), index=1 if bold else 0)
def text(d, xy, t, font, fill=CHAR, anchor="la"): d.text((xy[0] * S, xy[1] * S), t, font=font, fill=fill, anchor=anchor)
def rr(d, b, r, fill=None, outline=None, width=1):
    d.rounded_rectangle([b[0] * S, b[1] * S, b[2] * S, b[3] * S], radius=r * S, fill=fill, outline=outline, width=int(width * S))
def wrap(d, t, font, maxw):
    out, cur = [], ""
    for w in t.split():
        test = (cur + " " + w).strip()
        if d.textlength(test, font=font) <= maxw * S: cur = test
        else: out.append(cur); cur = w
    if cur: out.append(cur)
    return out
def wordmark(img, x, y, h):
    lg = Image.open(f"{ROOT}/public/logo/wordmark-dark.png").convert("RGBA")
    w = int(lg.width * h * S / lg.height); lg = lg.resize((w, int(h * S)), Image.LANCZOS)
    img.paste(lg, (int(x * S), int(y * S)), lg)
def save(img, name, size):
    img = img.resize(size, Image.LANCZOS); img.save(f"{OUT}/{name}", optimize=True)
    print(name, img.size, os.path.getsize(f"{OUT}/{name}") // 1024, "KB")
def canvas(h): return Image.new("RGB", (1200 * S, h * S), CREAM)
def arrow(d, x1, y1, x2, y2):
    d.line([x1 * S, y1 * S, x2 * S, y2 * S], fill=CHAR, width=3 * S); a = math.atan2(y2 - y1, x2 - x1)
    for da in (2.6, -2.6):
        d.line([x2 * S, y2 * S, (x2 + 12 * math.cos(a + da)) * S, (y2 + 12 * math.sin(a + da)) * S], fill=CHAR, width=3 * S)

def cover(name, tag, title, big, bigsize, sub=None):
    """Couverture 1200x630 : étiquette, titre, logo, bloc sombre avec un mot-clé."""
    W, H = 1200, 630; img = Image.new("RGB", (W * S, H * S), CREAM); d = ImageDraw.Draw(img)
    tf = f(22, True); tw = d.textlength(tag.upper(), font=tf) / S
    rr(d, (70, 70, 70 + tw + 44, 118), 24, fill=CHAR); text(d, (92, 94), tag.upper(), tf, CREAM, "lm")
    tfnt = f(56, True); y = 170
    for ln in wrap(d, title, tfnt, 620): text(d, (70, y), ln, tfnt, CHAR); y += 68
    wordmark(img, 70, H - 100, 46)
    rr(d, (780, 70, 1130, 560), 36, fill=CHAR)
    text(d, (955, 300 if sub else 315), big, f(bigsize, True), CREAM, "mm")
    if sub: text(d, (955, 430), sub, f(36), mix(CHAR, CREAM, 0.65), "mm")
    save(img, name, (W, H))

# ---------- Série du 27/11/2026 ----------
def pmax():
    img = canvas(420); d = ImageDraw.Draw(img)
    text(d, (600, 44), "Performance Max : une campagne, tous les canaux de Google", f(30, True), CHAR, "mm")
    rr(d, (400, 90, 800, 170), 24, fill=CHAR)
    text(d, (600, 118), "Performance Max", f(28, True), CREAM, "mm")
    text(d, (600, 150), "objectif + budget + éléments créatifs", f(18), mix(CHAR, CREAM, 0.65), "mm")
    names = ["Recherche", "YouTube", "Display", "Discover", "Gmail", "Maps"]
    w, gap, x = 165, 18, 60
    centers = [x + i * (w + gap) + w / 2 for i in range(6)]
    d.line([600 * S, 170 * S, 600 * S, 210 * S], fill=CHAR, width=3 * S)
    d.line([centers[0] * S, 210 * S, centers[-1] * S, 210 * S], fill=CHAR, width=3 * S)
    for i, n in enumerate(names):
        x0 = x + i * (w + gap); arrow(d, centers[i], 210, centers[i], 248)
        rr(d, (x0, 250, x0 + w, 330), 20, fill=CARD, outline=LINE, width=2); text(d, (x0 + w / 2, 290), n, f(24, True), CHAR, "mm")
    text(d, (600, 380), "Google répartit le budget entre les canaux selon votre objectif de conversion", f(21), SOFT, "mm")
    save(img, "performance-max-canaux.png", (1200, 420))

def tiktok():
    img = canvas(360); d = ImageDraw.Draw(img)
    text(d, (600, 44), "La structure d'une vidéo TikTok Ads qui convertit", f(30, True), CHAR, "mm")
    items = [("Accroche", "premières secondes :", "une raison de rester"), ("Problème", "votre cible", "s'y reconnaît"),
             ("Solution", "le produit en action,", "une preuve"), ("Appel à l'action", "ce qu'il faut", "faire maintenant")]
    w, gap, x = 225, 50, 75
    for i, (t, a, b) in enumerate(items):
        x0 = x + i * (w + gap); dark = i == 0
        rr(d, (x0, 100, x0 + w, 300), 24, fill=CHAR if dark else CARD, outline=None if dark else LINE, width=2)
        tc = CREAM if dark else CHAR; sc = mix(CHAR, CREAM, 0.65) if dark else SOFT
        d.ellipse([(x0 + w / 2 - 20) * S, 118 * S, (x0 + w / 2 + 20) * S, 158 * S], outline=tc, width=2 * S)
        text(d, (x0 + w / 2, 138), str(i + 1), f(22, True), tc, "mm")
        text(d, (x0 + w / 2, 196), t, f(24, True), tc, "mm"); text(d, (x0 + w / 2, 240), a, f(19), sc, "mm"); text(d, (x0 + w / 2, 266), b, f(19), sc, "mm")
        if i < 3: arrow(d, x0 + w + 8, 200, x0 + w + gap - 8, 200)
    save(img, "structure-video-tiktok-ads.png", (1200, 360))

def linkedin():
    img = canvas(420); d = ImageDraw.Draw(img)
    text(d, (600, 44), "LinkedIn Ads en B2B : une stratégie en trois étapes", f(30, True), CHAR, "mm")
    items = [("Contenu utile", "guide, étude, webinar"), ("Reciblage", "des personnes engagées"), ("Offre", "démo, audit, rendez-vous")]
    w, gap, x = 320, 70, 50
    for i, (t, a) in enumerate(items):
        x0 = x + i * (w + gap); dark = i == 2
        rr(d, (x0, 100, x0 + w, 250), 24, fill=CHAR if dark else CARD, outline=None if dark else LINE, width=2)
        tc = CREAM if dark else CHAR; sc = mix(CHAR, CREAM, 0.65) if dark else SOFT
        text(d, (x0 + w / 2, 155), f"{i + 1}. {t}", f(28, True), tc, "mm"); text(d, (x0 + w / 2, 200), a, f(21), sc, "mm")
        if i < 2: arrow(d, x0 + w + 10, 175, x0 + w + gap - 10, 175)
    rr(d, (50, 290, 1150, 370), 22, fill=CARD, outline=LINE, width=2)
    text(d, (600, 330), "Suivi dans le CRM : leads  ›  rendez-vous  ›  clients", f(25), CHAR, "mm")
    save(img, "linkedin-ads-strategie-b2b.png", (1200, 420))

if __name__ == "__main__":
    cover("performance-max-google-ads.png", "Google Ads", "Performance Max : fonctionnement, avantages et pièges", "PMax", 104)
    cover("erreurs-google-ads-budget.png", "Google Ads", "Google Ads : 8 erreurs qui font exploser votre budget", "8", 230, "erreurs")
    cover("tiktok-ads-premiere-campagne.png", "TikTok Ads", "TikTok Ads : comment réussir sa première campagne", "9:16", 120)
    cover("linkedin-ads-b2b-guide.png", "LinkedIn Ads", "LinkedIn Ads en B2B : formats, ciblage et erreurs", "B2B", 130)
    pmax(); tiktok(); linkedin()
