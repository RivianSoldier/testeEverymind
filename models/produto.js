import mongoose, { Schema } from "mongoose";

const produtoSchema = new Schema(
  {
    nome: String,
    descricao: String,
    codigo: String,
    preco: Number,
  },
  {
    timestamps: true,
  }
);

const Produto =
  mongoose.models.Produto || mongoose.model("Produto", produtoSchema);

export default Produto;
