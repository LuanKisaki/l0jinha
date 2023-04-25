import Link from "next/link"

const Header = () => {
  return (
    <div className="flex flex-row content-center justify-between px-4 py-6 bg-gray-dark">
      <Link href="/" className="text-green no-underline">
          Icone
      </Link>
      <div className="flex flex-row gap-2" >
        <Link href="/products" className="text-gray-light no-underline font-semibold">
            Produtos
        </Link>
        <Link href="/cart" className="text-gray-light no-underline font-semibold">
            Carrinho
        </Link>
      </div>
    </div>
  )
}

export default Header