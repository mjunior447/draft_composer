import ParagraphEntity from "@/entities/ParagraphEntity";
import { useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import { Button } from "../ui/button";
import NoParagraphText from "../NoParagraphText/NoParagraphText";

const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState<ParagraphEntity[]>([]);
  const hasNoParagraphs = paragraphs.length === 0;

  const handleSendDraft = () => {
    if (hasNoParagraphs) {
      return;
    }
  };

  return (
    <>
      <section className="flex flex-col gap-8 w-full h-fit">
        {hasNoParagraphs ? (
          <NoParagraphText />
        ) : (
          <div className="px-8">
            {paragraphs.map((p) => {
              return <p>{p.text}</p>;
            })}
          </div>
        )}

        <Paragraph setParagraphs={setParagraphs} />
        <Button className="m-auto px-12" onClick={handleSendDraft}>
          Enviar rascunho
        </Button>
      </section>
    </>
  );
};

export default DraftEditor;
