"use client";

import dynamic from 'next/dynamic';
import React, { useRef,useState } from 'react';
import { Layout, Box, Stack, Heading, Button } from "@kiwicom/orbit-components"

import CustomerServiceAnswerModal from "@/components/components/modals/customer-service-answer-modal";

const RichTextEditor = dynamic(
  () => import("@/components/components/rich-text-editor/quill-snow"),
  { ssr: false }
);


type RichTextEditorHandle = {
  getContent: () => string;
};


export default function Home() {
  const editorRef = useRef<RichTextEditorHandle>(null); // Ref for RichTextEditor
  const [editorContent, setEditorContent] = useState<string>(''); // State to store the editor content
  const [showCustomerServiceAnswerModal, setShowCustomerServiceAnswerModal] = useState<boolean>(false);

  const handleGetContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent(); // Get the editor content
      setEditorContent(content); // Update the state with the content
      setShowCustomerServiceAnswerModal(true);
    }
  };

  return (
    <>
      <Layout type="MMB">
        <Box margin={{ top: "400"}}>
          <Stack direction="column" align="center" justify="center">
            <Heading>Service Copilot</Heading>
          </Stack>
        </Box>
        <Box margin={{ top: "400" }}>
            <RichTextEditor ref={editorRef} />
        </Box>
        <Box margin={{ top: "400" }}>
          <Button 
            onClick={handleGetContent}
          >
            Get Content
          </Button>
        </Box>
      </Layout>
      {showCustomerServiceAnswerModal && (
        <CustomerServiceAnswerModal
          onModalClose={() => setShowCustomerServiceAnswerModal(false)}
          question={editorContent}
        />
      )}
    </>
  );
}