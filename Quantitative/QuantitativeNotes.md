Original Concept - Creating music from art color palette's
I’d like to use P5, D3 or another tool to extract color palettes from works of art then present these swatches along a horizontal timeline (see the color swatches at the top image below for reference of how this might be represented). Then I could use the frequency of that color to generate sound. The user could, in effect, hit a Play button and play through the color story of any given piece of art. 

This could live on a website or, with enough time, exist as an application that the user could use to point at any work of art (or image, period) to hear what it might sound like. There are possible universal design uses of such an application. 



My goal to to have sound that is on a smooth ramp between volume and pitch. To that end ideally the color rendering might like like a histogram in which Y axis is volume, color is pitch and the X axis is the timeline. I'm not sure about sort order along the X axis. In my mind this is more of an experiment to see the design space possibilities. After a fair amount of research I'm not sure a satisfying result is possible within this project timeframe. 

Possible uses
The same code architecture could be used in a number of different ways to discover what produces the most interesting output.
* Apply to individual works of art
* Average color palettes from an entire exhibit
* Average/interpret color palettes from galleries within the museum

Issues
* Producing a satisfying soundtrack
* Many of the precedents, and my own experiments, produce sounds that seem detached form the source material or they’re just plain ol’ unpleasant. Finding a satisfying process for interpreting and tuning the musical output is beyond the scope of this project

Production steps
* Find images
* Use some tool (P5, D3, etc) to generate color palettes
* Apply some structure to the output
* Histogram of color palette with smooth ramps for sounds transitions
* Add sound based on color value

Initial concept sketch



Feedback 
It seems like a nice experimental idea, and like you suggested, it might only fit borderline to the description of a quantitative visualization. If this is what you’re going for, I think the following questions come up: What determines the order of colors from left to right? Would it make sense to sort it at all? For a viewer, what can be learned from this translation? How does this differ from using a painting vs an advertising poster, or a live camera feed? How would it deal with 3D content? And lastly, how does it sound? Many a media-arts projects fail from too direct or simplistic translations, i.e. turning RGB values into sound frequencies.And lastly, where does this live? Is it an app, in browser, etc?

Possible tools and precedents
https://jariz.github.io/vibrant.js/


http://colormind.io/blog/extracting-colors-from-photos-and-video/


http://designingsound.org/2017/12/20/mapping-sound-to-color/


https://www.fastcompany.com/3033213/turn-color-into-sound-with-this-this-synesthesia-synthesizer-app


https://www.irjet.net/archives/V4/i2/IRJET-V4I2255.pdf



Updated Concept

Recording spaces?
Visualizing a map of the museum?

https://therewasaguy.github.io/p5-music-viz/demos/05_fft_scaleOneThirdOctave_UnknownPleasures/
