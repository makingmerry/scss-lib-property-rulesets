# SCSS atomic classes

Library of Sass configurations and partials for generating responsive atomic CSS classes.

## Table of contents

1. [Installation](#user-content-installation)
2. [Scripts](#user-content-configuration)
3. [Configuration](#user-content-configuration)
4. [Properties](#user-content-properties)
5. [Resources](#user-content-resources)

## Installation

You will need [Node](https://docs.npmjs.com/getting-started/installing-node) installed on your local development machine.

To generate CSS classes for distribution:

```
npm install
npm run dist
```

## Scripts

| Script          | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `npm run dev`   | Compile and output expanded CSS in build folder                |
| `npm run start` | Watch .scss files to compile and output when there are changes |
| `npm run dist`  | Compile and output compressed CSS in dist folder               |

## Configuration

### Typography

| Name             | Type   | Description                                                              |
| ---------------- | ------ | ------------------------------------------------------------------------ |
| \$base-font-size | `unit` | Declare base font size for relative font-sizing (rem, em) in project     |
| \$font-families  | `map`  | Font families                                                            |
| \$type-scale     | `map`  | type scale for font sizes                                                |
| \$line-lengths   | `map`  | Width of a block of text, sized relative to its font-size                |
| \$line-heights   | `map`  | Leading, or vertical spacing between lines of text                       |
| \$line-trackings | `map`  | Tracking, or horizontal white space between letters in a block of text   |
| \$text-indents   | `map`  | Length of indentation space put before the first line in a block of text |

### Layout

| Name           | Type   | Description                                                                                                                                             |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$screen-sizes | `map`  | Media query breakpoints                                                                                                                                 |
| \$wraps        | `map`  | Max width containers for child components                                                                                                               |
| \$grids        | `list` | Number of columns in [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_LayoutBasic_Concepts_of_Flexbox) grids used in project |
| \$z-indexes    | `map`  | Z-order of _positioned elements_                                                                                                                        |
| \$moves        | `map`  | Vertical and horionzal position of _positioned elements_                                                                                                |
| \$margins      | `map`  | Margin area for elements                                                                                                                                |
| \$paddings     | `map`  | Padding area for elements                                                                                                                               |

### Theme

| Name                   | Type  | Description                              |
| ---------------------- | ----- | ---------------------------------------- |
| \$project-colors       | `map` | Project colors and names                 |
| \$neutral-colors       | `map` | Neutral colors and names                 |
| \$notification-colors  | `map` | System notification colors and names     |
| \$border-widths        | `map` | Border widths for elements               |
| \$border-radii         | `map` | Border radius for elements               |
| \$opacities            | `map` | Opacities for elements                   |
| \$transition-durations | `map` | Duration timings for element transitions |

## Properties

### State Modifiers

| State      | Modifer        | Description                                     |
| ---------- | -------------- | ----------------------------------------------- |
| :hover     | .hov-\${class} | Applied when mouseover element                  |
| js-enabled | .js-\${class}  | Applied when .js class is applied to `html` tag |

### Typography

| Property         | Class           | Modifer | Value                                   | :hover  | js-enabled |
| ---------------- | --------------- | ------- | --------------------------------------- | ------- | ---------- |
| font-family      | .f-f-\${value}  |         | _Specified in config_                   | `false` | `false`    |
| font-size        | .f-s-\${value}  |         | _Specified in config_                   | `false` | `false`    |
| font-weight      | .f-w-\${value}  |         | 1—9                                     | `false` | `false`    |
| font-render      | .f-r-\${value}  |         | auto, smooth                            | `false` | `false`    |
| font-style       | .f-sy-\${value} |         | normal, italic                          | `false` | `false`    |
| line-height      | .l-h-\${value}  |         | copy, title, solid                      | `false` | `false`    |
| line-length      | .l-l-\${value}  |         | none, base, narrow, wide                | `false` | `false`    |
| line-tracking    | .l-t-\${value}  |         | none, base, tight, wide                 | `false` | `false`    |
| text-align       | .t-a-\${value}  |         | left, center, right                     | `false` | `false`    |
| text-decoration  | .t-d-\${value}  |         | none, strike, underline                 | `false` | `false`    |
| text-indent      | .t-i-\${value}  |         | _Specified in config_                   | `false` | `false`    |
| text-transform   | .t-t-\${value}  |         | none ,upper ,lower ,cap                 | `false` | `false`    |
| text-white-space | .t-ws-\${value} |         | normal, nowrap, pre, pre-wrap, pre-line | `false` | `false`    |

### Layout

| Property                                           | Class                     | Modifier                 | Value                                                                                                         | Hover   | js-enabled |
| -------------------------------------------------- | ------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| position                                           | .pos-\${value}            |                          | static, fixed, relative, absolute                                                                             | `false` | `true`     |
| z-index                                            | .z-\${value}              |                          | _Specified in config_                                                                                         | `false` | `false`    |
| _move_                                             | .${modifer}-${value}      | top, right, bottom, left | _Specified in config_                                                                                         | `false` | `false`    |
| float                                              | .float-\${value}          |                          | none, right, left                                                                                             | `false` | `false`    |
| display                                            | .d-\${value}              |                          | none, block, inline, block, flex, table, i-table, t-cell, t-row, t-row-grp, t-column, t-column-grp, table-fix | `false` | `true`     |
| width                                              | .w-\${value}              |                          | auto, 0, 25, 50, 75, 100, 100vw                                                                               | `false` | `false`    |
| min-width                                          | .w-\${value}-min          |                          | 100, 100vw                                                                                                    | `false` | `false`    |
| max-width                                          | .w-\${value}-max          |                          | 100, 100vw                                                                                                    | `false` | `false`    |
| height                                             | .h-\${value}              |                          | auto, 0, 25, 50, 75, 100, 100vh                                                                               | `false` | `false`    |
| min-height                                         | .h-\${value}-min          |                          | 100, 100vw                                                                                                    | `false` | `false`    |
| max-height                                         | .h-\${value}-max          |                          | 100, 100vw                                                                                                    | `false` | `false`    |
| _wrap_<br>(max-width)                              | .wrap-\${value}           |                          | _Specified in config_                                                                                         | `false` | `false`    |
| _horizontal-align_<br>(margin-left + margin-right) | .ha-\${value}             |                          | right, left, center                                                                                           | `false` | `false`    |
| vertical-align                                     | .va-\${value}             |                          | top, middle, bottom, t-top, t-bottom, sub, sup, baseline                                                      | `false` | `false`    |
| margin                                             | .m-\${modifier}-\${value} | top, right, bottom, left | _Specified in config_                                                                                         | `false` | `false`    |
| padding                                            | .p-\${modifier}-\${value} | top, right, bottom, left | _Specified in config_                                                                                         | `false` | `false`    |
| overflow                                           | .of-\${value}             |                          | visible, hidden, scroll, auto, x-visible, x-hidden, x-scroll, x-auto, y-visible, y-hidden, y-scroll, y-auto   | `false` | `true`     |
| flex-direction                                     | .flx-dir-\${value}        |                          | row, row-r, column, column-r                                                                                  | `false` | `false`    |
| flex-wrap                                          | .flx-wp-\${value}         |                          | none, wrap, wrap-r                                                                                            | `false` | `false`    |
| align-content                                      | .flx-ac-\${value}         |                          | start, end, center, stretch, s-between, s-around                                                              | `false` | `false`    |
| align-items                                        | .flx-ai-\${value}         |                          | start, end, center, stretch, baseline                                                                         | `false` | `false`    |
| align-self                                         | .flx-as-\${value}         |                          | auto, start, end, center, stretch, baseline                                                                   | `false` | `false`    |
| justify-content                                    | .flx-jc-\${value}         |                          | start, end, center, s-between, s-around                                                                       | `false` | `false`    |
| order                                              | .flx-ord-\${value}        |                          | first, last                                                                                                   | `false` | `false`    |
| object-fit                                         | .obj-f-\${value}          |                          | none, fill, contain, cover, scale-down                                                                        | `false` | `false`    |
| object-position                                    | .obj-p-\${value}          |                          | none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left, center                        | `false` | `false`    |
| visibility                                         | .vis-\${value}            |                          | visible, hidden, collapse                                                                                     | `false` | `true`     |
| pointer-event                                      | .pe-\${value}             |                          | none, auto                                                                                                    | `false` | `false`    |

### Theme

| Property              | classname       | Modifiers | Value                                                                                  | Hover   | js-enabled |
| --------------------- | --------------- | --------- | -------------------------------------------------------------------------------------- | ------- | ---------- |
| background-color      | .bg-c-\${value} |           | _Specified in config_                                                                  | `true`  | `false`    |
| background-size       | .bg-s-\${value} |           | none, cover, contain                                                                   | `false` | `false`    |
| background-position   | .bg-p-\${value} |           | none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left, center | `false` | `false`    |
| background-repeat     | .bg-r-\${value} |           | none, repeat, repeat-x, repeat-y                                                       | `false` | `false`    |
| background-attachment | .bg-a-\${value} |           | scroll, fixed, local                                                                   | `false` | `false`    |
| border                | .b-\${value}    |           | none, all, top, right, bottom, left                                                    | `false` | `false`    |
| border-width          | .b-w-\${value}  |           | _Specified in config_                                                                  | `false` | `false`    |
| border-style          | .b-sy-\${value} |           | none, solid, dot, dash                                                                 | `false` | `false`    |
| border-color          | .b-c-\${value}  |           | _Specified in config_                                                                  | `true`  | `false`    |
| border-radius         | .b-r-\${value}  |           | _Specified in config_                                                                  | `false` | `false`    |
| color                 | .c-\${value}    |           | _Specified in config_                                                                  | `true`  | `false`    |
| fill                  | .fil-\${value}  |           | _Specified in config_                                                                  | `true`  | `false`    |
| cursor                | .cs-\${value}   |           | none, auto, default, pointer, text                                                     | `false` | `false`    |
| opacity               | .op-\${value}   |           | _Specified in config_                                                                  | `true`  | `false`    |
| transition-duration   | .tx-\${value}   |           | _Specified in config_                                                                  | `false` | `false`    |

## Resources

- https://tachyons.io/
- https://css-tricks.com/methods-organize-css/
- https://practicaltypography.com
- https://type-scale.com/
