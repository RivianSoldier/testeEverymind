import EditProductForm from "@/components/EditProdutoForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/produtos/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch produto");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduto({ params }) {
  const { id } = params;
  const { produto } = await getProductById(id);
  const { nome, descricao, codigo, preco } = produto;

  return (
    <EditProductForm
      nome={nome}
      descricao={descricao}
      codigo={codigo}
      preco={preco}
    />
  );
}
