import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getProdutos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/produtos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch produtos");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading produtos: ", error);
  }
};

export default async function ProdutosList() {
  const { produtos } = await getProdutos();

  return (
    <>
      {produtos.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.nome}</h2>
            <div>{t.descricao}</div>
            <div>{t.codigo}</div>
            <div>R$ {t.preco}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editProduto/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
