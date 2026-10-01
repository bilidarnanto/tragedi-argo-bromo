#!/usr/bin/env python3
"""Generator gambar Open Graph (1200x630) untuk situs proyek.

Dijalankan di NAS BPF (memiliki Pillow + font DejaVu):
  python3 og-image.py [path-output]
"""
import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (14, 17, 22)        # --bg
BORDER = (45, 51, 59)    # --border
TEXT = (230, 232, 235)   # --text
MUTED = (154, 164, 175)  # --muted
ACCENT = (229, 83, 75)   # --accent

F = "/usr/share/fonts/truetype/dejavu/"
bold = lambda s: ImageFont.truetype(F + "DejaVuSans-Bold.ttf", s)
reg = lambda s: ImageFont.truetype(F + "DejaVuSans.ttf", s)
mono = lambda s: ImageFont.truetype(F + "DejaVuSansMono.ttf", s)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# aksen merah kiri
d.rectangle([56, 96, 66, 372], fill=ACCENT)

# kicker
d.text((100, 100), "TRAGEDI KERETA API", font=bold(38), fill=ACCENT)

# judul utama
d.text((100, 158), "Argo Bromo Anggrek", font=bold(88), fill=TEXT)
d.text((100, 272), "\u00d7 Commuter Line 5568A", font=reg(46), fill=MUTED)

# garis pemisah
d.line([56, 380, W - 56, 380], fill=BORDER, width=2)

# baris statistik + nomor laporan
d.text((56, 412), "16 meninggal  \u00b7  107 luka-luka", font=bold(44), fill=TEXT)
knkt = "KNKT.26.04.03.02"
w = d.textlength(knkt, font=mono(34))
d.text((W - 56 - w, 420), knkt, font=mono(34), fill=MUTED)

# lokasi & waktu
d.text((56, 496), "Stasiun Bekasi Timur  \u00b7  27 April 2026  \u00b7  20.52 WIB",
       font=reg(38), fill=MUTED)

# strip merah bawah
d.rectangle([0, H - 8, W, H], fill=ACCENT)

out = sys.argv[1] if len(sys.argv) > 1 else "og-image.png"
img.save(out, "PNG", optimize=True)
print("OK:", out)
