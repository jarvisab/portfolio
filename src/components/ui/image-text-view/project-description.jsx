const DescriptionList = ({ description }) => {
  return (
    <ul className="px-4 pb-1 mx-1 rounded-md text-slate-600 list-disc dark:text-neutral-300">
      {description.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
};

export default DescriptionList;