import React, { forwardRef, useContext } from "react";

import { SearchIcon } from "./Icons";
import { SelectContext } from "./SelectProvider";

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
    { placeholder = "", value = "", onChange, name = "" },
    ref
) {
    const { classNames, handlePressEscape } = useContext(SelectContext);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            handlePressEscape();
        }
    };

    return (
        <div
            className={
                classNames && classNames.searchContainer
                    ? classNames.searchContainer
                    : "relative py-1 px-2.5"
            }
        >
            <SearchIcon
                className={
                    classNames && classNames.searchIcon
                        ? classNames.searchIcon
                        : "absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-gray-500"
                }
            />
            <input
                ref={ref}
                className={
                    classNames && classNames.searchBox
                        ? classNames.searchBox
                        : "w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none"
                }
                type="text"
                placeholder={placeholder}
                value={value}
                onKeyDown={onKeyDown}
                onChange={onChange}
                name={name}
            />
        </div>
    );
});

export default SearchInput;
