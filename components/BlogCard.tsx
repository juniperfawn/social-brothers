function Card() {
  return (
    <div className="bg-'#FFFFFF' min-h-[217px] min-w-[261px] shadow-md cursor-pointer hover:scale-95 transition-all duration-300">
      <div className="bg-customOrange w-full h-20 relative">
        <div className="flex justify-between align-middle text-[8px] p-4 py-14 text-white">
          <div>
            <p>12-16-2019</p>
          </div>
          <div>
            <p>Tech</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold sm:text-2xl">Heading</h2>
        <p className="text-xs text-gray-500 py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget metus blandit, pharetra nisi eu, aliquet leo. risus, id lobortis
          massa ultrices nec.
        </p>
      </div>
    </div>
  );
}

export default Card;
