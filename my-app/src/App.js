import "./App.css";

function App() {
  return (
    <Container bg={"#f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} Flex={5}>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
