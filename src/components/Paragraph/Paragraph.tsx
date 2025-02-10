import ParagraphEntity from "@/entities/ParagraphEntity";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/hooks/use-toast";

type ParagraphProps = {
  setParagraphs: React.Dispatch<React.SetStateAction<ParagraphEntity[]>>;
};

const Paragraph = ({ setParagraphs }: ParagraphProps) => {
  const [typedText, setTypedText] = useState("");
  const { toast } = useToast();

  const handleAddParagraph = () => {
    if (typedText.length === 0) {
      toast({
        title: "Parágrafo vazio",
        description: "Escreva um parágrafo antes de adicioná-lo",
        variant: "destructive",
      });
      return;
    }

    const newParagraph = {
      id: uuidv4(),
      text: typedText,
    };

    setParagraphs((prev) => [...prev, newParagraph]);
    setTypedText('')
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2">
      <Textarea
        placeholder="Parágrafo aqui..."
        className="w-full sm:max-w-xl min-h-28 max-h-48"
        value={typedText}
        spellCheck={false}
        onChange={(e) => setTypedText(e.target.value)}
      />
      <Button onClick={handleAddParagraph}>Adicionar parágrafo</Button>
    </section>
  );
};

export default Paragraph;
