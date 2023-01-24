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

* `roundAsPixels(pixelsCount: number): string` — Rounds the amount of pixels to a sensible precision value. Example: `123.456789` → `"123.457px"`, because no screen could currently resolve up to a 10,000th fraction of a pixel, and for the time being resolving up to a 1,000th franction of a pixel seems more than enough. This function could be used for less clutter in debugging and also for dealing with really big or really small numbers which could end up converted to a string using "exponential" format as `"1.2345e-50"`, and when a web browser receives such a weird value for a pixels amount, it considers it invalid. And if such an "invalid" pixels amount is used as part of a "complex" CSS property like `box-shadow` then the whole such property gets discarded.

* `roundAndStringify(value: number, { precision: number })` — Rounds the number up to `precision` fractional digits count, and then stringifies it. `roundAsPixels()` uses this function internally with `precision: 3`. Could be used for rounding non-`px` style values like `transform: scale(1.2345...)`.

<!-- * `roundPixelsForScreen(pixelsCount: number): number` — Rounds the amount of pixels specifically for the current device's max resolution (aka "pixel ratio"). For example, on a "2x" "retina" screen, `roundAsPixels(123.45678)` would return `"123.456px"` while `roundPixelsForScreen(123.45678)` would return `123.5` because that specific device's screen can only resolve at most up to a half of a pixel. This is more of an experimental "proof of concept" function though because the regular `roundAsPixels()` function works just fine. -->

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

On March 9th, 2020, GitHub, Inc. silently [banned](https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3) my account (erasing all my repos, issues and comments) without any notice or explanation. Because of that, all source codes had to be promptly moved to GitLab. The [GitHub repo](https://github.com/catamphetamine/web-browser-window) is now only used as a backup (you can star the repo there too), and the primary repo is now the [GitLab one](https://gitlab.com/catamphetamine/web-browser-window). Issues can be reported in any repo.

## License

[MIT](LICENSE)