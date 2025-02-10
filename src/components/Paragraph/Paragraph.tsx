import ParagraphEntity from "@/entities/ParagraphEntity";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ParagraphProps = {
  setParagraphs: React.Dispatch<React.SetStateAction<ParagraphEntity[]>>;
};

const Paragraph = ({ setParagraphs }: ParagraphProps) => {
  const [typedText, setTypedText] = useState("");

  const handleAddParagraph = () => {
    if (typedText.length === 0) {
      // adicionar toast para dizer que nao pode add um paragrafo vazio
      return;
    }

    const newParagraph = {
      id: uuidv4(),
      text: typedText,
    };

    setParagraphs((prev) => [...prev, newParagraph]);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2">
      <Textarea
        placeholder="Parágrafo aqui..."
        className="max-w-xl min-h-28 max-h-48"
        value={typedText}
        spellCheck={false}
        onChange={(e) => setTypedText(e.target.value)}
      />
      <Button onClick={handleAddParagraph}>Adicionar parágrafo</Button>
    </section>
  );
};

export default Paragraph;
