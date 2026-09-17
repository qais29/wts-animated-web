import cv2
import os

video_path = 'video.mp4'
output_dir = 'public/frames'
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
total_video_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total video frames: {total_video_frames}")

# 120 total frames target
# 0 to 450 (beginning & sad owner focus): 60 frames
# 450 to 719 (zoom out & complete full view ending): 60 frames (2x higher frame density at ending!)

target_indices = []
for i in range(60):
    idx = int(0 + i * (450 / 60))
    target_indices.append(idx)

for i in range(60):
    idx = int(450 + i * ((719 - 450) / 60))
    target_indices.append(idx)

unique_indices = []
for idx in target_indices:
    idx = min(max(0, idx), total_video_frames - 1)
    if not unique_indices or idx != unique_indices[-1]:
        unique_indices.append(idx)

print(f"Processing {len(unique_indices)} unique frames...")

for saved_count, idx in enumerate(unique_indices, start=1):
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if not ret:
        continue

    jpg_path = os.path.join(output_dir, f"ezgif-frame-{saved_count:03d}.jpg")
    webp_path = os.path.join(output_dir, f"ezgif-frame-{saved_count:03d}.webp")

    cv2.imwrite(jpg_path, frame, [int(cv2.IMWRITE_JPEG_QUALITY), 90])
    cv2.imwrite(webp_path, frame, [int(cv2.IMWRITE_WEBP_QUALITY), 88])

cap.release()
print(f"Successfully generated {len(unique_indices)} frames (both webp and jpg) in {output_dir}")
