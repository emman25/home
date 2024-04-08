import quoteLest from '/quote-left.png';

export const TestimonialCard = ({ pic, text, user }: { pic: string; text: string; user: string; }) => {
    return (
        <div className="max-w-md px-8 bg-white flex flex-col justify-center items-center shadow-lg rounded-lg my-20 text-center relative py-12">
            <div className="absolute -bottom-10">
                <img className="w-20 h-20 object-cover rounded-full border-2 "
                    src={pic}
                    alt="Profile" />
            </div>
            <div className='w-full flex flex-col items-center'>
                <img className="w-10"
                    src={quoteLest}
                    alt="Profile" />
                <p className="mt-2 text-gray-600 text-sm">
                    {text}
                </p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-orange-500">{user}</a>
            </div>
        </div>
    );
};
