const SuccessToast = (props: {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <div
    className="toast"
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