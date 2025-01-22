'use client'

import './styles.scss'

import Code from '@tiptap/extension-code'
import Document from '@tiptap/extension-document'
import Link from '@tiptap/extension-link'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React, { useEffect, useState } from 'react'

const Tiptap = () => {
  const [editorText, setEditorText] = useState<string>('')

  const editor = useEditor({
    editable: true,
    extensions: [
      Document,
      Paragraph,
      Text,
      Code,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: 'https',
      }),
    ],
    content: `
      <p>
        113241234213421342134213421342134 http://google.com 오!!! 스고이!
      </p>
    `,
  })

  useEffect(() => {
    if (!editor) return

    const updatePlainText = () => {
      const plainText = editor.getText() // HTML 대신 순수 텍스트 가져오기
      setEditorText(plainText)
    }

    // 에디터 내용 변경 시 실행
    editor.on('update', updatePlainText)

    // 언마운트 시 이벤트 정리
    return () => {
      editor.off('update', updatePlainText)
    }
  }, [editor])

  // 텍스트에서 링크만 스타일을 적용해 렌더링
  const renderStyledText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = text.split(urlRegex)

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  if (!editor) {
    return null
  }

  return (
    <>
      <div className="control-group">
        <h3>Links in Editor:</h3>
        <div className="rendered-content">{renderStyledText(editorText)}</div>
      </div>
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
