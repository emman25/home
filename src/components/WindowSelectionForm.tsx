import { IconWindowType } from './IconWindowType';
import { WindowType } from './WindowType';
import { Title } from './Title';
import { calculateCustomProgress } from './calculateCustomProgress';

export const WindowSelectionForm = ({ data, windowsInvolved, conditionData, onSelectWindowType, onSelectWindowsInvolved, onSelectRepairOrReplace, replaceWindow, onSelectTimeFrame, onSelectZipCode, timeFrame, zipCode }: {
    data: any[]; windowsInvolved: any[]; conditionData: any[];
    onSelectWindowType: (x: string) => void;
    onSelectWindowsInvolved: (x: string) => void;
    onSelectRepairOrReplace: (x: string) => void;
    onSelectTimeFrame: (x: string) => void;
    onSelectZipCode: (x: string) => void;
    replaceWindow: string;
    timeFrame: string;
    zipCode: string;
}) => {

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <div className='flex items-center justify-between'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your progress
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        {calculateCustomProgress(conditionData)}%
                    </label>
                </div>

                <div className='flex space-x-2'>
                    {conditionData.map(x => (
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div className={`${x == true ? 'bg-orange-500' : ''} h-1.5 rounded-full`}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <Title title='1. Select window types' />

                <div className="flex justify-around">
                    {data.map(x => (
                        <div onClick={() => onSelectWindowType(x.title)}>
                            <IconWindowType src={x.src} title={x.title} selected={x.selected} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <Title title='2. Replace or repair your windows?' />

                <div className='flex items-center  space-x-4'>
                    <div className="flex items-center">
                        <input
                            id="new"
                            type="radio"
                            name="window_action"
                            className='checked:text-black text-white'
                            value="replace"
                            checked={replaceWindow === 'replace'}
                            onChange={() => onSelectRepairOrReplace('replace')} />
                        <label
                            htmlFor="new"
                            className={`text-sm ${replaceWindow === 'replace' ? 'text-black' : 'text-gray-400'}`}
                        >
                            Replace or Install New Windows
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="repair"
                            type="radio"
                            name="window_action"
                            className='checked:text-black text-white'
                            value="repair"
                            checked={replaceWindow === 'repair'}
                            onChange={() => onSelectRepairOrReplace('repair')} />
                        <label
                            htmlFor="repair"
                            className={`text-sm   ${replaceWindow === 'repair' ? 'text-black' : 'text-gray-400'}`}
                        >
                            Repair Windows or Glass
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <Title title='3. How many windows are involved?' />

                <div className="flex w-full">
                    {windowsInvolved.map(x => (
                        <div className={`outline outline-1 flex-1 text-center py-4 cursor-pointer outline-gray-500`} onClick={() => onSelectWindowsInvolved(x.text)}>
                            <WindowType title={x.text} selected={x.selected} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <Title title='4. Your project timeframe ?' />

                <div className='flex items-center  space-x-4'>
                    <div className="flex items-center">
                        <input
                            id="imm"
                            type="radio"
                            name="timeFrame_action"
                            className='checked:text-black text-white'
                            value="replace"
                            checked={timeFrame === 'Immediately'}
                            onChange={() => onSelectTimeFrame('Immediately')} />
                        <label
                            htmlFor="imm"
                            className={`text-sm ${timeFrame === 'Immediately' ? 'text-black' : 'text-gray-400'}`}
                        >
                            Immediately
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="six"
                            type="radio"
                            name="timeFrame_action"
                            className='checked:text-black text-white'
                            value="replace"
                            checked={timeFrame === '6months'}
                            onChange={() => onSelectTimeFrame('6months')} />
                        <label
                            htmlFor="six"
                            className={`text-sm ${timeFrame === '6months' ? 'text-black' : 'text-gray-400'}`}
                        >
                            Within 6 months
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="notsure"
                            type="radio"
                            name="timeFrame_action"
                            className='checked:text-black text-white'
                            value="replace"
                            checked={timeFrame === 'NotSure'}
                            onChange={() => onSelectTimeFrame('NotSure')} />
                        <label
                            htmlFor="notsure"
                            className={`text-sm ${timeFrame === 'NotSure' ? 'text-black' : 'text-gray-400'}`}
                        >
                            Not Sure
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <Title title='5. Where will your project take place ?' />
                <input id="code" type="number" name="code" onChange={x => onSelectZipCode(x.target.value)} className="py-2 px-2 w-full bg-gray-50 placeholder:text-gray-700 placeholder:text-sm" placeholder='Zip Code' />
            </div>

            <div className="flex items-center justify-between mt-6 w-full">
                <button className="button-pulse text-pulse bg-orange-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full" type="button" onClick={() => console.log("code")} disabled={!conditionData.every(x => x == true)}>
                    Check Prices Now
                </button>
            </div>
        </div>
    );
};
