import DraftEditor from "./components/DraftEditor/DraftEditor";

function App() {
  return (
    <main className="flex flex-col gap-20 w-full h-screen p-12 bg-[#FFFAF0]">
      <div>
        <h1 className="text-2xl">Bem-vinda(o) ao DraftComposer!</h1>
        <h2>Crie seu esboço de redação</h2>
      </div>
      <article>
        <DraftEditor />
      </article>
    </main>
  );
}

export default App;
