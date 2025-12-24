function Select({ optionsList = [], onChange }) {
  // const uid = useId();
  return (
    <div className="p-3">
      <select
        className="border-none outline-none w-full bg-gray-200 rounded-md py-2 px-2"
        onChange={onChange}
    //    defaultValue={optionsList[0].value}
      >
        {optionsList.map((value) => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
