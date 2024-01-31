import connectMongoDB from "@/libs/mongodb";
import Produto from "@/models/produto";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nome, codigo, descricao, preco } = await request.json();
  await connectMongoDB();
  await Produto.create({ nome, descricao, codigo, preco });
  return NextResponse.json({ message: "Produto Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const produtos = await Produto.find({}, "nome codigo descricao preco");
  return NextResponse.json({ produtos });
}

export async function DELETE(request) {
  const { codigo } = await request.json();
  await connectMongoDB();
  await Produto.findByIdAndDelete(codigo);
  return NextResponse.json({ message: "Produto deleted" }, { status: 200 });
}
