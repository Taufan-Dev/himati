// ✅ Benar
import type { TextProps } from "../../models/GlobalComponentProps";

function Title({ text }: TextProps) {
  return <h3 className="text-3xl font-semibold text-[#1a5b32]">{text}</h3>;
}

function Subtitle({ text }: TextProps) {
  return <p className="font-medium text-primary uppercase">{text}</p>;
}

export { Title, Subtitle };
