export function IconWindowType({ src, title, selected }: { src: string; title: string; selected: boolean; }) {
    return (
        <div className="flex flex-col  w-12 px-1 space-y-3">
            <div className={`p-1 bg-gray-50 ${selected ? 'outline outline-[1px] rounded-sm' : ''}`}>
                <img src={src} className={`w-full`} alt="CheckMark" />
            </div>
            <span className="text-[10px] text-center">{title}</span>
        </div>
    );
}
