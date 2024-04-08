import checkMarkLogo from '/check-mark.png';

export function FeaturerItem({ title }: { title: string; }) {
    return <li className="text-gray-700 text-sm mb-2 flex items-center">
        <img src={checkMarkLogo} className="w-[28px]" alt="CheckMark" />
        <span className='font-light  text-xs md:text-lg md:font-bold'>{title}</span>
    </li>;
}
