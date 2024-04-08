import windowBannerLogo from '/window_banner.png';
import arrowForm from '/arrow-form.png';
import { FeaturerItem } from './FeaturerItem';

export const LocalContractors = () => {
    return (
        <div className="relative">
            <div className='absolute right-[20px] hidden md:block'>
                <img className="w-[100px]" src={arrowForm} alt="Local Contractors" />
            </div>

            <div className="text-orange-600 text-xs font-semibold">
                GET FREE ESTIMATES NOW
            </div>
            <h3 className="text-4xl font-black  text-gray-900 mb-2 hidden md:block py-8">
                Best Direct Price <br /> from Local <br /> Contractors
            </h3>
            <h3 className="text-xl font-black  text-gray-900 mb-2 block md:hidden">
                Best Direct Price from Local Contractors
            </h3>
            <p className="text-gray-600  mb-4 italic text-base md:text-lg">
                Only takes 60 seconds to fill the form
            </p>
            <ul className="list-inside">
                <li>
                    <FeaturerItem title='Trusted & Professionals Local Contractors' />
                </li>
                <li className="text-gray-700 text-sm mb-2 flex items-center">
                    <FeaturerItem title='Absolutely FREE, No Commitment' />

                </li>
                <li className="text-gray-700 text-sm flex items-center">
                    <FeaturerItem title='Compare & Find the Lowest Price' />
                </li>
            </ul>
            <div className="py-4">
                <img className="w-full md:w-[380px]" src={windowBannerLogo} alt="Local Contractors" />
            </div>
        </div>
    );
};
