import cv2
import numpy as np

cap = cv2.VideoCapture('video.mp4')
total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Check frame differences every 10 frames to measure movement / pan speed across the video
diffs = []
prev_gray = None

for f in range(0, total, 10):
    cap.set(cv2.CAP_PROP_POS_FRAMES, f)
    ret, frame = cap.read()
    if not ret: break
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    if prev_gray is not None:
        diff = np.mean(np.abs(gray.astype(float) - prev_gray.astype(float)))
        diffs.append((f, diff))
    prev_gray = gray

print("Frame motion diffs:")
for f, d in diffs:
    print(f"Frame {f:03d}: diff = {d:.2f}")
