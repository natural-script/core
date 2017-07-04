# \<paper-video-controls\>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Inrego/paper-video-controls)

A video container element that will provide material design controls for the video. Easy to use and easy to style. 
The interface part is based heavily off of [`<paper-video>`](https://github.com/AKHXtern/paper-video) by [AKHXtern](https://github.com/AKHXtern/paper-video).

To better suit my needs, I made some quite big changes to how the element works and interacts with the video element compared to `<paper-video>`.
Where `<paper-video>` tries to replace the video element, this is instead just a container for the video element.
This provides some advantages. I the biggest one is, that there is no need to replicate all video properties and functions on my element.
Since you will still have the original video element in your DOM, you can still do databindings on it, call functions on it and all the other fun stuff you normally can do with the HTML video element.

Here's an example of usage:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="paper-video-controls.html">
    <next-code-block></next-code-block>
    <h4>Note that seeking and full screen does not work properly in the iframe here on webcomponents.org</h4>
    <h4>I assure you, both features do work.</h4>
  </template>
</custom-element-demo>
```
-->
```html
<paper-video-controls>
    <video>
        <source src="demo/demo.mp4" type="video/mp4">
    </video>
</paper-video-controls>
```
