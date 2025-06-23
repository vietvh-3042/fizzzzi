import { cn } from "@/utils/cn";

interface TextSplitterProps {
  text: string;
  className?: string;
  wordDisplayStyle?: "inline-block" | "block";
}

export function TextSplitter({
  text,
  className,
  wordDisplayStyle = "inline-block",
}: TextSplitterProps) {
  if (!text) return null;

  const words = text.split(" ");

  return words.map((word: string, wordIndex: number) => {
    const splitText = word.split("");

    return (
      <span
        key={`${wordIndex}-${word}`}
        className={cn("split-word", className)}
        style={{ display: wordDisplayStyle, whiteSpace: "pre" }}
      >
        {splitText.map((char, charIndex) => {
          if (char === " ") return ` `;

          return (
            <span
              key={charIndex}
              className={`split-char inline-block split-char--${wordIndex}-${charIndex}`}
            >
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 ? <span className="split-char">{` `}</span> : ""}
      </span>
    );
  });
}
