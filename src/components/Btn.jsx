const Btn = (name, isDisabled, onClickFunc) => {
    const className = isDisabled ? 'btn disable' : 'btn'

    return (
        <button className={className} disabled={isDisabled} onClick={onClickFunc}>
            {name}
        </button>
    )
}

export default Btn