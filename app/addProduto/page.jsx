"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !descricao || !codigo || !preco) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/produtos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nome,
          descricao,
          codigo: Number(codigo),
          preco,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a produto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nome produto"
      />

      <input
        onChange={(e) => setDescricao(e.target.value)}
        value={descricao}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Produto descricao"
      />

      <input
        onChange={(e) => setCodigo(e.target.value)}
        value={codigo}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Código produto"
      />

      <input
        onChange={(e) => setPreco(e.target.value)}
        value={preco}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Preço produto"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Produto
      </button>
    </form>
  );
}
