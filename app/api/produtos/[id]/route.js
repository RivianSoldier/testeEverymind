import connectMongoDB from "@/libs/mongodb";
import Produto from "@/models/produto";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { nome, descricao, codigo, preco } = await request.json();
  await connectMongoDB();
  await Produto.findByIdAndUpdate(id, { nome, descricao, codigo, preco });
  return NextResponse.json({ message: "Produto updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const produto = await Produto.findOne(
    { _id: id },
    "nome codigo descricao preco"
  );
  return NextResponse.json({ produto }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { codigo } = params;
  await connectMongoDB();
  await Produto.findByIdAndDelete(codigo);
  return NextResponse.json({ message: "Produto deleted" }, { status: 200 });
}
