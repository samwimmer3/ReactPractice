export default function TabButton({isSelected, onSelect, children}) {
    return (
        <li>
            <button className = {isSelected ? 'active' : undefined} onClick = {onSelect}>{children}</button>
        </li>)
}