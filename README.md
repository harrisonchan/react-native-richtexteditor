# react-native-richtexteditor
<img src="https://i.ibb.co/KwS4vKL/texteditor.png" width="400">

## Usage
```javascript
import React from 'react'
import { View } from 'react-native'
import { RichTextEditor, RichTextEditorRef } from './components/RichTextEditor'
import { RichTextEditorToolbar } from './components/RichTextEditorToolbar'

export default function App () {
  var richTextEditorRef = React.createRef<RichTextEditorRef>()
    return (
      <View>
	<RichTextEditorToolbar onButtonPress = {(event, customJS) => richTextEditorRef.current?.passToEditor(event, customJS)}/>
	<RichTextEditor ref={richTextEditorRef} onContentChange = {(event) => console.log(event.data)} />
     </View>
    )
}
```

## Custom Toolbar
```javascript
<View>
  <TouchableOpacity onPress={() => richTextEditorRef('bold')}>
    <Text>Bold</Text>
  </TouchableOpacity>
  <RichTextEditor ref={richTextEditorRef} onContentChange = {(event) => console.log(event.data)} />
</View>
```
