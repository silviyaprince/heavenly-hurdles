import React from "react";
import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export function Stock() {
  const people = [
    {
      id: 1,
      name: "All Sports",
      avatar:
        "https://repfitness.com/cdn/shop/files/HexDB-Studio-thumbnail.jpg?v=1699558927",
    },
    {
      id: 2,
      name: "Mens Collection",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Womens Collection",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    
  ];
  const [selected, setSelected] = useState(people[1]);
  return (
    <div className="flex flex-col ">
      <div>
        <div></div>
        <div className="lg:w-64 ">
          <Listbox value={selected} onChange={setSelected}>
            <Label className="block text-md font-bold  font-display leading-6 text-gray-900">
              SELECT CATEGORY
            </Label>
            <div className="relative mt-2">
              <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary2 sm:text-sm sm:leading-6 lg:text-xl">
                <span className="flex items-center">
                  <img
                    alt=""
                    src={selected.avatar}
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  />
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm">
                {people.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-primary2 data-[focus]:text-white lg:text-xl">
                    <div className="flex items-center">
                      <img
                        alt=""
                        src={person.avatar}
                        className="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                      <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                        {person.name}
                      </span>
                    </div>

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}


