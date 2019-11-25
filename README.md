# crude-oil-consumption

World Crude Oil Consumption visualized. http://demo.akselipalen.com/crude-oil-consumption

## Record high-quality video

Slow the rate down to 1/10:

    renderingStrategy: { type: 'auto', speedMultiplier: 0.1 }

Capture the animation with a screen recorder.

Speed up the video by 10x. Flag `-crf` is the compression from 0 to 50 where 0 is lossless.

    ffmpeg -i captured.mov -r 30 -vf "setpts=0.1*PTS" -s hd1080 -vcodec libx264 -preset slow -crf 10 output.mp4
