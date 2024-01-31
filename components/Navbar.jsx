import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-emerald-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Nunes Sports
      </Link>
      <Link className="bg-white p-2" href={"/addProduto"}>
        Adicionar produto
      </Link>
    </nav>
  );
}
