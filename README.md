#Charlottesville Design Week
## Web Typography Workshop

1. Font Loading in `CSS`
    - Roman and Italic

```
 @font-face {
    font-family: 'Occcupant Oldstyle VF';
    src: 
      url('fonts/Magmatic-VF-Trial.woff2') 
      format('woff2-variations');
    font-stretch: 50% 150%;
   /* font-style: oblique 0deg 10deg; only if it has a slant axis*/
    font-weight: 100 900;
  }
```
2. Semantic Markup in `HTML`
    - Spelling (maybe)
    - Headings, hierarchy
    - Paragraphs
    - Lists
    - Quotes, Pull quotes
    - Footnotes
    - Metadata

3. Punctuation and Symbols
    - Quotation marks
    - Hanging puntuation `text-indent`
    - Dashes
    - Open Type Features `font-feature-settings`
    - Figure styles
    - Bullets

4. Typesetting and optical sizing
    - Alignment
    - Paragraph measure
    - Line-height
    - Letterspacing
    - Margin, Padding, Borders

5. Responsive Typography
    - Type hierarchy
    - Size adjustments — font size and font space
    - Dark mode
```
.dark{
	background: black;
	color: white;
	--GRAD: 90:
}

@media screen and (max-width: 800px){

}
```

6. Animation
	- Defining the animation
	- Assigning the animation
```

@keyframes{

}
```

