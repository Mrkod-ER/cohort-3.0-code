
export const Button = ({ disabled, children, onClick }) => {
    
    return <span onClick={onClick} className={`
    text-4xl px-32 rounded-2xl text-white py-8 cursor-pointer ${disabled ? "bg-blue-200": "bg-green-400"}`}>
        {children}
    </span>
}