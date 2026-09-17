import cv2
import os

video_path = 'video.mp4'
output_dir = 'public/frames'
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
total_video_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total video frames in {video_path}: {total_video_frames}")

# Target: 120 total frames for smooth high-density ending
# 0 to 460 (beginning & middle sad owner focus): 60 frames (step ~7.6)
# 460 to 720 (zoom out & complete full view ending): 60 frames (step ~4.3) -> DOUBLE DENSITY IN THE LAST!

target_indices = []

# First half: 60 frames from 0..460
for i in range(60):
    idx = int(0 + i * (460 / 60))
    target_indices.append(idx)

# Second half: 60 frames from 460..719
for i in range(60):
    idx = int(460 + i * ((719 - 460) / 60))
    target_indices.append(idx)

# Remove duplicates while preserving order
unique_indices = []
for idx in target_indices:
    idx = min(max(0, idx), total_video_frames - 1)
    if not unique_indices or idx != unique_indices[-1]:
        unique_indices.append(idx)

print(f"Total extracted target indices: {len(unique_indices)}")

saved_count = 0
for idx in unique_indices:
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if not ret:
        continue
    
    saved_count += 1
    jpg_path = os.path.join(output_dir, f"ezgif-frame-{saved_count:03d}.jpg")
    webp_path = os.path.join(output_dir, f"ezgif-frame-{saved_count:03d}.webp")

    # Save high-quality JPEG
    cv2.imwrite(jpg_path, frame, [int(cv2.IMWRITE_JPEG_QUALITY), 90])

    # Convert/Save WEBP if possible or use JPEG
    # We can also convert to webp using PIL or cv2 if webp plugin is present
    try:
        cv2.imwrite(webp_path, frame, [int(cv2.IMWRITE_WEBP_QUALITY), 88])
    except Exception as e:
        pass

    if saved_count % 20 == 0 or saved_count == len(unique_indices):
        print(f"Saved frame {saved_count}/{len(unique_indices)} (video frame {idx})")

cap.release()
print(f"Successfully saved {saved_count} frames into {output_dir}!")
