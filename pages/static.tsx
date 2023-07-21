import { GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";

interface ApiResponse {
  name: string
  timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/api/hello`).then(res => res.json())

  return {
    props: {
      staticData
    }
  }
}

const Static: NextPage = (props: {
  children?: ReactNode
  staticData?: ApiResponse
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("api/hello").then(res => res.json())
    setClientSideData(data)
  }

  return (
    <div className="main">
      <h1 className="my-5 text-center select-none">
        renderização do Next.js (Static)
      </h1>
      <div className="flex justify-center gap-10">
        <div className="col-auto">
          <h3 className="select-none">
            Gerado estáticamente durante  o build:
          </h3>
          <h2 className="select-none">
            { props.staticData?.timestamp?.toString() }
          </h2>
        </div>
        <div className="col-auto">
          <h3 className="select-none">
            Gerado no cliente:
          </h3>
          <h2 className="select-none">
            { clientSideData?.timestamp?.toString() }
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Static
