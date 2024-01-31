"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newNome, setNewNome] = useState("");
  const [newDescricao, setNewDescricao] = useState("");
  const [newCodigo, setNewCodigo] = useState("");
  const [newPreco, setNewPreco] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/produtos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newNome, newDescricao, newCodigo, newPreco }),
      });

      if (!res.ok) {
        throw new Error("Failed to update produto");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewNome(e.target.value)}
        value={newNome}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nome produto"
      />

      <input
        onChange={(e) => setNewDescricao(e.target.value)}
        value={newDescricao}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Produto descricao"
      />

      <input
        onChange={(e) => setNewCodigo(e.target.value)}
        value={newCodigo}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Código produto"
      />

      <input
        onChange={(e) => setNewPreco(e.target.value)}
        value={newPreco}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Preço produto"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
