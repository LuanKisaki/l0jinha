const SuccessToast = (props: {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <div
    className="toast toast-top toast-end bg-blue text-white fixed-bottom ms-auto me-4 mb-4"
    // isOpen={props.toastIsOpen}
    >
      <div className="alert alert-success d-flex justify-between">
        Produto adicionado ao carrinho.
        <button
          className="btn-close-white"
          onClick={() => props.setToastIsOpen(false)}
          ></button>
      </div>
    </div>
  )
}

export default SuccessToast