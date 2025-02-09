import DraftEditor from "./components/DraftEditor/DraftEditor";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <main className="flex w-full h-screen gap-4">
      <Paragraph />
      <DraftEditor />
    </main>
  );
}

export default App;
