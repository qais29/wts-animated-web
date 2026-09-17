import cv2
import os
import numpy as np

video_path = 'video.mp4'
output_dir = 'public/frames'
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
total_video_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total video frames in {video_path}: {total_video_frames}")

# Target: 240 frames total for ultra 60fps-like scroll density
# 0 to 460 (story setup & camera operator focus): 120 frames
# 460 to 719 (zoom out & grand finale reveal): 120 frames
TARGET_FRAMES = 240

target_indices = []

# First half: 120 frames from 0..460
for i in range(120):
    idx = int(0 + i * (460 / 120))
    target_indices.append(idx)

# Second half: 120 frames from 460..719
for i in range(120):
    idx = int(460 + i * ((719 - 460) / 120))
    target_indices.append(idx)

# Remove duplicates while preserving order
unique_indices = []
for idx in target_indices:
    idx = min(max(0, idx), total_video_frames - 1)
    if not unique_indices or idx != unique_indices[-1]:
        unique_indices.append(idx)

print(f"Extracting and sharpening {len(unique_indices)} frames at 98% quality...")

saved_count = 0
for idx in unique_indices:
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if not ret:
        continue
    
    saved_count += 1
    jpg_path = os.path.join(output_dir, f"ezgif-frame-{saved_count:03d}.jpg")
    webp_path = os.path.join(output_dir, f"ezgif-frame-{saved_count:03d}.webp")

    # Fine-tuned unsharp mask filter for razor-sharp clarity
    gaussian = cv2.GaussianBlur(frame, (0, 0), 2.0)
    sharpened = cv2.addWeighted(frame, 1.25, gaussian, -0.25, 0)

    # Save high-precision WebP & JPEG at 98 Quality
    cv2.imwrite(jpg_path, sharpened, [int(cv2.IMWRITE_JPEG_QUALITY), 98])
    cv2.imwrite(webp_path, sharpened, [int(cv2.IMWRITE_WEBP_QUALITY), 98])

    if saved_count % 40 == 0 or saved_count == len(unique_indices):
        print(f"Saved {saved_count}/{len(unique_indices)} frames...")

cap.release()
print(f"Successfully generated {saved_count} 1st-grade crystal-clear frames into {output_dir}!")
