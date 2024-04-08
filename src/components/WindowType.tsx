export function WindowType({ title, selected }: { title: string; selected: boolean; }) {
    return (
        <div>
            <span className={`text-[10px] text-center ${selected ? 'text-orange-300' : ''}`}>{title}</span>
        </div>
    );
}
