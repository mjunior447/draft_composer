import DraftEditor from "./components/DraftEditor/DraftEditor";

function App() {
  return (
    <main className="flex flex-col gap-12 sm:gap-20 w-full h-screen p-4 sm:p-12 bg-[#FFFAF0] items-center">
      <article className="flex flex-col max-w-3xl gap-12">
        <div>
          <h1 className="text-lg sm:text-2xl font-bold">
            Bem-vinda(o) ao DraftComposer!
          </h1>
          <h2>Crie seu esboço de redação</h2>
        </div>
        <div>
          <DraftEditor />
        </div>
      </article>
    </main>
  );
}

export default App;
