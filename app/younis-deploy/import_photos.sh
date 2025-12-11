#!/bin/bash
mkdir -p public/gallery

# Copy uploaded images to the deployment folder
# Using relative path from app/younis-deploy/
cp /Users/lamajawad/.gemini/antigravity/brain/ec9c76d4-b3fb-43ba-a589-b0dfa222f89c/uploaded_image_0_1765435451256.jpg public/gallery/younis-miner.jpg
cp /Users/lamajawad/.gemini/antigravity/brain/ec9c76d4-b3fb-43ba-a589-b0dfa222f89c/uploaded_image_1_1765435451256.jpg public/gallery/younis-thumbsup.jpg
cp /Users/lamajawad/.gemini/antigravity/brain/ec9c76d4-b3fb-43ba-a589-b0dfa222f89c/uploaded_image_2_1765435451256.jpg public/gallery/younis-ride.jpg
cp /Users/lamajawad/.gemini/antigravity/brain/ec9c76d4-b3fb-43ba-a589-b0dfa222f89c/uploaded_image_3_1765435451256.jpg public/gallery/younis-duo.jpg
cp /Users/lamajawad/.gemini/antigravity/brain/ec9c76d4-b3fb-43ba-a589-b0dfa222f89c/uploaded_image_4_1765435451256.jpg public/gallery/younis-explorer.jpg

echo "Photos imported successfully! 📸"
