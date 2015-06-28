var Doxray = {
  "patterns": [
    {
      "header": true,
      "label": "Theme variables",
      "family": "cf-buttons",
      "notes": [
        "The following color and sizing variables are exposed, allowing you to easily override them before compiling."
      ],
      "tags": [
        "cf-buttons"
      ],
      "less": "",
      "filename": "cf-buttons.less",
      "slug": "theme-variables"
    },
    {
      "label": "Colors",
      "tags": [
        "cf-buttons",
        "less"
      ],
      "less": "// .btn\n@btn-text:                      #fff;\n@btn-bg:                        #c7336e;\n@btn-bg-hover:                  darken(@btn-bg, 10%);\n@btn-bg-active:                 darken(@btn-bg, 15%);\n\n// .btn__secondary\n@btn__secondary-text:           #fff;\n@btn__secondary-bg:             #895983;\n@btn__secondary-bg-hover:       darken(@btn__secondary-bg, 10%);\n@btn__secondary-bg-active:      darken(@btn__secondary-bg, 15%);\n\n// .btn__warning\n@btn__warning-text:             #fff;\n@btn__warning-bg:               #ea130b;\n@btn__warning-bg-hover:         darken(@btn__warning-bg, 10%);\n@btn__warning-bg-active:        darken(@btn__warning-bg, 15%);\n\n// .btn__disabled\n@btn__disabled-text:            darken(greyscale(#c7336e), 10%);\n@btn__disabled-bg:              lighten(greyscale(#c7336e), 40%);\n@btn__disabled-outline:         greyscale(#c7336e);",
      "filename": "cf-buttons.less",
      "slug": "colors"
    },
    {
      "label": "Sizing",
      "notes": [
        "`@btn-v-padding-modifier-ie` is used to fix the vertical padding bug in IE for `<button>'s` and `<inputs>`'s across various .btn styles. We should revisit this after adding normalize.css to see if this is still needed."
      ],
      "tags": [
        "cf-buttons",
        "less"
      ],
      "less": "// .btn\n@btn-font-size:                 14px;\n@btn-v-padding:                 8px;\n@btn-v-padding-modifier-ie:     .8;\n\n// .btn__super\n@super-btn-font-size:           18px;",
      "filename": "cf-buttons.less",
      "slug": "sizing"
    },
    {
      "header": true,
      "label": ".btn",
      "family": "cf-buttons",
      "notes": [
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn\" title=\"Test button\">Anchor Tag</a>\n<button class=\"btn\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn hover\" title=\"Test button\">Anchor Tag</a>\n<button class=\"btn hover\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn focus\" title=\"Test button\">Anchor Tag</a>\n<button class=\"btn focus\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn focus\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn active\" title=\"Test button\">Anchor Tag</a>\n<button class=\"btn active\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn active\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn {\n\n    display: inline-block;\n    box-sizing: border-box;\n    padding:\n        unit( @btn-v-padding / @btn-font-size, em )\n        unit( 14px / @btn-font-size, em );\n    border: 0;\n    border-radius: unit( 4px / @btn-font-size, em );\n    margin: 0;\n\n    vertical-align: middle;\n\n    .webfont-medium();\n    font-size: unit( @btn-font-size / @base-font-size-px, em );\n    line-height: normal;\n    text-decoration: none;\n\n    cursor: pointer;\n    transition: background-color .1s;\n    -webkit-appearance: none;\n\n    &,\n    &:link,\n    &:visited {\n        background-color: @btn-bg;\n        color: @btn-text;\n    }\n\n    &:hover,\n    &.hover {\n        background-color: @btn-bg-hover;\n    }\n\n    &:focus,\n    &.focus {\n        background-color: @btn-bg-hover;\n        outline: 1px dotted @btn-bg;\n        // outline-offset is not supported everywhere but it adds a nice touch\n        // in browsers where it is.\n        outline-offset: 1px;\n    }\n\n    &:active,\n    &.active {\n        background-color: @btn-bg-active;\n    }\n\n    button&::-moz-focus-inner,\n    input&::-moz-focus-inner {\n        // Fixes inconsistent button.btn height in FireFox\n        // Helps with inconsistent input.btn height in FireFox but not completely\n        border: 0;\n    }\n\n    & + & {\n        margin-left: unit( 6px / @btn-font-size, em);\n    }\n}\n\n.lt-ie8 {\n\n    // Fixes scroll rendering bug\n    // http://snipplr.com/view/518/\n    & {\n        background: url(null) fixed no-repeat;\n    }\n\n    // Fixes button and input sizes in IE7\n    button.btn,\n    input.btn {\n        overflow: visible;\n        padding-top: unit( (@btn-v-padding-modifier-ie * @btn-v-padding) / @btn-font-size, em );\n        padding-bottom: unit( (@btn-v-padding-modifier-ie * @btn-v-padding) / @btn-font-size, em );\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn"
    },
    {
      "label": ".btn__secondary",
      "family": "cf-buttons",
      "notes": [
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__secondary\">Anchor Tag</a>\n<button class=\"btn btn__secondary\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__secondary\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn btn__secondary hover\">Anchor Tag</a>\n<button class=\"btn btn__secondary hover\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__secondary hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__secondary focus\">Anchor Tag</a>\n<button class=\"btn btn__secondary focus\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__secondary focus\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn btn__secondary active\">Anchor Tag</a>\n<button class=\"btn btn__secondary active\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__secondary active\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__secondary {\n\n    &,\n    &:link,\n    &:visited {\n        background-color: @btn__secondary-bg;\n        color: @btn__secondary-text;\n    }\n\n    &:hover,\n    &.hover {\n        background-color: @btn__secondary-bg-hover;\n    }\n\n    &:focus,\n    &.focus {\n        background-color: @btn__secondary-bg-hover;\n        outline-color: @btn__secondary-bg;\n    }\n\n    &:active,\n    &.active {\n        background-color: @btn__secondary-bg-active;\n    }\n\n}\n\n\n// /* doxray\n//   label: .btn__tertiary\n//   family: cf-buttons\n//   notes:\n//     - \"Note that the .visited, .hover, .focus, .active classes are for\n//        demonstration purposes only and should not be used in production.\"\n//   markup: |\n//     <a href=\"#\" class=\"btn btn__tertiary\">Anchor Tag</a>\n//     <button class=\"btn btn__tertiary\" title=\"Test button\">Button Tag</button>\n//     <input type=\"submit\" value=\"Input Tag\" class=\"btn btn__tertiary\">\n// \n//     <br><br>\n// \n//     <code>:hover</code><br>\n//     <a href=\"#\" class=\"btn btn__tertiary hover\">Anchor Tag</a>\n//     <button class=\"btn btn__tertiary hover\" title=\"Test button\">Button Tag</button>\n//     <input type=\"submit\" value=\"Input Tag\" class=\"btn btn__tertiary hover\">\n// \n//     <br><br>\n// \n//     <code>:focus</code><br>\n//     <a href=\"#\" class=\"btn btn__tertiary focus\">Anchor Tag</a>\n//     <button class=\"btn btn__tertiary focus\" title=\"Test button\">Button Tag</button>\n//     <input type=\"submit\" value=\"Input Tag\" class=\"btn btn__tertiary focus\">\n// \n//     <br><br>\n// \n//     <code>:active</code><br>\n//     <a href=\"#\" class=\"btn btn__tertiary active\">Anchor Tag</a>\n//     <button class=\"btn btn__tertiary active\" title=\"Test button\">Button Tag</button>\n//     <input type=\"submit\" value=\"Input Tag\" class=\"btn btn__tertiary active\">\n//   tags:\n//     - cf-buttons\n// */\n\n// .btn__tertiary {\n\n//     &,\n//     &:link,\n//     &:visited {\n//         background-color: @gray-20;\n//         color: @black;\n//     }\n\n//     &:hover,\n//     &.hover {\n//         background-color: @green-midtone;\n//     }\n\n//     &:focus,\n//     &.focus {\n//         background-color: @green-midtone;\n//         outline-color: @gray-20;\n//     }\n\n//     &:active,\n//     &.active {\n//         background-color: @green;\n//         color: @white;\n//     }\n\n// }",
      "filename": "cf-buttons.less",
      "slug": "btn__secondary"
    },
    {
      "label": ".btn__warning",
      "family": "cf-buttons",
      "notes": [
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__warning\">Anchor Tag</a>\n<button class=\"btn btn__warning\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__warning\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn btn__warning hover\">Anchor Tag</a>\n<button class=\"btn btn__warning hover\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__warning hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__warning active\">Anchor Tag</a>\n<button class=\"btn btn__warning active\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__warning active\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn btn__warning focus\">Anchor Tag</a>\n<button class=\"btn btn__warning focus\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__warning focus\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__warning {\n\n    &,\n    &:link,\n    &:visited {\n        background-color: @btn__warning-bg;\n        color: @btn__warning-text;\n    }\n\n    &:hover,\n    &.hover {\n        background-color: @btn__warning-bg-hover;\n    }\n\n    &:focus,\n    &.focus {\n        background-color: @btn__warning-bg-hover;\n        outline-color: @btn__warning-bg;\n    }\n\n    &:active,\n    &.active {\n        background-color: @btn__warning-bg-active;\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__warning"
    },
    {
      "label": ".btn__disabled",
      "family": "cf-buttons",
      "notes": [
        "Disabled buttons do not contain separate hover and active states since they should not be interacted with.",
        "Note that the .focus class is for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__disabled\">Anchor Tag</a>\n<button class=\"btn btn__disabled\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__disabled\">\n<button class=\"btn\" disabled title=\"Test button\">Button Tag w/ disabled attr</button>\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__disabled focus\">Anchor Tag</a>\n<button class=\"btn btn__disabled focus\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__disabled focus\">\n<button class=\"btn focus\" disabled title=\"Test button\">Button Tag w/ disabled attr</button>\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__disabled,\n.btn[disabled] {\n\n    &,\n    &:link,\n    &:visited,\n    &:hover,\n    &.hover,\n    &:focus,\n    &.focus,\n    &:active,\n    &.active {\n        background-color: @btn__disabled-bg;\n        color: @btn__disabled-text;\n        cursor: default; // Fallback for IE/Opera\n        cursor: not-allowed;\n    }\n\n    &:focus,\n    &.focus {\n        outline-color: @btn__disabled-outline;\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__disabled"
    },
    {
      "label": ".btn__super",
      "family": "cf-buttons",
      "markup": "<a href=\"#\" class=\"btn btn__super\">Anchor Tag</a>\n<button class=\"btn btn__super\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__super\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn btn__super hover\">Anchor Tag</a>\n<button class=\"btn btn__super hover\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__super hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__super focus\">Anchor Tag</a>\n<button class=\"btn btn__super focus\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__super focus\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn btn__super active\">Anchor Tag</a>\n<button class=\"btn btn__super active\" title=\"Test button\">Button Tag</button>\n<input type=\"submit\" value=\"Input Tag\" class=\"btn btn__super active\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__super {\n\n    padding:\n        unit( 11px / @super-btn-font-size, em )\n        unit( 29px / @super-btn-font-size, em );\n    font-size: unit( @super-btn-font-size / @base-font-size-px, em );\n\n    & + & {\n        margin-left: unit( 6px / @super-btn-font-size, em);\n    }\n\n}\n\n.lt-ie8 {\n\n    // Fixes button and input sizes in IE7\n    // Note that the \"3\" below is a magic number\n    button.btn__super,\n    input.btn__super {\n        padding-top: unit( (@btn-v-padding-modifier-ie * 15px) / @super-btn-font-size, em );\n        padding-bottom: unit( (@btn-v-padding-modifier-ie * 15px) / @super-btn-font-size, em );\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__super"
    },
    {
      "label": ".btn .cf-icon",
      "description": "An icon inside of a button.",
      "notes": [
        "For accessibility please use the .u-visually-hidden utility class to add hidden text for screen readers."
      ],
      "family": "cf-buttons",
      "markup": "<a href=\"#\" class=\"btn\">\n    <span class=\"u-visually-hidden\">Search</span>\n    <span class=\"cf-icon cf-icon-search\"></span>\n</a>\n<button class=\"btn\" title=\"Test button\">\n    <span class=\"u-visually-hidden\">Search</span>\n    <span class=\"cf-icon cf-icon-search\"></span>\n</button>\n",
      "tags": [
        "cf-buttons",
        "fj-icons"
      ],
      "less": "",
      "filename": "cf-buttons.less",
      "slug": "btn-cf-icon"
    },
    {
      "label": ".btn_icon__left",
      "family": "cf-buttons",
      "markup": "<a href=\"#\" class=\"btn\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Anchor Tag\n</a>\n<button class=\"btn\" title=\"Test button\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Button Tag\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__secondary\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Anchor Tag\n</a>\n<button class=\"btn btn__secondary\" title=\"Test button\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Button Tag\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__warning\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Anchor Tag\n</a>\n<button class=\"btn btn__warning\" title=\"Test button\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Button Tag\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__disabled\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Anchor Tag\n</a>\n<button class=\"btn btn__disabled\" title=\"Test button\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Button Tag\n</button>\n<button class=\"btn\" disabled title=\"Test button\">\n    <span class=\"btn_icon__left cf-icon cf-icon-left\"></span>\n    Button Tag w/ disabled attr\n</button>\n",
      "tags": [
        "cf-buttons",
        "fj-icons"
      ],
      "less": ".btn_icon__left {\n    padding: 0 unit( 10.5px / @btn-font-size, em) 0 0;\n    border-right: 1px solid @btn-text; // Fallback\n    border-right: 1px solid fade(@btn-text, 40%);\n    margin: 0 unit( 7px / @btn-font-size, em) 0 0;\n\n    .btn__secondary & {\n        border-right-color: @btn__secondary-text; // Fallback\n        border-right-color: fade(@btn__secondary-text, 40%);\n    }\n    .btn__warning & {\n        border-right-color: @btn__warning-text; // Fallback\n        border-right-color: fade(@btn__warning-text, 40%);\n    }\n    .btn__disabled &,\n    .btn[disabled] & {\n        border-right-color: @btn__disabled-text; // Fallback\n        border-right-color: fade(@btn__disabled-text, 40%);\n    }\n}",
      "filename": "cf-buttons.less",
      "slug": "btn_icon__left"
    },
    {
      "label": ".btn_icon__right",
      "family": "cf-buttons",
      "markup": "<a href=\"#\" class=\"btn\">\n    Anchor Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</a>\n<button class=\"btn\" title=\"Test button\">\n    Button Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__secondary\">\n    Anchor Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</a>\n<button class=\"btn btn__secondary\" title=\"Test button\">\n    Button Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__warning\">\n    Anchor Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</a>\n<button class=\"btn btn__warning\" title=\"Test button\">\n    Button Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__disabled\">\n    Anchor Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</a>\n<button class=\"btn btn__disabled\" title=\"Test button\">\n    Button Tag\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</button>\n<button class=\"btn\" disabled title=\"Test button\">\n    Button Tag w/ disabled attr\n    <span class=\"btn_icon__right cf-icon cf-icon-right\"></span>\n</button>\n",
      "tags": [
        "cf-buttons",
        "fj-icons"
      ],
      "less": ".btn_icon__right {\n    padding: 0 0 0 unit( 10.5px / @btn-font-size, em);\n    border-right: 0;\n    border-left: 1px solid @btn-text; // Fallback\n    border-left: 1px solid fade(@btn-text, 40%);\n    margin: 0 0 0 unit( 7px / @btn-font-size, em);\n\n    .btn__secondary & {\n        border-left-color: @btn__secondary-text; // Fallback\n        border-left-color: fade(@btn__secondary-text, 40%);\n    }\n    .btn__warning & {\n        border-left-color: @btn__warning-text; // Fallback\n        border-left-color: fade(@btn__warning-text, 40%);\n    }\n    .btn__disabled &,\n    .btn[disabled] & {\n        border-left-color: @btn__disabled-text; // Fallback\n        border-left-color: fade(@btn__disabled-text, 40%);\n    }\n}",
      "filename": "cf-buttons.less",
      "slug": "btn_icon__right"
    },
    {
      "label": ".btn__grouped",
      "family": "cf-buttons",
      "markup": "<a href=\"#\" class=\"btn btn__grouped-first\">Anchor 1</a>\n<a href=\"#\" class=\"btn btn__grouped\">Anchor 2</a>\n<a href=\"#\" class=\"btn btn__grouped-last\">Anchor 3</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first\" title=\"Test button\">Button 1</button>\n<button class=\"btn btn__grouped\" title=\"Test button\">Button 2</button>\n<button class=\"btn btn__grouped-last\" title=\"Test button\">Button 3</button>\n<br>\n<br>\n<input type=\"button\" value=\"Input 1\" class=\"btn btn__grouped-first\">\n<input type=\"button\" value=\"Input 2\" class=\"btn btn__grouped\">\n<input type=\"button\" value=\"Input 3\" class=\"btn btn__grouped-last\">\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__grouped-first btn__super\">Anchor 1</a>\n<a href=\"#\" class=\"btn btn__grouped btn__super\">Anchor 2</a>\n<a href=\"#\" class=\"btn btn__grouped-last btn__super\">Anchor 3</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first btn__super\" title=\"Test button\">Button 1</button>\n<button class=\"btn btn__grouped btn__super\" title=\"Test button\">Button 2</button>\n<button class=\"btn btn__grouped-last btn__super\" title=\"Test button\">Button 3</button>\n<br>\n<br>\n<input type=\"button\" value=\"Input 1\" class=\"btn btn__grouped-first btn__super\">\n<input type=\"button\" value=\"Input 2\" class=\"btn btn__grouped btn__super\">\n<input type=\"button\" value=\"Input 3\" class=\"btn btn__grouped-last btn__super\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__grouped {\n\n    // Borders\n\n    &-first {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    & {\n        border-radius: 0;\n    }\n\n    &-last {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    // Margins\n\n    &-first + &,\n    &-first + &-last,\n    &,\n    & + &,\n    &-last,\n    & + &-last {\n        margin-left: unit( -3px / @btn-font-size, em );\n    }\n\n    &-first.btn__super + &.btn__super,\n    &-first.btn__super + &-last.btn__super,\n    &.btn__super,\n    &-last.btn__super,\n    &.btn__super + &.btn__super,\n    &.btn__super + &-last.btn__super {\n        margin-left: unit( -3px / @super-btn-font-size, em );\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__grouped"
    },
    {
      "label": ".btn__compound-action",
      "family": "cf-buttons",
      "notes": [
        "This pattern requires combining `.btn__grouped` modifiers with the `.btn__compound-action` modifier.",
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__grouped-first\">Anchor</a>\n<a href=\"#\" class=\"btn btn__grouped-last btn__compound-action\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first\" title=\"Test button\">Button</button>\n<button class=\"btn btn__grouped-last btn__compound-action\" title=\"Test button\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__grouped-first btn__secondary\">Anchor</a>\n<a href=\"#\" class=\"btn btn__grouped-last btn__secondary btn__compound-action\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first btn__secondary\" title=\"Test button\">Button</button>\n<button class=\"btn btn__grouped-last btn__secondary btn__compound-action\" title=\"Test button\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__grouped-first btn__warning\">Anchor</a>\n<a href=\"#\" class=\"btn btn__grouped-last btn__warning btn__compound-action\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first btn__warning\" title=\"Test button\">Button</button>\n<button class=\"btn btn__grouped-last btn__warning btn__compound-action\" title=\"Test button\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__grouped-first btn__disabled\">Anchor</a>\n<a href=\"#\" class=\"btn btn__grouped-last btn__disabled btn__compound-action\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first btn__disabled\" title=\"Test button\">Button</button>\n<button class=\"btn btn__grouped-last btn__disabled btn__compound-action\" title=\"Test button\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</button>\n<br>\n<br>\n<button class=\"btn btn__grouped-first\" disabled title=\"Test button\">Button w/ disabled attr</button>\n<button class=\"btn btn__grouped-last btn__compound-action\" disabled title=\"Test button\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</button>\n<br>\n<br>\n<a href=\"#\" class=\"btn btn__grouped-first btn__super\">Anchor</a>\n<a href=\"#\" class=\"btn btn__grouped-last btn__super btn__compound-action\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</a>\n<br>\n<br>\n<button class=\"btn btn__grouped-first btn__super\" title=\"Test button\">Button</button>\n<button class=\"btn btn__grouped-last btn__super btn__compound-action\" title=\"Test button\">\n    <span class=\"cf-icon cf-icon-down btn__grouped-last\"></span>\n</button>\n",
      "tags": [
        "cf-buttons",
        "fj-icons"
      ],
      "less": ".btn__compound-action {\n\n    &,\n    &:link,\n    &:visited {\n        background-color: @btn-bg-hover;\n    }\n\n    &:hover,\n    &:focus,\n    &.hover {\n        background-color: @btn-bg;\n    }\n\n    &.btn__secondary {\n        background-color: @btn__secondary-bg-hover;\n    }\n\n    &.btn__secondary:hover,\n    &.btn__secondary:focus,\n    &.btn__secondary.hover {\n        background-color: @btn__secondary-bg;\n    }\n\n    &.btn__warning {\n        background-color: @btn__warning-bg-hover;\n    }\n\n    &.btn__warning:hover,\n    &.btn__warning:focus,\n    &.btn__warning.hover {\n        background-color: @btn__warning-bg;\n    }\n\n    &.btn__disabled,\n    &.btn__disabled:hover,\n    &.btn__disabled:focus,\n    &.btn__disabled.hover,\n    &[disabled],\n    &[disabled]:hover,\n    &[disabled]:focus,\n    &[disabled].hover {\n        background-color: @btn__disabled-bg;\n    }\n\n    &.btn__super {\n        padding-left: unit( 22px / @super-btn-font-size, em );\n        padding-right: unit( 22px / @super-btn-font-size, em );\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__compound-action"
    },
    {
      "label": ".btn__link",
      "family": "cf-buttons",
      "notes": [
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__link\">Anchor Tag</a>\n<button class=\"btn btn__link\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn btn__link hover\">Anchor Tag</a>\n<button class=\"btn btn__link hover\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__link focus\">Anchor Tag</a>\n<button class=\"btn btn__link focus\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link focus\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn btn__link active\">Anchor Tag</a>\n<button class=\"btn btn__link active\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link active\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__link {\n\n    padding: 0;\n    border-bottom: 1px dotted @link-underline;\n    border-radius: 0;\n    // This margin is necessary to vertically align link buttons with\n    // regular buttons.\n    margin: unit( @btn-v-padding / @btn-font-size, em) 0;\n\n    &,\n    &:link,\n    &:visited {\n        border-bottom-color: @link-underline-visited;\n        background-color: transparent;\n        color: @link-text-visited;\n    }\n\n    &:hover,\n    &.hover {\n        border-bottom: 1px solid @link-underline-hover;\n        background-color: transparent;\n        color: @link-text-hover;\n    }\n\n    &:focus,\n    &.focus {\n        border-bottom-style: solid;\n        background-color: transparent;\n        outline: thin dotted @link-underline;\n    }\n\n    &:active,\n    &.active {\n        border-bottom: 1px solid @link-underline-active;\n        background-color: transparent;\n        color: @link-text-active;\n    }\n\n}\n\n.lt-ie8 {\n\n    button.btn__link,\n    input.btn__link {\n        padding: 0;\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__link"
    },
    {
      "label": ".btn__link.btn__secondary",
      "family": "cf-buttons",
      "notes": [
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__link btn__secondary\">Anchor Tag</a>\n<button class=\"btn btn__link btn__secondary\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__secondary\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn btn__link btn__secondary hover\">Anchor Tag</a>\n<button class=\"btn btn__link btn__secondary hover\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__secondary hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__link btn__secondary focus\">Anchor Tag</a>\n<button class=\"btn btn__link btn__secondary focus\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__secondary focus\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn btn__link btn__secondary active\">Anchor Tag</a>\n<button class=\"btn btn__link btn__secondary active\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__secondary active\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__link.btn__secondary {\n\n    &,\n    &:link,\n    &:visited {\n        border-bottom-color: @btn__secondary-bg;\n        background-color: transparent;\n        color: @btn__secondary-bg;\n    }\n\n    &:hover,\n    &.hover {\n        border-bottom-color: @btn__secondary-bg-hover;\n        color: @btn__secondary-bg-hover;\n    }\n\n    &:focus,\n    &.focus {\n        outline-color: @btn__secondary-bg;\n    }\n\n    &:active,\n    &.active {\n        border-bottom-color: @btn__secondary-bg-active;\n        color: @btn__secondary-bg-active;\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__linkbtn__secondary"
    },
    {
      "label": ".btn__link.btn__warning",
      "family": "cf-buttons",
      "notes": [
        "Note that the .visited, .hover, .focus, .active classes are for demonstration purposes only and should not be used in production."
      ],
      "markup": "<a href=\"#\" class=\"btn btn__link btn__warning\">Anchor Tag</a>\n<button class=\"btn btn__link btn__warning\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__warning\">\n\n<br><br>\n\n<code>:hover</code><br>\n<a href=\"#\" class=\"btn btn__link btn__warning hover\">Anchor Tag</a>\n<button class=\"btn btn__link btn__warning hover\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__warning hover\">\n\n<br><br>\n\n<code>:focus</code><br>\n<a href=\"#\" class=\"btn btn__link btn__warning focus\">Anchor Tag</a>\n<button class=\"btn btn__link btn__warning focus\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__warning focus\">\n\n<br><br>\n\n<code>:active</code><br>\n<a href=\"#\" class=\"btn btn__link btn__warning active\">Anchor Tag</a>\n<button class=\"btn btn__link btn__warning active\" title=\"Test button\">Button Tag</button>\n<input type=\"button\" value=\"Input Tag\" class=\"btn btn__link btn__warning active\">\n",
      "tags": [
        "cf-buttons"
      ],
      "less": ".btn__link.btn__warning {\n\n    &,\n    &:link,\n    &:visited {\n        border-bottom-color: @btn__warning-bg;\n        background-color: transparent;\n        color: @btn__warning-bg;\n    }\n\n    &:hover,\n    &.hover {\n        border-bottom-color: @btn__warning-bg-hover;\n        color: @btn__warning-bg-hover;\n    }\n\n    &:focus,\n    &.focus {\n        outline-color: @btn__warning-bg;\n    }\n\n    &:active,\n    &.active {\n        border-bottom-color: @btn__warning-bg-active;\n        color: @btn__warning-bg-active;\n    }\n\n}",
      "filename": "cf-buttons.less",
      "slug": "btn__linkbtn__warning"
    }
  ],
  "getByProperty": function ( property, value ) {
    return this.patterns.filter(
      this.utils.hasProperty( property, value )
    );
  },
  "utils": {
    "hasProperty": function ( property, value ) {
    return function( pattern ) {
      if ( typeof value === 'undefined' ) {
        return pattern[ property ];
      } else {
        return pattern[ property ] && pattern[ property ].toLowerCase() === value.toLowerCase();
      }
    }
  }
  }
};