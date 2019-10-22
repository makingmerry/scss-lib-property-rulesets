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

| Name             | Type | Description                                                              |
| ---------------- | ---- | ------------------------------------------------------------------------ |
| \$base-font-size | unit | Declare base font size for relative font-sizing (rem, em) in project     |
| \$font-families  | map  | Font families                                                            |
| \$type-scale     | map  | type scale for font sizes                                                |
| \$line-lengths   | map  | Width of a block of text, sized relative to its font-size                |
| \$line-heights   | map  | Leading, or vertical spacing between lines of text                       |
| \$line-trackings | map  | Tracking, or horizontal white space between letters in a block of text   |
| \$text-indents   | map  | Length of indentation space put before the first line in a block of text |

### Layout

| Name           | Type | Description                                                                                                                                             |
| -------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$screen-sizes | map  | Media query breakpoints                                                                                                                                 |
| \$wraps        | map  | Max width containers for child components                                                                                                               |
| \$grids        | list | Number of columns in [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_LayoutBasic_Concepts_of_Flexbox) grids used in project |
| \$z-indexes    | map  | Z-order of _positioned elements_                                                                                                                        |
| \$moves        | map  | Vertical and horionzal position of _positioned elements_                                                                                                |
| \$margins      | map  | Margin area for elements                                                                                                                                |
| \$paddings     | map  | Padding area for elements                                                                                                                               |

### Theme

| Name                   | Type | Description                              |
| ---------------------- | ---- | ---------------------------------------- |
| \$project-colors       | map  | Project colors and names                 |
| \$neutral-colors       | map  | Neutral colors and names                 |
| \$notification-colors  | map  | System notification colors and names     |
| \$border-widths        | map  | Border widths for elements               |
| \$border-radii         | map  | Border radius for elements               |
| \$opacities            | map  | Opacities for elements                   |
| \$transition-durations | map  | Duration timings for element transitions |

## Properties

### Typography

| Property         | Class             | Modifiers             | Values                |
| ---------------- | ----------------- | --------------------- | --------------------- |
| font-family      | f-f-\${modifier}  | `Specified in config` | `Specified in config` |
| font-size        | f-s-\${modifier}  | `Specified in config` | `Specified in config` |
| font-weight      | f-w-\${modifier}  | 1—9                   | 100—900               |
| font-render      | f-r-\${modifier}  | auto                  | auto                  |
|                  |                   | smooth                | smooth                |
| font-style       | f-sy-\${modifier} | normal, italic        | normal, italic        |
| line-height      | l-h-\${modifier}  |
| line-length      | l-l-\${modifier}  |
| line-tracking    | l-t-\${modifier}  |
| text-align       | t-a-\${modifier}  |
| text-decoration  | t-d-\${modifier}  |
| text-indent      | t-i-\${modifier}  |
| text-transform   | t-t-\${modifier}  |
| text-white-space | t-ws-\${modifier} |

### Layout

| Property | classname |
| -------- | --------- |


### Theme

| Property | classname |
| -------- | --------- |


## Resources

- https://tachyons.io/
- https://css-tricks.com/methods-organize-css/
- https://practicaltypography.com
- https://type-scale.com/
