# `web-browser-window`

Web browser window utilities.

## Install

```
npm install web-browser-window --save
```

## Use

* `getViewportWidth(): number` — Returns viewport width. Accounts for page zoom.
  * Doesn't work in iOS Safari:
    * Doesn't account for page zoom.

* `getViewportWidthWithScrollbar(): number` — Returns viewport width, including the vertical scrollbar width, if it's shown. Accounts for page zoom.
  * Works in iOS Safari:
    * Doesn't account for page zoom.

* `getViewportHeight(): number` — Returns viewport height. Accounts for page zoom.
  * Doesn't work in iOS Safari:
    * Doesn't account for the top URL bar.
    * Doesn't account for the bottom actions bar.
    * Doesn't account for page zoom.

* `getViewportHeightWithScrollbar(): number` — Returns viewport height, including the horizontal scrollbar height, if it's shown. Accounts for page zoom.
  * Works in iOS Safari

* `getVerticalScrollBarWidth(): number` — Returns the width of the vertical scroll bar.
  * Doesn't work in iOS Safari

* `roundPixels(pixelsCount: number): number` — Rounds the amount of pixels. Example: `123.45678` → `123.45`. The reason is that web browsers consider values with too many fractional digits invalid.

* `async scrollIntoView(element: Element, options: object)` — Scrolls a DOM `Element` into view.
  * Available `options`:
    * `duration` — (required) Scroll animation duration.
    <!-- * `easing` — Available variants: `"easeInOutSine"`. -->

* `enterFullScreen(): boolean` — Enters fullscreen mode. Returns `true` if succeeded, `false` otherwise.

* `exitFullScreen()` — Exits fullscreen mode.

* `onFullScreenChange()` — Listens to fullscreen mode enter/exit.

## Test

```
npm test
```

## GitHub Ban

On March 9th, 2020, GitHub, Inc. silently [banned](https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3) my account (erasing all my repos, issues and comments) without any notice or explanation. Because of that, all source codes had to be promptly moved to GitLab. The [GitHub repo](https://github.com/catamphetamine/web-browser-timer) is now only used as a backup (you can star the repo there too), and the primary repo is now the [GitLab one](https://gitlab.com/catamphetamine/web-browser-timer). Issues can be reported in any repo.

## License

[MIT](LICENSE)