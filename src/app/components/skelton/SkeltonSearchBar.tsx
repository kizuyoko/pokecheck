interface SkeltonSearchBarProps {
  classNameContainer?: string;
  classNameInner?: string;
}


export default function SkeltonSearchBar({
  classNameContainer,
  classNameInner,
}: SkeltonSearchBarProps) {
  return (
    <div className={`flex items-center justify-center w-full h-12 skelton ${classNameContainer}`}>
      <div className={`w-full h-full bg-gray-300 rounded-md ${classNameInner}`}></div>
    </div>
  );
}