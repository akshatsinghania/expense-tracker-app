import {
  FormControl,
  FormLabel,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function TransactionForm() {
  return (
    <Model>
      <form>
        <ModalOverlay />
        <ModelContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
              />
            </FormControl>
          </ModalBody>
        </ModelContent>
      </form>
    </Model>
  );
}
