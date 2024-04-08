export const StepIndicator = ({ num, icon, text }: { num: number; icon: string; text: string; }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 w-full">
            <div className='flex space-x-2'>
                <div className='font-black text-gray-300 text-[24px]'>0{num}</div>
                <div className='w-[95px] h-[95px] bg-orange-600 rounded-full flex items-center justify-center'>
                    <img className="w-[49px]" src={icon} alt="Local Contractors" />
                </div>
            </div>
            <div className='text-[14px] font-semibold'>{text}</div>
        </div>
    );
};
