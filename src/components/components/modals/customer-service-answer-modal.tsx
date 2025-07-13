import dynamic from 'next/dynamic';

import { InputField, Modal, ModalHeader, ModalSection, Stack, Loading, Alert, Box, ModalFooter, Button } from '@kiwicom/orbit-components';
import { useCategorizationResponse } from '@/app/services/customer-service-workflow/customer-service-workflow.hooks';


const RichTextEditor = dynamic(
  () => import("@/components/components/rich-text-editor/quill-snow"),
  { ssr: false }
);


type CustomerServiceAnswerModalProps = {
  onModalClose: () => void;
  question: string;
};

const CustomerServiceAnswerModal: React.FC<CustomerServiceAnswerModalProps> = ({
  onModalClose, question,
}) => {
  const { data, isLoading, isError, error } = useCategorizationResponse(question);

  return (
    <>
      <Modal
        lockScrolling
        onClose={() => onModalClose()
        }
        hasCloseButton={true}
        labelClose="Close"
        >
          <ModalHeader title="Customer Service Answer" />
          <ModalSection>
            {isLoading && <Loading text="Generating answer, please wait..." />}
            {isError && <Alert type="critical" title="Error generating answer">{error.message}</Alert>}
            {data && (
              <>
              <Box margin={{ bottom: "400" }}>
                <Stack direction="column" spacing="200">
                  <InputField
                    label="Category"
                    value={data.category}
                    readOnly
                  />
                </Stack>
              </Box>
                <RichTextEditor initialValue={data.answer} />
              </>
            )}
          </ModalSection>
          <ModalFooter>
            <Box display='inline-flex' width='full'>
              <Button
                size='large'
                type='primary'
                width='100%'
                submit
                onClick={onModalClose}
              >
                Close
              </Button>
            </Box>
          </ModalFooter>
        </Modal>
    </>
  )
}

export default CustomerServiceAnswerModal;