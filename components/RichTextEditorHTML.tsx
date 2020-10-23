export const RichEditorHtml = `<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable: 1.0, minimum-scale: 0.8, maximum-scale: 2.0" />
    <style>
        * {
            outline: 0px;
        }

        ::-webkit-scrollbar {
            display: none;
        }

        body {
            outline: 0;
            padding: 1em;
            padding-left: 1.5em;
            padding-right: 1.5em;
            margin: 0;
            height: 100%;
            min-height: 100%;
            width: 100%;
        }
    </style>
</head>

<body>
    <div id="textEditor" contenteditable="true" spellcheck="false"></div>
</body>

<script>
    
    const observer = new MutationObserver(mutations => {
        window.ReactNativeWebView.postMessage(textEditor.innerHTML)
    })
    observer.observe(textEditor, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
    })
</script>

</html>`
