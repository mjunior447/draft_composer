import ParagraphEntity from "@/entities/ParagraphEntity";
import { useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import { Button } from "../ui/button";
import NoParagraphText from "../NoParagraphText/NoParagraphText";
import { useToast } from "@/hooks/use-toast";

const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState<ParagraphEntity[]>([]);
  const { toast } = useToast();
  const hasNoParagraphs = paragraphs.length === 0;

  const handleSendDraft = () => {
    if (hasNoParagraphs) {
      toast({
        title: "Rascunho vazio",
        description: "Adicione um parágrafo ao rascunho antes de enviá-lo",
        variant: "destructive",
      });
    } else {
      // lógica de persistência no banco de dados
      toast({
        title: "Tudo certo!",
        description: "Seu rascunho foi salvo",
      });
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
