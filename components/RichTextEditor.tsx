import React, { forwardRef, useImperativeHandle } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { WebView } from 'react-native-webview'
import { RichEditorHtml } from './RichTextEditorHTML'

interface RichTextEditorProps {
	containerStyle?: ViewStyle
	toolbar?: boolean
	editorContainerStyle?: ViewStyle
	showsHorizontalScrollIndicator?: boolean
	showsVerticalScrollIndicator?: boolean
	onContentChange?: (event: any) => void
}

export interface RichTextEditorRef {
	passToEditor: (
		event:
			| string
			| 'bold'
			| 'underline'
			| 'italic'
			| 'justifyLeft'
			| 'justifyCenter'
			| 'justifyFull'
			| 'justifyRight'
			| 'insertUnorderedList'
			| 'insertOrderedList',
		customJS?: boolean
	) => void
}

const defaultProps = {
	toolbar: true,
	showsHorizontalScrollIndicator: false,
	showsVerticalScrollIndicator: false,
}

export const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>((props, ref) => {
	var WebViewRef: any
	const onMessage = (event: any) => {
		if (props.onContentChange) props.onContentChange(event.nativeEvent)
	}
	const passToEditor = (event: string, customJS?: boolean) => {
		const command = customJS ? event : `document.execCommand('${event}'); true;`
		WebViewRef.injectJavaScript(command)
	}
	useImperativeHandle(ref, () => ({ passToEditor: passToEditor }))
	return (
		<View style={props.containerStyle ? props.containerStyle : Styles.container}>
			<WebView
				ref={(ref) => (WebViewRef = ref)}
				style={{
					flex: 1,
				}}
				originWhitelist={['*']}
				source={{ html: RichEditorHtml }}
				onMessage={(event) => {
					onMessage(event)
				}}
				showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
				showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
			/>
		</View>
	)
})

RichTextEditor.defaultProps = defaultProps

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: 1,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		borderRadius: 10,
		overflow: 'hidden',
	},
})
