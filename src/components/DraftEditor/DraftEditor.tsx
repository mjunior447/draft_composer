import ParagraphEntity from "@/entities/ParagraphEntity";
import { useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import { Button } from "../ui/button";
import NoParagraphText from "../NoParagraphText/NoParagraphText";

const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState<ParagraphEntity[]>([]);
  return (
    <>
      <section className="flex flex-col gap-8 w-full h-fit">
        {paragraphs.length === 0 ? (
          <NoParagraphText />
        ) : (
          <div className="px-8">
            {paragraphs.map((p) => {
              return <p>{p.text}</p>;
            })}
          </div>
        )}

        <Paragraph setParagraphs={setParagraphs} />
        <Button className="m-auto px-12">Enviar rascunho</Button>
      </section>
    </>
  );
};

export default DraftEditor;
