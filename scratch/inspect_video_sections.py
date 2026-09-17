import cv2
import os

cap = cv2.VideoCapture('video.mp4')
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
out_dir = 'scratch/samples'
os.makedirs(out_dir, exist_ok=True)

# Sample every 30 frames
for f in range(0, total_frames, 30):
    cap.set(cv2.CAP_PROP_POS_FRAMES, f)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(f"{out_dir}/frame_{f:03d}.jpg", frame)
print(f"Extracted samples from 0 to {total_frames}")
