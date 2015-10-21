#!/opt/phantomjs/bin/phantomjs
//
// This is a wrapper script for transforming a web page into a movie.
//
// It works by loading the specified URL (or local file) into the PhantomJS
// headless web browser and then periodically saving a screenshot as a PNG
// image 'frame'.  This will continue until either a maximum number of frames
// have been rendered or until the web page writes a message (typically 'done')
// using console.log().
//
// Once the above process is complete, you will have a folder full of PNG
// images which you can then assemble into an animated GIF using ImageMagick
// or into a video using a tool like ffmpeg (AKA: avconv), e.g.:
//
//   avconv -i frames/frame_%04d.png -vcodec libx264 -preset veryslow -qp 0 movie.mp4
//
// (You can choose a different video codec and quality level, but this example
// produces a top quality file which you can compress more later if needed).
//
// The interval at which the screenshots are taken corresponds to the frame
// rate.  So for example, 40ms = 25 frames per second.  Whether your computer
// will actually be able to keep up with rendering PNGs that frequently will
// depend on your hardware as well as the size and visual complexity of the
// web page.  If you're using the jquery.titlesequence plugin you can set the
// time_factor option to slow down the animation.  So you might set the time
// factor to 2 (half speed) and the snapshot interval to 80ms and the result
// will play back in normal time at 25fps.
//


var page_url        = '02-scrolling.html';
var frame_width     = 640;
var frame_height    = 390;
var frame_interval  = 80;                   // 25fps if time_factor = 2
var max_frames      = 15000;                // 10 minutes @ 25fps
var frame_dir       = 'frames';             // where PNG files will be written


var page = require('webpage').create();
page.viewportSize = { width: frame_width, height: frame_height };

page.onConsoleMessage = function (msg) {
    console.log('>> ' + msg);
    phantom.exit();
};

page.open(page_url, function() {
    var frame_number = 0;
    setInterval(function() {
        filename = "frame_" + '0000'.substr(('' + frame_number).length) + frame_number + '.png';
        console.log(filename);
        page.render(frame_dir + '/' + filename);
        frame_number++;
        if(frame_number > max_frames) {
            console.log("Timing out after " + max_frames + " frames");
            phantom.exit();
        }
    }, frame_interval);
});

