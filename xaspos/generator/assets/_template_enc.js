var template = `<!DOCTYPE html>
<!-- Copyright (C) 2026 The BBJProjeK Organization -->

<html lang="en">
<head>
  <title>[Ticket] ##TITLE##</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <link rel="stylesheet" href="/xaspos/main.css" />

</head>
<body>
  <h1>[Ticket] ##TITLE##</h1><br>
  <b>##AUTHOR_EMAIL##</b><br>
  <i>##DATE##</i>
  <ul>
    <li>Previous message (by thread): <a href="/xaspos">[Ticket] ##PREVIOUS_TITLE##</a></li>
    <li><b>Messages ordered by:</b><a href="#date">[ date ]</a><a href="#thread">[ thread ]</a><a href="#author">[ author ]</a><a href="#topic">[ topic ]</a></li>
    <li><i><a target="blank" href="https://git.bbjprojek.org/cabinet/-/wikis/xaspos-decryption">Learn more about encrypted XasPos messages.</a></i></li>
  </ul><hr>
  <!--beginarticle-->
  <pre>

##CONTENT##

        <a target="_blank" href="##CONTENT_LINK##">##CONTENT_LINK##</a>
        <i><a target="blank" href="https://git.bbjprojek.org/cabinet/-/wikis/xaspos-decryption">Learn more about encrypted XasPos messages.</a></i>

  </pre>
  <!--endarticle-->
  <hr><ul>
    <li>Previous message (by thread): <a href="/xaspos">[Ticket] ##PREVIOUS_TITLE##</a></li>
    <li><b>Messages ordered by:</b><a href="#date">[ date ]</a><a href="#thread">[ thread ]</a><a href="#author">[ author ]</a><a href="#topic">[ topic ]</a></li>
  </ul><br><br>

</body>
</html>
`;
