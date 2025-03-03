const PropertiesViewBtn: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="px-7 py-3 bg-[#71AE4C] text-white font-light rounded-lg hover:bg-[#FFF] hover:border hover:border-[#71AE4C] hover:text-[#000] transition duration-300 shadow-md cursor-pointer text-[11px]">
      {label}
    </button>
  )
}

export default PropertiesViewBtn
