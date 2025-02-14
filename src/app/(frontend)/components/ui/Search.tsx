'use client'

import SearchButton from './SearchButton'
import map from '../../public/assets/searchBarIcons/pin_icon.png'
import wallet from '../../public/assets/searchBarIcons/wallet.png'
import home from '../../public/assets/searchBarIcons/home_icon.png'

import Dropdown from './Dropdown'

const Search = () => {
  return (
    <div className="relative z-10 mt-8 bg-white/20 backdrop-blur-xl border-[1px] border-[#fff] rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg w-full max-w-5xl px-4 md:px-0">
      <Dropdown icon={home} options={['Property type', 'House', 'Apartment', 'Villa']} />
      <Dropdown withBorder icon={map} options={['Location', 'New York', 'Los Angeles', 'Miami']} />
      <Dropdown
        icon={wallet}
        options={['Budget', '$50,000 - $100,000', '$100,000 - $500,000', '$500,000+']}
      />
      <div className="mr-[0] sm:mr-[16px]">
        <SearchButton>Search</SearchButton>
      </div>
    </div>
  )
}

export default Search
