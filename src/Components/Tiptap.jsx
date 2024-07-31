'use client'

import {
    BubbleMenu, EditorContent, useEditor,
  } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect, useState } from 'react'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        Placeholder.configure({
            // Use a placeholder:
            placeholder: 'Write something …',
        }),
    ],
    // content: '<p>Hello World! 🌎️</p>',
  })
  const [isEditable, setIsEditable] = useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  if (!editor) {
    return null; // Return null or a loader until the editor is initialized
  }
  return (
    <section>
        {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            Strike
          </button>
        </div>
      </BubbleMenu>}
        <EditorContent editor={editor} />
    </section>
  )
}

export default Tiptap
