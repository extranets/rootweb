---
templateKey: 'blog-post'
title: 'Embedding code for extranets'
date: 2019-08-06T15:04:10.000Z
featuredpost: true
description: >-
  We’re proud to announce that we’ll be offering a JavaScript which can be used for easing the integration of Extranets.
tags:
  - emded
  - extranets
---

You can embedded Extranets in any web site in Nets, internally or externaly

## Embed code

Copy the entire contents of the text box.

```javascript

 <!-- Extranets -->
    <script>
(function(i,s,o,g,r,a,m){i['extranetsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://unpkg.com/extranets-elsa-web-module/umd/extranets-elsa-web-module.js','extranets');
extranets("init","netsintranets");
    </script>

<!-- End Extranets -->
```
Paste it immediately before the </body> tag on each page of your site. 


## Supported commands

### init
- tenantname 