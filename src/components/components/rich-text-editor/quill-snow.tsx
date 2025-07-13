// 'use client';

// import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css'; // Import Quill styles

// // Define the ref type for the RichTextEditor component
// export type RichTextEditorHandle = {
//   getContent: () => string;
// };

// const RichTextEditor = forwardRef<RichTextEditorHandle>((_, ref) => {
//   const editorRef = useRef<HTMLDivElement>(null);
//   const quillRef = useRef<Quill | null>(null);

//   useEffect(() => {
//     let quill: Quill | null = null;
//     if (editorRef.current) {
//       if (!editorRef.current.querySelector('.ql-editor')) {
//         quill = new Quill(editorRef.current, {
//           theme: 'snow',
//           modules: {
//             toolbar: [
//               [{ header: [1, 2, 3, false] }],
//               ['bold', 'italic', 'underline', 'strike'],
//               [{ list: 'ordered' }, { list: 'bullet' }],
//               ['link', 'image'],
//               ['clean'],
//             ],
//           },
//           placeholder: 'Write something...',
//         });
//         quillRef.current = quill;
//       }
//     }

//     return () => {
//       // Leeren Sie den Editor-Container bei der Bereinigung
//       if (editorRef.current) {
//         editorRef.current.innerHTML = '';
//       }
//     };
//   }, []);

//   // Expose the getContent function to the parent component
//   useImperativeHandle(ref, () => ({
//     getContent: () => {
//       if (quillRef.current) {
//         return quillRef.current.root.innerHTML; // Return the HTML content
//       }
//       return '';
//     },
//   }));

//   return <div ref={editorRef} style={{ height: '300px' }} />;
// });

// RichTextEditor.displayName = 'RichTextEditor';

// export default RichTextEditor;

'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

// Define the ref type for the RichTextEditor component
export type RichTextEditorHandle = {
  getContent: () => string;
};

// Define the props for the RichTextEditor component
type RichTextEditorProps = {
  initialValue?: string;
};

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(({ initialValue }, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    let quill: Quill | null = null;
    if (editorRef.current) {
      if (!editorRef.current.querySelector('.ql-editor')) {
        quill = new Quill(editorRef.current, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'],
            ],
          },
          placeholder: 'Write something...',
        });
        quillRef.current = quill;

        // Set the initial content if provided
        if (initialValue) {
          quill.clipboard.dangerouslyPasteHTML(initialValue);
        }
      }
    }

    return () => {
      // Leeren Sie den Editor-Container bei der Bereinigung
      if (editorRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        editorRef.current.innerHTML = '';
      }
    };
  }, [initialValue]);

  // Expose the getContent function to the parent component
  useImperativeHandle(ref, () => ({
    getContent: () => {
      if (quillRef.current) {
        return quillRef.current.root.innerHTML; // Return the HTML content
      }
      return '';
    },
  }));

  return <div ref={editorRef} style={{ height: '300px' }} />;
});

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;