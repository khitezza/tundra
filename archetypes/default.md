+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
author = " .Site.Params.author "
copyright = "CC BY-NC-SA 4.0"
copyright_code = "Apache-2.0"
class = "news"
cover = "/assets/imgs/default-cover.png"
draft = true
+++