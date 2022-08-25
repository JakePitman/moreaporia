## 1

Paste image into Figma, and draw rect, circle, lines etc

## 2

Export as svg

## 3

Create a \_\_Blueprint.tsx file, copied from previous example

## 4

Replace return value with new SVG (open the SVG in notes to get data)

## 5

Change svg `width` & `height` to `100%`

## 6

Change all rect, circle, line tags to `motion.rect` etc, and add framer-motion variants to each

## 7

Change `stroke` to whichever color you like

## 8

To make a more interesting effect, the main container rect can have its direction reversed. To do this, add the following line

```
transform="scale(1, -1) translate(0, -<whatever height minus stroke-width is>)"
```
