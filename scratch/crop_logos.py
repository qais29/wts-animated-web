from PIL import Image

def trim_transparent(image_path):
    img = Image.open(image_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        # Add 10px tiny safety padding around the crop box
        w, h = img.size
        left = max(0, bbox[0] - 10)
        top = max(0, bbox[1] - 10)
        right = min(w, bbox[2] + 10)
        bottom = min(h, bbox[3] + 10)
        
        cropped = img.crop((left, top, right, bottom))
        cropped.save(image_path)
        print(f"Successfully trimmed {image_path}: Original size {img.size} -> Cropped size {cropped.size}")

trim_transparent("public/logo-dark.png")
trim_transparent("public/logo-light.png")
