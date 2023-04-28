import { Toaster } from "react-hot-toast"

const SuccessToast = (props: {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={
          {
            style: {
              color: 'rgb(19 206 102)',
              boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.01)',
              backgroundColor: '#fff',
            },
          }
        }
      />
    </>
  )
}

export default SuccessToast