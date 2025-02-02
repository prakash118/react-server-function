'use client';
import { useFilterOptionContext } from '@/app/context/filter-option-provider';

interface ButtonProps {
  className: string;
  selected: boolean;
  handleGenderSelection: () => void;
  label: string;
}

const Button = ({
  className,
  selected,
  handleGenderSelection,
  label,
}: ButtonProps) => {
  return (
    <button
      onClick={handleGenderSelection}
      type="button"
      className={`px-4 py-2 text-sm border-gray-200 hover:bg-gray-100 hover:text-black-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${className} ${
        selected
          ? 'bg-gray-100 text-black-700 dark:text-white dark:bg-gray-700 font-bold'
          : 'font-medium text-gray-900 dark:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );
};

export default function GenderFilter() {
  const { gender, setGender } = useFilterOptionContext();
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        label="Male"
        handleGenderSelection={() => setGender('Male')}
        selected={gender === 'Male'}
        className="border rounded-s-lg"
      />
      <Button
        label="Female"
        handleGenderSelection={() => setGender('Female')}
        selected={gender === 'Female'}
        className="border-t border-b"
      />
      <Button
        label="Both"
        handleGenderSelection={() => setGender('Both')}
        selected={gender === 'Both'}
        className="border rounded-e-lg"
      />
    </div>
  );
}
